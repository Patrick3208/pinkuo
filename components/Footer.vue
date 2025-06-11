<template>
  <footer class="site-footer">
    <div class="grid-container">
      <div class="footer-category">
        <div class="grid">
          <NuxtLink to="/">
            <div class="footer-item">
              <img
                src="~/public/images/logo.png"
                alt=""
                srcset=""
                style="width: 180px; margin-top: 12px"
              />
            </div>
          </NuxtLink>
          <div class="footer-item">
            <NuxtLink to="/product">
            <p class="title">{{ $t("product_center") }}</p>
            </NuxtLink>
            <ul class="footer-column">
              <li class="nav-item">
                <a href="/productveiw/productSystem" target="_self">{{ $t("iot_security") }}</a>
              </li>
              <li class="nav-item">
                <a href="/productveiw/productAi" target="_blank">{{ $t("firecat_ai") }}</a>
              </li>
              <li class="nav-item">
                <a href="https://dingdingkaike.cn/" target="_blank">{{ $t("dingding_learning") }}</a>
              </li>
              <li class="nav-item">
                <a href="/productveiw/productCustomerSystem">{{ $t("kstu_crm") }}</a>
              </li>
            </ul>
          </div>

          <div class="footer-item">
            <NuxtLink to="/itservice">
            <p class="title">{{ $t("it_services") }}</p>
            </NuxtLink>
            <ul class="footer-column">
              <li class="nav-item">
                <a href="/itservice#rd_fullcycle" target="_self">{{ $t("software_development") }}</a>
              </li>
              <li class="nav-item">
                <a href="/itservice#test_depth" target="_blank">{{ $t("software_testing") }}</a>
              </li>
              <li class="nav-item">
                <a href="/itservice#integration_title">{{ $t("system_integration") }}</a>
              </li>
            </ul>
          </div>

          <div class="footer-item">
            <NuxtLink to="/about#introduction"></NuxtLink>
            <p class="title">{{ $t("company_intro") }}</p>
            <ul class="footer-column">
              <li class="nav-item">
                <a href="/about#culture" target="_self">{{ $t("company_profile") }}</a>
              </li>
              <li class="nav-item">
                <a href="/about#history" target="_blank">{{ $t("development_history") }}</a>
              </li>
              <li class="nav-item">
                <a href="/#honors">{{ $t("qualifications") }}</a>
              </li>
            </ul>
          </div>

          <div class="footer-item">
            <NuxtLink to="/contactus#contact_find_us">
            <p class="title">{{ $t("contact_us") }}</p>
            </NuxtLink>
            <ul class="footer-column">
              <li class="nav-item">
                <a href="/contactus#contact_phone" target="_self">0755-3692781</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-about">
        <div class="footer-nav">
          <NuxtLink to="/">
            <img
              style="width: 35px"
              class="logo white"
              src="~/public/images/logo2.png"
            />
          </NuxtLink>
          <ul class="nav-right">
            <li class="nav-item">
              <NuxtLink to="/about">
                <span>{{ $t("about_us2") }}</span>
              </NuxtLink>
            </li>
            <li class="nav-item">
              <a
                href="/contactus"
                target="_self"
                data-ga-category="pc-footer"
                data-ga-action="click"
                data-ga-label="other-about-联系我们"
                aria-label="other-about-联系我们"
                class="ga-data"
                >{{ $t("contact_us") }}</a
              >
            </li>
            <li class="nav-item">
              <a
                href="/contactus"
                target="_blank"
                data-ga-category="pc-footer"
                data-ga-action="click"
                data-ga-label="other-about-招聘精英"
                aria-label="other-about-招聘精英"
                class="ga-data"
                >{{ $t("join_us") }}</a
              >
            </li>
          </ul>
        </div>
        <div class="footer-change-country">
          <img
            src="~/public/images/langs.svg"
            alt=""
            class="icon-locale gray"
          />
          <div
            id="change-locale"
            data-ga-category="pc-footer"
            data-ga-action="click"
            data-ga-label="select-country"
            class="change-locale ga-data"
          >
            <span id="current-region-placeholder">简体中文 / English </span>
          </div>
        </div>
      </div>
      <div class="footer-ad-desc">
        <div class="copyright">
          Copyright © 2019-2026 {{ $t("company_name_full") }}
        </div>
        <div id="J_footer_record" class="footer-record">
          <a
            href="http://beian.miit.gov.cn?site=brandsite&amp;from=footer"
            target="_blank"
            data-ga-category="pc-footer"
            data-ga-action="click"
            data-ga-label="other-link-record"
            class="ga-data"
            >粤ICP备15114995号</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>
