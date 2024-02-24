<script>
import Project from '../Project.vue'
export default {
  components: {Project},
  data() {
    return {
      projects: [
        {name: 'Quant.cs', icon: 'assets/Icons/QuantLogo.png', description: 'Quant.cs - Это библиотека, позволяющая создавать легко расширяемые CLI приложения, по типу UniShell, используя C#', link: 'https://github.com/IstsPrograms/Quant.cs'},
        {name: 'Quant Vanilla', icon: 'assets/Icons/quantv_icon.png', description: 'Quant Vanilla - Это \'Эмулятор\' командной строки, использующий Quant.cs, C# и Avalonia', link: 'https://github.com/Uni-Technologies/QuantVanilla'},
        {name: 'Pulse', icon: 'assets/Icons/pulse_icon.png', description: 'Pulse - Это своеобразный веб-фреймворк, нацеленный на упрощённое создание примитивных веб-сайтов с использованием C#', link: 'NOT AVAILABLE'},
        {name: 'AVM/ALT Editor', icon: 'assets/Icons/avmedit_icon.png', description: 'AVM/ALT Editor - это редактор ALT кода, написан на C# с использованием Avalonia', link: 'PRIVATE'},
        {name: 'UniShell', icon: 'assets/Icons/unishell_icon.png', description: 'UniShell - это CLI приложение, написанное на C#/F#, имитирует командную строку', link: 'https://github.com/IstsPrograms/UniShell'},
        {name: 'AVM', icon: 'assets/Icons/avm_icon.png', description: 'AVM (Alternativity VM) - это своеобразная виртуальная машина, имеющая определённые инструкции и способная выполнять ALT код под любой средой из-за того, что Rust, на котором написана виртуальная машина, компилируется нативно', link: 'https://github.com/Uni-Technologies/avm'},
        {name: 'Test Console', icon: 'assets/Icons/tc_icon.png', description: 'Test Console - это CLI приложение, имитирующее командную строку, но с более красивым интерфейсом. Использует Python 3.12', link: 'https://github.com/IstsPrograms/Test-Console'}
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