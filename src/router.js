import { createRouter, createWebHistory } from 'vue-router';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegester from './pages/coaches/CoachRegister.vue';
import ContractCoach from './pages/requests/ContractCoach.vue';
import RequestRecevied from './pages/requests/RequestReceive.vue';
import NotFound from './pages/NotFoud.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        { path: 'contact', component: ContractCoach }, // /coaches/c1/contract
      ],
    },
    { path: '/register', component: CoachRegester },

    { path: '/request', component: RequestRecevied },
    { path: '/:notFfound(.*)', component: NotFound },
  ],
});

export default router;
