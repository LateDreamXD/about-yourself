/**
 * @typedef {Object} MoeCounter 配置
 * @property {boolean} enable - 开启/关闭
 * @property {string} [alt] - 备用文字
 * @property {string} name - 用于计数的名称
 * @property {string} [theme] - 主题(参考官网主题列表中的值 https://count.getloli.com)
 * @property {number} [padding] - 内边距
 * @property {number} [offset] - 偏移量
 * @property {number} [scale] - 缩放比例
 * @property {'top' | 'center' | 'bottom'} [align] - 对齐方式
 * @property {'0' | '1'} [pixelated] - 像素化
 * @property {'0' | '1' | 'auto'} [darkmode] - 夜间模式
 * @property {{num?: number, prefix?: number | ''}} [unusual] - 非正常计数
 */
export declare type moeCounter = {
	enable: boolean;
	alt?: string;
	name: string;
	theme?: string;
	padding?: number;
	offset?: number;
	scale?: number;
	align?: 'top' | 'center' | 'bottom';
	pixelated?: '0' | '1';
	darkmode?: '0' | '1' | 'auto';
	unusual?: {
		num?: number;
		prefix?: number | '';
	}
}