export const state = () => ({
  products: [
    {
      id: 1,
      title: "Course 1",
      image: require("@/assets/c1.png"),
      desc:
        "Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research. Education frequently takes place under the guidance of educators, however learners can also educate themselves. Education can take place in formal or informal settings and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called pedagogy.Formal education is commonly divided formally into such stages as preschool or kindergarten, primary school, secondary school and then college, university, or apprenticeship.",
      price: 1000,
      coupon: false
    },
    {
      id: 2,
      title: "Course 2",
      image: require("@/assets/c2.png"),
      desc:
        "Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research. Education frequently takes place under the guidance of educators, however learners can also educate themselves. Education can take place in formal or informal settings and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called pedagogy.Formal education is commonly divided formally into such stages as preschool or kindergarten, primary school, secondary school and then college, university, or apprenticeship.",
      price: 1100,
      coupon: false
    },
    {
      id: 3,
      title: "Course 3",
      image: require("@/assets/c5.png"),
      desc:
        "Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research. Education frequently takes place under the guidance of educators, however learners can also educate themselves. Education can take place in formal or informal settings and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called pedagogy.Formal education is commonly divided formally into such stages as preschool or kindergarten, primary school, secondary school and then college, university, or apprenticeship.",
      price: 1200,
      coupon: true
    },
    {
      id: 4,
      title: "Course 4",
      image: require("@/assets/c4.png"),
      desc:
        "Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research. Education frequently takes place under the guidance of educators, however learners can also educate themselves. Education can take place in formal or informal settings and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called pedagogy.Formal education is commonly divided formally into such stages as preschool or kindergarten, primary school, secondary school and then college, university, or apprenticeship.",
      price: 1300,
      coupon: false
    },
    {
      id: 5,
      title: "Course 5",
      image: require("@/assets/kids.png"),
      desc:
        "Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research. Education frequently takes place under the guidance of educators, however learners can also educate themselves. Education can take place in formal or informal settings and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called pedagogy.Formal education is commonly divided formally into such stages as preschool or kindergarten, primary school, secondary school and then college, university, or apprenticeship.",
      price: 1400,
      coupon: true
    },
    {
      id: 6,
      title: "Course 6",
      image: require("@/assets/hero.png"),
      desc:
        "Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research. Education frequently takes place under the guidance of educators, however learners can also educate themselves. Education can take place in formal or informal settings and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called pedagogy.Formal education is commonly divided formally into such stages as preschool or kindergarten, primary school, secondary school and then college, university, or apprenticeship.",
      price: 1500,
      coupon: false
    },
    {
      id: 7,
      title: "Course 7",
      image: require("@/assets/c1.png"),
      desc:
        "Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research. Education frequently takes place under the guidance of educators, however learners can also educate themselves. Education can take place in formal or informal settings and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called pedagogy.Formal education is commonly divided formally into such stages as preschool or kindergarten, primary school, secondary school and then college, university, or apprenticeship.",
      price: 1600,
      coupon: true
    },
    {
      id: 8,
      title: "Course 8",
      image: require("@/assets/c2.png"),
      desc:
        "Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research. Education frequently takes place under the guidance of educators, however learners can also educate themselves. Education can take place in formal or informal settings and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called pedagogy.Formal education is commonly divided formally into such stages as preschool or kindergarten, primary school, secondary school and then college, university, or apprenticeship.",
      price: 1700,
      coupon: true
    }
  ],
  listedProducts: [
    // {
    //   image: require("@/assets/1.jpg"),
    //   title: "Shoe 1",
    //   desc:
    //     "A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with appearance originally being tied to function",
    //   price: "1000TK"
    // },
    // {
    //   image: require("@/assets/2.jpeg"),
    //   title: "Shoe 2",
    //   desc:
    //     "A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with appearance originally being tied to function",
    //   price: "1000TK"
    // },
    // {
    //   image: require("@/assets/3.jpeg"),
    //   title: "Shoe 3",
    //   desc:
    //     "A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with appearance originally being tied to function",
    //   price: "1000TK"
    // },
    // {
    //   image: require("@/assets/4.jpg"),
    //   title: "Shoe 4",
    //   desc:
    //     "A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with appearance originally being tied to function",
    //   price: "1000TK"
    // },
    // {
    //   image: require("@/assets/4.jpg"),
    //   title: "Shoe 4",
    //   desc:
    //     "A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with appearance originally being tied to function",
    //   price: "1000TK"
    // },
    // {
    //   image: require("@/assets/4.jpg"),
    //   title: "Shoe 4",
    //   desc:
    //     "A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with appearance originally being tied to function",
    //   price: "1000TK"
    // }
  ],
  selectedItem: {},
  popUp: false,
  coupon: "discount"
});

export const mutations = {
  PUSH_ITEM_TO_CART(state, item) {
    state.listedProducts.push(item);
  },
  SELECT_POP_UP_ITEM(state, item) {
    state.selectedItem = item;
  },
  OPEN_POP_UP(state) {
    state.popUp = true;
  },
  CLOSE_POP_UP(state) {
    state.popUp = false;
  },
  UPDATE_PRODUCT_PRICE(state, { product, price }) {
    product.price = price;
  }
};

export const actions = {
  pushItemToCart(context, id) {
    const cartItem = context.state.listedProducts.find(item => item.id === id);
    if (!cartItem) {
      const product = context.state.products.find(item => item.id === id);
      if (product.coupon) {
        const price = product.price - 250;
        context.commit("UPDATE_PRODUCT_PRICE", { product, price });
      }
      context.commit("PUSH_ITEM_TO_CART", product);
    }
  },
  selectPopUpItem(context, item) {
    context.commit("SELECT_POP_UP_ITEM", item);
  },
  closePopUp(context) {
    context.commit("CLOSE_POP_UP");
  },
  openPopUp(context) {
    context.commit("OPEN_POP_UP");
  }
};
