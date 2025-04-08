import { Social } from './cfgs/socials';
import { aysWindow } from './views/window';
import { Background } from './views/background';
import { moeCounter } from './views/moeCounter';

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
declare type aYsConfig = {
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
	window: aysWindow;
	background?: Background;
	enableFontAwesome: boolean;
	moeCounter: moeCounter;
	injectContent?: {
		head?: any[];
		body?: any[];
	}
	debug: boolean;
	checkUpdate: boolean;
}

declare global {
	namespace aYs {
		interface Config extends aYsConfig {}
		interface Window extends aysWindow {}
		interface moe extends moeCounter {}
		interface social extends Social {}
	}
}

export {}