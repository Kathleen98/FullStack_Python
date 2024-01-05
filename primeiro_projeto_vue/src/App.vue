<script setup>
import { reactive } from 'vue';

  const nome = "Kethleen";
  const meuObjeto = {
    nome: "Kathleen",
    desenhoFavorito: "One Piece"
  }

  function oi(nome){
    return `${nome} diz oi`
  }

  const goku = "https://i.pinimg.com/564x/e8/7c/7f/e87c7f7ad69bbe558c722ce24ae6c717.jpg";
  const logoBanner = "https://i.pinimg.com/564x/2e/de/f2/2edef2a7186b8e03cf5536565c156089.jpg";
  const esferas = "https://i.pinimg.com/564x/1b/2e/f4/1b2ef495d72955c2adc593382e6646f2.jpg";

  // let contador = 0; 
  const estado = reactive({
    contador:0,
    email: ''
  })

  function incrementar(){
    estado.contador ++;
  }

  function decrementar(){
    estado.contador --;
  }

  function alteraEmail(evento) {  
    estado.email = evento.target.value
  }

</script>

<template>
  <header>
    <div class="containerImgs">
      <img class="goku" :src="goku"/>
      <img class="logo" :src="logoBanner"/>
      <img class="esferas" :src="esferas" alt="">
    </div>
  </header>

  <br>
  <hr>

  {{ estado.contador }}

  <button @click="incrementar" type="button">+</button>
  <button @click="decrementar" type="button">-</button>

  <br>
  <br>
  <hr>

  {{ estado.email }}
  <input type="email" @keyup="alteraEmail">
  
</template>

<style scoped>

.containerImgs{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas: "goku logo" "goku esferas";
  justify-items: center;
}

.goku{
  grid-area: goku;
}

.logo{
    width: 50vw;
    height: 60vh;
    grid-area: logo;
}

.esferas{
  align-items: center;
  width: 10vw;
  grid-area: esferas;
}

</style>
