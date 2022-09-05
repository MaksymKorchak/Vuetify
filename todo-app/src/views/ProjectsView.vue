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
export default {
  data() {
    return {
      projects: [
          { title: 'Design a new website', person: 'Serge', due: '1st Jan 2022', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          { title: 'Code up the homepage', person: 'Max', due: '10th Jan 2022', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          { title: 'Design video thumbnails', person: 'Oliver', due: '20th Dec 2022', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
          { title: 'Create a community forum', person: 'Apollo', due: '20th Oct 2022', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        ]
      }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => project.person === 'Max')
    }
  }
}
</script>

