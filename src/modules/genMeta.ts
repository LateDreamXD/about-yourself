import aysConfig from '../../ays.config';

document.head.insertAdjacentHTML('beforeend', `
	<meta name="title" property="og:title" content="${aysConfig.name} 的个人主页~ o(〃＾▽＾〃)o">
	<meta property="og:site_name" content="${aysConfig.name} 的个人主页~ o(〃＾▽＾〃)o">
	<meta property="og:type" content="website">
	<meta property="og:locale" content="zh_CN">
	<meta property="og:url" content="${location.href}">
	<meta name="description" property="og:description" content="自豪地使用 aboutYourself 主题 <(￣︶￣)↗">
	<meta name="keywords" content="${aysConfig.name}, ${aysConfig.aka}, ${aysConfig.tags.join(', ')}">
	<meta name="author" property="og:author" content="${aysConfig.name}">
	<meta name="copyright" content="Copyright (c) ${new Date().getFullYear()} ${aysConfig.name}">
	<meta name="designer" content="${aysConfig.name} 和 aboutYourself 主题作者">
	<meta name="generator" content="aboutYourself with Vite">
`);

document.head.querySelector('title')!.textContent = `${aysConfig.name} 的个人主页~ o(〃＾▽＾〃)o`;