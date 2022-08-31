import { Route } from 'react-router'
import AdminLayout from '../layouts/AdminLayout'

export default function adminLayout() {
   return <Route path="/" element={<AdminLayout />} />
}
