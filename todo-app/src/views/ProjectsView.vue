<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text">Projects page</h1>

    <v-container class="my-5">

    <v-expansion-panels>
      <v-expansion-panel v-for="project in myProjects" :key="project.title">
        <v-expansion-panel-header>
          {{ project.title }}
        </v-expansion-panel-header>
        <v-expansion-panel-content class="grey--text">
          <div class="font-weight-bold">{{ project.due }}</div>
          {{ project.content }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    </v-container>
    
  </div>
</template>

<script>
  import dbProjects from '@/utils/fetchProjects';

  export default {

    data() {
      return {
        projects: []
        }
    },

    computed: {
      myProjects() {
        return this.projects.filter(project => project.person === 'Max')
      }
    },

    created() {
      this.projects = dbProjects;
    }

  }
</script>

