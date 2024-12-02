<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
  <div class="layout">
    <main class="main">
      <div class="titulo">
        <h1>Login</h1>
        <p>Avance+</p>
      </div>
      <form>
        <div class="label-input">
          <label for="email">E-mail</label>
          <input type="email" name="email" />
        </div>
        <div class="label-input">
          <label for="senha">Senha</label>
          <input type="password" name="senha" />
        </div>
        <input type="submit" class="submit" value="Entrar" />
      </form>
      <a href="#">Ainda não possui uma conta?</a>
    </main>
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>

<style scoped>
.titulo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

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

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}
</style>
