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

  //绘制加载形状
  var redBox = viewer.entities.add({
    name: "Red box with black outline",
    position: Cesium.Cartesian3.fromDegrees(121.390839, 31.076934, 0),
    box: {
      dimensions: new Cesium.Cartesian3(4.0, 4.0, 4.0),
      material: Cesium.Color.RED.withAlpha(0.5),
      outline: true,
      outlineColor: Cesium.Color.BLACK,
    },
  });
  //移动到形状
  viewer.zoomTo(redBox);
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
