<template>
  <section>
    <div class="container">
      <h1 class="white">
        <span class="strong-pink">Status</span>
        do Pedido
      </h1>
    </div>
  </section>
</template>
<style scoped lang="scss">
section {
  width: 100%;
  height: 5rem;
  grid-column: 1 / span 2;

  .container {
    display: flex;
    align-items: center;
    margin: auto;
    h1 {
      margin-left: 0.5em;
      font-size: 4em;
    }
  }
}

@media screen and (max-width: 768px) {
  section {
    height: 10vh;
    .container {
      h1 {
        margin-left: 0;
        text-align: center;
      }
    }
  }
}
</style>
