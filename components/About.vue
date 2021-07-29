<template>
  <div id="about">
    <h2>About Us</h2>
    <div class="hero about">
      <div class="hero-content">
        <h3>OC Academy</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
          distinctio excepturi,
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
          distinctio excepturi, error consectetur vel eligendi similique labore
          ut voluptatum deleniti!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#about {
  display: grid;
  gap: 30px;
}
.about {
  background: rgba(252, 229, 200, 0.849);
  background: none;
  border-left: 8px solid #47948f;
  border-right: 8px solid #9e744c;
}

.about .hero-content {
  flex-basis: 100%;
}

.about .hero-content p {
  padding: 10px 10px 10px 30px;
  border-left: 4px solid #a8fdd8;
  margin: 14px 0;
  background: #fff;
  border-radius: 8px;
  transform: rotate(-3deg);
}
.about .hero-content p:nth-child(even) {
  border-left: 4px solid #f89898;
}
@media (max-width: 800px) {
  .about {
    border: 0;
  }
}
</style>
