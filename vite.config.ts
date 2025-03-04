import type {UserConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

export default<UserConfig> {
  plugins: [
    vue()
  ],
  define: {
	'___ays_ver': JSON.stringify(process.env.npm_package_version)
  }
}