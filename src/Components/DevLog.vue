<script>
export default {
  props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      relatedProject: {
        type: String,
        required: false
      },
      time: {
        type: String,
        required: false
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
    <div class="title">{{title}}</div>
    <div class="description">{{description}}</div>
    <div class="small-text" v-if="!(relatedProject==null||relatedProject===''||relatedProject===undefined)">Проект: {{relatedProject}}</div>
    <div class="small-text" v-if="!(time==null||time===''||time===undefined)">{{time}}</div>
  </div>
</template>

<style scoped>
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
.small-text {
  color: #6d6d6d;
  font-size: 10px;
  text-align: left;
  margin: 1px;
  font-family: Roboto,serif;
}
</style>