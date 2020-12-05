import Home from "./components/Home"
import Info from "./components/e5/Info"

export const routes = [
    {
        path: '',
        name: 'home',
        component: Home
    },
    {
        path: '/e5',
        name: 'info',
        component: Info
    }
]