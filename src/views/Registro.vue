<template>
  <div class="registro">
    <h2>✍️ Registrar Nuevo Libro</h2>
    <form @submit.prevent="guardarLibro">
      <div>
        <label>Título: </label>
        <input v-model="nuevoLibro.titulo" type="text" placeholder="Ej: Don Quijote" required>
      </div>
      <div>
        <label>Autor: </label>
        <input v-model="nuevoLibro.autor" type="text" placeholder="Ej: Cervantes" required>
      </div>
      <div>
        <label>Categoría: </label>
        <select v-model="nuevoLibro.categoria">
          <option value="Ficción">Ficción</option>
          <option value="Educación">Educación</option>
          <option value="Aventura">Aventura</option>
        </select>
      </div>
      <button type="submit">Añadir al Catálogo</button>
    </form>

    <div v-if="nuevoLibro.titulo" class="preview">
      <h3>Vista previa:</h3>
      <p><strong>{{ nuevoLibro.titulo }}</strong> - {{ nuevoLibro.autor }} ({{ nuevoLibro.categoria }})</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoLibro: { titulo: '', autor: '', categoria: 'Ficción' }
    }
  },
  methods: {
   guardarLibro() {
  // 1. Obtener los libros que ya existan en la memoria o un array vacío
  const librosExistentes = JSON.parse(localStorage.getItem('libros') || '[]');
  
  // 2. Crea un ID único para el libro
  const nuevoConId = { ...this.nuevoLibro, id: Date.now() };
  
  // 3. Guardar en la lista y actualizamos la memoria del navegador
  librosExistentes.push(nuevoConId);
  localStorage.setItem('libros', JSON.stringify(librosExistentes));

  alert(`¡Libro "${this.nuevoLibro.titulo}" registrado!`);
  
  // 4. Limpiar formulario
  this.nuevoLibro = { titulo: '', autor: '', categoria: 'Ficción' };
  
  // 5.Mandamos al usuario al catálogo para que vea el libro
  this.$router.push('/');
}
  }
}
</script>

<style scoped>
.registro { max-width: 400px; margin: auto; text-align: left; }
form div { margin-bottom: 15px; }
input, select { width: 100%; padding: 8px; }
.preview { margin-top: 20px; padding: 10px; border: 1px dashed #42b983; background: #f0fff4; }
</style>