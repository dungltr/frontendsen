<template>
  <div id="app">
    <b-card>
      <Form />
    </b-card>
  </div>
</template>
<script>

// import Header from './components/Header.vue'
import Form from '@/components/covid/form.vue'

export default {
  name: 'App',
  components: {
    Form
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
