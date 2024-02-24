<script>
import DevLog from '../DevLog.vue'
export default {
  components: {DevLog},
  data() {
    return {
      dev_logs: [
        {title:'Dev-лог #145', description: 'Весь проект был ПОЛНОСТЬЮ переписан, была переведена документация.', time: '23.02.2024', relatedProject: 'Quant.cs'},
        {title:'Dev-лог #170', description: 'Весь проект был ПОЛНОСТЬЮ переписан, была переведена документация.', time: '23.02.2024', relatedProject: 'Quant.cs'}
      ]
    }
  }
}
</script>

<template>
  <div class="panel">
    <p class="great-fonted colored">Uni Technologies - это, хоть и малая, но группа, энтузиастов, разрабатывающая различное ПО с открытым исходным кодом. За нами множество <a class="colored2" href="/projects">Проектов</a>.</p>
    <p class="great-fonted colored">Мы всегда рады новым идеям и людям, из-за чего именно <strong class="colored2">ТЫ</strong> можешь стать одним из нас. Для этого нужно написать нам на <strong class="colored2">Почту</strong> - unitechnologies0@gmail.com</p>
  </div>
  <h1 class="great-fonted colored2 dev-log-text"><strong>Dev-логи</strong></h1>
  <div class="panel">
    <div class="panel" v-if="dev_logs.length>0">
        <DevLog v-for="(el) in dev_logs" :title="el.title" :description="el.description" :time="el.time" :related-project="el.relatedProject"/>
    </div>
    <h1 class="great-fonted colored3" v-else>Пока что здесь пусто</h1>
  </div>
</template>

<style scoped>

.dev-log-text {
  margin: 20px;
}
@font-face {
  font-family: 'Roboto';
  src: url('../../assets/RobotoFont/Roboto-Light.ttf');
}
@font-face {
  font-family: 'RobotoBold';
  src: url('../../assets/RobotoFont/Roboto-Bold.ttf');
}
.great-fonted {
  font-family: Roboto,serif;
}
.colored2 {
  color: #7878ff;
}
.colored {
  color: #a4eafd;
}
.colored3 {
  color: #333333;
  font-style: italic;
  text-shadow: 2px 2px #1c1c1c;
}
.panel {
  z-index: 1;
  margin: 20px;
  background-color: rgba(167, 167, 167, 0.09); /* полупрозрачный белый цвет */
  border-radius: 10px; /* радиус скругления углов */
  padding: 20px;
  box-shadow: 0 2px 4px rgba(76, 76, 76, 0.88); /* тень для панели */
}
</style>
<script setup>
</script>