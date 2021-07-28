<template>
  <div class="container">
    <h2>Listed Products</h2>
    <div class="cart-wrapper">
      <div
        class="single-product"
        v-for="(singleProduct, index) in listedProducts"
        :key="index"
      >
        <img :src="singleProduct.image" alt="" />
        <div class="single-product_info">
          <h3>{{ singleProduct.title }}</h3>
          <p>{{ singleProduct.desc.slice(0, 200) }} ...</p>
          <h4>{{ singleProduct.price }}TK</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Nuxt store || Listed products",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best shoe store"
        }
      ]
    };
  },
  data() {
    return {};
  },
  computed: {
    listedProducts() {
      return this.$store.state.listedProducts;
    }
  }
};
</script>

<style>
.cart-wrapper {
  display: grid;
  gap: 32px;
}
.single-product {
  display: flex;
  gap: 42px;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background: #dcfdf6;
  height: 240px;
  transition: transform 0.2s linear;
}
.single-product:hover {
  transform: scale(1.01) rotate(-0.5deg);
}
.single-product img {
  min-height: 240px;
  max-height: 240px;
  min-width: 320px;
  max-width: 320px;
  height: 100%;
  /* max-height: 100%; */
  border-radius: 12px 0 0 12px;
  padding: 10px;
  background: #fff;
}
.single-product_info {
  padding: 0 20px;
  border-left: 8px solid #33d9b2;
}
.single-product_info h3 {
  font-size: 24px;
  color: #273c75;
}
.single-product_info h4 {
  color: #ff5252;
  font-size: 18px;
  font-weight: 500;
}

@media (max-width: 680px) {
  .single-product {
    flex-direction: column;
    gap: 16px;
    height: auto;
  }
  .single-product img {
    min-width: 100%;
    max-width: 100%;
    border-radius: 12px 12px 0 0;
  }
  .single-product_info {
    border: none;
    padding: 20px;
  }
}
</style>
