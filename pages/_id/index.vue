<template>
  <div class="container">
    <div class="details">
      <img :src="products.image" alt="" style="width: 300px" />
      <div class="details_info">
        <h2>{{ products.title }}</h2>
        <p>{{ products.desc }}</p>
        <h4>{{ products.price }}TK</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  head() {
    return {
      title: `OC Academy ${this.products.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best Online Academy"
        }
      ]
    };
  },
  data() {
    return {
      singleProduct: {}
    };
  },
  mounted() {
    console.log("params id", this.$route.params.id);
  },
  computed: {
    products() {
      return this.$store.state.products.find(
        item => item.id == this.$route.params.id
      );
    }
  }
};
</script>

<style>
.details {
  max-width: 600px;
  margin: auto;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  background: #fff;
  color: #444;
}
.details img {
  min-width: 100%;
  max-width: 100%;
  min-height: 300px;
  max-height: 300px;
  border-radius: 12px 12px 0 0;
}
.details_info {
  padding: 30px;
  display: grid;
  gap: 20px;
}
.details_info h2 {
  background: #47948f;
}
.details_info p {
  font-size: 18px;
}
.details_info h4 {
  font-size: 24px;
  color: #594641;
  font-style: italic;
}
</style>
