<!-- Author: Jervin Macalawa -->
<!-- Added on: July 19, 2023 -->
<!-- Description: Global dialog card for delete -->
<template>
    <v-dialog persistent v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="headline red lighten-1 white--text">
          Confirmation
        </v-card-title>
        <v-card-text>
          Are you sure you want to delete this item?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="cancelDelete">Cancel</v-btn>
          <v-btn color="error" @click="deleteItem">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ["dialog"],

    methods: {
        cancelDelete(){
            this.$emit('cancelDelete')
        },
        deleteItem(){
            this.$emit('deleteItem')
        }

    },

};
</script>
  
<style>
  /* Custom styles */
  .v-dialog {
    border-radius: 8px;
  }

  .v-card {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .v-card-title.headline {
    padding: 16px 24px;
  }

  .v-card-actions {
    padding: 8px 24px 16px;
  }
</style>