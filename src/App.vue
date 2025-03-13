<script lang="ts" setup>
import {ref, onMounted} from 'vue';
import aysConfig from '../ays.config';
const {avatar, name, aka, sign, tags, socials, footers, moeCounter} = aysConfig;
let moeSrc = ref(`https://count.getloli.com/@${moeCounter.name}?name=${moeCounter.name}`);
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

const minimized = ref(false);
function minimize() {
	(document.querySelector('#main') as HTMLElement).classList.toggle('minimized');
	minimized.value = !minimized.value;
}
const maximized = ref(false);
function maximize() {
	(document.querySelector('#main') as HTMLElement).classList.toggle('maximized');
	maximized.value = !maximized.value;
}

onMounted(() => {
	console.log('App mounted.');

	aysConfig.enableFontAwesome && document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="https://s4.zstatic.net/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />');
	aysConfig.injectContent?.head?.forEach(content => document.head.insertAdjacentHTML('beforeend', content));
	aysConfig.injectContent?.body?.forEach(content => document.body.insertAdjacentHTML('beforeend', content));

	console.log(`%c aboutYourself v${___ays_ver} %c https://github.com/LateDreamXD/about-yourself `, "color: #ff1493; background: #030307; padding:5px 0;", "background: #ff1493; padding:5px 0;");
});
</script>

<template>
	<video v-if="aysConfig.background?.type === 'video'" id="bg-video" loop autoplay muted :src="aysConfig.background?.video" />
	<img v-else-if="aysConfig.background?.type === 'image'" id="bg-image" :src="aysConfig.background?.image" />
	<div v-else-if="aysConfig.background?.type === 'color'" id="bg-color" :style="{ backgroundColor: aysConfig.background?.color }"></div>
	<div v-else id="bg-color" :style="{background: `linear-gradient(${aysConfig.background?.gradient?.direction}, ${aysConfig.background?.gradient?.colors.join(',')})`}"></div>

	<div id="main">
		<div class="window-header" :style="`--bg-color: ${aysConfig.window.headerColor};`">
			<span class="window-title">
				<img :src="avatar" alt="icon" class="icon avatar" draggable="false" style="margin-right: 0.2em;" />
				<span class="title">关于 {{name}} <span v-if="aysConfig.debug" class="dev">Debug</span></span>
			</span>
			<div class="actions">
				<a class role="button" href="#minimize" @click.prevent="minimize()">
					<svg v-if="!minimized" class="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m3.5 8c-0.0684 0-0.133-0.013-0.195-0.0391-0.0586-0.026-0.111-0.0618-0.156-0.107-0.0456-0.0456-0.0814-0.0977-0.107-0.156-0.026-0.0618-0.0391-0.127-0.0391-0.195s0.013-0.132 0.0391-0.19c0.026-0.0618 0.0618-0.116 0.107-0.161 0.0456-0.0488 0.0977-0.0863 0.156-0.112 0.0618-0.026 0.127-0.0391 0.195-0.0391h9c0.0683 0 0.132 0.013 0.19 0.0391 0.0618 0.026 0.116 0.0635 0.161 0.112 0.0456 0.0456 0.0814 0.0993 0.107 0.161 0.0261 0.0586 0.0391 0.122 0.0391 0.19s-0.013 0.133-0.0391 0.195c-0.026 0.0586-0.0618 0.111-0.107 0.156-0.0456 0.0456-0.0993 0.0814-0.161 0.107-0.0586 0.026-0.122 0.0391-0.19 0.0391h-9z" fill="currentColor" transform="translate(0 4)"></path></svg>
					<svg v-else class="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m9.8 4h-4.53c0.193-0.334 0.479-0.606 0.824-0.782 0.428-0.218 0.988-0.218 2.11-0.218h1.6c1.12 0 1.68 0 2.11 0.218 0.376 0.192 0.682 0.498 0.874 0.874 0.218 0.428 0.218 0.988 0.218 2.11v1.6c0 1.12 0 1.68-0.218 2.11-0.176 0.345-0.448 0.631-0.782 0.824v-4.53c0-0.577-8e-4 -0.949-0.0239-1.23-0.0222-0.272-0.0599-0.372-0.0851-0.422-0.0959-0.188-0.249-0.341-0.437-0.437-0.0495-0.0252-0.15-0.0629-0.422-0.0851-0.283-0.0232-0.656-0.0239-1.23-0.0239z" /><path d="m3 8.2c0-1.12 0-1.68 0.218-2.11 0.192-0.376 0.498-0.682 0.874-0.874 0.428-0.218 0.988-0.218 2.11-0.218h1.6c1.12 0 1.68 0 2.11 0.218 0.376 0.192 0.682 0.498 0.874 0.874 0.218 0.428 0.218 0.988 0.218 2.11v1.6c0 1.12 0 1.68-0.218 2.11-0.192 0.376-0.498 0.682-0.874 0.874-0.428 0.218-0.988 0.218-2.11 0.218h-1.6c-1.12 0-1.68 0-2.11-0.218-0.376-0.192-0.682-0.498-0.874-0.874-0.218-0.428-0.218-0.988-0.218-2.11v-1.6zm3.2-2.2h1.6c0.577 0 0.949 7.8e-4 1.23 0.0239 0.272 0.0222 0.372 0.0599 0.422 0.0851 0.188 0.0959 0.341 0.249 0.437 0.437 0.0252 0.0494 0.0629 0.15 0.0851 0.422 0.0232 0.283 0.0239 0.656 0.0239 1.23v1.6c0 0.577-7.8e-4 0.949-0.0239 1.23-0.0222 0.272-0.0599 0.372-0.0851 0.422-0.0959 0.188-0.249 0.341-0.437 0.437-0.0494 0.0252-0.15 0.0629-0.422 0.0851-0.283 0.0231-0.656 0.0239-1.23 0.0239h-1.6c-0.577 0-0.949-8e-4 -1.23-0.0239-0.272-0.0222-0.372-0.0599-0.422-0.0851-0.188-0.0959-0.341-0.249-0.437-0.437-0.0252-0.0495-0.0629-0.15-0.0851-0.422-0.0232-0.283-0.0239-0.656-0.0239-1.23v-1.6c0-0.577 7.8e-4 -0.949 0.0239-1.23 0.0222-0.272 0.0599-0.372 0.0851-0.422 0.0959-0.188 0.249-0.341 0.437-0.437 0.0494-0.0252 0.15-0.0629 0.422-0.0851 0.283-0.0232 0.656-0.0239 1.23-0.0239z" clip-rule="evenodd" fill-rule="evenodd"/></svg>
				</a>
				<a class role="button" href="#maximize" @click.prevent="maximize()">
					<svg v-if="!maximized" class="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m9.8 4h-3.6c-0.577 0-0.949 7.8e-4 -1.23 0.0239-0.272 0.0222-0.372 0.0599-0.422 0.0851-0.188 0.0959-0.341 0.249-0.437 0.437-0.0252 0.0494-0.0629 0.15-0.0851 0.422-0.0232 0.283-0.0239 0.656-0.0239 1.23v3.6c0 0.577 7.8e-4 0.949 0.0239 1.23 0.0222 0.272 0.0599 0.372 0.0851 0.422 0.0959 0.188 0.249 0.341 0.437 0.437 0.0494 0.0252 0.15 0.0629 0.422 0.0851 0.283 0.0231 0.656 0.0239 1.23 0.0239h3.6c0.577 0 0.949-8e-4 1.23-0.0239 0.272-0.0222 0.372-0.0599 0.422-0.0851 0.188-0.0959 0.341-0.249 0.437-0.437 0.0252-0.0495 0.0629-0.15 0.0851-0.422 0.0231-0.283 0.0239-0.656 0.0239-1.23v-3.6c0-0.577-8e-4 -0.949-0.0239-1.23-0.0222-0.272-0.0599-0.372-0.0851-0.422-0.0959-0.188-0.249-0.341-0.437-0.437-0.0495-0.0252-0.15-0.0629-0.422-0.0851-0.283-0.0232-0.656-0.0239-1.23-0.0239zm-6.58 0.092c-0.218 0.428-0.218 0.988-0.218 2.11v3.6c0 1.12 0 1.68 0.218 2.11 0.192 0.376 0.498 0.682 0.874 0.874 0.428 0.218 0.988 0.218 2.11 0.218h3.6c1.12 0 1.68 0 2.11-0.218 0.376-0.192 0.682-0.498 0.874-0.874 0.218-0.428 0.218-0.988 0.218-2.11v-3.6c0-1.12 0-1.68-0.218-2.11-0.192-0.376-0.498-0.682-0.874-0.874-0.428-0.218-0.988-0.218-2.11-0.218h-3.6c-1.12 0-1.68 0-2.11 0.218-0.376 0.192-0.682 0.498-0.874 0.874z" clip-rule="evenodd" fill="currentColor" fill-rule="evenodd"></path></svg>
					<svg v-else class="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m9.8 4h-4.53c0.193-0.334 0.479-0.606 0.824-0.782 0.428-0.218 0.988-0.218 2.11-0.218h1.6c1.12 0 1.68 0 2.11 0.218 0.376 0.192 0.682 0.498 0.874 0.874 0.218 0.428 0.218 0.988 0.218 2.11v1.6c0 1.12 0 1.68-0.218 2.11-0.176 0.345-0.448 0.631-0.782 0.824v-4.53c0-0.577-8e-4 -0.949-0.0239-1.23-0.0222-0.272-0.0599-0.372-0.0851-0.422-0.0959-0.188-0.249-0.341-0.437-0.437-0.0495-0.0252-0.15-0.0629-0.422-0.0851-0.283-0.0232-0.656-0.0239-1.23-0.0239z" /><path d="m3 8.2c0-1.12 0-1.68 0.218-2.11 0.192-0.376 0.498-0.682 0.874-0.874 0.428-0.218 0.988-0.218 2.11-0.218h1.6c1.12 0 1.68 0 2.11 0.218 0.376 0.192 0.682 0.498 0.874 0.874 0.218 0.428 0.218 0.988 0.218 2.11v1.6c0 1.12 0 1.68-0.218 2.11-0.192 0.376-0.498 0.682-0.874 0.874-0.428 0.218-0.988 0.218-2.11 0.218h-1.6c-1.12 0-1.68 0-2.11-0.218-0.376-0.192-0.682-0.498-0.874-0.874-0.218-0.428-0.218-0.988-0.218-2.11v-1.6zm3.2-2.2h1.6c0.577 0 0.949 7.8e-4 1.23 0.0239 0.272 0.0222 0.372 0.0599 0.422 0.0851 0.188 0.0959 0.341 0.249 0.437 0.437 0.0252 0.0494 0.0629 0.15 0.0851 0.422 0.0232 0.283 0.0239 0.656 0.0239 1.23v1.6c0 0.577-7.8e-4 0.949-0.0239 1.23-0.0222 0.272-0.0599 0.372-0.0851 0.422-0.0959 0.188-0.249 0.341-0.437 0.437-0.0494 0.0252-0.15 0.0629-0.422 0.0851-0.283 0.0231-0.656 0.0239-1.23 0.0239h-1.6c-0.577 0-0.949-8e-4 -1.23-0.0239-0.272-0.0222-0.372-0.0599-0.422-0.0851-0.188-0.0959-0.341-0.249-0.437-0.437-0.0252-0.0495-0.0629-0.15-0.0851-0.422-0.0232-0.283-0.0239-0.656-0.0239-1.23v-1.6c0-0.577 7.8e-4 -0.949 0.0239-1.23 0.0222-0.272 0.0599-0.372 0.0851-0.422 0.0959-0.188 0.249-0.341 0.437-0.437 0.0494-0.0252 0.15-0.0629 0.422-0.0851 0.283-0.0232 0.656-0.0239 1.23-0.0239z" clip-rule="evenodd" fill-rule="evenodd"/></svg>
				</a>
				<a class="not-allowed" role="button" href="#close" @click.prevent>
					<svg class="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m8 8.71-4.15 4.15c-0.0976 0.0977-0.215 0.146-0.352 0.146-0.143 0-0.264-0.0472-0.361-0.142-0.0944-0.0977-0.142-0.218-0.142-0.361 0-0.137 0.0488-0.254 0.146-0.352l4.15-4.15-4.15-4.15c-0.0976-0.0976-0.146-0.216-0.146-0.356 0-0.0684 0.013-0.133 0.0391-0.195 0.026-0.0618 0.0618-0.114 0.107-0.156 0.0456-0.0456 0.0993-0.0814 0.161-0.107s0.127-0.0391 0.195-0.0391c0.137 0 0.254 0.0488 0.352 0.146l4.15 4.15 4.15-4.15c0.0977-0.0976 0.216-0.146 0.356-0.146 0.0683 0 0.132 0.013 0.19 0.0391 0.0618 0.026 0.116 0.0618 0.161 0.107 0.0456 0.0456 0.0814 0.0993 0.107 0.161 0.0261 0.0586 0.0391 0.122 0.0391 0.19 0 0.14-0.0488 0.259-0.146 0.356l-4.15 4.15 4.15 4.15c0.0977 0.0977 0.146 0.215 0.146 0.352 0 0.0683-0.013 0.133-0.0391 0.195-0.026 0.0618-0.0618 0.116-0.107 0.161-0.0423 0.0456-0.0944 0.0814-0.156 0.107-0.0619 0.0261-0.127 0.0391-0.195 0.0391-0.14 0-0.259-0.0488-0.356-0.146l-4.15-4.15z" fill="currentColor"></path></svg>
				</a>
			</div>
		</div>
		<div class="window-body" :style="`--bg-color: ${aysConfig.window.bodyColor};`">
			<img class="avatar" :alt="name" :title="name" :src="avatar" />
			<div class="name">{{name}}<span class="aka">{{aka}}</span></div>
			<div class="socials">
				<a role="button" v-for="item in socials" v-show="item._show === undefined || item._show" :id="item.platform" :title="item.username" :href="item.url" target="_blank" rel="noopener">
					<img v-if="item.iconType === 'img'" :src="item.icon" class="platform" alt="icon">
					<i v-else="item.iconType !== 'img'" :class="`icon ${item.iconType} fa-${item.icon}`" :style="{color: item.iconColor}"></i>
				</a>
			</div>
			<div class="sign" :style="`--bg-color: ${aysConfig.window.bubbleColor};`">
				<p class="content">{{sign}}</p>
				<p class="tags" v-text="tags.map(tag => `#${tag}`).join(' ')"></p>
			</div>
			<div class="footer">
				<p class="content">
					<span v-for="item in footers" v-html="item.replaceHolder()"></span>
				</p>
			</div>
			<img v-if="moeCounter.enable" id="moe-counter" :src="moeSrc" />
		</div>
	</div>
</template>