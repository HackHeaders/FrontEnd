<script setup>
import { onMounted, ref } from 'vue'
import ArrowExpandAll from 'vue-material-design-icons/ArrowExpandAll.vue'
import { useVehicleStore } from '@/stores'
const vehicleStore = useVehicleStore()

const statusOptions = [
  { value: 1, label: 'Rodando' },
  { value: 2, label: 'Em uso' },
  { value: 3, label: 'Parado' },
  { value: 4, label: 'Quebrado' }
]
const vehicles = ref([])

const statusProcessor = (statusId) => {
  return statusOptions.find((status) => status.value === statusId)?.label
}

onMounted(async () => {
  await vehicleStore.getVehicles()
  vehicles.value = vehicleStore.state.vehicles
})
</script>

<template>
  <article>
    <div class="title">
      <h2>Gerenciar Veiculos</h2>
      <button>
        <ArrowExpandAll />
      </button>
    </div>
    <div class="listVehicles">
      <div class="headerList">
        <p>ID:</p>
        <p>Modelo:</p>
        <p>Status:</p>
      </div>
      <div class="list">
        <div v-for="vehicle in vehicles" :key="vehicle.id">
          <p>{{ vehicle.id }}</p>
          <p>{{ vehicle.model }}</p>
          <p>{{ statusProcessor(vehicle?.status) || 'Desconhecido' }}</p>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
@use '@/assets/main';

article {
  width: 100%;
  background-color: #070707;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #c1c1c1;
  overflow: hidden;
  margin-bottom: 3rem;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.headerList {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  border-bottom: 1px solid #c1c1c1;
}

.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 300px;
  overflow-y: auto;
}

.list div {
  border-bottom: 1px solid #c1c1c1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  padding: 1rem 0;
  transition: 0.4s ease-in-out;
}

.list div:hover {
  background-color: #333;
  cursor: pointer;
}

li div:hover {
  background-color: #333;
}

button {
  border: 0;
  background-color: transparent;
  color: main.$standard-white;
}
</style>
