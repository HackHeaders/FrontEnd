<script setup></script>

<template>
  <section>
    <img
      src="../../../public/imgs/TruckHome.webp"
      alt="Background Truck"
      class="background-image"
      loading="lazy"
    />
    <article>
      <div>
        <h1>
          Lhe Entregamos
          <span class="strong-pink">A Solução.</span>
        </h1>
        <p>
          Entregamos soluções claras e objetivas para os seus desafios. Nossa missão é oferecer
          resultados que atendam às suas expectativas, com serviços de alta qualidade e comunicação
          eficiente, garantindo que cada detalhe seja pensado para o seu sucesso.
        </p>
      </div>
    </article>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/main.scss';

section {
  position: relative;
  width: 100%;
  height: 40rem;
  display: flex;
  justify-content: center;
  border-bottom: 3.5px solid #fc1d87;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

article {
  width: 80%;
  margin: auto;
  z-index: 1;

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 30%;

    h1 {
      font-size: 80px;
      font-weight: 700;
      color: white;
    }

    p {
      font-size: 16px;
      color: white;
    }
  }
}

@media screen and (max-width: 1024px) {
  article {
    width: 80%;

    div {
      width: 100%;
      margin: auto;

      h1 {
        font-size: 50px;
      }

      p {
        font-size: 16px;
      }
    }
  }
}

@media screen and (max-width: 450px) {
  article {
    width: 100%;

    div {
      width: 70%;
      margin: auto;

      h1 {
        font-size: 40px;
      }

      p {
        font-size: 16px;
      }
    }
  }
}
</style>
