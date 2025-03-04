declare interface String {
	countSymbols(): {fullWidthCount: number, halfWidthCount: number};
	countLength(): number;
	replaceHolder(): string;
}