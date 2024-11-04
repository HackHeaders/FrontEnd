<script setup>
import { useDriverStore } from '@/stores';

const driverStore = useDriverStore();


</script>

<template>
  <h2>Dados <span class="strong-pink">Pessoais</span></h2>
  <form @submit.prevent>
    <label for="">Nome</label>
    <input type="text" placeholder="Insira seu nome"  v-model="driverStore.state.driver.name" />
    <label for="">Email</label>
    <input type="email" placeholder="Insira seu email" v-model="driverStore.state.driver.email"/>
    <label for="">CPF</label>
    <input type="text" placeholder="Insira seu CPF" v-model="driverStore.state.driver.cpf"/>
    <label for="">Data de Nascimento</label>
    <input type="date" placeholder="Insira sua data de nascimento" v-model="driverStore.state.driver.date_birth"/>
    <label for="">Telefone</label>
    <input type="tel" placeholder="Insira seu telefone" v-model="driverStore.state.driver.telephone"/>
    <button @click="$emit('next')">Próximo</button>
  </form>
</template>

<style scoped lang="scss">
@use '../../../assets/main';
h2 {
  color: main.$standard-white;
  font-size: 50px;
  width: max-content;
  font-weight: 800;
  margin: 1rem auto;
  padding-left: 1rem;
  border-left: 2px solid main.$standard-pink;
  font-style: italic;
}
form {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem auto 4rem auto;
  label {
    color: main.$standard-white;
    width: 50%;
    font-size: 16px;
    font-weight: 800;
    margin: 0.5rem 0.5rem;
  }
  input {
    height: 3.25rem;
    border-radius: 1rem;
    border: 1px solid main.$standard-white;
    padding: 0 10px;
    color: main.$standard-white;
    background-color: main.$standard-black;
  }
  button {
    width: 100%;
    height: 3rem;
    border: none;
    border-radius: 0.5rem;
    color: main.$standard-white;
    background-color: main.$standard-pink;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    margin: 1rem 0;
    transition: 0.3s ease-in-out;
  }
}
button:hover {
  background-color: main.$standard-black;
  color: main.$standard-pink;
}
</style>
