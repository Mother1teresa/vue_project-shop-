<template>
  <div class="main">
    <div class="block_2">
      <img
        class="main-img"
        src="/src/assets/img/main/block_2/rectangle_img.png"
        alt=""
      />
      <div class="block-main_title">Welcome to Californiatrees</div>
      <div class="block-main_text">
        Discover the beauty and value of trees with our wide range of options.
        Let your land come alive with our selection of trees for sale in
        California. Find the perfect addition to your property today!
      </div>
      <a href="#/components/pages/blog">
        <button class="block-main-button">Shop now!</button></a
      >
    </div>
    <div class="popelar_categories">
      <div class="container">
        <img
          src="/src/assets/img/main/logo-line.png"
          alt=""
          class="loga-line"
        />
        <div class="categories-main_title-button">
          <div class="row">
            <div class="col-8">
              <div class="categoriaes-main_title">
                Popular categories of trees
              </div>
            </div>
            <div class="col-4">
              <div class="categories-text_button-arr">
                <a href="#/components/pages/page">
                  <div class="text-neardy-button">see more</div>
                </a>
                <a href="#/components/pages/page">
                  <div class="card btn-left">
                    <div class="arr right arrow">
                      <div class="arrow-position arrowposition"></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="catagories-products">
          <div class="product" v-for="catalog in catalogs" :key="catalog.id">
            <a href="#/components/pages/page">
              <div class="scale">
                <img :src="catalog.imageUrl" :alt="Image" />
              </div>
              <div class="product-name">{{ catalog.title }}</div>
            </a>
          </div>
        </div>
        <a href="#/components/pages/page">
          <button class="btn-green">SEE MORE</button></a
        >
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
        <button class="btn-green">SEE MORE</button>
      </div>
    </div>
    <div class="about_us">
      <div class="row">
        <div class="col-6">
          <img
            class="about_us-img"
            src="/src/assets/img/main/about/person.png"
          />
        </div>
        <div class="col-6">
          <div class="about_us-main">
            <div class="about_us-title">About us</div>
            <div class="about_us-text">
              <div class="about_us-p">
                At Tree Haven, we believe in the power of trees to enhance your
                property and the environment. Our diverse selection ensures that
                you can find the perfect trees for your land. Whether you're
                looking for shade, fruit, or beauty, we've got you covered.
              </div>
              <div class="about_us-p">
                With over 1000 happy customers served and 5000 trees planted,
                Tree Haven is the go-to destination for all your tree needs.
                Join our community of satisfied customers today.
              </div>
              <div class="about_us-p">
                Our team at Tree Haven is dedicated to providing you with expert
                advice and care for your trees. We're committed to providing
                excellent customer support to address any questions or concerns
                you may have.
              </div>
            </div>
            <a href="#/components/pages/about">
              <button class="block-main-buttons">Read More</button></a
            >
            <div class="about-recommends">
              <div class="about-recommend">
                <div class="about-number">1000+</div>
                <div class="about-text">Happy Customers</div>
              </div>
              <div class="about-recommend">
                <div class="about-number">5000+</div>
                <div class="about-text">Trees Planted</div>
              </div>
              <div class="about-recommend">
                <div class="about-number">20+</div>
                <div class="about-text">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-reviews">
      <div class="container">
        <div class="categories-main_title-button">
          <div class="row">
            <div class="col-7">
              <div class="categoriaes-main_title">Reviews</div>
            </div>
            <div class="col-4">
              <div class="categories-text_button">
                <button class="btn-left btn-prev" @click="left()">
                  <div class="arr left" id="arrow2">
                    <div class="arrow-position" id="arrowposition2"></div>
                  </div>
                </button>
                <button class="btn-right btn-next" @click="right()">
                  <div class="arr right" id="arrow3">
                    <div class="arrow-position" id="arrowposition3"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="reviews slider">
          <div
            class="review products"
            v-for="(review, index) in reviews"
            :key="index"
            :style="{ transform: `translateX(-${counter * 1300}px)` }"
          >
            <div class="review-name-img">
              <div class="review-name-palm">
                <img
                  :src="review.imageUrl"
                  :alt="Image"
                  width="65px"
                  height="65px"
                />
                <div class="review-name">
                  <div class="review-name_text">{{ review.purchase }}</div>
                  <img src="/src/assets/img/main/categories/stars.png" alt="" />
                </div>
              </div>
            </div>
            <div class="review-author-time">
              <div class="review-author">{{ review.name }}</div>
              <div class="review-author_text">
                {{ review.body }}
              </div>
            </div>
            <div class="review-time">{{ review.time }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="blog">
      <div class="container">
        <div class="categories-main_title-button">
          <div class="row">
            <div class="col-8">
              <div class="categoriaes-main_title">Our Blog</div>
            </div>
            <div class="col-4">
              <div class="categories-text_button-arr">
                <a href="#/components/pages/blog">
                  <div class="text-neardy-button">see more</div>
                </a>
                <a href="#/components/pages/page">
                  <button class="btn-left">
                    <div class="arr right" id="arrow4">
                      <div class="arrow-position" id="arrowposition4"></div>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="mains-posts">
          <div class="post" v-for="post in posts" :key="post.id">
            <img class="blog-img" :src="post.imageUrl" :alt="Image" />
            <a href="#/components/pages/page" class="post-title">{{
              post.title
            }}</a>
            <div class="post-text">{{ post.body }}</div>
          </div>
          <a href="#/components/pages/blog">
            <button class="btn-green">SEE MORE</button></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          imageUrl: "src/assets/img/main/blogs/picture.jpg",
          title: `10 Fast-Growing Trees for Indiana Gardens & Landscapes`,
          body: `The state of Indiana is largely covered in farmland, with almost <span style="text-decoration: underline">two-thirds</span> of the land used for agriculture. Because of this, many homeowners are on the lookout for fast-growing. Because of this, many homeowners are on the lookout for fast-growing`,
        },
        {
          id: 2,
          imageUrl: "src/assets/img/main/blogs/tree.jpg",
          title: "10 Fast-Growing Trees for Indiana Gardens & Landscapes",
          body: '!2The state of Indiana is largely covered in farmland, with almost <span style="text-decoration: underline">two-thirds</span> of the land used for agriculture. Because of this, many homeowners are on the lookout for fast-growing. Because of this, many homeowners are on the lookout for fast-growing',
        },
        {
          id: 3,
          imageUrl: "src/assets/img/main/blogs/picture.jpg",
          title: "10 Fast-Growing Trees for Indiana Gardens & Landscapes",
          body: '!2The state of Indiana is largely covered in farmland, with almost <span style="text-decoration: underline">two-thirds</span> of the land used for agriculture. Because of this, many homeowners are on the lookout for fast-growing. Because of this, many homeowners are on the lookout for fast-growing',
        },
      ],
      catalogs: [
        {
          id: 1,
          imageUrl: "src/assets/img/main/categories/product.png",
          title: "Name of category",
        },
        {
          id: 2,
          imageUrl: "src/assets/img/main/categories/product.png",
          title: "Name of category",
        },
        {
          id: 3,
          imageUrl: "src/assets/img/main/categories/product.png",
          title: "Name of category",
        },
        {
          id: 4,
          imageUrl: "src/assets/img/main/categories/product.png",
          title: "Name of category",
        },
        {
          id: 5,
          imageUrl: "src/assets/img/main/categories/product.png",
          title: "Name of category",
        },
        {
          id: 6,
          imageUrl: "src/assets/img/main/categories/product.png",
          title: "Name of category",
        },
      ],
      counter: 0,
      reviews: [
        {
          id: 1,
          imageUrl: "src/assets/img/main/reviews/palm.png",
          purchase: `Purchase name`,
          name: `Name Surname`,
          body: `My two Cavendish banana trees arrived in excellent condition,
                    looking very healthy! I have them in my Carolina room waiting to
                    be potted outside in the next 6 weeks.
                    Recommended!`,
          time: `12.01.2024`,
        },
        {
          id: 2,
          imageUrl: "src/assets/img/main/reviews/palm.png",
          purchase: `Purchase name`,
          name: `Name Surname`,
          body: `My two Cavendish banana trees arrived in excellent condition,
                    looking very healthy! I have them in my Carolina room waiting to
                    be potted outside in the next 6 weeks.
                    Recommended!`,
          time: `12.01.2024`,
        },
        {
          id: 3,
          imageUrl: "src/assets/img/main/reviews/palm.png",
          purchase: `Purchase name`,
          name: `Name Surname`,
          body: `My two Cavendish banana trees arrived in excellent condition,
                    looking very healthy! I have them in my Carolina room waiting to
                    be potted outside in the next 6 weeks.
                    Recommended!`,
          time: `12.01.2024`,
        },
        {
          id: 4,
          imageUrl: "src/assets/img/main/reviews/palm.png",
          purchase: `Purchase name`,
          name: `Name Surname`,
          body: `My two Cavendish banana trees arrived in excellent condition,
                    looking very healthy! I have them in my Carolina room waiting to
                    be potted outside in the next 6 weeks.
                    Recommended!`,
          time: `12.01.2024`,
        },
        {
          id: 5,
          imageUrl: "src/assets/img/main/reviews/palm.png",
          purchase: `Purchase name`,
          name: `Name Surname`,
          body: `My two Cavendish banana trees arrived in excellent condition,
                    looking very healthy! I have them in my Carolina room waiting to
                    be potted outside in the next 6 weeks.
                    Recommended!`,
          time: `12.01.2024`,
        },
        {
          id: 6,
          imageUrl: "src/assets/img/main/reviews/palm.png",
          purchase: `Purchase name`,
          name: `Name Surname`,
          body: `My two Cavendish banana trees arrived in excellent condition,
                    looking very healthy! I have them in my Carolina room waiting to
                    be potted outside in the next 6 weeks.
                    Recommended!`,
          time: `12.01.2024`,
        },
      ],
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
    };
  },
  computed: {
    maxCounter() {
      return Math.floor(this.reviews.length / 4);
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
.btn-green {
  display: none;
}
.about_us-text,
.about_us-p,
.about-recommends {
  background-color: #584528;
  color: #fff;
}
.about-number {
  background-color: #584528;
}
</style>
