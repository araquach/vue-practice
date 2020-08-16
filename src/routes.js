import Home from "./components/Home";
import ParentCard from "./components/e1/ParentCard"
import ParentComponent from "./components/e2/ParentComponent.vue"
import MainSelector from "./components/e3/MainSelector";

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
    },
    {
        path: '/e3',
        name: 'main-selector',
        component: MainSelector
    }
]