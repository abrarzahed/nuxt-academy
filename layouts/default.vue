<template>
  <div>
    <AppHeader />
    <Nuxt class="app" />
    <AppFooter />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "OC Academy",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best shoe store"
        }
      ],
      link: []
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  line-height: 1.5;
  background: #fafddc;
  overflow-x: hidden;
}
.app {
  min-height: 80vh;
}
a {
  display: inline-block;
  text-decoration: none;
}
img {
  width: 100%;
  object-fit: cover;
}
</style>
