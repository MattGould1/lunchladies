<template>
  <div class="admin">
    <md-bottom-bar>
      <md-bottom-bar-item md-icon="dashboard">Products</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="assessment" md-active>Transactions</md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template> 

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
