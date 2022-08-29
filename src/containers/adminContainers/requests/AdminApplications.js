import { useNavigate } from 'react-router'
import { styled } from '@mui/material'
import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux/'
import Button from '../../../Components/UI/Button/Button'
import ApplicationCard from '../../../Components/admin-applications/ApplicationCard'
import { books } from '../../../utils/constants/books'
// import applicationActions from '../../../store/slices/applicationsSlices'

const AdminApplications = () => {
   // const data = useSelector((state) => state.data)
   // console.log(data)
   // const dispatch = useDispatch()
   const navigate = useNavigate()
   // const [allRequest, setAllLimits] = useState(0)

   // const [noSeeArr, setNoSeeArr] = useState(0)

   const [requestBooks, setRequestBooks] = useState(books)

   // useEffect(() => {
   //    dispatch(applicationActions.getApplications())
   // })
   const getRequsetBooks = () => {
      setRequestBooks()
   }

   const deatailRequest = (id) => {
      navigate(`/request/${id}`)
   }
   return (
      <Application>
         <TotalApplication>
            {/* <Total>Всего:{allRequest}</Total> */}
            <Total>
               {/* Непросмотренные: <MinusView>{noSeeArr}</MinusView> */}
            </Total>
         </TotalApplication>
         <Books>
            {requestBooks.map((el) => (
               <ApplicationCard
                  key={el.id}
                  id={el.id}
                  img={el.image}
                  date={el.date}
                  total={el.total}
                  name={el.name}
                  price={el.price}
                  onClick={() => deatailRequest(el.id)}
               />
            ))}
            <SeeMore onClick={getRequsetBooks}>Смотреть больше</SeeMore>
         </Books>
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
// const MinusView = styled('span')`
//    color: #ff4c00;
// `
const Books = styled('div')`
   padding-top: 22px;
   display: flex;
   justify-content: space-between;
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
   /* margin-bottom: 50px; */
   color: gray;
`
