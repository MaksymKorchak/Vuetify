<template>
    <v-dialog max-width="600px" v-model="isDialogOpen">
        <template v-slot:activator="{ on }">
            <v-btn slot="activator" text class="success" v-on="on">
                Add new project
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h2>Add New Project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>
                    <v-menu min-width="200px">
                        <template v-slot:activator="{ on }">
                            <v-text-field :value="formattedDate" v-on="on" label="Due date" prepend-icon="mdi-calendar-range" :rules="inputRules"></v-text-field>
                        </template>
                        <v-date-picker v-model="due"></v-date-picker>
                    </v-menu>
                    <v-btn @click="submit" text class="success mx-0 mt-3" :loading="isLoading">Add Project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    import {format} from 'date-fns';
    import db from '@/fb';

    export default {
        name: 'pop-up',

        data() {
            return {
                title: '',
                content: '',
                due: null,
                inputRules: [v => v.length >= 3 || 'Minimum length is 3 characters'],
                isLoading: false,
                isDialogOpen: false
            }
        },

        computed: {
            formattedDate() {
                return this.due ? format(new Date(this.due), 'do MMM yyyy') : '';
            }
        },

        methods: {
            submit() {
                if(this.$refs.form.validate()){

                    this.isLoading = true;

                    const project = {
                        title: this.title,
                        content: this.content,
                        due: format(new Date(this.due), 'do MMM yyyy'),
                        person: 'NLO',
                        status: 'ongoing'
                    }

                    db.collection('projects').add(project)
                        .then(() => {
                                this.isLoading = false;
                                this.isDialogOpen = false;
                                this.$emit('projectAdded')
                            }
                        )
                }
            }
        }

    }
</script>
