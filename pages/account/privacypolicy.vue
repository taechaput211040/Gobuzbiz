<template>
  <div v-if="Policy" class="container">
    <div v-for="(item, i) in Policy" :key="i" class="my-5">
      <h3 class="font-bold">{{ item.Title }}</h3>
      <div class="ma-3 font-bold" v-if="item.Description">
     {{ item.Description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Policy: {},
    };
  },
  async mounted() {
    try {
      let { data } = await this.$store.dispatch("getPolicy");
      this.Policy = data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style></style>
