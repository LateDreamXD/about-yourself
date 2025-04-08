/**
 * 单个社交平台信息
 * @property _show 是否显示(默认显示)
 * @property platform 平台名称
 * @property icon 图标
 * @property iconColor 图标颜色
 * @property iconType 图标类型 (img, fab, fas)
 * @property username 用户名/悬停文字
 * @property url 链接
 */
export declare type Social = {
	_show?: boolean;
	platform: string;
	icon: string;
	iconColor?: string;
	iconType: 'img' | 'fab' | 'fas';
	username: string;
	url: string;
}