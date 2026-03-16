<template>
  <div class="catalogo">
    <h2>📚 Catálogo de Libros</h2>
    
    <input type="text" v-model="filtro" placeholder="Buscar por título o autor..." class="buscador">

    <p v-if="librosFiltrados.length === 0" class="mensaje-vacio">
      No se encontraron libros que coincidan con tu búsqueda.
    </p>

    <div class="lista-libros">
      <div v-for="(libro, index) in librosFiltrados" :key="index" class="tarjeta-libro">
        <h3>{{ libro.titulo }}</h3>
        <p><strong>Autor:</strong> {{ libro.autor }}</p>
        <p><strong>Categoría:</strong> {{ libro.categoria }}</p>
       <router-link :to="'/libro/' + libro.id" class="btn-detalle">🔍 Ver Detalle</router-link>

        <button @click="eliminarLibro(libro.id)" class="btn-eliminar">Eliminar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filtro: '',
      // LocalStorage al cargar el componente
      libros: JSON.parse(localStorage.getItem('libros') || '[]')
    }
  },
  computed: {
    librosFiltrados() {
      return this.libros.filter(libro => 
        libro.titulo.toLowerCase().includes(this.filtro.toLowerCase()) ||
        libro.autor.toLowerCase().includes(this.filtro.toLowerCase())
      );
    }
  },
  methods: {
    // MÉTODO DE ELIMINAR
    eliminarLibro(id) {
      if(confirm("¿Estás seguro de eliminar este libro?")) {
        // 1. Filtrr la lista local para quitar el libro con ese ID
        this.libros = this.libros.filter(l => l.id !== id);
        // 2. Actualizar el localStorage para cambio permanente
        localStorage.setItem('libros', JSON.stringify(this.libros));
      }
    }
  }
}
</script>

<style scoped>
.catalogo { padding: 20px; max-width: 800px; margin: auto; }
.buscador { width: 100%; padding: 10px; margin-bottom: 20px; }
.lista-libros { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px; }
.tarjeta-libro { border: 1px solid #ddd; padding: 15px; border-radius: 8px; text-align: left; background: #fff; }
.btn-detalle {
  display: inline-block;
  margin-right: 10px;
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
  border: 1px solid #42b983;
  padding: 5px 10px;
  border-radius: 4px;
}

.btn-detalle:hover {
  background-color: #42b983;
  color: white;
}
.btn-eliminar { background-color: #ff4d4d; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 4px; }
.mensaje-vacio { color: #888; font-style: italic; }
</style>