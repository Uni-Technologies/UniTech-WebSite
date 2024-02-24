
<script>
import MainPageContent from "@/Components/Pages/MainPageContent.vue";

export default {
  components: {MainPageContent},
  data() {
    return {
        menuItems: {
          '/': 'Главная',
          '/projects': 'Проекты',
          '/about': 'О нас',
        },
        currentPage: this.$route
    }
  }
}
</script>

<template>
  <div class="tab-control">
    <router-link class="tab-control" v-for="(t, l) in menuItems" v-bind:to="l">{{t}}</router-link>
  </div>
  <div id="logo" class="centered">
    <i ><i ><i ><i ><i ><i ><i ><i >
    </i></i></i></i></i></i></i></i>
  </div>
  <h1 class="great-fonted2 centered-text orange centered">Uni Technologies</h1>
  <router-view/>
</template>

<style scoped>
.centered-text {
  text-align: center;
}
.great-fonted2 {
  font-family: RobotoBold,serif;
}
.orange {
  color: #ff970e;
  font-size: 250%;
}
#logo {
  font-size: 10px;
  height: 20em;
  width: 20em;
  border-radius: 10em;
  position: relative;
  --triangle-size: 4em;
  --triangle-skew: 15deg;
  transition: 2s;
  overflow: hidden;
}
#logo:hover {
  transform: rotate(45deg);
  --triangle-skew: 45deg;
}
#logo i {
  position: absolute;
  transform: rotate(-45deg);
  top: 5.5em;
  left: .5em;
  transition: 2s;
}
#logo i::before {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border: var(--triangle-size) solid #ff970e;
  border-right: var(--triangle-size) solid transparent;
  border-bottom: var(--triangle-size) solid transparent;
  transform: skew(calc(var(--triangle-skew)*-1), var(--triangle-skew));
  transition: 2s;
}
#logo > i {
  top: 9.5em;
  left: -0.5em;
}

@font-face {
  font-family: 'Roboto';
  src: url('./assets/RobotoFont/Roboto-Light.ttf');
}
.great-fonted {
  color: white;
  font-family: Roboto,serif;
}
.tab-control {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.centered {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.tab-control a{
  font-family: Roboto, sans-serif;
  text-decoration: none;
  padding: 10px 20px;
  color: #ffffff;
  margin: 0 10px;
}

@keyframes tab-animation {
  0% {
    transform: translateY(1%) rotateX(1deg);
  }
  100% {
    transform: translateY(20%) rotateX(20deg);
  }
}

.tab-control a:hover {
  animation-name: tab-animation;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
</style>
