<script setup>
import router from '@/router'
</script>
<template>
  <div class="login-btns">
    <button class="logIn-btn" @click="router.push('/login')">Log In</button>
    <span></span>
    <button class="signIn-btn" @click="router.push('/client/signin')">Sing In</button>
  </div>
</template>
<style scoped lang="scss">
@use '../../assets/main';
.login-btns {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 100px;
    height: 40px;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    margin: 0 10px;
  }
  span {
    height: 40px;
    width: 1px;
    background-color: main.$standard-pink;
  }
}
.logIn-btn {
  background-color: main.$standard-black;
  color: main.$standard-pink;
  border: 2px solid main.$standard-pink;
  transition: 0.3s ease-in-out;
}
.logIn-btn:hover {
  background-color: main.$standard-pink;
  color: main.$standard-black;
}
.signIn-btn {
  background-color: main.$standard-pink;
  color: main.$standard-black;
  border: 2px solid main.$standard-black;
  transition: 0.3s ease-in-out;
}
.signIn-btn:hover {
  background-color: main.$standard-black;
  color: main.$standard-pink;
}
</style>
