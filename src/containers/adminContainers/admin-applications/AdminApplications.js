import { styled } from '@mui/material'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/'
import Spinner from '../../../Components/UI/Spinner'
import Button from '../../../Components/UI/Button/Button'

import {
   applicationsActions,
   seeMoreGetApplicationsActions,
} from '../../../store/slices/adminActions/applicationsActions'
import ApplicationCard from './ApplicationCard'

const AdminApplications = () => {
   const {
      applications,
      totalElements: allBooks,
      unwatched,
      totalPages,
      acceptMessage,
      rejectMessage,
      status,
   } = useSelector((state) => state.applications)

   const [update, setupdate] = useState(true)
   const [requestObj, setRequestObj] = useState({ page: 1, size: 8 })
   const [showSeeMore, setShowSeeMore] = useState(false)
   const dispatch = useDispatch()

   useEffect(() => {
      setRequestObj((prev) => {
         return {
            ...prev,
            page: 1,
         }
      })
   }, [acceptMessage, rejectMessage])

   useEffect(() => {
      dispatch(applicationsActions(requestObj))
   }, [acceptMessage, rejectMessage])

   useEffect(() => {
      if (update) {
         setupdate(false)
         return
      }
      dispatch(seeMoreGetApplicationsActions(requestObj))
   }, [requestObj])

   useEffect(() => {
      if (totalPages) {
         if (totalPages === requestObj.page || totalPages === 0) {
            setShowSeeMore(false)
         } else {
            setShowSeeMore(true)
         }
      }
   }, [requestObj, totalPages])

   const getMoreApplications = () => {
      setRequestObj((prev) => {
         return {
            ...prev,
            page: prev.page + 1,
         }
      })
   }
   const getFormatedDate = (date) => {
      return date
         ? format(new Date(date), 'dd MMMM yyyy', {
              locale: ru,
           })
         : ''
   }
   return (
      <Application>
         <TotalApplication>
            <Total>Всего:{allBooks}</Total>
            <Total>
               Непросмотренные: <MinusView>{unwatched}</MinusView>
            </Total>
         </TotalApplication>
         {status === 'pending' ? (
            <Spinner variant="two" />
         ) : (
            <Books>
               {applications &&
                  applications.map((el) => (
                     <ApplicationCard
                        key={el.id}
                        id={el.id}
                        img={el.mainImage}
                        date={getFormatedDate(el.publishedDate)}
                        name={el.name}
                        price={el.price}
                        enabled={el.enabled}
                     />
                  ))}
               {showSeeMore && (
                  <SeeMore onClick={getMoreApplications}>
                     Смотреть больше
                  </SeeMore>
               )}
            </Books>
         )}
      </Application>
   )
}

export default AdminApplications

const Application = styled('div')`
   display: flex;
   flex-direction: column;
   padding-bottom: 50px;
`
const TotalApplication = styled('div')`
   display: flex;
   margin-left: -20px;
`
const MinusView = styled('span')`
   color: #ff4c00;
`
const Books = styled('div')`
   padding-top: 22px;
   display: flex;
   justify-content: flex-start;
   width: 954px;
   flex-wrap: wrap;
`
const Total = styled('p')`
   font-size: 16px;
   font-family: 'Open Sans';
   font-weight: 400;
   color: #b5b5b5;
   margin-left: 20px;
   margin-bottom: -20px;
`
const SeeMore = styled(Button)`
   border: 1px solid #c4c4c4;
   background: #f8f8f8;
   width: 100%;
   text-align: center;
   padding: 10px;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   margin-top: 50px;
   color: gray;
`
