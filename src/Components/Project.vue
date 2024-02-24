<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="panel">
    <img class="image" v-bind:src="icon" alt="GitHub Image">
    <div class="title">{{name}}</div>
    <div class="description">{{description}}</div>
    <a class="button" v-bind:href="link" v-if="!(link==='NOT AVAILABLE' || link==='PRIVATE')">Перейти на Github</a>
    <a class="p_button" href="" v-else-if="(link==='PRIVATE')">Приватный</a>
    <a class="na_button" href="" v-else-if="(link==='NOT AVAILABLE')">Пока не доступно</a>

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
  align-items: center;
  background-image: linear-gradient(40deg, rgba(255, 255, 255, 0.13), rgba(229, 229, 229, 0.1));
  border-radius: 5px;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}


.image {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

@keyframes img-animation {
  0% {
    transform: rotate(1deg)
  }
  100% {
    transform: rotate(5deg) scale(90%);
  }
}

.image:hover {
  animation-name: img-animation;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.title {
  color: #d4daff;
  font-family: Roboto,serif;
  text-align: right;
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
}

.description {
  color: #ffffff;
  overflow: clip;
  font-family: Roboto,serif;
  text-align: center;
  margin-top: 20px;
}

.na_button {
  pointer-events: none;
  cursor: default;
  font-family: Roboto,serif;
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  background-color: rgba(196, 205, 208, 0.67);
  border-radius: 30px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  text-transform: uppercase;
}

.p_button {
  pointer-events: none;
  cursor: not-allowed;
  font-family: Roboto,serif;
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  background-color: rgba(206, 136, 136, 0.67);
  border-radius: 30px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  text-transform: uppercase;
}

.button {
  font-family: Roboto,serif;
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 30px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  text-transform: uppercase;
}

@keyframes button-animation {
  0% {
    background-color: #fff;
    color: #000;
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0);

  }
  100% {
    color: #1a052e;
    box-shadow: 0 1px 40px rgba(255, 255, 255, 0.68);
    background-color: #9ca7ff;
  }
}

.button:hover {
  animation-name: button-animation;
  animation-fill-mode: forwards;
  animation-duration: 0.5s;
}
</style>