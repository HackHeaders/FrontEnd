<script setup>
import { ref, watch } from 'vue'
import { useClientStore } from '@/stores';
import { useCepStore } from '@/stores/address/cep';

const clientStore = useClientStore();
const cep = ref('');
const cepStore = useCepStore();
const dados = ref('');
const searchCep = async () => {
    try {
        await cepStore.getEndereco(cep.value);
        dados.value = cepStore.address;
    } catch (error) {
        console.log(error);
    }
}

const clear = () => {
  cep.value = '';
}
watch(cep, async() => {
  if (cep.value.length == 8) {
    await searchCep();
    console.log(dados.value)
    clientStore.state.client.address.cep = cep.value;
    clientStore.state.client.address.city = dados.value.cidade;
    clientStore.state.client.address.state = dados.value.uf;
    clientStore.state.client.address.neighborhood = dados.value.bairro;
}
}
)
function sendData(data){
    console.log(data);
    alert('Dados enviados com sucesso');
    alert(JSON.stringify(data));
}
</script>
<template>
  <form @submit.prevent>
    <label for="">CEP</label>
    <input type="text" placeholder="Insira seu CEP" v-model="cep" />
    <label for="">Estado</label>
    <input type="text" placeholder="Insira seu estado" v-model="clientStore.state.client.address.state" disabled/>
    <label for="">Cidade</label>
    <input type="text" placeholder="Insira sua cidade" v-model="clientStore.state.client.address.city" disabled/>
    <label for="">Bairro</label>
    <input type="text" placeholder="Insira seu bairro" v-model="clientStore.state.client.address.neighborhood"/>
    <label for="">Rua</label>
    <input type="text" placeholder="Insira sua rua" v-model="clientStore.state.client.address.street"/>
    <label for="">Número</label>
    <input type="text" placeholder="Insira seu número" v-model="clientStore.state.client.address.number"/>
    <label for="">Complemento</label>
    <input type="text" placeholder="Insira um complemento" v-model="clientStore.state.client.address.complement" />
    <button class="normalColor" @click="clientStore.createClient(clientStore.state.client)">Finalizar</button>
    <button class="invertColor" @click="$emit('back')">Voltar</button>
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
  button {
    width: 100%;
    height: 3rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    margin: 1rem 0 0 0;
    transition: 0.3s ease-in-out;
  }
}
.normalColor {
  background-color: main.$standard-pink;
  color: main.$standard-white;
}
.invertColor {
  background-color: main.$standard-black;
  color: main.$standard-pink;
  border: 2px solid main.$standard-pink;
}
.normalColor:hover {
  background-color: main.$standard-black;
  color: main.$standard-pink;
}
.invertColor:hover {
  background-color: main.$standard-pink;
  color: main.$standard-white;
}
</style>
