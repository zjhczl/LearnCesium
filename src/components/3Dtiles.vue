<template>
  <div id="cesiumContainer"></div>
</template>
<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const viewer = new Cesium.Viewer("cesiumContainer", {
    homeButton: false,
    animation: false,
    navigationHelpButton: false,
    baseLayerPicker: false,
    timeline: false,
    geocoder: false,
    sceneModePicker: false,
    fullscreenButton: false,
    // vrButton: true,
  });
  //显示帧率
  viewer.scene.debugShowFramesPerSecond = true;
  //加载3d tiles
  var tileset = new Cesium.Cesium3DTileset({
    url: "./tileData/Scene/Production_5.json", //数据路径
    maximumScreenSpaceError: 2, //最大的屏幕空间误差
    maximumNumberOfLoadedTiles: 1000, //最大加载瓦片个数
    // modelMatrix: m, //形状矩阵
  });
  //创建平移矩阵方法一
  // m = Cesium.Matrix4.fromArray([
  // 1.0, 0.0, 0.0, 0.0,
  // 0.0, 1.0, 0.0, 0.0,
  // 0.0, 0.0, 1.0, 0.0,
  // x, y, z, 1.0
  // ]);

  //   //创建平移矩阵方法二
  //   var translation = Cesium.Cartesian3.fromArray([0, 0, 1000000]);
  //   const m = Cesium.Matrix4.fromTranslation(translation);

  //   //生效
  //   tileset._modelMatrix = m;

  tileset.readyPromise
    .then(function (tileset) {
      viewer.scene.primitives.add(tileset);

      //移动到表面
      const height = Number(-36);
      const cartographic = Cesium.Cartographic.fromCartesian(
        tileset.boundingSphere.center
      );
      const surface = Cesium.Cartesian3.fromRadians(
        cartographic.longitude,
        cartographic.latitude,
        0.0
      );
      const offset = Cesium.Cartesian3.fromRadians(
        cartographic.longitude,
        cartographic.latitude,
        height
      );
      const translation = Cesium.Cartesian3.subtract(
        offset,
        surface,
        new Cesium.Cartesian3()
      );
      tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
      viewer.flyTo(
        tileset,
        new Cesium.HeadingPitchRange(
          0.0,
          -0.5,
          tileset.boundingSphere.radius * 2.0
        )
      );
    })
    .catch(function (error) {
      console.log(error);
    });
});
</script>
