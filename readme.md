[toc]

# Cesium

## Cesium 默认投影：3857

## 新建 vue 工程

```
npm install -g @vue/cli
vue create project1
```

## 配置 s 使用 cesium

### 安装 cesium 包

```
npm install cesium -S
```

### 拷贝 cesium 到 public 目录

### 引入 cesium

在/public/index.html

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
    <link rel="stylesheet" href="Cesium/Widgets/widgets.css" />
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <noscript>
      <strong>
        We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work
        properly without JavaScript enabled. Please enable it to continue.
      </strong>
    </noscript>
    <div id="app"></div>
    <script src="Cesium/Cesium.js"></script>
    <!-- built files will be auto injected -->
  </body>
</html>
```

### 修改 vue.config.js 配置

```javascript
module.exports = {
  publicPath: "./",
  chainWebpack: (config) => {
    config.module
      .rule("worker")
      .test(/\.worker\.js$/)
      .use("worker-loader")
      .loader("worker-loader")
      .options({
        inline: "fallback",
      });
    config.module.rule("js").exclude.add(/\.worker\.js$/);
  },
  lintOnSave: false,
  productionSourceMap: false,
};
```
