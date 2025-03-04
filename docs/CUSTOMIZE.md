# aboutYourself 个性化指北
废话少说啊 打开 [`ays.config.ts`](../ays.config.ts)  
可以看到默认导出的内容就是我们要霍霍的目标 照着下面的键值说明改就完了

## 键值说明
### 资料部分
| 键值 | 数据类型 | 默认值 | 可选值 | 必须 | 隶属于 | 说明 |
| --- | --- | --- | --- | --- | --- | --- |
| `avatar` | 字符串 | - | - | ✅ | - | 你的头像 |
| `name` | 字符串 | - | - | ✅ | - | 你的名字 |
| `aka` | 字符串 | - | - | ✅ | - | 你的另外的名字 |
| `sign` | 字符串 | - | - | ✅ | - | 你的个性签名 |
| `tags` | 字符串数组 | - | - | ✅ | - | 签名下面的标签 |
| `socials` | 对象数组 | - | - | ✅ | - | 你的社交平台 |
| `socials[]._show` | 布尔值 | `true` | `true`, `false` | - | `socials` | 是否显示该社交平台 |
| `socials[].platform` | 字符串 | - | - | ✅ | `socials` | 社交平台名称 |
| `socials[].icon` | 字符串 | - | - | ✅ | `socials` | 社交平台图标 |
| `socials[].iconColor` | 字符串 | - | - | - | `socials` | 社交平台图标颜色 |
| `socials[].iconType` | 字符串 | - | `'img'`, `'fab'`, `'fas'` | ✅ | `socials` | 社交平台图标类型 |
| `socials[].url` | 字符串 | - | - | ✅ | `socials` | 社交平台链接 |
| `footers` | 字符串数组 | - | - | - | - | 显示在窗口最底部的内容(支持 HTML 标签) |

### 主题部分
| 键值 | 数据类型 | 默认值 | 可选值 | 必须 | 隶属于 | 说明 |
| --- | --- | --- | --- | --- | --- | --- |
| `window` | 对象 | - | - | ✅ | - | 窗口颜色配置 |
| `window.headerColor` | 字符串 | - | - | ✅ | `window` | 窗口标题栏颜色 |
| `window.bodyColor` | 字符串 | - | - | ✅ | `window` | 窗口主要部分颜色 |
| `background` | 对象 | - | - | - | - | 背景图片配置 |
| `background.type` | 字符串 | - | `'color'`, `'gradient'`, `'image'`, `'video'` | ✅ | `background` | 背景类型 |
| `background.color` | 字符串 | - | - | - | `background` | 背景颜色 |
| `background.gradient` | 对象 | - | - | - | `background` | 渐变背景配置 |
| `background.gradient.colors` | 字符串数组 | - | - | ✅ | `background.gradient` | 渐变颜色 |
| `background.gradient.direction` | 字符串 | - | `'to bottom'`, `'to right'`, `'to top'`, `'to left'` | ✅ | `background.gradient` | 渐变方向 |
| `background.image` | 字符串 | - | - | - | `background` | 背景图片地址 |
| `background.video` | 字符串 | - | - | - | `background` | 背景视频地址 |
| `enableFontAwesome` | 布尔值 | - | `true`, `false` | ✅ | - | 是否使用 FontAwesome 图标 |
| `injectContent` | 对象 | - | - | - | - | 注入内容配置 |
| `injectContent.head` | 任意数组 | - | - | - | `injectContent` | 注入到 `<head>` 中的内容(支持 HTML 标签) |
| `injectContent.body` | 任意数组 | - | - | - | `injectContent` | 注入到 `<body>` 中的内容(支持 HTML 标签) |
| `debug` | 布尔值 | `import.meta.env.DEV` | `true`, `false` | ✅ | - | 调试模式 (建议保持默认) |
| ~~`checkUpdate`~~ | 布尔值 | `false` | `true`, `false` | ✅ | - | 检查更新 (还没写 awa) |
