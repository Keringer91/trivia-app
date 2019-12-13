<template>
  <div id="app" class="d-flex flex-column h-100">
    <Header/>
      <main role="main" class="flex-shrink-0">
       <router-view></router-view>
      </main>
  </div>
</template>

<script>
import Header from './components/layouts/Header'

export default {
  name: 'app',
  components: {
    Header,
  }
}
</script>

<style>

</style>
