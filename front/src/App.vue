<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
html, body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
*{
  box-sizing: border-box!important;
}

</style>
