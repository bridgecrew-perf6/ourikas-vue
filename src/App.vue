<template>
  <img alt="Ourikas logo" src="./assets/logo.png">
  
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/companies">Empresas</router-link>
    </li>
    <li>
      <router-link to="/about">sobre</router-link>
    </li>
  </ul>
  <router-view />
</template>

<script>


export default {
  name: 'App',
}
</script>
