<template>
  <div class="header">
    <div class="container">
      <div class="header-menu">
        
          <a class="logo" href="#/components/pages/main"
            ><img src="../assets/img/header/Logo.png" alt="#"
          /></a>

          <nav>
            <ul class="menu">
              <a href="#/components/pages/main">
                <li class="menu-title">Homepage</li>
              </a>

              <li class="menu-title catalog">
                <a href="#">
                  <span
                    ><img
                      id="catalog"
                      src="../assets/img/header/catalog.png"
                      alt="catalog"
                    />
                  </span>
                </a>
                Catalog
              </li>

              <a href="#/components/pages/about">
                <li class="menu-title">About us</li>
              </a>
              <a href="#/components/pages/blog">
                <li class="menu-title">Blog</li>
              </a>
              <a href="#/components/pages/billing">
                <li class="menu-title">Billing & Shipping</li>
              </a>
            </ul>
          </nav>

          <div class="menu-button-search-basket">
            <a href="#/components/pages/about">
            <button class="btn text-button">contact us</button>
          </a>
            <div class="menu-img">
              <a href="#"
                ><img
                  class="search"
                  src="../assets/img/header/search.png"
                  alt="search"
                  width="24px"
                  height="24px"
              /></a>
              <a href="#"
                ><img
                  src="../assets/img/header/backet.png"
                  alt="backet"
                  width="24px"
                  height="24px"
              /></a>
              <a href="#" class="modile_element"
                ><img
                  src="../assets/img/header/menu-element.png"
                  alt="backet"
                  width="24px"
                  height="24px"
              /></a>
            </div>
          </div>
      
        <br />
      </div>
    </div>
  </div>
</template>
<style>
.header-menu {
  display: flex;
  margin: 0;
  height: 98px;
  border-bottom: 2px solid #584528;
}
.menu-button-search-basket{
  float: right;
  margin-left: 260px;
  width: 300px;
}
.modile_element{
  display: none;
}
</style>

<script setup></script>
