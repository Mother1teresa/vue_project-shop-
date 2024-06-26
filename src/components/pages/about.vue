<template>
  <main class="main">
    <div class="container">
      <div class="main_way">
        <a href="#/components/pages/main">Homepage</a>
        <div>/</div>
        <a  class="main_blog" href="#/components/pages/about">About us</a>
      </div>
      <div class="main-about">
        <div class="main-about__title">About us</div>

        <div class="row">
          <div class="col-6 person-about__image">
            <img
              class="person-about"
              src="/src/assets/img/main/about/person.png"
              alt=""
            />
          </div>
          <div class="col-6">
            <div class="about-recommends">
              <div class="about-recommend">
                <div class="about-number">1000+</div>
                <div class="about__text">Happy Customers</div>
              </div>
              <div class="about-recommend">
                <div class="about-number">5000+</div>
                <div class="about__text">Trees Planted</div>
              </div>
              <div class="about-recommend">
                <div class="about-number">20+</div>
                <div class="about__text">Years of Experience</div>
              </div>
            </div>
            <div class="about-us-text">
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
            <div class="blog_question_answer">
              <div class="main-blog__title">What is a USDA growing zone?</div>
              <div class="about_us-text">
                <div class="about_us-p">
                  At Tree Haven, we believe in the power of trees to enhance
                  your property and the environment. Our diverse selection
                  ensures that you can find the perfect trees for your land.
                  Whether you're looking for shade, fruit, or beauty, we've got
                  you covered.
                </div>
                <div class="about_us-p">
                  With over 1000 happy customers served and 5000 trees planted,
                  Tree Haven is the go-to destination for all your tree needs.
                  Join our community of satisfied customers today.
                </div>
                <div class="about_us-p">
                  Our team at Tree Haven is dedicated to providing you with
                  expert advice and care for your trees. We're committed to
                  providing excellent customer support to address any questions
                  or concerns you may have.
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 col-person-about">
            <img
              class="person-about"
              src="/src/assets/img/main/about/person.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script></script>

<style>
.main-about__title {
  font-size: 60px;
  font-family: "Gilroy-ExtraBold", sans-serif;
}
.person-about {
  width: 750px;
  height: 570px;
}
.main-about .row{
  overflow: hidden;
}
.about-recommends {
  background-color: rgba(255, 249, 239, 1);
  color: #383838;
}
.about-recommend , div{
  background-color: rgba(255, 249, 239, 1);
}

.about_us-p {
  background-color: rgba(255, 249, 239, 1);
  color: #383838;
  width: 650px;
}
.about_us-text {
  background-color: rgba(255, 249, 239, 1);
}
.about__text {
  background-color: rgba(255, 249, 239, 1);
  color: #383838;
}
.about-number {
  background-color: rgba(255, 249, 239, 1);
  font-weight: 400;
}
.main-blog__title {
  font-size: 30px;
  color: #1a1a1a;
  font-family: "Gilroy-ExtraBold", sans-serif;
  font-optical-sizing: auto;
}
.person-about__image {
  display: none;
}
.col-person-about {
  display: grid;
}
.activ-link a{
  color: #000;
}
</style>
