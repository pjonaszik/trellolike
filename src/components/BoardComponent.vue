<template>
  <div>
    <header>
      TrelloLike Management Board
    </header>
    <draggable class="d-flex" :list="sections" @end="movingSections">
      <Section
          v-for="(section, index) in sections"
          :key="section.id"
          :title="section.title"
          :tasks="section.tasks"
          :sectionIndex="index"
          @change="movingTasks" />
      <SectionCreate/>
    </draggable>
  </div>
</template>

<script>

import SectionCreate from './SectionCreateComponent.vue'
import Section from './SectionComponent.vue'
import draggable from 'vuedraggable'
import { mapState } from 'vuex'

export default {
  components: {
    SectionCreate,
    Section,
    draggable,
  },
  computed: {
    ...mapState(['sections']),
  },
  methods: {
    movingSections: function(){
      this.$store.dispatch('saveSections', { sections: this.sections })
    },
    movingTasks: function(){
      this.$store.dispatch('saveSections', { sections: this.sections })
    }
  }
};
</script>
