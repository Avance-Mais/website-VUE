<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import PostComponent from "@/components/PostComponent.vue";
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
      <PostComponent />
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
