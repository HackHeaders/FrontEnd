<script setup>
import { ref, computed } from 'vue'
import Account from 'vue-material-design-icons/Account.vue'
import Tire from 'vue-material-design-icons/Tire.vue'
import CardAccountDetails from 'vue-material-design-icons/CardAccountDetails.vue'
import ListClients from './ListPeoples/ListClients.vue'
import ListDrivers from './ListPeoples/ListDrivers.vue'
import ListEmployee from './ListPeoples/ListEmployee.vue'

const selectedIndex = ref(0)

const handleSelect = (index) => {
  selectedIndex.value = index
}

const selectedTitle = computed(() => {
  switch (selectedIndex.value) {
    case 0:
      return 'Clientes:'
    case 1:
      return 'Motoristas:'
    case 2:
      return 'Funcionarios:'
    default:
      return 'Pessoas:'
  }
})

const selectedColor = computed(() => {
  switch (selectedIndex.value) {
    case 0:
      return '#73FBFD'
    case 1:
      return '#FC1D87'
    case 2:
      return '#DA4819'
    default:
      return '#ffffff'
  }
})
</script>

<template>
  <section>
    <div class="container">
      <article class="managePeoples">
        <div class="titlePeoples">
          <h2>Gerenciar Pessoas:</h2>
        </div>
        <div class="ulPeoples">
          <div
            class="line"
            :class="{ selected: selectedIndex === 0 }"
            @click="handleSelect(0)"
            style="color: #73fbfd"
          >
            <Account />
            Clientes
          </div>
          <div
            class="line"
            :class="{ selected: selectedIndex === 1 }"
            @click="handleSelect(1)"
            style="color: #fc1d87"
          >
            <Tire />
            Motoristas
          </div>
          <div
            class="line"
            :class="{ selected: selectedIndex === 2 }"
            @click="handleSelect(2)"
            style="color: #da4819"
          >
            <CardAccountDetails />
            Funcionarios
          </div>
        </div>
      </article>
      <article class="listPeoples">
        <div class="titleManage">
          <h2>Gerenciar</h2>
          <h2 :style="{ color: selectedColor }">{{ selectedTitle }}</h2>
        </div>
        <Transition name="fade" mode="out-in">
          <component
            :is="
              selectedIndex === 0 ? ListClients : selectedIndex === 1 ? ListDrivers : ListEmployee
            "
            :key="selectedIndex"
          />
        </Transition>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/main';
/* Estilos principais */
section {
  width: 100%;
}

.container {
  width: 82vw;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.managePeoples {
  background-color: #070707;
  padding: 1rem;
  border: 1px solid #fff;
  border-radius: 5px;
}

.ulPeoples {
  justify-content: space-between;
  display: flex;
  padding: 1rem 0;
  flex-direction: column;
}

.listPeoples {
  width: 100%;
  background-color: #070707;
  border: 1px solid #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 2rem;
}

.titleManage > h2 {
  font-size: 2rem;
  display: flex;
}

.titleManage {
  display: flex;
  gap: 1rem;
}

.titlePeoples {
  font-size: 1.5rem;
}

.ulPeoples > .line {
  background-color: transparent;
  color: #fff;
  padding: 1rem;
  text-align: left;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  border-bottom: none;
}

.ulPeoples > .line.selected {
  border-bottom: 2px solid;
}

span {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Estilos de transição */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsividade */
@media screen and (max-width: 1150px) {
  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .managePeoples {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .titleManage > h2 {
    font-size: 25px;
    display: flex;
  }

  .titleManage {
    display: flex;
    gap: 1rem;
  }

  .ulPeoples > .line {
    display: flex;
    justify-content: center;
  }
}
</style>
