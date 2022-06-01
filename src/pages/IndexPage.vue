<template>
  <q-page padding>
    <h1>liste des exercices</h1>
    <ul>
      <router-link to="/ex1">
      <li>Exercice 1 : donnée dynamique</li>
      </router-link>
      <router-link to="/ex2">
      <li>Exercice 2 : liste des courses</li>
      </router-link>
      <router-link to="/ex3">
      <li>Exercice 3 : le message</li>
      </router-link>
      <router-link to="/ex4">
      <li>Exercice 4 : CliGest - L'application pour gérer vos clients !</li>
      </router-link>
    </ul>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>

<style lang="scss">
ul {
  list-style: none;
}
h5 {
  /* $primary est une variable décalrer dans src/css/quasar.variables.sass */
  background-color: $primary;
  color: white;
}

.error {
  color: red;
  background-color: pink;
}
</style>
