<template>
  <div>
    <div class="main">
      <div class="container">
        <div class="main_way">
          <a href="#/components/pages/main">Homepage</a>
          <div>/</div>
          <a class="main_blog" href="#/components/pages/billing">Billing & Shipping</a>
        </div>
        <div class="main-billing-shipping">
          <div class="main-billing-shipping-title">Billing & Shipping</div>
          <div class="main_billing_shipping-button">
            <button
              class="button main_billing-button-text"
              @click="selectTab('billing')"
              :style="{
                backgroundColor: tabs.billing.backgroundColor,
                color: tabs.billing.color,
              }"
            >
              Billing
            </button>
            <button
              class="button main_billing-button-text"
              @click="selectTab('shipping')"
              :style="{
                backgroundColor: tabs.shipping.backgroundColor,
                color: tabs.shipping.color,
              }"
            >
              Shipping
            </button>
            <button
              class="button main_billing-button-text"
              @click="selectTab('return')"
              :style="{
                backgroundColor: tabs.return.backgroundColor,
                color: tabs.return.color,
              }"
            >
              Return
            </button>
          </div>
          <div
            v-if="selectedTab === 'billing'"
            class="tab-content"
            :style="{ display: tabs.billing.display }"
          >
            <div class="blog_question_answer" >
              <div class="main_blog-title">What is a USDA growing zone?</div>
              <div class="main_blog-text">
                <p>
                  At Tree Haven, we believe in the power of trees to enhance
                  your property and the environment. Our diverse selection
                  ensures that you can find the perfect trees for your land.
                  Whether you're looking for shade, fruit, or beauty, we've got
                  you covered. With over 1000 happy customers served and 5000
                  trees planted, Tree Haven is the go-to destination for all
                  your tree needs. Join our community of satisfied customers
                  today. Our team at Tree Haven is dedicated to providing you
                  with expert advice and care for your trees. We're committed to
                  providing excellent customer support to address any questions
                  or concerns you may have.
                </p>
                <p style="margin-top: 12px">
                  At Tree Haven, we believe in the power of trees to enhance
                  your property and the environment. Our diverse selection
                  ensures that you can find the perfect trees for your land.
                  Whether you're looking for shade, fruit, or beauty, we've got
                  you covered. With over 1000 happy customers served and 5000
                  trees planted, Tree Haven is the go-to destination for all
                  your tree needs. Join our community of satisfied customers
                  today. Our team at Tree Haven is dedicated to providing you
                  with expert advice and care for your trees. We're committed to
                  providing excellent customer support to address any questions
                  or concerns you may have. At Tree Haven, we believe in the
                  power of trees to enhance your property and the environment.
                  Our diverse selection ensures that you can find the perfect
                  trees for your land. Whether you're looking for shade, fruit,
                  or beauty, we've got you covered. With over 1000 happy
                  customers served and 5000 trees planted, Tree Haven is the
                  go-to destination for all your tree needs. Join our community
                  of satisfied customers today. Our team at Tree Haven is
                  dedicated to providing you with expert advice and care for
                  your trees.
                </p>
                <p style="margin-top: 12px">
                  At Tree Haven, we believe in the power of trees to enhance
                  your property and the environment. Our diverse selection
                  ensures that you can find the perfect trees for your land.
                  Whether you're looking for shade, fruit, or beauty, we've got
                  you covered. With over 1000 happy customers served and 5000
                  trees planted, Tree Haven is the go-to destination for all
                  your tree needs. Join our community of satisfied customers
                  today. Our team at Tree Haven is dedicated to providing you
                  with expert advice and care for your trees. We're committed to
                  providing excellent customer support to address any questions
                  or concerns you may have.
                </p>
              </div>
            </div>
          </div>
          <div
            v-if="selectedTab === 'shipping'"
            class="tab-content"
            :style="{ display: tabs.shipping.display }"
          >
            <div class="blog_question_answer" >
              <div class="main_blog-title">1What is a USDA growing zone?</div>
              <div class="main_blog-text">
                <p>
                  At Tree Haven, we believe in the power of trees to enhance
                  your property and the environment. Our diverse selection
                  ensures that you can find the perfect trees for your land.
                  Whether you're looking for shade, fruit, or beauty, we've got
                  you covered. With over 1000 happy customers served and 5000
                  trees planted, Tree Haven is the go-to destination for all
                  your tree needs. Join our community of satisfied customers
                  today. Our team at Tree Haven is dedicated to providing you
                  with expert advice and care for your trees. We're committed to
                  providing excellent customer support to address any questions
                  or concerns you may have.
                </p>
                <p style="margin-top: 12px">
                  At Tree Haven, we believe in the power of trees to enhance
                  your property and the environment. Our diverse selection
                  ensures that you can find the perfect trees for your land.
                  Whether you're looking for shade, fruit, or beauty, we've got
                  you covered. With over 1000 happy customers served and 5000
                  trees planted, Tree Haven is the go-to destination for all
                  your tree needs. Join our community of satisfied customers
                  today. Our team at Tree Haven is dedicated to providing you
                  with expert advice and care for your trees. We're committed to
                  providing excellent customer support to address any questions
                  or concerns you may have. At Tree Haven, we believe in the
                  power of trees to enhance your property and the environment.
                  Our diverse selection ensures that you can find the perfect
                  trees for your land. Whether you're looking for shade, fruit,
                  or beauty, we've got you covered. With over 1000 happy
                  customers served and 5000 trees planted, Tree Haven is the
                  go-to destination for all your tree needs. Join our community
                  of satisfied customers today. Our team at Tree Haven is
                  dedicated to providing you with expert advice and care for
                  your trees.
                </p>
                <p style="margin-top: 12px">
                  At Tree Haven, we believe in the power of trees to enhance
                  your property and the environment. Our diverse selection
                  ensures that you can find the perfect trees for your land.
                  Whether you're looking for shade, fruit, or beauty, we've got
                  you covered. With over 1000 happy customers served and 5000
                  trees planted, Tree Haven is the go-to destination for all
                  your tree needs. Join our community of satisfied customers
                  today. Our team at Tree Haven is dedicated to providing you
                  with expert advice and care for your trees. We're committed to
                  providing excellent customer support to address any questions
                  or concerns you may have.
                </p>
              </div>
            </div>
          </div>
          <div
            v-if="selectedTab === 'return'"
            class="tab-content"
            :style="{ display: tabs.return.display }"
          >
            <div class="blog_question_answer" >
              <div class="main_blog-title">2What is a USDA growing zone?</div>
              <div class="main_blog-text">
                <p>
                  At Tree Haven, we believe in the power of trees to enhance
                  your property and the environment. Our diverse selection
                  ensures that you can find the perfect trees for your land.
                  Whether you're looking for shade, fruit, or beauty, we've got
                  you covered. With over 1000 happy customers served and 5000
                  trees planted, Tree Haven is the go-to destination for all
                  your tree needs. Join our community of satisfied customers
                  today. Our team at Tree Haven is dedicated to providing you
                  with expert advice and care for your trees. We're committed to
                  providing excellent customer support to address any questions
                  or concerns you may have.
                </p>
                <p style="margin-top: 12px">
                  At Tree Haven, we believe in the power of trees to enhance
                  your property and the environment. Our diverse selection
                  ensures that you can find the perfect trees for your land.
                  Whether you're looking for shade, fruit, or beauty, we've got
                  you covered. With over 1000 happy customers served and 5000
                  trees planted, Tree Haven is the go-to destination for all
                  your tree needs. Join our community of satisfied customers
                  today. Our team at Tree Haven is dedicated to providing you
                  with expert advice and care for your trees. We're committed to
                  providing excellent customer support to address any questions
                  or concerns you may have. At Tree Haven, we believe in the
                  power of trees to enhance your property and the environment.
                  Our diverse selection ensures that you can find the perfect
                  trees for your land. Whether you're looking for shade, fruit,
                  or beauty, we've got you covered. With over 1000 happy
                  customers served and 5000 trees planted, Tree Haven is the
                  go-to destination for all your tree needs. Join our community
                  of satisfied customers today. Our team at Tree Haven is
                  dedicated to providing you with expert advice and care for
                  your trees.
                </p>
                <p style="margin-top: 12px">
                  At Tree Haven, we believe in the power of trees to enhance
                  your property and the environment. Our diverse selection
                  ensures that you can find the perfect trees for your land.
                  Whether you're looking for shade, fruit, or beauty, we've got
                  you covered. With over 1000 happy customers served and 5000
                  trees planted, Tree Haven is the go-to destination for all
                  your tree needs. Join our community of satisfied customers
                  today. Our team at Tree Haven is dedicated to providing you
                  with expert advice and care for your trees. We're committed to
                  providing excellent customer support to address any questions
                  or concerns you may have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.main_way {
  display: flex;
  gap: 10px;
  margin: 40px 0;
}
.main_way a{
  color: #787878;
  font-size: 16px;
}
.main_way a:hover {
  color: #383838;
}
.main_way .main_blog {
  color: #383838;
}
body {
  font-family: "Gilroy-Light", sans-serif;
  color: #1a1a1a;
}
.main {
  margin-bottom: 65px;
}

.main-billing-shipping {
  width: 1300px;
}

.main_billing_shipping-button {
  margin: 40px 0 20px 0;
  border-bottom: 2px solid #1a1a1a;
}

.main-billing-shipping-title {
  font-size: 60px;
  font-family: Gilroy-ExtraBold, sans-serif;
}

.main_billing_shipping-button {
  border-bottom: 1px solid #383838;
  height: 61px;
  width: 660px;
  display: flex;
}
.button {
  width: 220px;
  border: none;
  background-color: rgba(255, 249, 239, 1);
  cursor: pointer;
}
.button:hover {
  background-color: rgba(5, 192, 104, 0.79);
}

.main_billing-button-text {
  font-size: 16px;
  font-family: Gilroy-Light, sans-serif;
}
</style>

<script>
export default {
  data() {
    return {
      selectedTab: "billing",
      tabs: {
        billing: { backgroundColor: "#008542", color: "white", display:"inline-block" },
        shipping: { backgroundColor: "rgba(255, 249, 239, 1)", color: "black", display: "none" },
        return: { backgroundColor: "rgba(255, 249, 239, 1)", color: "black", display: "none" },
        
      },
    };
  },
  methods: {
    selectTab(tab) {
      
      for (let key in this.tabs) {
        this.tabs[key].backgroundColor = "rgba(255, 249, 239, 1)";
        this.tabs[key].color = "black";
        this.tabs[key].display = "none";
      }
      
      this.tabs[tab].backgroundColor = "#008542";
      this.tabs[tab].color = "white";
      this.selectedTab = tab;
      this.tabs[tab].display = "inline-block";
    },
  },
};
</script>


