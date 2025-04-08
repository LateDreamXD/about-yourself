import aysConfig from '../../ays.config';

String.prototype.countSymbols = function() {
	let fullWidthCount = 0, halfWidthCount = 0;
	if(this.length === 0) return {fullWidthCount, halfWidthCount};
	const isCJK = (code: number) =>
		  code >= 0x3000 && code <= 0x303F || // 中文标点
		  code >= 0x4E00 && code <= 0x9FFF;   // 汉字

	for(const char of this) {
		if(isCJK(char.charCodeAt(0)) || 
			(char.charCodeAt(0) >= 0xFF00 && char.charCodeAt(0) <= 0xFFEF)) {
			fullWidthCount++;
		}
		if(char.charCodeAt(0) >= 0x0020 && char.charCodeAt(0) <= 0x007E)
			halfWidthCount++;
	}

	return {fullWidthCount, halfWidthCount};
};

String.prototype.countLength = function() {
	const {fullWidthCount, halfWidthCount} = this.countSymbols();
	return fullWidthCount + halfWidthCount / 2;
}

String.prototype.replaceHolder = function() {
	return this.replace(/%(\w+)%/g, (match: string, key: string) =>
		(aysConfig[key] || (window as any)[key])?? undefined)
}
export {}