export const state = () => ({
  products: [
    {
      id: 1,
      title: "Course 1",
      image: require("@/assets/c1.png"),
      desc:
        "Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research. Education frequently takes place under the guidance of educators, however learners can also educate themselves. Education can take place in formal or informal settings and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called pedagogy.Formal education is commonly divided formally into such stages as preschool or kindergarten, primary school, secondary school and then college, university, or apprenticeship.",
      price: 10000,
      // coupon: false,
      discount: 20,
      cp: null
    },
    {
      id: 2,
      title: "Course 2",
      image: require("@/assets/c2.png"),
      desc:
        "Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research. Education frequently takes place under the guidance of educators, however learners can also educate themselves. Education can take place in formal or informal settings and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called pedagogy.Formal education is commonly divided formally into such stages as preschool or kindergarten, primary school, secondary school and then college, university, or apprenticeship.",
      price: 11100,
      cp: {
        value: "shafi",
        cpAmount: 20
      },
      discount: 10

      // coupon: false
    },
    {
      id: 3,
      title: "Course 3",
      image: require("@/assets/c5.png"),
      desc:
        "Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research. Education frequently takes place under the guidance of educators, however learners can also educate themselves. Education can take place in formal or informal settings and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called pedagogy.Formal education is commonly divided formally into such stages as preschool or kindergarten, primary school, secondary school and then college, university, or apprenticeship.",
      price: 12200,
      cp: null
      // coupon: true
    },
    {
      id: 4,
      title: "Course 4",
      image: require("@/assets/c4.png"),
      desc:
        "Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research. Education frequently takes place under the guidance of educators, however learners can also educate themselves. Education can take place in formal or informal settings and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called pedagogy.Formal education is commonly divided formally into such stages as preschool or kindergarten, primary school, secondary school and then college, university, or apprenticeship.",
      price: 13300,
      cp: null,
      discount: 30

      // coupon: false
    },
    {
      id: 5,
      title: "Course 5",
      image: require("@/assets/kids.png"),
      desc:
        "Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research. Education frequently takes place under the guidance of educators, however learners can also educate themselves. Education can take place in formal or informal settings and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called pedagogy.Formal education is commonly divided formally into such stages as preschool or kindergarten, primary school, secondary school and then college, university, or apprenticeship.",
      price: 14400,
      cp: {
        value: "shafi",
        cpAmount: 20
      }

      // coupon: true
    },
    {
      id: 6,
      title: "Course 6",
      image: require("@/assets/hero.png"),
      desc:
        "Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research. Education frequently takes place under the guidance of educators, however learners can also educate themselves. Education can take place in formal or informal settings and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called pedagogy.Formal education is commonly divided formally into such stages as preschool or kindergarten, primary school, secondary school and then college, university, or apprenticeship.",
      price: 15500,
      cp: null,
      discount: 5
      // coupon: false
    },
    {
      id: 7,
      title: "Course 7",
      image: require("@/assets/c1.png"),
      desc:
        "Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research. Education frequently takes place under the guidance of educators, however learners can also educate themselves. Education can take place in formal or informal settings and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called pedagogy.Formal education is commonly divided formally into such stages as preschool or kindergarten, primary school, secondary school and then college, university, or apprenticeship.",
      price: 16600,
      cp: null
      // coupon: true
    },
    {
      id: 8,
      title: "Course 8",
      image: require("@/assets/c2.png"),
      desc:
        "Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research. Education frequently takes place under the guidance of educators, however learners can also educate themselves. Education can take place in formal or informal settings and any experience that has a formative effect on the way one thinks, feels, or acts may be considered educational. The methodology of teaching is called pedagogy.Formal education is commonly divided formally into such stages as preschool or kindergarten, primary school, secondary school and then college, university, or apprenticeship.",
      price: 17700,
      cp: {
        value: "shafi",
        cpAmount: 20
      },
      discount: 12
      // coupon: true
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
  addedItem: []
  // coupon: "discount"
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
  },
  ADD_ITEM(state, id) {
    state.addedItem.push(id);
  }
};

export const actions = {
  pushItemToCart(context, id) {
    const cartItem = context.state.listedProducts.find(item => item.id === id);
    if (!cartItem) {
      const product = context.state.products.find(item => item.id === id);
      const copyProduct = JSON.parse(JSON.stringify(product));
      if (copyProduct.discount) {
        copyProduct.price =
          copyProduct.price - (copyProduct.price * copyProduct.discount) / 100;
      }
      if (copyProduct.cp) {
        copyProduct.price =
          copyProduct.price -
          (copyProduct.price * copyProduct.cp.cpAmount) / 100;

        // context.commit("UPDATE_PRODUCT_PRICE", { product, price });
      }
      context.commit("PUSH_ITEM_TO_CART", copyProduct);
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
  },
  addItem(context, id) {
    context.commit("ADD_ITEM", id);
  }
};
