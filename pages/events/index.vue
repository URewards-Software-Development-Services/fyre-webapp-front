<!-- Author: Jervin Macalawa -->
<!-- Added on: July 1, 2023 -->
<!-- Description: This section displays Event page -->
<!-- Updated: July 19, 2023: Adding DialogDeleteForm -->
<template>
    <div class="pa-10">
        <div>
            <EventHeader @addItem="addItem" />
        </div>
        <div>
            <DialogAddForm :dialog="addItemDialog" @cancelAddDialog="cancelAddDialog" :feature="FEATURES.EVENT"
                @submit="handleSubmitEvent" />
        </div>
        <div>
            <DialogEditForm :dialog="editItemDialog" :data="selectedItem" @cancelEditDialog="cancelEditDialog" :feature="FEATURES.EVENT"
                @submit="handleUpdateEvent" />
        </div>
        <div>
            <DialogDeleteForm @deleteItem="confirmDelete" @cancelDelete="cancelDelete" :dialog="deleteItemDialog" />
        </div>
        <div>
            <EventBody @editItem="editItem" :event_data="event_data" @deleteItem="deleteItem" />
        </div>
        <div>
            <EventFooter />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import DialogEditForm from '../../components/common/Dialog/DialogEditForm.vue';
import DialogDeleteForm from '../../components/common/Dialog/DialogDeleteForm.vue';
import DialogAddForm from '../../components/common/Dialog/DialogAddForm.vue';
import EventHeader from '../../components/events/EventHeader.vue';
import EventBody from '../../components/events/EventBody.vue';
import EventFooter from '../../components/events/EventFooter.vue';
var cloneDeep = require("lodash.clonedeep");
export default {
    components: { EventHeader, EventBody, EventFooter, DialogAddForm, DialogDeleteForm, DialogEditForm },
    computed: {
        ...mapState('events', ['event_data']),
    },
    data() {
        return {
            deleteItemDialog: false,
            addItemDialog: false,
            selectedItem: [],
            editItemDialog: false,
        }
    },
    created() {
        this.$store.dispatch("events/view")
    },
    methods: {
        handleUpdateEvent(val){
            this.$store.dispatch('events/edit', val)
        },
        cancelEditDialog(){
            
        },
        confirmDelete() {
            this.$store.dispatch("events/delete", this.selectedItem)
            alert('Succesfully Deleted!')
            this.deleteItemDialog = false
            // location.reload()
        },
        cancelDelete() {
            this.deleteItemDialog = false
        },
        deleteItem(item) {
            this.selectedItem = item
            this.deleteItemDialog = true
        },
        handleSubmitEvent(value) {
            const status = this.$addForm({
                action: "events/add",
                data: value
            })
            alert("Successfully Added!")
            this.addItemDialog = false
        // alert('Successfully Added!')
        // location.reload()


        },
        editItem(item) {
            console.log(item)
            this.selectedItem = cloneDeep(item)
            this.editItemDialog = true
        },
        addItem() {
            this.addItemDialog = true
        },
        cancelAddDialog() {
            this.addItemDialog = false
        }
    },
}

</script>

<style></style>