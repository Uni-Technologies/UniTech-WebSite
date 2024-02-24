<script>
import Project from '../Project.vue'
export default {
  components: {Project},
  data() {
    return {
      projects: [
        { name: 'Quant.cs', icon: 'https://cdn.discordapp.com/attachments/1004365422767902771/1210885297164787762/QuantLogo.png?ex=65ec2fd0&is=65d9bad0&hm=0f756902e5d06c2b775969c3d649e5bc19692770cc9faf5fc01e1977bc1738b7&', description: 'Quant.cs - Это библиотека, позволяющая создавать легко расширяемые CLI приложения, по типу UniShell, используя C#', link: 'https://github.com/IstsPrograms/Quant.cs'},
        { name: 'Quant Vanilla', icon: 'https://cdn.discordapp.com/attachments/1004365422767902771/1210885297450254336/quantv_icon.png?ex=65ec2fd0&is=65d9bad0&hm=dcd882e9fe8fe58b969b24eaca7900398a5aee0be542eb6aa4506dad495e02c9&', description: 'Quant Vanilla - Это \'Эмулятор\' командной строки, использующий Quant.cs, C# и Avalonia', link: 'https://github.com/Uni-Technologies/QuantVanilla'},
        { name: 'Pulse', icon: 'https://cdn.discordapp.com/attachments/1004365422767902771/1210885306027610142/pulse_icon.png?ex=65ec2fd2&is=65d9bad2&hm=6a845c899917500ab3652aff9dfff50d36e0ae0cb2a9e7c0b07e8a018995ff03&', description: 'Pulse - Это своеобразный веб-фреймворк, нацеленный на упрощённое создание примитивных веб-сайтов с использованием C#', link: 'NOT AVAILABLE'},
        { name: 'AVM/ALT Editor', icon: 'https://cdn.discordapp.com/attachments/1004365422767902771/1210885305532420106/avmedit_icon.png?ex=65ec2fd2&is=65d9bad2&hm=caade71c10510859d1ad9e2b74d050ec82627a9a8bbd17a653807b16587da9b7&', description: 'AVM/ALT Editor - это редактор ALT кода, написан на C# с использованием Avalonia', link: 'PRIVATE'},
        { name: 'UniShell', icon: 'https://cdn.discordapp.com/attachments/1004365422767902771/1210885301338243082/unishell_icon.png?ex=65ec2fd1&is=65d9bad1&hm=b2ce0864a30192923e6a6a95ab118f8a90c63b296cf8a64a4f2c3686e5590f22&', description: 'UniShell - это CLI приложение, написанное на C#/F#, имитирует командную строку', link: 'https://github.com/IstsPrograms/UniShell'},
        { name: 'AVM', icon: 'https://cdn.discordapp.com/attachments/1004365422767902771/1210885304928571473/avm_icon.png?ex=65ec2fd1&is=65d9bad1&hm=d7e2185d7d2b70cd95c5946873e41284099794bc5e522724e63abbda10dce3cf&', description: 'AVM (Alternativity VM) - это своеобразная виртуальная машина, имеющая определённые инструкции и способная выполнять ALT код под любой средой из-за того, что Rust, на котором написана виртуальная машина, компилируется нативно', link: 'https://github.com/Uni-Technologies/avm'},
        { name: 'Test Console', icon: 'https://cdn.discordapp.com/attachments/1004365422767902771/1210885297848721428/tc_icon.png?ex=65ec2fd0&is=65d9bad0&hm=a077dddce76b0779be512c01dd378221b382bd47f6276cac56d5c5a807dbca8b&', description: 'Test Console - это CLI приложение, имитирующее командную строку, но с более красивым интерфейсом. Использует Python 3.12', link: 'https://github.com/IstsPrograms/Test-Console'}
      ]
    }
  }
}
</script>

<template>
  <div class="panel centered">
    <h1 class="fixed-centered centered-text cool great-fonted">Наши проекты</h1>
    <Project class="fixed-centered" v-for="(el) in projects" :name="el.name" :description="el.description" :icon="el.icon" :link="el.link"/>
  </div>
</template>

<style scoped>
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
.cool {
  color: #9ca7ff;
  font-size: 150%;
  margin: 1%;
}
.panel {
  display: block;
  z-index: 1;
  margin: 20px;
  background-color: rgba(167, 167, 167, 0.09); /* полупрозрачный белый цвет */
  border-radius: 10px; /* радиус скругления углов */
  padding: 20px;
  box-shadow: 0 2px 4px rgba(76, 76, 76, 0.88); /* тень для панели */
}

.centered {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.fixed-centered {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
.centered-text {
  text-align: center;
}
</style>