<template>
  <div class="pop-up_wrapper" :class="{ fade: popUp }">
    <div class="pop-up">
      <div @click="closePopup()" class="close">➕</div>
      <p class="congratulation">
        🎉 Thanks for choosing {{ selectedItem.title }} 🎉
      </p>
      <h3 class="product-title">{{ selectedItem.title }}</h3>
      <p v-if="selectedItem.desc">
        {{ selectedItem.desc.slice(0, 100) }}
      </p>
      <h4>{{ selectedItem.price }}TK</h4>
      <b v-if="selectedItem.discount"
        >🎁 {{ selectedItem.discount }}% discount 🎁</b
      >
      <div v-if="selectedItem.cp" class="coupon">
        <input
          type="text"
          class="coupon_input"
          placeholder="Enter Coupon Code"
          v-model="checkCoupon"
        />
        <button @click="submit" class="btn coupon-btn">Submit</button>
      </div>
      <small v-if="invalid">Sorry! this coupon is invalid</small>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      checkCoupon: "",
      invalid: false
    };
  },
  methods: {
    ...mapActions(["closePopUp", "pushItemToCart"]),
    closePopup() {
      this.closePopUp();
    },
    submit() {
      //! Bug:-  adding item to cart as well as updating price without testing coupon code!

      if (this.selectedItem.cp.value == this.checkCoupon) {
        this.pushItemToCart({ id: this.selectedItem.id, isCouponValid: true });
      } else if (this.selectedItem.cp.value !== this.checkCoupon) {
        this.invalid = true;
        this.pushItemToCart({ id: this.selectedItem.id, isCouponValid: false });
      }
      this.closePopUp();
    }
  },
  computed: {
    selectedItem() {
      return this.$store.state.selectedItem;
    },
    coupon() {
      return this.$store.state.coupon;
    },
    popUp() {
      return this.$store.state.popUp;
    }
  }
};
</script>

<style>
.pop-up_wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 80vh;
  display: grid;
  place-content: center;
  /* background: #dcfdf6; */
  padding: 4%;
  transition: all 0.5s;
  transform: scale(0);
}
.pop-up {
  position: relative;
  display: grid;
  gap: 10px;
  max-width: 500px;
  margin: auto;
  background: #e9655a;
  padding: 30px 20px;
  border-radius: 12px;
  color: #fff;
  box-shadow: rgba(100, 100, 111, 0.377) 0px 7px 29px 0px;
}
.pop-up .product-title {
  background: #fcf7b7;
  color: #47948f;
}
.close {
  background: #fcf7b7;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: grid;
  place-content: center;
  transform: rotate(45deg);
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
}
.congratulation {
  font-size: 3vmin;
  letter-spacing: 1.5px;
  font-weight: 500;
  font-style: italic;
  margin-top: 13px;
}
.coupon {
  display: flex;
  gap: 10px;
}
input {
  padding: 8px 12px;
  border: none;
  border-radius: 12px;
}
input:focus {
  outline: none;
}
.coupon-btn {
  background: #367093;
}
.fade {
  transform: scale(1);
  transition: all 0.5s;
}
</style>
