<template>
  <div id="cesiumContainer"></div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const viewer = new Cesium.Viewer("cesiumContainer", {
    imageryProvider: new Cesium.ArcGisMapServerImageryProvider({
      url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
      // url: "http://www.zjhczl.xyz:6080/arcgis/rest/services/jwd/MyMapService/MapServer",
    }),
    baseLayerPicker: false,
    infoBox: false,
  });
  //显示帧率
  viewer.scene.debugShowFramesPerSecond = true;
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
