export default<aYs.Config> {
	// 主要信息
	avatar: 'assets/statics/avatar.min.svg',
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
		'Copyright (c) 2025 %name%',
		'自豪地使用 aboutYourself 主题'
	],
	// 主题主要配置
	window: {
		bubbleColor: '#00000044',
		headerColor: '#ff149374',
		bodyColor: '#ff1493cc',
		height: undefined,
		width: 50,
		position: 'center center',
	},
	background: {
		// 视频和图片背景最好使用横屏内容 否则你需要自己改样式表
		// 视频背景元素 `#bg-video` 图片背景元素 `#bg-image`
		type: 'gradient',
		gradient: {
			colors: ['#ff1493', '#ffbb00', '#ff5733', '#ff1493'],
			direction: 'to bottom right'
		}
	},
	enableFontAwesome: true,
	moeCounter: {
		enable: true,
		alt: 'Moe Counter!',
		name: 'index'
	},
	injectContent: {
		head: [],
		body: []
	},
	// 主题额外配置
	debug: import.meta.env.DEV,
	checkUpdate: false
};
