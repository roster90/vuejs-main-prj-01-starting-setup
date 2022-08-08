import { createApp } from 'vue';
import router from './router';
import store from './store/index'
import App from './App.vue';
import BaseCard from './component/ui/BaseCard.vue';
import BaseButton from './component/ui/BaseButton.vue';
import BaseBadge from './component/ui/BaseBadge.vue';

const app = createApp(App);
app.use(router);
app.use(store);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);

app.mount('#app');
