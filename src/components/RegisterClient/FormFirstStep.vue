<script setup>
import { ref } from 'vue'
import { useClientStore } from '@/stores';

const clientStore = useClientStore();

</script>
<template>
  <form @submit.prevent>
    <label for="">Email</label>
    <input type="email" placeholder="Insira seu email" v-model="clientStore.state.client.email" />
    <label for="">Nome</label>
    <input type="text" placeholder="Insira seu nome" v-model="clientStore.state.client.name"/>
    <label for="">Username</label>
    <input type="text" placeholder="Insira seu username" v-model="clientStore.state.client.username"/>
    <label for="">Data de nascimento</label>
    <input type="date" v-model="clientStore.state.client.date_birth">
    <label for="">Telefone</label>
    <input type="tel" placeholder="Insira seu telefone" v-model="clientStore.state.client.telephone"/>
    <label for="">CPF ou CNPJ</label>
    <input type="text" placeholder="Insira seu CPF ou CNPJ" v-model="clientStore.state.client.cpf_cnpj" />
    <label for="">Tipo de pessoa</label>
    <select name="type" id="type" v-model="clientStore.state.client.type">
      <option value="f">Física</option>
      <option value="j">Jurídica</option>
    </select>
    <button @click="$emit('next')">Próximo</button>
  </form>
</template>
<style scoped lang="scss">
@use '../../assets/main';

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
  select{
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
