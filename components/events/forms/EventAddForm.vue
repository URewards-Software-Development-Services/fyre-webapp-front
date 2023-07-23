<template>
    <v-card class="form-card" outlined>
        <v-card-title class="form-card__title">Event Form</v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="12">
                    <v-text-field v-model="event.event_name" @input="emitInput('event_name')"
                        label="Event Name"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-textarea v-model="event.description" @input="emitInput('description')"
                        label="Event Description"></v-textarea>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <input type="file" @change="onFileUpload" hidden ref="fileInput" accept="image/*">
                    <v-btn color="primary" @click="$refs.fileInput.click()">
                        <v-icon left>mdi-upload</v-icon>
                        Upload Image
                    </v-btn>
                    <span v-if="selectedImage" class="file-name">{{ selectedImage.name }}</span>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>
  
<script>
export default {
    data() {
        return {
            event: {
                event_name: '',
                description: '',
                image: '',
            },
            selectedImage: null,
        };
    },
    methods: {
        emitInput(field) {
            const data = {
                field: field,
                value: this.event[field],
                hasFile: true
            }
            this.$emit("handleInputForm", data)
        },
        onFileUpload(e) {
            this.file = e;
            e = e.target.files[0];
            if (e["name"].length > 100) {
                alert("255 characters exceeded filename.");
                return;
            }
            try {
                if (e.size > 16000000) {
                    alert("Only 15mb file can be accepted.");
                    return;
                }
            } catch (error) {
                alert(error);
                return;
            }
            this.event.image = e;
            this.emitInput('image')
        },
    },
};
</script>
  
<style>
.form-card {
    margin: auto;
    max-width: 500px;
    padding: 20px;
}

.form-card__title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}

.file-name {
    display: block;
    margin-top: 8px;
}
</style>