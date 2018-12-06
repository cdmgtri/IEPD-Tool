
<template>
  <b-container fluid v-if="loaded">
    <b-row>
      <!-- Resource name -->
      <h1>{{ version.links.model.label }} ({{ model.data.kind }})</h1>
    </b-row>

    <b-row align-h="start">
      <!-- View and download links -->
      <b-btn class="btn-link btn-sm text-muted" target="_blank" :href="version.links.folder">View Package</b-btn>
      <b-btn class="btn-link btn-sm text-muted" target="_blank" :href="version.links.zip" download>Download Package</b-btn>
    </b-row>

    <b-row>
      <!-- Metadata table -->
      <b-table :items="items" striped hover/>
    </b-row>
  </b-container>

</template>

<script>

let API_BASE_URL = "https://raw.githubusercontent.com/cdmgtri/niem-model-api/dev/api/data/";

export default {
  data () {
    return {
      id: this.$route.params.id,
      version: {},
      model: {},
      items: [],
      loaded: false
    }
  },
  methods: {
    async loadMetadata() {
      let response = await fetch(API_BASE_URL + "versions/" + this.$data.id + ".json");
      let version = await response.json();
      this.$data.version = version;

      response = await fetch(API_BASE_URL + "models/" + version.links.model.id + ".json");
      this.$data.model = await response.json();

      for (let key in this.$data.version.data.more) {
        this.$data.items.push({"Field": key, "Value": this.$data.version.data.more[key]});
      }

      this.$data.loaded = true;
    }
  },
  watch: {
    'this.$route'() {
      this.$data.id = this.$route.params.id;
      this.loadMetadata();
    }
  },
  created() {
    this.loadMetadata();
  }
}
</script>