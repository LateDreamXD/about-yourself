/**
 * 背景配置
 * @property type 背景类型，可选值：color、gradient、image、video
 * @property color 背景颜色
 * @property gradient 背景渐变
 * @property image 背景图片
 * @property video 背景视频
 */
export declare type Background = {
	type: 'color' | 'gradient' | 'image' | 'video';
	color?: string;
	gradient?: {
		colors: string[];
		direction: 'to right' | 'to bottom' | 'to bottom right' | 'to bottom left' | 'to top' | 'to top right' | 'to top left';
	};
	image?: string;
	video?: string;
}