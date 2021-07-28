<template>
  <div>
    <h2 class="f-title">Top Courses</h2>
    <div class="wrapper">
      <div class="product" v-for="product in featureProducts" :key="product.id">
        <img :src="product.image" alt="Image" />
        <div class="product-info">
          <h3 class="product-title">{{ product.title }}</h3>
          <p>{{ product.desc.slice(0, 60) }} ...</p>
          <b class="discount" v-if="product.coupon">🎁10% discount🎁</b>
          <h4>{{ product.price }}TK</h4>
          <div class="btn-grp">
            <button
              @click="addToCart(product)"
              class="btn btn-cart"
              :class="{ 'btn-green': product.coupon }"
            >
              Add to Cart
            </button>
            <nuxt-link :to="`${product.id}`">
              <button class="btn btn-details">Details</button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["pushItemToCart", "selectPopUpItem", "openPopUp"]),
    addToCart(item) {
      if (this.hasCoupon(item)) {
        this.selectPopUpItem(item);
        this.openPopUp();
      } else {
        this.pushItemToCart(item.id);
      }
    },
    hasCoupon(item) {
      return item.coupon;
    }
  },
  computed: {
    popUp() {
      return this.$store.state.popUp;
    },
    featureProducts() {
      return this.$store.state.products.slice(0, 4);
    }
  }
};
</script>

<style>
.f-title {
  margin-top: 20px;
  margin-bottom: 40px;
}
</style>
