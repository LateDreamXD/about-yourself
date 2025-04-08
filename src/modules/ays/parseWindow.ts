import {Ref} from 'vue';

export default (aysWin: aYs.Window, winStyle: Ref<string>) => {
	const positionHandlers = {
		'center center': {top: '50%', left: '50%'},
		'bottom center': {top: '100%', left: '50%'},
		'top center': {top: '0', left: '50%'},
		'left center': {top: '50%', left: '0'},
		'right center': {top: '50%', left: '100%'},
		'left top': {top: '0', left: '0'},
		'right top': {top: '0', left: '100%'},
		'left bottom': {top: '100%', left: '0'},
		'right bottom': {top: '100%', left: '100%'}
	};

	const getPositionValue = (base: string, size: number | undefined, direction: 'top' | 'left') =>
		`calc(${base} - ${(size || 50) / 2}${direction === 'top'? aysWin.heightUnit || 'vh': aysWin.widthUnit || 'vw'})`;

	if(aysWin.position in positionHandlers) {
		const {top, left} = positionHandlers[aysWin.position as keyof typeof positionHandlers];
		winStyle.value = [
			`--ays-top: ${getPositionValue(top, aysWin.height, 'top')}`,
			`--ays-left: ${getPositionValue(left, aysWin.width, 'left')}`,
			`--ays-height: ${aysWin.height? `${aysWin.height}${aysWin.heightUnit || 'vh'}`: 'auto'}`,
			`--ays-width: ${aysWin.width? `${aysWin.width}${aysWin.widthUnit || 'vw'}`: 'auto'}`,
		].join(';');
	} else {
		winStyle.value = [
			`--ays-height: ${aysWin.height? `${aysWin.height}${aysWin.heightUnit || 'vh'}`: 'auto'}`,
			`--ays-width: ${aysWin.width? `${aysWin.width}${aysWin.widthUnit || 'vw'}`: 'auto'}`,
		].join(';');
	}

}