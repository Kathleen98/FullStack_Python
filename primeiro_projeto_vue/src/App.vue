<script setup>
  const nome = "Kethleen";
  const meuObjeto = {
    nome: "Kathleen",
    desenhoFavorito: "One Piece"
  }

  function oi(nome){
    return `${nome} diz oi`
  }

  const zorinho = "https://i.pinimg.com/564x/3e/fe/40/3efe40fd87a857985f3aa9d3f13b9c1f.jpg"
</script>

<template>
  <h1>{{oi()}}</h1>
  <img :src="zorinho"/>
</template>

<style scoped>
</style>
