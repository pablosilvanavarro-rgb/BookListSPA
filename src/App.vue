<template>
  <div id="app">
    <header>
      <h1>📚 BookList - Editorial Nova</h1>
      <nav>
        <router-link to="/">Catálogo</router-link> |
        <router-link to="/nuevo">Registrar Libro</router-link>
      </nav>
    </header>
    <hr />
    <router-view />
  </div>
</template>

<style>
#app { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; text-align: center; color: #2c3e50; }
nav { padding: 20px; }
nav a { font-weight: bold; color: #2c3e50; text-decoration: none; margin: 0 15px; padding: 5px 10px; }
nav a.router-link-exact-active { color: #42b983; border-bottom: 2px solid #42b983; }
header { background-color: #f8f9fa; padding: 10px; }
</style>