<template>
  <div>
    <div class="container">
      <Hero />
      <h2>Our Courses</h2>
      <div class="wrapper">
        <div class="product" v-for="product in products" :key="product.id">
          <img :src="product.image" alt="Image" />
          <div class="product-info">
            <h3 class="product-title">{{ product.title }}</h3>
            <p>{{ product.desc.slice(0, 60) }} ...</p>
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
      <About />
      <Featured />
      <Tab />
      <Review />
    </div>
    <PopUp />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  head() {
    return {
      title: "Nuxt Store",
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
    products() {
      return this.$store.state.products;
    },
    popUp() {
      return this.$store.state.popUp;
    }
  }
};
</script>
<style>
.container {
  max-width: 1200px;
  margin: auto;
  display: grid;
  gap: 50px;
  padding: 10% 2% 4%;
}
h2 {
  font-size: 6vmin;
  font-weight: 400;
  color: #fff;
  background: #47948f;
  background: #9e744c;
  padding: 0 24px;
  width: max-content;
  max-height: 80px;
  /* border-radius: 8px; */
  transform: rotate(-3deg);
  display: flex;
  align-items: center;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 32px;
  width: 100%;
}
.product {
  display: grid;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s linear;
}
.product:hover {
  transform: scale(1.02) rotate(-0.5deg);
}
.product img {
  width: 100%;
  min-height: 180px;
  max-height: 180px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
  padding: 10px;
  background: #fff;
}
.product-info {
  display: grid;
  gap: 8px;
  padding: 20px;
  background: #dcfdf6;
  border-radius: 0 0 12px 12px;
}
.product-info .product-title {
  background: #0f948f;
}
.product-title {
  background: #12cbc4;
  color: #fff;
  padding: 6px;
  text-transform: uppercase;
  text-align: center;
  border-radius: 4px;
}
.product-info h4 {
  color: #ff5252;
  font-size: 18px;
  font-weight: 500;
}

.btn-grp {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn {
  border: none;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5px;
  font-size: 12px;
}
.btn:active {
  transform: scale(0.96);
}
.btn-cart {
  background: #9e744c;
}
.btn-details {
  background: #ff5252;
}
.btn-green {
  background: #099740;
}

.fade {
  transform: scale(1);
  transition: all 0.5s;
}
.header .container {
  max-width: 1200px;
  margin: auto;
  padding: 10px 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 800px) {
  .container {
    padding: 30% 4% 10%;
  }
}
@media (max-width: 768px) {
  .header {
    padding: 10px 2%;
  }
  .menu {
    margin-right: 40px;
  }
}
</style>
