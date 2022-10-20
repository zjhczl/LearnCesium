<template>
  <div id="cesiumContainer"></div>
</template>

<script setup>
import { onMounted } from "vue";
const czml = [
  {
    id: "document",
    name: "CZML Point",
    version: "1.0",
  },
  {
    id: "point 1",
    name: "point",
    position: {
      cartographicDegrees: [121.2, 31.4, 0],
    },
    point: {
      color: {
        rgba: [255, 255, 255, 255],
      },
      outlineColor: {
        rgba: [255, 0, 0, 255],
      },
      outlineWidth: 4,
      pixelSize: 20,
    },
  },
];

onMounted(() => {
  const viewer = new Cesium.Viewer("cesiumContainer");
  const dataSourcePromise = Cesium.CzmlDataSource.load(czml);
  viewer.dataSources.add(dataSourcePromise);
  viewer.zoomTo(dataSourcePromise);
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
