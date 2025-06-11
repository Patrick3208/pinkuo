<template>
  <div class="page-customer">
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
            {{$t("case_title")}}
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
             {{$t("case_clients")}}
          </p>
        </div>
        <div class="atom-component">
          <div class="component">
            <div class="atom-design">
              <div class="vertical-wrapper">
                <h2 class="wrapper-h2"> {{$t("dev_title")}}</h2>
                <h2 class="wrapper-h21">{{$t("dev_services")}}</h2>
                <h2 class="wrapper-h22">
                  {{$t("dev_intro")}}
                </h2>
              </div>
            </div>
          </div>
        </div>
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
             {{$t("case_all")}}
          </h1>
          <div class="divider-container"></div>
          <!-- <p
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
            品阔的软件测试团队拥有丰富的技术经验,通过严格的测试流程和先进的测试工具,我们确保软件的质量和稳定性,帮助
            您发现并解决潜在的问题,提升用户体验。无论是功能测试、性能测试还是安全测试,我们都致力于为您提供全面、高
            效、专业的解决方案,确保您的软件在市场中脱颖而出。
          </p> -->
        </div>
        <div class="list-box">
          <div class="item-img">
            <div class="item-img-item">
              <img src="~/public/images/customer21.png" alt="" srcset="" />
              <span>    {{$t("client_inspur")}} </span>
            </div>
            <div class="item-img-item">
              <img src="~/public/images/customer22.png" alt="" srcset="" />
              <span> {{$t("client_state_grid")}}  </span>
            </div>
            <div class="item-img-item">
              <img src="~/public/images/customer23.png" alt="" srcset="" />
              <span> {{$t("client_military")}}</span>
            </div>
            <div class="item-img-item">
              <img src="~/public/images/customer24.png" alt="" srcset="" />
              <span>{{$t("client_neu")}} </span>
            </div>
            <div class="item-img-item">
              <img src="~/public/images/customer25.png" alt="" srcset="" />
              <span>{{$t("client_northcom")}} </span>
            </div>
            <div class="item-img-item">
              <img src="~/public/images/customer26.png" alt="" srcset="" />
              <span>{{$t("client_etron")}} </span>
            </div>

            <div class="item-img-item">
              <img src="~/public/images/customer27.png" alt="" srcset="" />
              <span>{{$t("client_taice")}}  </span>
            </div>

            <div class="item-img-item">
              <img src="~/public/images/customer28.png" alt="" srcset="" />
              <span>{{$t("client_falcon")}} </span>
            </div>

            <div class="item-img-item">
              <img src="~/public/images/customer29.png" alt="" srcset="" />
              <span>{{$t("client_zhongxing")}} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
