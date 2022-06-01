<template>
  <div class="card shadow-1">
    <img :src="passeplat.image" width="198" height="180">
    <div class="card-content">
      <h1 class="text-primary">{{ passeplat.nom }}</h1>
      <p>{{ passeplat.description }}</p>
      <p>
        <small>
          <b>Note:</b>
        </small>
        <b class="text-primary">
          {{ passeplat.note }}/5
        </b>
      </p>
      <q-btn @click="$emit('supprimer', passeplat.id)"
             class="full-width q-ma-md"
             color="secondary"
             icon="delete"
             label="Supprimer"></q-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    passeplat: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  flex-basis: 210px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.card img {
  max-width: 100%;
}
.card-content {
  padding: 0 10px;
}
h1 {
  font-size: 23px;
}
p {
  font-size: 14px;
}
</style>
