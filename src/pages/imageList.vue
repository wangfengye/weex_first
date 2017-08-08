<template>
  <div class="wrapper">
    <list>
      <refresh @refresh="onRefresh" :display="refreshing">
        <loading-indicator></loading-indicator>
      </refresh>
      <loading class="loading" @loading="onLoading" :display="showLoading">
  
        <loading-indicator class="indicator">2</loading-indicator>
      </loading>
      <cell class="item" v-for="image in images" :key="image._id">
        <image :src="image.url" class="image" resize="cover"></image>
      </cell>
    </list>
  </div>
</template>

<script>
import { getImages } from '../api/getData.js'
const modal = weex.requireModule('modal');
const stream = weex.requireModule('stream');
const PAGE_COUNT = 3;
export default {
  data() {
    return {
      refreshing: 'hide',
      showLoading: 'hide',
      images: [],
      count: 1
    }
  },
  mounted() {
    this.loadImage();
  },

  methods: {
    loadImage() {
      var _this = this;
      getImages(PAGE_COUNT, this.count, res => {
        this.images = [...this.images, ...res.data.results]
        this.count++;
        console.log(this.images);
        this.showLoading = 'hide';
        this.refreshing = 'hide';
      })
    },
    onRefresh(event) {
      this.refreshing = 'show';
      this.count = 1;
      this.images = [];
      this.loadImage();
    },
    onLoading(event) {
      this.showLoading = 'show';
      this.loadImage();
    }
  }
}
</script>
<style>
.wrapper {
  align-items: center;
  display: flex;
}

.indicator {
  text-align: center;
}

.loading {
  text-align: center;
}

.item {
  text-align: center;
  padding: 4px;
}

.image {
  width: 734px;
  height: 979px;
  border-radius: 10px;
}
</style>