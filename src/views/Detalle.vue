<template>
  <div class="detalle" v-if="libro">
    <h2>Ficha del Libro</h2>
    <div class="card">
      <p><strong>ID:</strong> {{ id }}</p>
      <h3>Título: {{ libro.titulo }}</h3>
      <p><strong>Autor:</strong> {{ libro.autor }}</p>
      <p><strong>Categoría:</strong> {{ libro.categoria }}</p>
      <p><strong>Estado:</strong> Disponible en Editorial Nova</p>
    </div>
    <br>
    <router-link to="/">⬅️ Volver al Catálogo</router-link>
  </div>
  <div v-else>
    <p>Cargando información del libro...</p>
  </div>
</template>

<script>
export default {
  props: ['id'], // Recibe el ID desde el Router
  data() {
    return { libro: null }
  },
  created() {
    // Buscar en el localStorage el libro que coincida con el ID de la URL
    const libros = JSON.parse(localStorage.getItem('libros') || '[]');
    this.libro = libros.find(l => l.id == this.id);
  }
}
</script>

<style scoped>
.detalle { padding: 20px; }
.card { border: 2px solid #42b983; padding: 20px; display: inline-block; border-radius: 10px; text-align: left; }
</style>