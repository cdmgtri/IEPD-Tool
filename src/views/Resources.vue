
<template>
  <div fluid>
    <!-- Search bar -->
    <b-row>
      <b-col sm="6">
        <b-input-group size="sm">

          <!-- Search box -->
          <b-form-input v-model="filter" placeholder="Search"/>

          <!-- Clear button (reset the filter) -->
          <b-input-group-addon >
            <b-btn :disabled="!filter" @click="filter = ''" size="sm">
              <i class="fa fa-times-circle" aria-hidden="true"></i>
            </b-btn>
          </b-input-group-addon>

        </b-input-group>
      </b-col>
    </b-row>

    <!-- Number of filtered results -->
    <p class="text-muted"><small>Results: {{ totalRows }} of {{ allRows }}</small></p>

    <!-- Search results -->
    <b-table
      show-empty bordered striped hover stacked="md"
      :items="repoMetadata"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      @filtered="onFiltered"
    >
      <!-- Name of IEPD, hyperlinked to its IEPD page -->
      <template slot="name" slot-scope="row">
        <router-link :to="'/resources/' + row.item.id" v-text="row.item.name" class="link"/>
      </template>

      <!-- Buttons to display more info below and to open IEPD -->
      <template slot="more" slot-scope="row">
        <div class="btn-group">

          <!-- Button to display more info -->
          <button class="btn btn-outline-secondary btn-sm" @click.stop="row.toggleDetails">
            <i v-if="!row.detailsShowing" class="fa fa-chevron-circle-down"/>
            <i v-else class="fa fa-chevron-circle-up"/>
          </button>

          <!-- Button to open IEPD page -->
          <b-link class="btn btn-outline-secondary btn-sm" :to="'/resources/' + row.item.id">
            <i class="fa fa-arrow-circle-right"/>
          </b-link>

        </div>
      </template>

      <!-- Additional IEPD metadata for row -->
      <template slot="row-details" slot-scope="row">
        <b-card>
          <p class="card-text">{{ row.item.description }}</p>
        </b-card>
      </template>
    </b-table>

    <!-- Pagination -->
    <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" align="center"/>

  </div>
</template>

<script>


export default {
  data () {
    let repoMetadata = this.$store.getters.repoMetadata;
    return {
      repoMetadata,
      fields: [
        { key: "name", label: "IEPD Name", sortable: true},
        { key: "summary", sortable: true},
        { key: "kind", sortable: true},
        { key: "release", sortable: true},
        { key: "more", label: "More..."}
      ],
      currentPage: 1,
      perPage: 25,
      totalRows: repoMetadata.length,
      allRows: 0,
      pageOptions: [ 25, 50, 100 ],
      sortBy: "name",
      sortDesc: false,
      sortDirection: 'asc',
      filter: this.queryString(),
      modalInfo: { title: '', content: '' }
    }
  },
  computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => { return { text: f.label, value: f.key } })
    },
    filteredPath() {
      if (this.$data.filter) {
        return this.$route.path + "?keyword=" + this.$data.filter;
      }
      return this.$route.path;

    }
  },
  watch: {
    filter() {
      this.$router.replace( this.filteredPath );
      console.log("FILTERED", this.filteredPath);
    }
  },
  methods: {
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    queryString() {
      // Decode the query parameter if given, otherwise return null to show all results
      if (this.$route.query && this.$route.query.keyword) {
        return decodeURI(this.$route.query.keyword)
      }
      return null;
    }
  },
  mounted() {
    this.$data.allRows = this.$data.totalRows;
  }
}
</script>