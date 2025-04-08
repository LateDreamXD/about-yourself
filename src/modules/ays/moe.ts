import { Ref } from 'vue';

export default(moeCounter: aYs.moe, moeSrc: Ref<string>) => {
	moeCounter.align && (moeSrc.value += `&align=${moeCounter.align}`);
	moeCounter.alt && (moeCounter.alt = moeCounter.alt) || (moeCounter.alt = moeCounter.name);
	moeCounter.darkmode && (moeSrc.value += `&darkmode=${moeCounter.darkmode}`);
	moeCounter.offset && (moeSrc.value += `&offset=${moeCounter.offset}`);
	moeCounter.padding && (moeSrc.value += `&padding=${moeCounter.padding}`);
	moeCounter.pixelated && (moeSrc.value += `&pixelated=${moeCounter.pixelated}`);
	moeCounter.scale && (moeSrc.value += `&scale=${moeCounter.scale}`);
	moeCounter.theme && (moeSrc.value += `&theme=${moeCounter.theme}`);
	if(moeCounter.unusual) {
		moeCounter.unusual.num && (moeSrc.value += `&num=${moeCounter.unusual.num}`);
		moeCounter.unusual.prefix && (moeSrc.value += `&prefix=${moeCounter.unusual.prefix}`);
	}
}