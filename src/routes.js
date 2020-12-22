import Home from "./components/Home"
import Info from "./components/e5/Info"
import Test from "./components/e6/Test"

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
    },
    {
        path: '/e6',
        name: 'test',
        component: Test
    }
]