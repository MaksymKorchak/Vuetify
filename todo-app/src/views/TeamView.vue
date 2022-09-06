<template>
    <div class="team">
      <h1 class="subtitle-1 grey--text">Team Page</h1>

      <v-container class="my-5 grey lighten-4">
        <v-layout raw wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
            <v-card flat class="text-center ma-3">
              <v-responsive class="pt-4">
                <v-avatar size="100">
                  <img :src="person.avatar" :alt="person.name">
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="subheading">{{ person.name }}</div>
                <div class="grey--text">{{ person.role }}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="grey">
                  <v-icon small left>mdi-message</v-icon>
                  <span>Message</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

    </div>
</template>

<script>
  export default {

    data(){
      return {
        team: [
          { name: 'Max', role: 'Full Stack developer', avatar:'/avatar-2.png' },
          { name: 'Serge', role: 'Web developer', avatar:'/avatar-1.png' },
          { name: 'Apollo', role: 'Web developer', avatar:'/avatar-3.png' },
          { name: 'Oliver', role: 'Social media maverick', avatar:'/avatar-4.png' },
          { name: 'Jon', role: 'Sales guru', avatar:'/avatar-5.png'}
        ]
      }
    },
    
  }
</script>

