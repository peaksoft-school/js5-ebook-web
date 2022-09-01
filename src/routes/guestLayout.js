import { Route } from 'react-router'
import GuestLayout from '../layouts/GuestLayout'

export default function questLayout() {
   return <Route path="/" element={<GuestLayout />} />
}
