<template>
  <v-app>
    <v-container>
      <div class="mainshow">
        <Nuxt />
        <manin-footer></manin-footer>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import ManinFooter from "../components/ManinFooter.vue";
export default {
  components: { ManinFooter },
  data() {},
};
</script>
