<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<template>
  <div class="layout">
    <header>
      <HeaderComponent />
    </header>
    <main class="main">
      <div class="recipiente">
        <form>
          <div class="label-input">
            <label for="titulo">Título</label>
            <input type="text" name="titulo-postagem" />
          </div>
          <div class="label-input">
            <label for="categoria">Categoria</label>
            <select name="categoria" id="">
              <option value="reforco">Reforço Escolar</option>
              <option value="enem">Enem</option>
              <option value="concurso">Concurso Públicos</option>
              <option value="linguagens">Linguagens</option>
              <option value="vestibulares">Vestibulares</option>
            </select>
          </div>
          <div class="label-input">
            <label for="postagem">Link</label>
            <input name="link" class="link"></link>
          </div>
          <a href="">Como posso publicar um vídeo?</a>
          <input type="submit" class="submit" value="Publicar" />
        </form>
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
  gap: 0.5rem;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
}

select {
  background-color: #ffffff;
}

a {
  display: block;
  text-align: center;
}
</style>
