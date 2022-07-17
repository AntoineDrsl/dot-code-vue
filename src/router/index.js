import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import RoomContainer from '../views/Room/RoomContainer'
import Game from '../views/Game'
import Connection from '../views/Room/Connection'
import Pseudo from '../views/Room/Pseudo'
import Team from '../views/Room/Team'
import Test from '../views/Test'
import RoomWin from "../views/Room/RoomWin"
import RoomLose from "../views/Room/RoomLose"
import PrivatePartyContainer from '../views/PrivateParty2/PrivatePartyContainer'
import PrivateCreation from '../views/PrivateParty2/Creation'
import PrivateMode from '../views/PrivateParty2/Mode'
import test from "../middlewares/test"
import Register from '../views/Profile/Register.vue'
import Login from '../views/Profile/Login.vue'
import About from "../views/About"
import Settings from '../views/Room/Settings.vue'

Vue.use(VueRouter)

/**
 * Route list
 */
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      middlewares: [test]
    }
  },
  {
    path: '/register',
    name : 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/room-connection',
    name: 'room.connection',
    component: Connection
  },
  {
    path:'/private-party',
    component: PrivatePartyContainer,
    children : [
      {
        path: '',
        component: PrivateCreation
      },
      {
        path: 'mode',
        name:'gameMode',
        component: PrivateMode
      }
    ]
  },
  {
    path: '/room/:pin/',
    component: RoomContainer,
    children: [
      {
        path: 'pseudo',
        name: 'room.pseudo',
        component: Pseudo
      },
      {
        path: 'teams',
        name: 'room.teams',
        component: Team
      },
      {
        path: 'settings',
        name: 'room.settings',
        component: Settings
      },
      {
        path: '',
        name: 'room.game',
        component: Game
      }
    ]
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/room-win',
    name: 'RoomWin',
    component: RoomWin
  },
  {
    path: '/room-lose',
    name: 'RoomLose',
    component: RoomLose
  }

]

/**
 * Define router
 */
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/**
 * Router event before navigation (middlewares)
 */
router.beforeEach((to, from, next) => {
  if(to.meta.middlewares && Array.isArray(to.meta.middlewares)) {
    const middlewares = to.meta.middlewares;
    const context = { from, next, router, to };
    const nextMiddleware = nextFactory(context, middlewares, 1);

    return middlewares[0]({ ...context, next: nextMiddleware });
  }

  return next();
})

/**
 * Launch all middlewares recursively
 *
 * @param {*} context
 * @param {*} middlewares
 * @param int index
 * @returns
 */
function nextFactory(context, middlewares, index) {
  const middleware = middlewares[index];

  if (!middleware) return context.next;

  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middlewares, index + 1);
    middleware({ ...context, next: nextMiddleware });
  }
}


export default router
