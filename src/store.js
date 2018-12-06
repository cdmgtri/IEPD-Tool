
import Vue from 'vue';
import Vuex from 'vuex';

import { NIEMVersionResponse } from "niem-model-api-specification"; // eslint-disable-line no-unused-vars

let SEARCH_DATA_URL = "https://raw.githubusercontent.com/cdmgtri/niem-model-api/dev/api/data/search.json";

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    /** @type {NIEMVersionResponse[]} */
    searchList: [],

    // True if the search list has finished loading
    loaded: false,

    spotlight: []

  },

  getters: {
    modelCount: state => {
      return state.searchList.length;
    },

    repoMetadata(state) {
      return state.searchList.map( versionResponse => {
        return {
          name: versionResponse.data.modelName,
          summary: versionResponse.model.summary,
          description: versionResponse.model.description,
          release: versionResponse.data.baseNIEM,
          more: versionResponse.data.more,
          kind: versionResponse.model.kind,
          id: versionResponse.links.id
        }
      });
    }
  },

  mutations: {
    load(state, searchList) {
      state.searchList = searchList;
      state.spotlight = getRandomEntries(searchList, 5);
      state.loaded = true;
    }

  },

  actions: {
    load(context) {
      let str = localStorage.getItem("niem-searchList");

      if (str) {
        // Load the search file from the browser cache
        context.commit("load", JSON.parse(str));
      }
      else {
        // Load the search file from the API
        fetch(SEARCH_DATA_URL)
          .then( response => {
            response
              .json()
              .then( searchList => {
                context.commit("load", searchList);
                localStorage.setItem("niem-searchList", JSON.stringify(searchList, null, 2));
              });
          })
          .catch ( err => {
            console.log("Load failed", err);
          });
      }
    }
  }
});



function getRandomIndex(max) {
  return Math.floor( Math.random() * max );
}

function getRandomIndexes(count, max) {
  let indexes = [];

  for (let i=0; i<count; i++) {
    let randIndex = getRandomIndex(max);
    while (indexes.includes(randIndex)) {
      // Random index was duplicate - call again
      randIndex = getRandomIndex(max);
    }
    indexes.push(randIndex);
  }

  return indexes;
}

function getRandomEntries(fullList, count) {
  let subset = [];
  let indexes = getRandomIndexes(count, fullList.length);
  indexes.forEach( i => subset.push(fullList[i]));
  return subset;
}