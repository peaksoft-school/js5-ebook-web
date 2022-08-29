import { Route } from 'react-router'
import ClientLayout from '../layouts/ClientLayout'

export default function clientLayout() {
   return <Route path="/" element={<ClientLayout />} />
}
