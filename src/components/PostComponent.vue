<script setup>
const props = defineProps({
  nome: String,
  tema: String,
  titulo: String,
  descricao: String,
  link: String,
});
</script>

<template>
  <div class="post-recipiente">
    <div class="cabeca">
      <div class="cabeca-titulo">
        <h2 class="nome">{{ props.nome }}</h2>
        <h4 class="tema">{{ props.tema }}</h4>
      </div>
      <h1 class="titulo">{{ props.titulo }}</h1>
    </div>
    <div class="corpo">
      <p class="descricao">
        {{ props.descricao }}
      </p>
      <a :href="props.link"> {{ props.link }}</a>
    </div>
  </div>
</template>

<style scoped>
.post-recipiente {
  border: solid var(--cor-escura) 1px;
  background-color: #fafafa;
  max-width: 80vh;
  margin-top: 35px;
}

.cabeca-titulo {
  margin-top: 15px;
  margin-left: 20px;
}

.nome {
  color: var(--cor-escura);
}

.tema {
  color: var(--cor-primaria);
}

.titulo {
  color: var(--cor-escura);
  text-align: center;
}

.corpo {
  padding: 20px;
}
</style>
