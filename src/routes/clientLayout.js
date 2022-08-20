import { Route } from 'react-router'
// import DatePicker from '../containers/vendorLayouts/DatePicker'
import CreatePromocode from '../containers/vendorLayouts/CreatePromocode'
import ClientLayout from '../layouts/ClientLayout'

export default function clientLayout() {
   return (
      <Route path="/" element={<ClientLayout />}>
         {/* <Route path="/" element={<DatePicker />} /> */}
         <Route path="/" element={<CreatePromocode />} />
      </Route>
   )
}
