<template>
  <div class="page-product">
    <div class="sections-wrapper">
      <div class="section-content" style="margin-bottom: 96px">
        <div class="vertical-wrapper">
          <h1
            data-aos="none"
            data-aos-once="true"
            style="
              font-size: 48px;
              color: rgba(0, 0, 0, 0.85);
              max-width: 794px;
            "
          >
            {{ $t("product_center") }}
          </h1>
          <p
            data-aos="none"
            data-aos-once="true"
            class="text-ms-16 style__description___2V1Q7"
            style="
              font-weight: 400;
              font-size: 16px;
              line-height: 24px;
              color: rgba(0, 0, 0, 0.65);
              max-width: 794px;
            "
          >
            {{ $t("dev_team_intro") }}
          </p>
        </div>
        <div class="atom-component">
          <div class="component">
            <div class="atom-design">
              <div class="vertical-wrapper">
                <h2 class="wrapper-h2">{{ $t("product_mgmt_systems") }}</h2>
                <h2 class="wrapper-h21">{{ $t("product_list") }}</h2>
                <h2 class="wrapper-h22">
                  <!-- 创新重构系统管理生态、科技赋能IT服务 -->
                </h2>
              </div>
            </div>
          </div>
        </div>

        <!-- 产品 -->
        <section class="homepage-products-banner">
          <ul class="products-banner-list">
            <NuxtLink to="/productveiw/productSystem">
              <li
                class="list-li"
                style="background-image: url('images/u301-Photoroom.png')"
              >
                <div class="products-banner-text">
                  <div class="top-content">
                    <div class="eyebow">loT Security Syster</div>
                  </div>
                  <div class="main-content">{{ $t("iot_security") }}</div>
                  <h5 class="subhead">
                    {{ $t("iot_security_desc") }}
                  </h5>
                </div>
              </li>
            </NuxtLink>
            <NuxtLink to="/productveiw/productAi">
              <li
                class="list-li"
                style="background-image: url('images/u302-Photoroom.png')"
              >
                <div class="products-banner-text">
                  <div class="top-content">
                    <div class="eyebow">Huoyanmao Al</div>
                  </div>
                  <div class="main-content">{{ $t("huoyan_ai") }}</div>
                  <h5 class="subhead">{{ $t("huoyan_ai_desc") }}</h5>
                </div>
              </li>
            </NuxtLink>
            <a href="https://dingdingkaike.cn/" target="_blank">
              <li
                class="list-li"
                style="background-image: url('images/u303.png')"
              >
                <div class="products-banner-text">
                  <div class="top-content">
                    <div class="eyebow">DDKK Online Education Platform</div>
                  </div>
                  <div class="main-content">{{ $t("edu_platform") }}</div>
                  <h5 class="subhead">
                    {{ $t("edu_platform_desc") }}
                  </h5>
                </div>
              </li>
            </a>
            <NuxtLink to="/productveiw/productCustomerSystem">
              <li
                class="list-li"
                style="background-image: url('images/u304-Photoroom.png')"
              >
                <div class="products-banner-text">
                  <div class="top-content">
                    <div class="eyebow">
                      Kuoshuntong Customer Management Syste
                    </div>
                  </div>
                  <div class="main-content">{{ $t("crm_kuoshuntong") }}</div>
                  <h5 class="subhead">
                    {{ $t("crm_kuoshuntong_desc") }}
                  </h5>
                </div>
              </li>
            </NuxtLink>
          </ul>
        </section>
        <!-- ~产品 -->
      </div>
    </div>
  </div>
</template>
