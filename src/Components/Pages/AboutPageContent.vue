
<script>
import User from '../User.vue'
export default {
  components: {User},
  data() {
    return {
      users: [
        {name: 'Иcт', description: 'C#/Python разработчик, основной участник в разработке новых проектов', icon: 'https://cdn.discordapp.com/attachments/1004365422767902771/1210885250842894409/Ist.png?ex=65ec2fc4&is=65d9bac4&hm=0104f15236a0ea6fb6de7ff60ee8ee275f216078fdd69b6c4af50b32d7363f3f&'},
        {name: 'James Bond', description: 'JS/TS разработчик, специализируется по Web-сайтам и Discord ботам', icon: 'https://cdn.discordapp.com/attachments/1004365422767902771/1210885251270840370/generic.png?ex=65ec2fc5&is=65d9bac5&hm=a178e309bf4d5a6904fb32fcd010af151e00fc86d0883f6dbf27c61646f33988&'},
      ]
    }
  }
}
</script>

<template>
  <div class="panel">
    <span class="title">Мы - команда энтузиастов, разрабатывающая разного сорта ПО с открытым исходным кодом. Каждый наш проект по своему уникален, и мы всё ещё ищем людей в нашу, пока-что маленькую, команду. Для вступления можно написать нам на почту <p class="great-fonted2 left-text">unitechnologies0@gmail.com</p>Вот некоторые участники нашей команды:</span>
  </div>

  <div class="other-panel">
    <User v-for="(el) in users" :icon="el.icon" :name="el.name" :description="el.description"/>
  </div>

</template>

<style scoped>
.left-text {
  text-align: left;
}
@font-face {
  font-family: 'Roboto';
  src: url('../../assets/RobotoFont/Roboto-Light.ttf');
}
@font-face {
  font-family: 'RobotoBold';
  src: url('../../assets/RobotoFont/Roboto-Bold.ttf');
}
.great-fonted2 {
  font-family: RobotoBold,serif;
}
/* Для телефона */
@media only screen and (max-width: 600px) {
  .other-panel {
    z-index: 1;
    margin: 20px;
    background-color: rgba(167, 167, 167, 0.09); /* полупрозрачный белый цвет */
    border-radius: 10px; /* радиус скругления углов */
    padding: 20px;
    box-shadow: 0 2px 4px rgba(76, 76, 76, 0.88); /* тень для панели */
  }
}

/* Для ПК */
@media only screen and (min-width: 601px) {
  .other-panel {
    z-index: 1;
    width: 50%;
    margin: 20px;
    background-color: rgba(167, 167, 167, 0.09); /* полупрозрачный белый цвет */
    border-radius: 10px; /* радиус скругления углов */
    padding: 20px;
    box-shadow: 0 2px 4px rgba(76, 76, 76, 0.88); /* тень для панели */
  }
}

.panel {
  z-index: 1;
  margin: 20px;
  background-color: rgba(167, 167, 167, 0.09); /* полупрозрачный белый цвет */
  border-radius: 10px; /* радиус скругления углов */
  padding: 20px;
  box-shadow: 0 2px 4px rgba(76, 76, 76, 0.88); /* тень для панели */
}
.title {
  color: #d4daff;
  font-family: Roboto,serif;
  text-align: right;
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
}
</style>