<script setup>
import { RouterLink, RouterView } from "vue-router";

const abrirMenu = () => {
  const menu = document.getElementById("menu");
  menu.classList.add("aberto");
  menu.classList.remove("fechado");
};

const fecharMenu = () => {
  const menu = document.getElementById("menu");
  menu.classList.remove("aberto");
  menu.classList.add("fechado");
};
</script>

<template>
  <header>
    <div class="titulo-header">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-book-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"
        />
      </svg>
      <RouterLink :to="{ name: 'home' }" class="font-white">Avance+</RouterLink>
    </div>
    <div class="barra-pesquisa">
      <input type="text" />
    </div>
    <div class="items-header">
      <ul>
        <li>Feed</li>
        <li>Publicar</li>
        <li>Perfil</li>
      </ul>
    </div>
    <div class="item-menu-header">
      <ul>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
            @click="abrirMenu"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </li>
      </ul>
    </div>
    <div class="menu fechado" id="menu">
      <ul class="items-menu-mobile">
        <li class="item-border">Início</li>
        <li class="item-border">Feed</li>
        <li class="item-border">Publicar</li>
        <li class="item-border">Perfil</li>
      </ul>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="currentColor"
        class="bi bi-x-lg topo-fechar"
        viewBox="0 0 16 16"
        @click="fecharMenu"
      >
        <path
          d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
        />
      </svg>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: var(--cor-escura);
  width: 100vw;
  color: var(--cor-clara);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.titulo-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.font-white {
  color: var(--cor-clara);
}

.barra-pesquisa {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
}

.barra-pesquisa > input {
  padding: 0.5rem;
  width: 50%;
  border-radius: 50px;
  border: 0;
}

li{
    color: var(--cor-clara);
    cursor: pointer;
}

li:hover{
    color: var(--cor-primaria);
}

.items-header > ul {
  display: flex;
  gap: 1rem;
}

.item-menu-header > ul > li {
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-menu-header {
  display: none;
}

.menu {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--cor-escura);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu > ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.fechado {
  display: none;
}

.aberto {
  display: flex;
}

.items-menu-mobile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.item-border{
  border-bottom: var(--cor-clara) 1px solid;
  width: 100%;
  text-align: center;
}

.topo-fechar {
  position: absolute;
  top: 0;
  right: 0;
  margin: 2rem;
}

@media (max-width: 800px) {
  .items-header > ul {
    display: none;
  }

  .barra-pesquisa > input {
    width: 80%;
  }

  .item-menu-header {
    display: flex;
  }
}
</style>
