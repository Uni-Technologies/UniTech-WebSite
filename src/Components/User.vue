<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <div class="panel">
    <img class="image" v-bind:src="icon" alt="User avatar">
    <div class="title">{{name}}</div>
    <div class="description">{{description}}</div>
  </div>
</template>

<style scoped>
.image {
  max-width: 25%;
  border-radius: 5px;
  width: 25%;
  height: 25%;
}
@keyframes image-anim {
  0% {
    transform: rotate(1deg) scale(100%);
  }
  100% {
    transform: rotate(5deg) scale(90%);
  }
}
.image:hover {
  animation-name: image-anim;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
@font-face {
  font-family: 'Roboto';
  src: url('../assets/RobotoFont/Roboto-Light.ttf');
}
@font-face {
  font-family: 'RobotoBold';
  src: url('../assets/RobotoFont/Roboto-Bold.ttf');
}
.panel {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  background-image: linear-gradient(40deg, rgba(255, 255, 255, 0.13), rgba(229, 229, 229, 0.1));
  border-radius: 5px;
  padding: 20px;
  margin: 10px auto;
  width: 50%;
  height: 50%;
}
.title {
  color: #d4daff;
  font-family: Roboto,serif;
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  margin: 10px;
}

.description {
  color: #ffffff;
  overflow: clip;
  font-family: Roboto,serif;
  text-align: left;
  margin: 10px;
}
</style>