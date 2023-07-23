<!-- Author: Jervin Macalawa -->
<!-- Added on: July 1, 2023 -->
<!-- Description: This section displays the body of the event page -->
<template>
    <div>
        <v-container>
            <v-data-table :headers="headers" :items="event_data" :search="search" :loading="loading"
                :rows-per-page-items="[5, 10, 15]" class="elevation-1">
                <template v-slot:item.action="{ item }">
                    <!-- <v-icon small class="mr-1" @click="editItem(item)">mdi-pencil</v-icon> -->
                    <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
                </template>
                <template #[`item.image`]="{ item }">
                    <v-img :src="item.image" height="100" width="100"></v-img>
                </template>
            </v-data-table>
        </v-container>
    </div>
</template>

<script>
export default {
    props: [
        'event_data'
    ],
    data() {
        return {
            headers: [
                { text: 'Event Name', value: 'event_name' },
                { text: 'Event Description', value: 'description' },
                { text: 'Image', value: 'image' },
                { text: 'Action', value: 'action', sortable: false },
            ],
            search: '',
            loading: false,
        };
    },
    methods: {
        // Author: Jervin Macalawa
        // Added on: July 1, 2023 
        // Description: Implementing updating items function
        editItem(item) {
            this.$emit("editItem", item)
        },

        // Author: Jervin Macalawa
        // Added on: July 1, 2023 
        // Description: Implementing delete items function
        deleteItem(item) {
            this.$emit("deleteItem", item)
        },
    },
};
</script>


<style scoped></style>