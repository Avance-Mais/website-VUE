<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const nome = ref("");
const email = ref("");
const senha = ref("");
const cSenha = ref("");
const tipo = ref("");
const senhasCoincidem = ref(true);
const carregando = ref(false);

const router = useRouter();

const enviarFormulario = async (evento) => {
  evento.preventDefault();

  if (senha.value !== cSenha.value) {
    senhasCoincidem.value = false;
    return;
  }

  senhasCoincidem.value = true;

  const formDados = {
    nome: nome.value,
    email: email.value,
    senha: senha.value,
    tipo: tipo.value,
  };

  carregando.value = true;

  try {
    const resposta = await axios.post("/usuarios", formDados);
    console.log("Cadastro realizado com sucesso", resposta.data); //retirar na versão final, usado para ver se o post funcionou
    router.push({ name: "login" });
  } catch (erro) {
    console.error("Erro ao cadastrar", erro);
  } finally {
    carregando.value = false;
  }
};
</script>

<template>
  <div class="form-div">
    <div class="titulo">
      <h1>Cadastro</h1>
      <p>Avance+</p>
    </div>
    <form @submit.prevent="enviarFormulario">
      <div class="label-input">
        <label for="nome">Nome Completo</label>
        <input
          type="text"
          name="nome"
          id="nome"
          v-model="nome"
          required
          :disabled="carregando"
        />
      </div>
      <div class="label-input">
        <label for="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          v-model="email"
          required
          :disabled="carregando"
        />
      </div>
      <div class="label-input">
        <label for="senha">Senha</label>
        <input
          type="password"
          name="senha"
          id="senha"
          v-model="senha"
          required
          :disabled="carregando"
        />
      </div>
      <div class="label-input">
        <label for="cSenha">Confirmar Senha</label>
        <input
          type="password"
          name="cSenha"
          id="cSenha"
          v-model="cSenha"
          required
          :disabled="carregando"
        />
      </div>
      <p v-if="!senhasCoincidem" class="mensagem-erro">
        As senhas não coincidem!
      </p>
      <div class="label-input">
        <label for="tipo">Você é um(a) Professor(a)?</label>
        <div class="escolha-tipo">
          <input
            type="radio"
            name="tipo"
            id="professor"
            v-model="tipo"
            value="Professor"
            required
            :disabled="carregando"
          />
          <label for="professor">Sim</label>
          <input
            type="radio"
            name="tipo"
            id="aluno"
            v-model="tipo"
            value="Aluno"
            :disabled="carregando"
          />
          <label for="aluno">Não</label>
        </div>
      </div>
      <div v-if="carregando" class="mensagem-carregando">
        <p>Processando o seu cadastro, por favor aguarde.</p>
      </div>
      <input
        type="submit"
        class="submit"
        value="Cadastrar"
        :disabled="carregando"
      />
    </form>
    <RouterLink :to="{ name: 'login' }" class="font-white"
      >Já possui uma conta?</RouterLink
    >
  </div>
</template>

<style scoped>
.titulo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-div {
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

.escolha-tipo {
  display: flex;
  gap: 0.5rem;
}

.mensagem-erro {
  color: red;
  font-size: 0.9rem;
}

.mensagem-carregando {
  color: #046edf;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
}

.submit:disabled {
  background-color: #ccc;
}
</style>
