<template>
    
    <nav>
        <v-snackbar  v-model="snackbar" :timeout="4000" top color="success">
            <span>Awesome! New project was added.</span>
            <v-btn text color="white" @click="snackbar = false">Close</v-btn>
        </v-snackbar>

        <v-app-bar flat app>
            <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
            <v-app-bar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>App</span>
            </v-app-bar-title>
            <v-spacer></v-spacer>

            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn color="grey" text v-on="on" >
                        <v-icon left>mdi-chevron-down</v-icon>
                        <span>Menu</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn text color="grey">
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app class="primary">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="100">
                        <img src="/avatar-2.png">
                    </v-avatar>
                    <p class="white--text text-center subheading mt-1">Max</p>
                </v-flex>
                <v-flex class="mt-4 mb-3">
                    <Popup @projectAdded = "snackbar = true"/>
                </v-flex>
            </v-layout>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon large class="white--text">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
   
</template>

<script>
    import Popup from './Popup.vue';

    export default {
        name: 'nav-bar',

        components :{
            Popup,
        },

        data() {
            return {
                drawer: false,
                snackbar: false,
                links: [
                    { icon: 'mdi-view-dashboard-variant', text: 'Dashboard', route: '/' },
                    { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
                    { icon: 'mdi-account-group', text: 'Team', route: '/team' }
                ]
            }
        }

    }
</script>
