<script setup>
import { ref, watch } from 'vue'
import { useDriverStore } from '@/stores';
import { useCepStore } from '@/stores/address/cep';

const driverStore = useDriverStore();
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
    driverStore.state.driver.address.cep = cep.value;
    driverStore.state.driver.address.city = dados.value.cidade;
    driverStore.state.driver.address.state = dados.value.uf;
    driverStore.state.driver.address.neighborhood = dados.value.bairro;
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
  <h2>Endereço</h2>
  <form @submit.prevent>
    <label for="">Estado</label>
    <input type="text" placeholder="Insira seu estado" v-model="driverStore.state.driver.state"/>
    <label for="">Cidade</label>
    <input type="text" placeholder="Insira sua cidade" v-model="driverStore.state.driver.city"/>
    <label for="">CEP</label>
    <input type="text" placeholder="Insira seu CEP" v-model="driverStore.state.driver.cep"/>
    <label for="">Bairro</label>
    <input type="text" placeholder="Insira seu bairro" v-model="driverStore.state.driver.neighborhood"/>
    <label for="">Endereço</label>
    <input type="text" placeholder="Insira seu endereço" v-model="driverStore.state.driver.street"/>
    <label for="">Número</label>
    <input type="text" placeholder="Insira seu número" v-model="driverStore.state.driver.number"/>
    <label for="">Complemento</label>
    <input type="text" placeholder="Insira um complemento" v-model="driverStore.state.driver.complement"/>
    <button class="normalColor" @click="driverStore.createDriver(driverStore.state.driver)" >Finalizar</button>
    <button class="invertColor" @click="$emit('back')">Voltar</button>
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
