<template>
  <div>
    <h2 class="f-title">Top Courses</h2>
    <div class="wrapper">
      <div class="product" v-for="product in featureProducts" :key="product.id">
        <img :src="product.image" alt="Image" />
        <div class="product-info">
          <h3 class="product-title">{{ product.title }}</h3>
          <p v-if="addedItem.includes(product.id)" class="added-cart-item">
            &#10004;
          </p>
          <p>{{ product.desc.slice(0, 60) }} ...</p>
          <b class="discount" v-if="product.discount"
            >🎁 {{ product.discount }}% Off</b
          >
          <b class="cp" v-if="product.cp">📇</b>

          <h4>{{ product.price }}TK</h4>
          <div class="btn-grp">
            <button
              @click="addToCart(product)"
              class="btn btn-cart"
              :class="{ 'btn-green': product.cp }"
              :disabled="addedItem.includes(product.id)"
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
    ...mapActions([
      "pushItemToCart",
      "selectPopUpItem",
      "openPopUp",
      "addItem"
    ]),
    addToCart(item) {
      this.addItem(item.id);

      if (this.hasCoupon(item)) {
        this.selectPopUpItem(item);
        this.openPopUp();
      } else {
        this.pushItemToCart({ id: item.id, isCouponValid: false });
      }
    },
    hasCoupon(item) {
      return item.cp;
    }
  },
  computed: {
    popUp() {
      return this.$store.state.popUp;
    },
    featureProducts() {
      return this.$store.state.products.slice(0, 4);
    },
    addedItem() {
      return this.$store.state.addedItem;
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
