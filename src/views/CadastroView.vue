<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
import CadastroFormComponent from "@/components/CadastroFormComponent.vue";
</script>

<template>
  <div class="layout">
    <main class="main">
      <CadastroFormComponent />
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
  gap: 0.5rem;
}
</style>
