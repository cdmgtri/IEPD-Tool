
<template>
  <!-- TODO: Fix conformance target link in help.json once training updates are pushed. -->
  <div>
    <div v-for="(section, sectionIndex) in help" :key="sectionIndex" class="mb-4">
      <h2>{{ section.title }}</h2>

      <div class="accordion">
        <div v-for="(block, blockIndex) in section.questions" :key="blockIndex" class="card">
          <div class="card-header px-2 py-0">
            <button class="btn btn-link" data-toggle="collapse" :data-target="'#collapsible-' + sectionIndex + '-' + blockIndex">
              <h3>
                <div class="">
                {{ block.question }}
                <i class="fa fa-chevron-circle-down ml-auto" aria-hidden="true"></i>
                </div>
              </h3>
            </button>
          </div>
          <div :id="'collapsible-' + sectionIndex + '-' + blockIndex" class="collapse">
            <div class="card-body" v-html="block.answer"/>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import help from "../assets/data/faq.json";

export default {
  data() {
    return {
      help
    };
  }
}

</script>