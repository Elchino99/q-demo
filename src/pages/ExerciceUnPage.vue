<template>
  <q-page padding>
    <div className="form q-mb-lg">
      <div className="row q-mb-md">
        <label>Nom:</label>
        <input v-autofocus type="text" v-model="name"
               :class="{'error': !nameValid()}">
        <label className="error" v-show="!nameValid()">
          Maximum 15 caractères
        </label>
      </div>
      <div className="row q-mb-md">
        <label>Age:</label>
        <input type="number" v-model="age"
               :class="{'error': !nameValid()}">
        <label className="error" v-show="!ageValid()">
          Veuillez entrer un âge compris entre 1 et 100
        </label>
      </div>
      <div className="row">
        <button @click="randomNameAge()">Générer une personne</button>
      </div>
    </div>
    <div v-if="nameValid () && ageValid()"  className="description q-mb-lg">
      <p>Mon nom est <b>{{ name }}</b> et j'ai <b>{{ age }}</b> ans.</p>
      <p>Dans 10 ans, j'aurai <b>{{futurAge}}</b> ans.</p>
      <p>Mon nom se compose de <b>{{name.length}}</b> caractères.</p>
      <p>Mon nom en majuscules est <b>{{ name.toUpperCase() }}</b>.</p>
    </div>
    <div  v-if="!nameValid () || !ageValid()" className="no-details">
      <p>Veuillez entrer un nom et un âge valide !</p>
    </div>
    <a>
      <button to="/ex2">test bouton</button>
    </a>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
const noms = [
  'Laville',
  'Smith',
  'Conor',
  'Kane',
  'Meyer',
  'Fritz',
  'Steiner',
  'Ortis',
  'Feune',
  'Frein',
  'Moine'
]

export default defineComponent({
  name: 'Exercie1Page',
  data () {
    return {
      name: '',
      age: '0'
    }
  },
  computed: {
    futurAge () {
      return parseInt(this.age) + 10
    }
  },
  methods: {
    nameValid () {
      if (this.name.length > 0 && this.name.length <= 15) {
        return true
      }
      return false
    },
    ageValid () {
      return this.age > 0 && this.age <= 100
    },
    randomNameAge () {
      this.name = noms[Math.floor(Math.random() * noms.length)]
      this.age = Math.floor(Math.random() * 100)
    }
  },
  mounted () {
    this.randomNameAge()
  },
  directives: {
    autofocus: {
      mounted (element) {
        element.focus()
      }
    }
  }
})
</script>

<style scoped>
.form {
  background: #eee;
  padding: 10px;
}

label {
  min-width: 70px;
}

label.error {
  font-size: 13px;
  color: red;
  margin-left: 5px;
  margin-top: 3px;
}

input {
  border: 1px solid #ccc;
}

input.error {
  border: 1px solid red;
  background: pink;
}

.description {
  background: antiquewhite;
  padding: 20px 20px 7px;
}

.no-details {
  background: lightcoral;
  padding: 20px 20px 7px;
}
</style>
