import User from "./components/router/user/User"
import Home from "./components/router/Home"
import Validation from './components/validation/Validator'

export const routes = [
    { path: '', component: Home},
    { path: '/user/:id', component: User},
    { path: '/validation', component: Validation}
]