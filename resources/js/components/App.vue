<template>
  <div>
      <!-- Navigation -->
      <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div class="container">
          <router-link :to="{ name: 'home' }" class="navbar-brand js-scroll-trigger">Single Page Application</router-link>
          <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">

              <li class="nav-item mx-0 mx-lg-1">
              <router-link :to="{ name: 'portfolio' }" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Portfolio</router-link></li>

              <li class="nav-item mx-0 mx-lg-1">
              <router-link :to="{ name: 'about' }" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">About</router-link></li>

              <li class="nav-item mx-0 mx-lg-1">
              <router-link :to="{ name: 'contact' }" class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">Contact</router-link></li>

            </ul>
          </div>
        </div>
      </nav>

      <main>
        <router-view></router-view>
      </main>

  </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>