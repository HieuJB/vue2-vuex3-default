import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const meta = {
  progress: {
    func: [
      { call: 'color', modifier: 'temp', argument: '#00cfff' },
      { call: 'fail', modifier: 'temp', argument: '#6e0000' },
      { call: 'location', modifier: 'temp', argument: 'top' },
      {
        call: 'transition',
        modifier: 'temp',
        argument: { speed: '1.5s', opacity: '0.6s', termination: 400 },
      },
    ],
  },
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: meta,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
