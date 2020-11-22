<template>
  <div class="create">
    <h1>Add a new movie to my list</h1>
    <form>
      <input
        type="text"
        v-model="post.description"
        placeholder="Add a movie ..."
        required
      />
      <input
        type="file"
        ref="fileInput"
        accept="image/*"
        v-on:change="previewImage"
      />
      <button class="btn1" type="button" v-on:click="triggerChooseImg">
        Upload Picture
      </button>
      <div>
        <img :src="post.image" class="image-preview" />
      </div>
      <button class="btn1" type="button" v-on:click="createPost">
        Create Post
      </button>
    </form>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  name: "Create",
  data() {
    return {
      post: {
        description: "",
        image: null
      }
    };
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
    createPost() {
      postRef.add(this.post);
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
form {
  padding: 2em 1em 2.5em;
}
button.choose-image {
  background-color: var(--primary);
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

input {
  margin: 1em auto;
  width: 100%;
  max-width: 350px;
  padding: 12px 15px;
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
  border-radius: 8px;
}
</style>
