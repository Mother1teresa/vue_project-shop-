<template>
  <div class="app">
    <main class="main">
      <div class="container">
        <div class="main_way">
          <a href="#/components/pages/main">Homepage</a>
          <div>/</div>
          <a class="main_blog" href="#/components/pages/blog">Blog</a>
        </div>

        <div class="blog">
          <div class="container">
            <div class="categories-main_title-button">
              <div class="row">
                <div class="col-8">
                  <div class="categoriaes-main_title">Our Blog</div>
                </div>
              
              </div>
            </div>
            <div class="mains-posts">
              <div class="post">
                <img src="/src/assets/img/main/blogs/picture.jpg" alt="" />
                <a href="#/components/pages/page" class="post-title"
                  >10 Fast-Growing Trees for Indiana Gardens & Landscapes</a
                >
                <div class="post-text">
                  The state of Indiana is largely covered in farmland, with
                  almost
                  <span style="text-decoration: underline">two-thirds</span> of
                  the land used for agriculture. Because of this, many
                  homeowners are on the lookout for fast-growing. Because of
                  this, many homeowners are on the lookout for fast-growing
                </div>
              </div>
              <div class="post">
                <img src="/src/assets/img/main/blogs/tree.jpg" alt="" />
                <a href="#/components/pages/page" class="post-title"
                  >10 Fast-Growing Trees for Indiana Gardens & Landscapes</a
                >
                <div class="post-text">
                  The state of Indiana is largely covered in farmland, with
                  almost
                  <span style="text-decoration: underline">two-thirds</span> of
                  the land used for agriculture. Because of this, many
                  homeowners are on the lookout for fast-growing. Because of
                  this, many homeowners are on the lookout for fast-growing
                </div>
              </div>
              <div class="post">
                <img src="/src/assets/img/main/blogs/picture.jpg" alt="" />
                <a href="#/components/pages/page" class="post-title"
                  >10 Fast-Growing Trees for Indiana Gardens & Landscapes</a
                >
                <div class="post-text">
                  The state of Indiana is largely covered in farmland, with
                  almost
                  <span style="text-decoration: underline">two-thirds</span> of
                  the land used for agriculture. Because of this, many
                  homeowners are on the lookout for fast-growing. Because of
                  this, many homeowners are on the lookout for fast-growing
                </div>
              </div>
            </div>
            <div class="mains-posts">
              <div class="post">
                <img src="/src/assets/img/main/blogs/picture.jpg" alt="" />
                <a href="#/components/pages/page" class="post-title"
                  >10 Fast-Growing Trees for Indiana Gardens & Landscapes</a
                >
                <div class="post-text">
                  The state of Indiana is largely covered in farmland, with
                  almost
                  <span style="text-decoration: underline">two-thirds</span> of
                  the land used for agriculture. Because of this, many
                  homeowners are on the lookout for fast-growing. Because of
                  this, many homeowners are on the lookout for fast-growing
                </div>
              </div>
              <div class="post">
                <img src="/src/assets/img/main/blogs/tree.jpg" alt="" />
                <a href="#/components/pages/page" class="post-title"
                  >10 Fast-Growing Trees for Indiana Gardens & Landscapes</a
                >
                <div class="post-text">
                  The state of Indiana is largely covered in farmland, with
                  almost
                  <span style="text-decoration: underline">two-thirds</span> of
                  the land used for agriculture. Because of this, many
                  homeowners are on the lookout for fast-growing. Because of
                  this, many homeowners are on the lookout for fast-growing
                </div>
              </div>
              <div class="post">
                <img src="/src/assets/img/main/blogs/picture.jpg" alt="" />
                <a href="#/components/pages/page" class="post-title"
                  >10 Fast-Growing Trees for Indiana Gardens & Landscapes</a
                >
                <div class="post-text">
                  The state of Indiana is largely covered in farmland, with
                  almost
                  <span style="text-decoration: underline">two-thirds</span> of
                  the land used for agriculture. Because of this, many
                  homeowners are on the lookout for fast-growing. Because of
                  this, many homeowners are on the lookout for fast-growing
                </div>
              </div>
            </div>
            <div class="main-stock-scrool-new">
              <div class="container">
                <div class="main-stock-scrool">
                  <button class="scrool activ">1</button>
                  <button class="scrool">2</button>
                  <button class="scrool">3</button>
                  <button class="scrool">4</button>
                  <button class="scrool">></button>
                  <button class="scrool">>></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="new_products-cards">
    <div class="container">
      <div class="categories-main_title-button">
        <div class="row">
          <div class="col-7">
            <div class="categoriaes-main_title">New products</div>
          </div>
          <div class="col-4">
            <div class="categories-text_button">
              <div class="card btn-left btn-prev" @click="left()">
                <div class="arr left arrow">
                  <div class="arrow-position arrowposition"></div>
                </div>
              </div>
              <div class="card btn-right btn-next" @click="right()">
                <div class="arr right arrow">
                  <div class="arrow-position arrowposition"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="slider">
        <div class="new_products">
          <div
            class="products"
            v-for="(product, index) in products"
            :key="index"
            :style="{ transform: `translateX(-${counter * 1300}px)` }"
          >
            <img
              :src="product.imageUrl"
              :alt="Image"
              width="300px"
              height="300px"
            />
            <div class="new_name-stars-reviews">
              <div class="name-new_product">{{ product.name }}</div>
              <div class="stars-reviews">
                <img src="/src/assets/img/main/reviews/stars.png" alt="" />
                <div class="products-reviews">{{ product.reviews }}</div>
              </div>
              <div class="basket-money">
                <div class="money">
                  <span class="discount">{{ product.discount }}</span
                  >{{ product.prace }}
                </div>
                <img
                  class="basket"
                  src="./assets/img/main/reviews/basket.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </main>
  </div>
</template>
<script>
export default {
  
  
  data() {
    return {
      counter: 0,
      products: [
        {
          id: 1,
          imageUrl: "src/assets/img/main/categories/Picture.png",
          name: `Name Surname`,
          reviews: `(6)`,
          discount: `$349`,
          prace: `$249`,
        },
        {
          id: 2,
          imageUrl: "src/assets/img/main/categories/Picture.png",
          name: `Name Surname`,
          reviews: `(6)`,
          prace: `$249`,
        },
        {
          id: 3,
          imageUrl: "src/assets/img/main/categories/Picture20.png",
          name: `Name Surname`,
          discount: `$349`,
          reviews: `(6)`,
          prace: `$249`,
        },
        {
          id: 4,
          imageUrl: "src/assets/img/main/categories/picture.png",
          name: `Name Surname`,
          reviews: `(6)`,
          prace: `$249`,
        },
        {
          id: 5,
          imageUrl: "src/assets/img/main/categories/picture.png",
          name: `Name Surname`,
          reviews: `(6)`,
          prace: `$249`,
        },
        {
          id: 6,
          imageUrl: "src/assets/img/main/categories/picture.png",
          name: `Name Surname`,
          reviews: `(6)`,
          discount: `$349`,
          prace: `$249`,
        },
      ],
    }
    
  },
  computed: {
    maxCounter() {
      return Math.floor(this.products.length / 4 );
    },
  },
  methods: {
    left() {
      if (this.counter === 0) {
        this.counter = this.maxCounter;
      } else {
        this.counter--;
      }
    },
    right() {
      if (this.counter === this.maxCounter) {
        this.counter = 0;
      } else {
        this.counter++;
      }
    },
  },
};
</script>
<style>
.scrool {
  font-family: "Gilroy-Light";
  cursor: pointer;
  width: 32px;
  height: 32px;
  background-color: rgba(255, 249, 239, 1);
  border: none;
}
.scrool:hover {
  color: white;
  background-color: #008542;
}
.activ {
  color: white;
  background-color: #008542;
}

.main-stock-scrool {
  display: flex;
  gap: 2px;
  justify-content: center;
}
.main-stock-scrool-new {
  margin-bottom: 100px;
}
</style>
