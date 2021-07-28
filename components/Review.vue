<template>
  <div id="review">
    <h2>Student's Review</h2>
    <div class="reviews-wrapper">
      <div class="single-review">
        <img src="../assets/c-1.jpeg" alt="" />
        <div class="review-content">
          <h4 class="name">Abdul Kadir</h4>
          <p class="quote">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae in,
            est possimus repellat quae inventore iure minus debitis sint
            explicabo vero ducimus aspernatur.
          </p>
          <p class="stars">⭐⭐⭐⭐</p>
        </div>
      </div>
      <div class="single-review">
        <img src="../assets/c-2.jpeg" alt="" />
        <div class="review-content">
          <h4 class="name">Abdullah Hayder</h4>
          <p class="quote">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae in,
            est possimus repellat quae inventore iure minus debitis sint
            explicabo vero ducimus aspernatur.
          </p>
          <p class="stars">⭐⭐⭐⭐</p>
        </div>
      </div>
      <div class="single-review">
        <img src="../assets/c-3.jpeg" alt="" />
        <div class="review-content">
          <h4 class="name">Yasin Qadri</h4>
          <p class="quote">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae in,
            est possimus repellat quae inventore iure minus debitis sint
            explicabo vero ducimus aspernatur.
          </p>
          <p class="stars">⭐⭐⭐⭐</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#review {
  display: grid;
  gap: 80px;
}
.reviews-wrapper {
  display: flex;
  gap: 32px;
}
.single-review {
  padding: 20px;
  display: grid;
  gap: 10px;
  align-items: center;
  justify-items: center;
  position: relative;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.single-review img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-top: -80px;
  border: 6px solid #fff;
}
.review-content {
  display: grid;
  gap: 4px;
}
.review-content .name {
  font-size: 3.5vmin;
  color: #47948f;
}
@media (max-width: 800px) {
  .reviews-wrapper {
    flex-wrap: wrap;
    gap: 70px;
  }
}
</style>
