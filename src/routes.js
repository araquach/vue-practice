import HolidayIndex from './components/HolidayIndex'
import HolidayCreate from './components/HolidayCreate'
import FormTest from "./components/FormTest";

export const routes = [
    { path: '', component: HolidayIndex},
    { path: '/book', component: HolidayCreate},
    { path: '/form', component: FormTest}
]