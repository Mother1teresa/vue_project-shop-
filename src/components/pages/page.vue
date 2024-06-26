<template>
    <main class="main">
    <div class="container">
        <div class="main_way">
            <a href="#/components/pages/main">Homepage</a>
            <div>/</div>
            <a href="#/components/pages/blog">Blog</a>
            <div>/</div>
            <a class="main_blog" href="#/components/pages/page">10 Fast-Growing Trees for Indiana Gardens & Landscapes</a>
        </div>
        <div class="main-page_of_blog">
            <div class="row">
                <div class="col-6 ">
                    <div class="page_of_blog">
                        <div class="main_blog-title">10 Fast-Growing Trees for Indiana Gardens & Landscapes</div>
                        <div class="main_blog-text">
                            <p style="margin-bottom: 12px">The state of Indiana is largely covered in farmland, with
                                almost two-thirds of the land
                                used
                                for agriculture. Because of this, many homeowners are on the lookout for fast-growing.
                                The
                                first time you planted something, chances are, you had to find out what your growing
                                zone
                                was—either by looking on a map or typing in your zip code before getting your shovel
                                out. Or
                                maybe you're familiar with seeing growing zones labeled on a plant tag, where it says
                                something like "3-7" or "8-11." Growing zones—also commonly called hardiness zones— help
                                tell us whether a plant will be happy growing in a specific area.</p>
                            <p>The USDA recently released a new hardiness zone map for the first time since 2012, and
                                with
                                it come a lot of questions about what the changing zones mean for gardeners. Here, we'll
                                dig
                                into what growing zones actually are, what they tell us about which plants will grow
                                best,
                                what a new zone looks like in your garden, and how to prepare for the future.</p>
                        </div>
                    </div>
                    <div class="blog_question_answer">
                        <div class="main_blog-title">What is a USDA growing zone?</div>
                        <div class="main_blog-text">
                            <p> state of Indiana is largely covered in farmland, with almost two-thirds of the land
                                used</p>
                            <p>for agriculture. Because of this, many homeowners are on the lookout for
                                fast-growing. </p> The
                            first time you planted something, chances are, you had to find out what your growing <p>zone
                            was—either by
                            looking on a map or typing in your zip code before getting your shovel </p>
                            <p> out. Or maybe you're
                                familiar with seeing growing zones labeled on a plant tag, where it says something like
                                "3-7" or "8-11." Growing zones—also commonly called hardiness zones— help tell us
                                whether a
                                plant will be happy growing in a specific area.</p>
                            <p style="margin-top: 12px">The state of Indiana is largely covered in farmland, with almost
                                two-thirds of the land used
                                for agriculture. Because of this, many homeowners are on the lookout for fast-growing.
                                The
                                first time you planted something, chances are, you had to find out what your growing
                                zone
                                was—either by looking on a map or typing in your zip code before getting your shovel
                                out. Or
                                maybe you're familiar with seeing growing zones labeled on a plant tag, where it says
                                something like "3-7" or "8-11." Growing zones—also commonly called hardiness zones— help
                                tell us whether a plant will be happy growing in a specific area.</p>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-blog__img">
                    <img class="blog-img" src="/src/assets/img/pageBlog/Picture.png" alt="">
                </div>
            </div>
        </div>
        <div class="new_products-cards">
    <div class="container">
      <div class="categories-main_title-button">
        <div class="row">
          <div class="col-8">
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
    </div>
</main>
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
<style scoped>

.blog-img {
  margin: 5px;
  width: 650px;
  height: 570px;
}
.col-blog__img{
  width: 650px;
  height: 570px;
}
.main_blog-title {
  margin-bottom: 10px;
  font-size: 60px;
  color: #1a1a1a;
  font-family: "Gilroy-ExtraBold", sans-serif;
}

.main_blog-text p {
  font-size: 16px;
  color: #383838;
}

.page_of_blog {
  margin-bottom: 30px;
  width: 670px;
}
.main-page_of_blog .row {
  height: 702px;
  margin-bottom: 200px;
}

/*blog_question_answer*/

.blog_question_answer .main_blog-title {
  font-size: 30px;
  font-weight: 600;
}

.blog_question_answer .main_blog-text {
  width: 1300px;
}

</style>