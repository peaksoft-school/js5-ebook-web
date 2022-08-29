import { Route } from 'react-router'
import QuestLayout from '../layouts/QuestLayout'

export default function questLayout() {
   return <Route path="/" element={<QuestLayout />} />
}
