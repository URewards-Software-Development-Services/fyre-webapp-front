<!-- Author: Jervin Macalawa -->
<!-- Added on: July 19, 2023 -->
<!-- Description: Global dialog card for edit -->
<template>
    <v-dialog v-model="dialog" max-width="500px" persistent>
        <v-card class="dialog-card">
            <v-card-title class="dialog-card__title">
                <h2 class="dialog-card__title-text">Add Item</h2>
            </v-card-title>
            <v-card-text>
                <div class="">
                    <component :data="data" :is="content" @handleInputForm="handleInputForm"></component>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="cancelEditDialog">Close</v-btn>
                <v-btn color="primary" @click="handleSubmitData" class="ml-2">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import EventEditForm from '../../events/forms/EventEditForm.vue';
export default {
    props: ["dialog", "feature", "data"],
    data() {
        return {
            content: null,
            input_value: {
                hasFile: false
            },
            form_data: new FormData()
        };
    },

    created() {
        this.getComponent()
    },

    methods: {
        getComponent() {
            switch (this.feature) {
                case this.FEATURES.EVENT:
                    this.content = EventEditForm
                    break
                case this.FEATURES.PARTNERSHIP:
                    break
                case this.FEATURES.GALLERY:
                    break
            }
        },
        handleSubmitData() {
            if(this.form_data.length == 0){
                this.$emit("submit", this.input_value)
            }
            else{
                this.$emit("submit", this.form_data)
            }
            
        },

        cancelEditDialog() {
            this.$emit("cancelAddDialog");
        },

        handleInputForm(item) {
            if(item.hasFile){
                this.form_data.delete(item['field'])
                this.form_data.append(item['field'], item['value'])
            }
            this.input_value[item['field']] = item['value']
            this.input_value['has_file'] = item['has_file']
        }
    },

    components: { EventEditForm }
};
</script>
  
<style>
.dialog-card {
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.dialog-card__title {
    background-color: #3f51b5;
    border-radius: 8px 8px 0 0;
}

.dialog-card__title-text {
    color: white;
    font-size: 18px;
    margin: 0;
    padding: 16px;
}

.dialog-card__title-text:before {
    content: '\f086';
    font-family: 'Material Design Icons';
    margin-right: 8px;
    position: relative;
    top: 2px;
}

.v-btn:not(.text) {
    color: white;
    font-weight: bold;
}

.v-btn:not(.text):hover {
    background-color: #3f51b5;
    color: white;
}
</style>