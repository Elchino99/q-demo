<template>
  <!-- q-page : composant page de Quasar avec marge intérieure -->
  <q-page padding>
    <!-- Two-way data binding avec v-model, lie l'input avec la donnée message -->
    <input v-model="message"
           @keyup.enter="alertMessage"
           @keyup.esc="clearMessage"
           v-autofocus
           ref="inputMessage"
           :class="{ 'error' : message.length > 5}"
    />
    <!-- Bouton qui au click appelle la méthode clearMessage() -->
    <button @click="clearMessage">Vider</button>
    <!-- {{ message }} Affiche le valeur de la donnée message du cmposant -->
    <h5 v-if="message.length"
        :style="error"
    >
      {{ message }}
    </h5>
    <h6 v-else>Pas de message ...</h6>

    <p>Majuscules : {{ messageUppercase }}</p>
  </q-page>
</template>

<script>
// Déclaration du composant Vue
export default {
  name: 'PageDemo',
  // Déclaration des données
  data () {
    return {
      // Déclaration de la donnée message
      message: "J'adore Vue.js !"
    }
  },
  // Déclaration des méthodes
  methods: {
    // Déclaration de la méthode clearMessage()
    clearMessage () {
      // Dans les méthodes, pour accéder aux données du composant,
      // il faut utiliser l'opérateur this
      this.message = ''
    },
    alertMessage (e) {
      alert(this.message)
    }
  },
  computed: {
    messageUppercase () {
      return this.message.toUpperCase()
    },
    error () {
      if (this.message.length > 5) {
        return {
          color: 'red',
          'background-color': 'pink'
        }
      }
      return false
    }
  },
  directives: {
    autofocus: {
      mounted (el) {
        el.focus()
      }
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted', this.$refs.inputMessage)
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  beforeUnmount () {
    console.log('beforeDestroy')
  },
  unmounted () {
    console.log('destroyed')
  }
}
</script>

<!-- Utilise le langage SCSS https://sass-lang.com/guide -->
<style lang="scss" scoped>
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
