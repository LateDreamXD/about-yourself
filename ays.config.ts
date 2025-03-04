import type {aYsConfig} from './types/ays';

export default<aYsConfig> {
	// 主要信息
	avatar: 'assets/statics/avatar.svg',
	name: '我',
	aka: 'Myself',
	sign: '生活不只是眼前的苟且，还有诗和远方。',
	tags: ['awa', 'qwq'],
	socials: [
		{
			_show: true,
			platform: 'github',
			icon: 'github',
			iconColor: '#000',
			iconType: 'fab',
			username: 'aboutYourself 开源仓库',
			url: 'https://github.com/LateDreamXD/about-yourself'
		}
	],
	footers: [
		'萌ICP备114514号-1',
		'Copyright (c) 2025 %name%'
	],
	// 主题主要配置
	window: {
		headerColor: '#ff149374',
		bodyColor: '#ff1493cc'
	},
	background: {
		// 视频和图片背景最好使用横屏内容 否则你需要自己改样式表
		// 视频背景元素 `#bg-video` 图片背景元素 `#bg-image`
		type: 'gradient',
		gradient: {
			colors: ['#aa55ff', '#00bbff', '#4422ff', '#11ccff'],
			direction: 'to bottom right'
		}
	},
	enableFontAwesome: true,
	injectContent: {
		head: [],
		body: []
	},
	// 主题额外配置
	debug: import.meta.env.DEV,
	checkUpdate: false
};
