<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Favorite Movies</router-link> |
      <router-link to="/create">Add Movie</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

html {
  background-color: #000;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #4272b9;
}

#nav a.router-link-exact-active {
  color: #fff;
}
</style>
