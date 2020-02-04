import HolidayIndex from './components/HolidayIndex'
import HolidayCreate from './components/HolidayCreate'

export const routes = [
    { path: '', component: HolidayIndex},
    { path: '/book', component: HolidayCreate}
]