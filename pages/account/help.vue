<template>
  <div v-if="helpdata" class="container">
    <div v-for="(item, i) in helpdata" :key="i" class="my-5">
      <h2 class="font-bold mb-1">{{ i + 1 }}.{{ item.Category }}</h2>
      <div class="font-bold mx-2" v-if="item.SubCateGory">
        <div v-for="(SubCateGory, j) in item.SubCateGory" :key="j">
          <h3>{{ SubCateGory.Title }}</h3>
          <div class="grey--text darken-4 mb-2">
            {{ SubCateGory.Description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      helpdata: {},
    };
  },
  async mounted() {
    try {
      let { data } = await this.$store.dispatch("getHelp");
      this.helpdata = data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style></style>
