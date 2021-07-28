<template>
  <div id="tab">
    <h2>Filter Courses</h2>
    <div class="tab-btn">
      <img
        @click="setTabItem('male')"
        src="../assets/c5.png"
        alt=""
        :class="{ btnActive: male }"
        class="male-btn"
      />
      <img
        @click="setTabItem('female')"
        src="../assets/c4.png"
        alt=""
        :class="{ btnActive: female }"
        class="female-btn"
      />
      <img
        @click="setTabItem('kids')"
        src="../assets/kids.png"
        alt=""
        :class="{ btnActive: kids }"
        class="kids-btn"
      />
    </div>
    <div class="tab-preview">
      <!-- Male -->
      <div class="tab-item male" :class="{ active: male }" v-show="male">
        <div class="tab-content">
          <h3 class="tab-title">Academic Courses</h3>
          <p class="tab-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quod
            voluptas ipsam deserunt quaerat numquam architecto inventore, odio
            officiis. Aliquid cumque dignissimos dolor eaque voluptatibus.
            Exercitationem.
          </p>
          <button class="btn btn-tab">Explore Academic Courses</button>
        </div>
        <img src="../assets/hero.png" alt="" />
      </div>
      <!-- Female -->
      <div class="tab-item female" :class="{ active: female }" v-show="female">
        <div class="tab-content">
          <h3 class="tab-title">Diploma Courses</h3>
          <p class="tab-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quod
            voluptas ipsam deserunt quaerat numquam architecto inventore, odio
            officiis.
          </p>
          <button class="btn btn-tab">Explore Diploma Courses</button>
        </div>
        <img src="../assets/c4.png" alt="" />
      </div>
      <!-- Kids -->
      <div class="tab-item kids" :class="{ active: kids }" v-show="kids">
        <div class="tab-content">
          <h3 class="tab-title">Kids Courses</h3>
          <p class="tab-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quod
            voluptas ipsam deserunt quaerat numquam architecto inventore, odio
            officiis. Aliquid cumque dignissimos dolor eaque voluptatibus.
            Exercitationem excepturi at ipsam non?
          </p>
          <button class="btn btn-tab">Explore Kids Courses</button>
        </div>
        <img src="../assets/kids.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // activeItem: "female",
      male: true,
      female: false,
      kids: false
    };
  },
  methods: {
    setTabItem(item) {
      if (item == "male") {
        this.male = true;
        this.female = false;
        this.kids = false;
      } else if (item == "female") {
        this.male = false;
        this.female = true;
        this.kids = false;
      } else {
        this.male = false;
        this.female = false;
        this.kids = true;
      }
    }
  }
};
</script>

<style>
#tab {
  display: grid;
  gap: 10px;
}
.tab-btn {
  justify-self: end;
  display: flex;
  gap: 10px;
  cursor: pointer;
}
.tab-btn img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #ddd;
  padding: 10px;
  object-fit: cover;
}
.male-btn.btnActive {
  border: 4px solid #594641;
}
.female-btn.btnActive {
  border: 4px solid #47948f;
}
.kids-btn.btnActive {
  border: 4px solid #e74f4f;
}
.tab-preview {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin-top: 20px;
}
.tab-item {
  display: flex;
  padding: 60px;
  border-radius: 12px;
  align-items: center;
  justify-content: space-between;
  opacity: 0;
  transform: translateX(-100%);
  transition: all 0.5s;
  color: #fff;
}
.male {
  background: #594641;
}
.female {
  background: #47948f;
}
.kids {
  background: #e74f4f;
}

.active {
  opacity: 1;
  transform: translateX(0);
}

.tab-content {
  flex-basis: 65%;
  display: grid;
  gap: 16px;
}
.tab-title {
  font-size: 6vmin;
}
.tab-desc {
  font-size: 3vmin;
  font-weight: 500;
  letter-spacing: 1px;
}
.tab-preview img {
  max-width: 260px;
  min-width: 260px;
  max-height: 260px;
  min-height: 260px;
  background: #fff;
  padding: 20px;
  border-radius: 50%;
  object-fit: cover;
}
.btn-tab {
  padding: 15px 30px;
  background: #fff;
  color: #594641;
  font-size: 14px;
  width: max-content;
  font-weight: 600;
  letter-spacing: 0;
}
@media (max-width: 800px) {
  .tab-preview {
    margin-top: 10px;
  }
  .tab-item {
    flex-direction: column;
    padding: 30px;
    gap: 20px;
  }
  .tab-content {
    flex-basis: 100%;
    display: grid;
    gap: 16px;
  }
  .tab-preview img {
    max-width: 200px;
    min-width: 200px;
    max-height: 200px;
    min-height: 200px;
    background: #fff;
    padding: 20px;
    border-radius: 50%;
    object-fit: cover;
  }
}
</style>
