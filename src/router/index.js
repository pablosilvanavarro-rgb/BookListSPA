import { createRouter, createWebHistory } from 'vue-router'
import Catalogo from '../views/Catalogo.vue'
import Registro from '../views/Registro.vue'
import Detalle from '../views/Detalle.vue'

const routes = [
  {
    path: '/',
    name: 'catalogo',
    component: Catalogo
  },
  {
    path: '/nuevo',
    name: 'registro',
    component: Registro
  },
  {
    path: '/libro/:id', // La ruta dinámica para el detalle
    name: 'detalle',
    component: Detalle,
    props: true // IMPORTANTE:
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router