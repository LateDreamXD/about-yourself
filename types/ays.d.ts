/**
 * 单个社交平台信息
 * @param _show 是否显示(默认显示)
 * @param platform 平台名称
 * @param icon 图标
 * @param iconColor 图标颜色
 * @param iconType 图标类型 (img, fab, fas)
 * @param username 用户名/悬停文字
 * @param url 链接
 */
declare type Social = {
	_show?: boolean;
	platform: string;
	icon: string;
	iconColor?: string;
	iconType: 'img' | 'fab' | 'fas';
	username: string;
	url: string;
}

/**
 * 配置信息
 * @summary 主要信息
 * @param avatar 你的头像
 * @param name 你的名字
 * @param aka 你的另一个名字
 * @param sign 个性签名
 * @param tags 签名下面的标签
 * @param socials 社交平台信息
 * @param footers 页脚内容(可选, 支持 HTML)
 * @summary 主题配置
 * @param window 窗口颜色配置
 * @param background 背景
 * @param enableFontAwesome 是否启用 FontAwesome 图标
 * @param injectContent 注入内容(可选)
 * @param debug 调试模式
 * @param checkUpdate 是否检查更新
 */
export declare type aYsConfig = {
	[key: string]: any;
	// 主要信息
	avatar: string;
	name: string;
	aka: string;
	sign: string;
	tags: string[];
	socials: Social[];
	footers?: string[];
	// 主题配置
	window: {
		headerColor: string;
		bodyColor: string;
	};
	background?: {
		type: 'color' | 'gradient' | 'image' | 'video';
		color?: string;
		gradient?: {
			colors: string[];
			direction: 'to right' | 'to bottom' | 'to bottom right' | 'to bottom left' | 'to top' | 'to top right' | 'to top left';
		};
		image?: string;
		video?: string;
	};
	enableFontAwesome: boolean;
	injectContent?: {
		head?: any[];
		body?: any[];
	}
	debug: boolean;
	checkUpdate: boolean;
}