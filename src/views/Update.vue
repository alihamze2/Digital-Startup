<template>
  <div class="update">
    <h1>Update</h1>
    <form>
      <input
        type="text"
        v-model="post.description"
        placeholder="Type a description here"
        required
      />
      <input
        type="file"
        ref="fileInput"
        accept="image/*"
        v-on:change="previewImage"
      />
      <button class="choose-image" type="button" v-on:click="triggerChooseImg">
        Upload File
      </button>
      <div>
        <img :src="post.image" class="image-preview" />
      </div>
      <button type="button" class="btn1" v-on:click="updatePost">
        Update Post
      </button>
    </form>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  name: "Update",
  props: {
    post: Object
  },
  methods: {
    triggerChooseImg() {
      this.$refs.fileInput.click();
    },
    previewImage() {
      const imageFile = this.$refs.fileInput.files[0];
      const fileReader = new FileReader();
      fileReader.onload = event => {
        this.post.image = event.target.result;
      };
      fileReader.readAsDataURL(imageFile);
    },
    updatePost() {
      console.log(this.post);
      postRef.doc(this.post.id).set({
        description: this.post.description,
        image: this.post.image
      });
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
form {
  padding: 2em 1em 2.5em;
}

input {
  margin: 1em auto;
  width: 100%;
  max-width: 350px;
  padding: 12px 15px;
  border-radius: 8px;
  border: 0;
  box-sizing: border-box;
  display: block;
}

input[type="file"] {
  display: none;
}

.image-preview {
  max-width: 350px;
  width: 100%;
  padding: 1em 0;
  border-radius: 8px !important;
}

.choose-image {
  padding: 12px 30px;
  background-color: #fff !important;
  margin: 2%;
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  color: black;
}

.choose-image:hover {
  background-color: green !important;
  border: 0;
  color: white !important;
}

.btn1 {
  padding: 12px 30px !important;
  margin: 2% !important;
  border-radius: 8px !important;
  border: 0 !important;
  cursor: pointer !important;
}

.btn1:hover {
  background-color: green !important;
  border: 0 !important;
  color: white !important;
}
</style>
