declare type units = 'px' | 'ch' | 'cm' | 'em' | 'ex' | 'in' | 'mm' | 'pc' | 'pt' | 'px' | 'q' | 'rem' | 'vh' | 'vmax' | 'vmin' | 'vw' | '%';

/**
 * 窗口配置
 * @property bubbleColor 气泡颜色
 * @property headerColor 标题栏背景色
 * @property bodyColor 内容区背景色
 * @property height 窗口高度
 * @property width 窗口宽度
 * @property position 窗口位置
 */
export declare type aysWindow = {
	bubbleColor: string;
	headerColor: string;
	bodyColor: string;
	height?: number;
	width?: number;
	heightUnit?: units;
	widthUnit?: units;
	position: 'center center' | 'left top' | 'right top' | 'left bottom' | 'right bottom' |
		'top center' | 'bottom center' | 'left center' | 'right center';
};