import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import MainPageContent from "./Components/Pages/MainPageContent.vue";
import AboutPageContent from "./Components/Pages/AboutPageContent.vue";
import ProjectsPageContent from "./Components/Pages/ProjectsPageContent.vue";

const app = createApp(App)

const _routes = [
    {path: '/', component: MainPageContent, name: 'Главная'},
    {path: '/about', component: AboutPageContent, name: 'О нас'},
    {path: '/projects', component: ProjectsPageContent, name: 'Проекты'}
]

const route = createRouter({
    history: createWebHistory(),
    routes: _routes
})
route.replace(route.currentRoute.value.fullPath).then(r => {})
app.use(route)
app.mount('#app')
