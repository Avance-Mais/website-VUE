<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
  <div class="layout">
    <main class="main">
      <div class="titulo">
        <h1>Cadastro</h1>
        <p>Avance+</p>
      </div>
      <form>
        <div class="label-input">
          <label for="nomeCompleto">Nome Completo</label>
          <input type="text" name="nomeCompleto" />
        </div>
        <div class="label-input">
          <label for="email">E-mail</label>
          <input type="email" name="email" />
        </div>
        <div class="label-input">
          <label for="senha">Senha</label>
          <input type="password" name="senha" />
        </div>
        <div class="label-input">
          <label for="cSenha">Confirmar Senha</label>
          <input type="password" name="cSenha" />
        </div>
        <div class="label-input">
          <label for="professor">Você é um(a) professor(a)?</label>
          <div class="escolhaProfessor">
            <input type="radio" name="professor" />
            <p>Sim</p>
            <input type="radio" name="professor" />
            <p>Não</p>
          </div>
        </div>
        <input type="submit" class="submit" value="Cadastrar" />
      </form>
      <RouterLink :to="{ name: 'login' }" class="font-white">Ainda não possui uma conta?</RouterLink>
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

.titulo{
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.escolhaProfessor {
  display: flex;
  gap: 0.5rem;
}
</style>
