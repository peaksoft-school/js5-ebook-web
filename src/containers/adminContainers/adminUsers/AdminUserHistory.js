import BasketHistory from './BasketHistory'
import FavoriteHistory from './FavoriteHistory'
import PurchasedHistory from './PurchasedHistory'
import UserTab from './UserTab'

const tabsArray = [
   {
      id: 1,
      label: 'Купленные',
      value: '1',
      Component: <PurchasedHistory />,
   },
   {
      id: 2,
      label: 'В избранном',
      value: '2',
      Component: <FavoriteHistory />,
   },
   {
      id: 3,
      label: 'В корзине',
      value: '3',
      Component: <BasketHistory />,
   },
]

const AdminUserHistory = () => {
   return (
      <div>
         <UserTab tabsArray={tabsArray} />
      </div>
   )
}

export default AdminUserHistory
