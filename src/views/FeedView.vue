<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import PostComponent from "@/components/PostComponent.vue";
import { onMounted, ref } from "vue";
import axios from "axios";

const posts = ref([]);
const usuarios = ref([]);

onMounted(() => {
  axios
    .get("/posts")
    .then((resposta) => {
      posts.value = resposta.data.posts;
      usuarios.value = resposta.data.usuarios;
    })
    .catch((erro) => {
      console.error("Erro ao obter dados da api:", erro);
    });
});
</script>

<template>
  <div class="layout">
    <header>
      <HeaderComponent />
    </header>
    <main class="main">
      <div v-if="posts.length > 0">
        <div v-for="(post, index) in posts" :key="post.titulo">
          <PostComponent
            :nome="usuarios[index]?.nome"
            :tema="post.tema"
            :titulo="post.titulo"
            :descricao="post.descricao"
            :link="post.link"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

@media (max-width: 800px) {
  .main {
    gap: 5rem;
  }
}
</style>
