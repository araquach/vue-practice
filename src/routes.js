import Home from "./components/Home";
import ParentCard from "./components/e1/ParentCard"
import ParentComponent from "./components/e2/ParentComponent.vue"

export const routes = [
    {
        path: '',
        name: 'home',
        component: Home
    },
    {
        path: '/e1',
        name: 'parent-card',
        component: ParentCard
    },
    {
        path: '/e2',
        name: 'parent',
        component: ParentComponent
    }
]