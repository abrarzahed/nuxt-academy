<template>
  <div class="hero showcase">
    <div class="hero-content">
      <h1>Welcome</h1>
      <h3>Nuxt Academy</h3>
      <p>
        Education is the process of facilitating learning, or the acquisition of
        knowledge, skills, values, morals, beliefs, and habits. Educational
        methods include teaching, training, storytelling, discussion and
        directed research.
      </p>
    </div>
    <img src="../assets/hero.png" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style>
.hero {
  width: 100%;
  min-height: 400px;
  background: rgb(152, 243, 201);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 4%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.hero img {
  width: 46%;
  position: absolute;
  right: -100px;
  top: -40px;
}
.hero-content {
  flex-basis: 65%;
  color: #444;
}
.hero-content h1 {
  font-size: 9vmin;
  margin: 0;
  text-transform: uppercase;
  color: #ec8d74;
  letter-spacing: 2px;
  font-weight: 600;
}
.hero-content h3 {
  color: #9e744c;
  font-size: 6vmin;
  font-weight: 600;
  letter-spacing: 6px;
  font-weight: 500;
}
.hero-content p {
  font-size: 20px;
}
@media (max-width: 800px) {
  .hero {
    flex-direction: column;
    padding: 6%;
    justify-content: center;
  }
  .hero-content {
    flex-basis: 100%;
  }
  .hero img {
    width: 100%;
    position: relative;
    flex-basis: 100%;
    right: 0;
    top: 0;
  }
}
</style>
