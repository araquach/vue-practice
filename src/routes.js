import User from "./components/router/user/User"
import Home from "./components/router/Home"

export const routes = [
    { path: '', component: Home},
    { path: '/user/:id', component: User}
]