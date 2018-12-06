
<template>
  <div class="container">

    <div class="alert alert-info alert-dismissible fade show">
      <ul>
        <li>This is a rapid prototype for a new <b>NIEM Content Hub</b>.</li>
        <li>Current Features:</li>
        <ul>
          <li>Open-source application hosted on GitHub</li>
          <li>{{ this.$store.getters.modelCount }} sample IEPDs loaded from the old <a href='https://tools.niem.gov/niemtools/iepdt/search/index.iepd' target="_blank">NIEM Tools IEPD repository</a></li>
          <li>Basic search and repository functionality</li>
        </ul>
        <li>See the <router-link :to="'/about'">Help / About</router-link> page for more status information, planned features, and goals for a future NIEM tool strategy</li>
      </ul>
      <button class="close" data-dismiss="alert">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <h2>IEPD spotlight</h2>
    <div class="container p-0">
      <b-carousel
        id="iepdCarousel"
        class="iepd-carousel carousel-fade"
        style="text-shadow: 1px 1px 2px #333;"
        controls
        indicators
        background="#ababab"
        img-width="500px"
        img-height="250px"
        :interval="10000"
        v-model="slide"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
          <!-- d-block w-100 -->
        <b-carousel-slide img-height="250px"
          img-blank
          v-for="(metadata, index) in carouselMetadata" :key="index"
          :class="{ active: index==0 }">
            <h3 class="carousel-title">
              <router-link :to="'/resources/' + metadata.links.id" v-text="metadata.model.name"/>
            </h3>
            {{ metadata.model.summary }}
            <hr>
            <p class="carousel-description">{{ metadata.model.description}}</p>
            <p><b>NIEM Release:</b> {{ metadata.data.baseNIEM }}</p>
        </b-carousel-slide>
      </b-carousel>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      count: 5,
      carouselMetadata: this.$store.state.spotlight,
      indexes: []
    }
  },
  methods: {
    onSlideStart () {
      this.sliding = true
    },
    onSlideEnd () {
      this.sliding = false
    },
    getRandomIndex() {
      return Math.floor( Math.random() * this.$store.getters.modelCount );
    },
    getRandomMetadata() {
      let randIndex = this.getRandomIndex();
      while (this.$data.indexes.includes(randIndex)) {
        // Random index was duplicate - call again
        randIndex = this.getRandomIndex();
      }
      this.$data.indexes.push(randIndex);
      return this.$store.state.searchList[randIndex];
    },
    loadCarouselMetadata() {
      for( let i=0; i < this.$data.count; i++) {
        this.$data.carouselMetadata.push( this.getRandomMetadata() );
      }
      console.log(this.$data.carouselMetadata);
    }
  },
  mounted() {
    // this.loadCarouselMetadata();
  }
}
</script>
