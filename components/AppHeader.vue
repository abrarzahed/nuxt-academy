<template>
  <header class="header">
    <div class="container">
      <nuxt-link to="/">
        <h3 class="logo">Academy</h3>
      </nuxt-link>
      <nuxt-link to="/cart">
        <div class="menu">
          <div class="icon">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="shopping-cart"
              class="image svg-inline--fa fa-shopping-cart fa-w-18"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
              ></path>
            </svg>
          </div>
          <div class="cart-item">
            {{ listedProducts.length }}
          </div>
        </div>
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
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
.header {
  background: #594641;
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  z-index: 10;
}

.logo {
  font-size: 6vmin;
  color: #fcf7b7;
  text-transform: uppercase;
  letter-spacing: 3px;
}
.header a {
  color: #fff;
  font-size: 20px;
}
.menu {
  position: relative;
  margin-top: 12px;
}
.cart-item {
  position: absolute;
  top: -15px;
  right: -35px;
  font-weight: bold;
  background: #fcf7b7;
  color: #227093;
  height: 34px;
  width: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.image {
  fill: #fff;
  width: 40px;
  height: 40px;
}
</style>
