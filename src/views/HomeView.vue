<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import PostComponent from "@/components/PostComponent.vue";
import { onMounted, ref } from "vue";
import axios from "axios";

const posts = ref([]);

onMounted(() => {
  axios.get("/posts").then((resposta) => {
    posts.value = resposta.data;
  });
});
</script>

<template>
  <div class="layout">
    <header>
      <HeaderComponent />
    </header>
    <main class="main">
      <img
        src="@/assets/fotos/background-escolar.svg"
        alt="Banner com material escolar"
        class="banner"
      />
      <h3>Benefícios da Avance+</h3>
      <div class="card-beneficios">
        <p>Variedade</p>
        <p>Facilidade</p>
        <p>Gratuito</p>
      </div>
      <div v-if="posts.length > 0">
        <div v-for="post in posts" :key="post.id">
          <PostComponent
            :nome="post.idUsuario"
            :tema="post.tema"
            :titulo="post.titulo"
            :descricao="post.descricao"
            :link="post.link"
          />
        </div>
      </div>
    </main>
    <footer>
      <FooterComponent />
    </footer>
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

.banner {
  width: 80%;
}

.card-beneficios {
  display: flex;
  width: 80%;
  justify-content: space-around;
  padding: 2rem;
  color: var(--cor-clara);
  font-weight: bold;
  background-image: linear-gradient(
    to right,
    var(--cor-primaria),
    var(--cor-oposta)
  );
}

@media (max-width: 800px) {
  .main {
    gap: 5rem;
  }

  .banner {
    width: 100%;
  }
}
</style>
