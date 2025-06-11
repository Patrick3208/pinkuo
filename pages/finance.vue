<template>
  <div class="page-wrapper">
    <div class="sections-wrapper">
      <div class="section-content">
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
            {{ $t("fintech_title") }}
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
            {{ $t("fintech_desc") }}
          </p>
        </div>
      </div>

      <div class="atom-component">
        <div class="component">
          <div class="atom-design">
            <div class="vertical-wrapper">
              <h2 class="wrapper-h2">{{ $t("fintech_title_repeat") }}</h2>
              <h2 class="wrapper-h21">{{ $t("wealth_finance") }}</h2>
              <h2 class="wrapper-h22">
                {{ $t("wealth_rebuild") }}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div class="atom-design-v1">
        <div class="vertical-wrapper">
          <div class="vertical-card-list">
            <h2 class="headline-text">{{ $t("wealth_empower") }}</h2>
            <p class="text-ms">{{ $t("wealth_rebuild_repeat") }}</p>
          </div>
        </div>

        <div class="atom-component">
          <div class="hero-vertical-wrapper">
            <div class="vertical-card-list">
              <div class="card-list">
                <div class="list-img">
                  <img
                    decoding="async"
                    loading="lazy"
                    class="style__fore-image___1Qau6"
                    src="~/public/images/u811.png"
                    height="300"
                    width="778"
                    style="min-height: 4px"
                  />
                </div>
                <div class="text-content-container">
                  <p>{{ $t("service_bank") }}</p>
                  <p>
                    {{ $t("fintech_desc_intro") }}
                  </p>
                  <br />
                  <br />
                  <sup>* {{ $t("fintech_desc_continue") }} </sup>
                  <p>Bank</p>
                </div>
              </div>
              <div class="card-list">
                <div class="list-img">
                  <img
                    decoding="async"
                    loading="lazy"
                    class="style__fore-image___1Qau6"
                    src="~/public/images/u812.png"
                    height="300"
                    width="778"
                    style="min-height: 4px"
                  />
                </div>
                <div class="text-content-container">
                  <p>{{ $t("service_securities") }}</p>
                  <p>
                    {{ $t("fintech_desc_intro") }}
                  </p>
                  <br />
                  <br />
                  <sup>* {{ $t("fintech_desc_continue") }}</sup>
                  <p>Securities</p>
                </div>
              </div>
              <div class="card-list">
                <div class="list-img">
                  <img
                    decoding="async"
                    loading="lazy"
                    class="style__fore-image___1Qau6"
                    src="~/public/images/u813.png"
                    height="300"
                    width="778"
                    style="min-height: 4px"
                  />
                </div>
                <div class="text-content-container">
                  <p>{{ $t("service_insurance") }}</p>
                  <p>
                    {{ $t("fintech_desc_intro") }}
                  </p>
                  <br />
                  <br />
                  <sup>* {{ $t("fintech_desc_continue") }}</sup>
                  <p>Insurance</p>
                </div>
              </div>
            </div>
            <div class="vertical-card-list">
              <div class="card-list">
                <div class="list-img">
                  <img
                    decoding="async"
                    loading="lazy"
                    class="style__fore-image___1Qau6"
                    src="~/public/images/u814.png"
                    height="300"
                    width="778"
                    style="min-height: 4px"
                  />
                </div>
                <div class="text-content-container">
                  <p>{{ $t("service_credit") }}</p>
                  <p>
                    {{ $t("fintech_desc_intro") }}
                  </p>
                  <br />
                  <br />
                  <sup>* {{ $t("fintech_desc_continue") }}</sup>
                  <p>Credit</p>
                </div>
              </div>
              <div class="card-list">
                <div class="list-img">
                  <img
                    decoding="async"
                    loading="lazy"
                    class="style__fore-image___1Qau6"
                    src="~/public/images/u815.png"
                    height="300"
                    width="778"
                    style="min-height: 4px"
                  />
                </div>
                <div class="text-content-container">
                  <p>{{ $t("service_investment") }}</p>
                  <p>
                    {{ $t("fintech_desc_intro") }}
                  </p>
                  <br />
                  <br />
                  <sup>* {{ $t("fintech_desc_continue") }}</sup>
                  <p>Invest</p>
                </div>
              </div>
              <div class="card-list">
                <div class="list-img">
                  <img
                    decoding="async"
                    loading="lazy"
                    class="style__fore-image___1Qau6"
                    src="~/public/images/u816.png"
                    height="300"
                    width="778"
                    style="min-height: 4px"
                  />
                </div>
                <div class="text-content-container">
                  <p>{{ $t("service_forex") }}</p>
                  <p>
                    {{ $t("fintech_desc_intro") }}
                  </p>
                  <br />
                  <br />
                  <sup>* {{ $t("fintech_desc_continue") }}</sup>
                  <p>Exchange</p>
                </div>
              </div>
            </div>
            <div class="vertical-card-list">
              <div class="card-list">
                <div class="list-img">
                  <img
                    decoding="async"
                    loading="lazy"
                    class="style__fore-image___1Qau6"
                    src="~/public/images/u817.png"
                    height="300"
                    width="778"
                    style="min-height: 4px"
                  />
                </div>
                <div class="text-content-container">
                  <p>{{ $t("service_risk_control") }}</p>
                  <p>
                    {{ $t("fintech_desc_intro") }}
                  </p>
                  <br />
                  <br />
                  <sup>* {{ $t("fintech_desc_continue") }}</sup>
                  <p>Risk Control</p>
                </div>
              </div>
              <div class="card-list">
                <div class="list-img">
                  <img
                    decoding="async"
                    loading="lazy"
                    class="style__fore-image___1Qau6"
                    src="~/public/images/u818.png"
                    height="300"
                    width="778"
                    style="min-height: 4px"
                  />
                </div>
                <div class="text-content-container">
                  <p>{{ $t("service_ecommerce") }}</p>
                  <p>
                    {{ $t("fintech_desc_intro") }}
                  </p>
                  <br />
                  <br />
                  <sup>* {{ $t("fintech_desc_continue") }}</sup>
                  <p>Ecommerce</p>
                </div>
              </div>
              <div class="card-list">
                <div class="list-img">
                  <img
                    decoding="async"
                    loading="lazy"
                    class="style__fore-image___1Qau6"
                    src="~/public/images/u819.png"
                    height="300"
                    width="778"
                    style="min-height: 4px"
                  />
                </div>
                <div class="text-content-container">
                  <p>{{ $t("service_taxation") }}</p>
                  <p>
                    {{ $t("fintech_desc_intro") }}
                  </p>
                  <br />
                  <br />
                  <sup>* {{ $t("fintech_desc_continue") }}</sup>
                  <p>Taxation</p>
                </div>
              </div>
            </div>
            <div class="vertical-card-list">
              <div class="card-list">
                <div class="list-img">
                  <img
                    decoding="async"
                    loading="lazy"
                    class="style__fore-image___1Qau6"
                    src="~/public/images/u8110.png"
                    height="300"
                    width="778"
                    style="min-height: 4px"
                  />
                </div>
                <div class="text-content-container">
                  <p>{{ $t("service_finance") }}</p>
                  <p>
                    {{ $t("fintech_desc_intro") }}
                  </p>
                  <br />
                  <br />
                  <sup>* {{ $t("fintech_desc_continue") }}</sup>
                  <p>Finance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="atom-component-v1">
        <div class="atom-design-v1">
          <h2 class="headline-text">{{ $t("explore_more") }}</h2>
        </div>
        <div class="section-content">
          <div class="hero-horizontal-wrapper">
            <div class="horizontal-card-list">
              <div class="card-container">
                <img src="~/public/images/spt02.png" alt="" />
              </div>
              <div class="card-text">
                <h3>{{ $t("client_sgb_name") }}</h3>
                <p>
                  {{ $t("client_sgb_desc") }}
                </p>
              </div>
            </div>
            <div class="horizontal-card-list">
              <div class="card-container">
                <img src="~/public/images/spt03.png" alt="" />
              </div>
              <div class="card-text">
                <h3>{{ $t("client_cmb_name") }}</h3>
                <p>
                  {{ $t("client_cmb_desc") }}
                </p>
              </div>
            </div>
            <div class="horizontal-card-list">
              <div class="card-container">
                <img src="~/public/images/spt01.png" alt="" />
              </div>
              <div class="card-text">
                <h3>{{ $t("client_southern_name") }}</h3>
                <p>
                  {{ $t("client_southern_desc") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="introduce-box">
        <section class="introduce" id="introduce">
          <div class="company-introduce">
            <div class="module-title-wrap">
              <p class="introduce-p">{{ $t("commitment_title") }}</p>
              <h2 class="introduce-h2">{{ $t("commitment_mission") }}</h2>
              <p class="introduce-p2">{{ $t("commitment_leader") }}</p>
            </div>
            <ul class="card-list">
              <li class="list-li delay-1">
                <img
                  class="normal"
                  alt="为世界带来全新视角"
                  src="~/public/images/icon2.png"
                  style="background-image: unset"
                />
                <h3 class="danger">{{ $t("service_consulting") }}</h3>
                <p>{{ $t("service_it_provider") }}</p>
              </li>
              <li class="list-li delay-2">
                <img
                  class="normal"
                  alt="为世界带来全新视角"
                  src="~/public/images/icon3.png"
                  style="background-image: unset"
                />
                <h3 class="danger">{{ $t("service_product_dev") }}</h3>
                <p>{{ $t("service_innovation") }}</p>
              </li>
              <li class="list-li delay-3">
                <img
                  class="normal"
                  alt="为世界带来全新视角"
                  src="~/public/images/icon1.png"
                  style="background-image: unset"
                />
                <h3 class="danger">{{ $t("service_innovation") }}</h3>
                <p>{{ $t("service_operation") }}</p>
              </li>
            </ul>
            <ul class="card-list">
              <li class="list-li delay-1">
                <img
                  class="normal"
                  alt="为世界带来全新视角"
                  src="~/public/images/icon3.png"
                  style="background-image: unset"
                />
                <h3 class="danger">{{ $t("service_big_data") }}</h3>
                <p>{{ $t("service_tech_empower") }}</p>
              </li>
              <li class="list-li delay-2">
                <img
                  class="normal"
                  alt="为世界带来全新视角"
                  src="~/public/images/icon2.png"
                  style="background-image: unset"
                />
                <h3 class="danger">{{ $t("service_crm") }}</h3>
                <p>{{ $t("service_lifecycle") }}</p>
              </li>
              <li class="list-li delay-3">
                <img
                  class="normal"
                  alt="为世界带来全新视角"
                  src="~/public/images/icon1.png"
                  style="background-image: unset"
                />
                <h3 class="danger">{{ $t("service_testing") }}</h3>
                <p>{{ $t("service_solution") }}</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
