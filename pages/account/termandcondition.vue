<template>
  <div v-if="termandcondition" class="container">
    <div v-for="(item, i) in termandcondition" :key="i" class="my-5">
      <h3 class="font-bold">{{ item.Title }}</h3>
      <div class="ma-3 font-bold" v-if="item.Description">
        <pre class="fixedstyle"> {{ item.Description }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      termandcondition: {},
    };
  },
  async mounted() {
    try {
      let { data } = await this.$store.dispatch("getTermandcondition");
      this.termandcondition = data.Data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style></style>
