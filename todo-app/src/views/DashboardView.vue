<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Home page</h1>

    <v-container class="my-5">

      <v-layout raw class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase"> By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project title</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey"  @click="sortBy('person')" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase"> By person</span>
            </v-btn>
          </template>
          <span>Sort projects by person name</span>
        </v-tooltip>
      </v-layout>

      <v-card v-for="project in projects" :key="project.title" :class="`pa-4 my-2 project ${project.status}`">
        <v-layout raw wrap>
          <v-flex xs12 md6>
            <div class="caption grey--text">Title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs12 sm4 md2>
            <div class="float-right">
              <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-card>

    </v-container>

  </div>
</template>

<script>
  import dbProjects from '@/utils/fetchProjects';

  export default {

    data () {
      return {
        projects: []
      }
    },

    created () {
      this.projects = dbProjects;
    },

    methods: {
      sortBy(prop) {
        this.projects.sort((a,b) => a[prop] < b[prop] ? -1: 1);
      }
    }

  }
</script>

<style scoped>
  .project.complete {
    border-left: 8px solid #3CD1C2;
  }
  .project.ongoing {
    border-left: 8px solid orange
  }
  .project.overdue {
    border-left: 8px solid tomato;
  }
  .v-chip.complete {
    background: #3cd1c2 !important;
  }
  .v-chip.ongoing {
    background: #ffaa2c !important;
  }
  .v-chip.overdue {
    background: #f83e70 !important;
  }
</style>



