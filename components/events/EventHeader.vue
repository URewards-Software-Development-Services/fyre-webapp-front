<!-- Author: Jervin Macalawa -->
<!-- Added on: July 1, 2023 -->
<!-- Description: This section displays the header of the event page -->
<template>
    <div>
        <v-row>
            <v-col>
                <div class="text-h5">
                    <b>Event</b>
                </div>
            </v-col>
            <v-col align="end">
                <v-btn class="custom-button" @click="addItem" color="secondary" dark large>
                    New Event
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default{
    methods:{
        addItem(){
            this.$emit("addItem")
        }
    }
}
</script>

<style scoped>
</style>