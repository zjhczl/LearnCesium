<template>
  <div class="home">
    <div id="cesiumViewer" style="width: 100%; height: 100%"></div>
  </div>
</template>
<script>
import TDTWMTSImageProvider from "../cesiumGIS";
export default {
  data() {
    return {
      viewer: null,
    };
  },
  mounted() {
    this.mainTest();
  },
  methods: {
    mainTest() {
      /******
       *    实验插值算法
       *    动画
       */
      // Cesium.Ion.defaultAccessToken = this.defaultAccessToken;
      function startup(Cesium) {
        let terrain = new Cesium.CesiumTerrainProvider({
          url: "http://ad.breton.top:8008/export/dem",
          isGoogleCustom: true,
        });
        let imageprovider = new TDTWMTSImageProvider(
          "http://ad.breton.top:8008/export/test/image/{z}/{x}/{y}.png",
          // "http://zjhczl.xyz:6080/arcgis/rest/services/wmts/MyMapService/MapServer/tile/{z}/{y}/{x}",
          false,
          1,
          16,
          {
            alpha: 0,
          }
        );
        window.viewer = new Cesium.Viewer("cesiumViewer", {
          terrainProvider: terrain,
          imageryProvider: imageprovider,
          animation: false, //隐藏掉时钟
          timeline: false, //隐藏时间轴
          fullscreenButton: false, //隐藏全屏按钮
          homeButton: false, ////隐藏home按钮
          navigationHelpButton: false, //隐藏帮助按钮
          sceneModePicker: false, //隐藏切换二三维按钮
          baseLayerPicker: false, //隐藏切换底图按钮
          // creditContainer: document.createElement("div"), //隐藏logo
          geocoder: false,
          resolutionScale: 0.5,
          // requestRenderMode : true,
          maximumRenderTimeChange: Infinity,
          targetFrameRate: 60,
          sceneMode: Cesium.SceneMode.SCENE3D,
        });
        window.viewer.scene.skyBox.show = false;
        //隐藏logo
        window.viewer.cesiumWidget.creditContainer.style.display = "none";
        window.viewer.scene.globe.showGroundAtmosphere = false;

        let scene = window.viewer.scene;
        scene.globe.depthTestAgainstTerrain = true;
      }
      if (typeof Cesium !== "undefined") {
        window.startupCalled = true;
        startup(Cesium);
      }
    },
  },
};
</script>
<style scoped>
.home {
  height: 100vh;
  position: relative;
}
#cesiumViewer {
  width: 100%;
  height: 100%;
}
</style>
