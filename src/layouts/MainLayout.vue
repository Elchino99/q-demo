<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu Exercices :
        </q-item-label>
        <q-item
          v-for="lien of liens"
          :key="lien.url"
          :to="lien.url"
          clickable
          v-ripple
          active
          exact
        >
          <q-item-section avatar>
            <q-icon :name="lien.icone" />
          </q-item-section>

          <q-item-section>{{ lien.nom }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  data () {
    return {
      liens: [{
        nom: 'Accueil',
        url: '/',
        icone: 'home'
      },
      {
        nom: 'Exercice 1',
        url: '/ex1',
        icone: 'face'
      },
      {
        nom: 'Exercice 2',
        url: '/ex2',
        icone: 'fastfood'
      },
      {
        nom: 'Exercice 3',
        url: '/ex3',
        icone: 'build'
      }
      ]
    }
  },
  components: {
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
