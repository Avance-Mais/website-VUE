<template>
  <div class="post-recipiente">
    <div class="cabeca">
      <div class="cabeca-titulo">
        <h2 class="name">Paulo</h2>
        <h4 class="categoria">Uma categoria</h4>
      </div>
      <h1 class="titulo">Um titulo para postagem</h1>
    </div>
    <div class="corpo">
      <p class="texto-post">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ipsum eros,
        mattis quis lorem ut, blandit sollicitudin ex. Cras rutrum ipsum non
        efficitur facilisis. Integer finibus hendrerit bibendum. Quisque posuere
        sagittis dapibus. Vestibulum vel urna dignissim, fermentum elit eget,
        placerat sapien. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Etiam porttitor dignissim sollicitudin. Ut a risus congue,
        scelerisque risus nec, vestibulum lacus. In luctus tortor nec cursus
        efficitur. Sed tellus lectus, commodo vel ex vitae, rutrum eleifend
        nunc. Aliquam erat volutpat. Praesent semper ante nunc, sed mollis dui
        ultricies eget. Sed egestas tincidunt neque nec pulvinar. Donec non
        metus augue. Cras placerat turpis non magna placerat, a viverra velit
        eleifend. Vivamus vel lacus sit amet purus facilisis cursus at sit amet
        dolor. Mauris nec urna sit amet mauris ultricies ultrices. Nulla in
        porttitor libero, ac elementum lacus. Proin ultricies, sapien in ornare
        fringilla, lorem urna vulputate augue, non fringilla elit quam ac felis.
        Nunc porta neque a elementum posuere. Aliquam fermentum eu sem sit amet
        fermentum. In congue blandit elit, sit amet molestie sapien. Cras
        pharetra tortor elit, et hendrerit purus sagittis varius.
      </p>
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

.name {
  color: var(--cor-escura);
}

.categoria {
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
