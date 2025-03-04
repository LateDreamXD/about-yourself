import {createApp} from 'vue';
import App from './App.vue';
import './index.scss';
import './modules/genMeta';

console.log('Loading modules...');
import('./modules/modules').then((m) => {
	console.log('Modules loaded.');
	createApp(App).mount('#app');
});