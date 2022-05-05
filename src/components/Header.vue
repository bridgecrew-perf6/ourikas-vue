<template>
<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"> -->
<div class="container">

  <nav class="navbar mb-6" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu is-centered">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">
          Home
        </router-link>

        <router-link to="/companies" class="navbar-item">
          Lista de empresas
        </router-link>
        
        <router-link to="/about" class="navbar-item">
          Ourikas Vue
        </router-link>
      </div>


      <!-- <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div> -->
    </div>
  </nav>
  <router-view />

</div>
</template>

<style scoped>
.navbar {
  display: flex;
  align-content: center;
  justify-content: center;
}

.navbar-menu {
    flex-grow: initial!important;
    flex-shrink: initial!important;
}
</style>

<script>
export default {
    name: 'Header',
}
</script>