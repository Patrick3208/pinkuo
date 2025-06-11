<template>
  <div class="page-itservice">
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
            {{ $t("it_services") }}
          </h1>
          <p
            data-aos="none"
            data-aos-once="true"
            class="text-ms-16"
            style="
              font-weight: 400;
              font-size: 16px;
              line-height: 24px;
              color: rgba(0, 0, 0, 0.65);
              max-width: 794px;
            "
          >
             {{ $t("gov_projects_intro") }}
          </p>
        </div>

        <div class="atom-component">
          <div class="component">
            <div class="atom-design">
              <div class="vertical-wrapper">
                <h2 class="wrapper-h2"> {{ $t("rd_integration_title") }}</h2>
                <h2 class="wrapper-h21">{{ $t("rd_scope") }}</h2>
                <h2 class="wrapper-h22">
                  {{ $t("rd_mission") }}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div class="section-content">
          <div class="vertical-wrapper" id="rd_fullcycle">
            <h1
              data-aos="none"
              data-aos-once="true"
              style="
                font-size: 48px;
                color: rgba(0, 0, 0, 0.85);
                max-width: 794px;
              "
            >
               {{ $t("rd_fullcycle") }}
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
              {{ $t("rd_team_intro") }}
            </p>
          </div>

          <div class="atom-component-box">
            <img src="~/public/images/u100-Photoroom.png" alt="" />
            <div class="component-text">
              <div class="component-text-h3">
                <h3> {{ $t("phase_enterprise") }}</h3>
                <h3>{{ $t("phase_plan") }}</h3>
              </div>
              <p class="component-text-p">
                {{ $t("phase_plan_desc") }}
              </p>
            </div>
            <div class="component-text cn1">
              <div class="component-text-h3">
                <h3> {{ $t("phase_design") }}</h3>
                <h3>{{ $t("phase_design_desc") }}</h3>
              </div>
              <p class="component-text-p">
                {{ $t("phase_design_detail") }}
              </p>
            </div>
            <div class="component-text cn2">
              <div class="component-text-h3">
                <h3>  {{ $t("phase_dev") }}</h3>
                <h3>{{ $t("phase_dev_desc") }}</h3>
              </div>
              <p class="component-text-p">
                {{ $t("phase_dev_detail") }}
              </p>
            </div>
            <div class="component-text cn3">
              <div class="component-text-h3">
                <h3>{{ $t("phase_ops") }}</h3>
                <h3>{{ $t("phase_ops_desc") }}</h3>
              </div>
              <p class="component-text-p">
                {{ $t("phase_ops_detail") }}
              </p>
            </div>
            <div class="component-text cn4">
              <div class="component-text-h3">
                <h3> {{ $t("phase_deploy") }}</h3>
                <h3> {{ $t("phase_deploy_detail") }}</h3>
              </div>
              <p class="component-text-p">
                {{ $t("phase_deploy_info") }}
              </p>
            </div>
            <div class="component-text cn5">
              <div class="component-text-h3">
                <h3> {{ $t("phase_test") }}</h3>
                <h3>{{ $t("phase_test_desc") }}</h3>
              </div>
              <p class="component-text-p">
                {{ $t("phase_test_info") }}
              </p>
            </div>
            <div class="component-text-txt">  {{ $t("test_fullcycle") }}</div>
          </div>

          <div class="vertical-wrapper" id="test_depth">
            <h1
              data-aos="none"
              data-aos-once="true"
              style="
                font-size: 48px;
                color: rgba(0, 0, 0, 0.85);
                max-width: 794px;
              "
            >
              {{ $t("test_depth") }}
            </h1>
            <div class="divider-container"></div>
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
               {{ $t("test_team_intro") }}
            </p>
          </div>

          <div class="card-container">
            <img src="~/public/images/u1011.png" alt="" />
            <div class="card-container-div">
              <h2> {{ $t("test_compat") }}</h2>
              <p>
                {{ $t("test_compat_desc") }}
              </p>
            </div>
          </div>
          <div class="card-container">
            <img src="~/public/images/u1012.png" alt="" />
            <div class="card-container-div">
              <h2>  {{ $t("test_perf") }}</h2>
              <p>
                 {{ $t("test_perf_desc") }}
              </p>
            </div>
          </div>

          <div class="card-container" style="margin-top: 50px">
            <div class="card-container-div">
              <h2>  {{ $t("test_accept") }}</h2>
              <p>
                {{ $t("test_accept_desc") }}
              </p>
            </div>
            <img src="~/public/images/u1013.png" alt="" />
          </div>

          <div class="card-container">
            <div class="card-container-div">
              <h2> {{ $t("test_security") }}</h2>
              <p>
                 {{ $t("test_security_desc") }}
              </p>
            </div>
            <img src="~/public/images/u1014.png" alt="" />
          </div>

          <div class="vertical-wrapper" id="integration_title">
            <h1
              data-aos="none"
              data-aos-once="true"
              style="
                font-size: 48px;
                color: rgba(0, 0, 0, 0.85);
                max-width: 794px;
              "
            >
               {{ $t("integration_title") }}
            </h1>
            <div
              class="divider-container"
              style="background-color: #1000c5"
            ></div>
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
               {{ $t("integration_intro") }}
            </p>
          </div>

          <div class="card-container" style="align-items: flex-start">
            <img src="~/public/images/u1021.png" alt="" />
            <div
              class="card-container-div"
              style="padding-top: 20px; padding-right: 20px"
            >
              <h2> {{ $t("integration_support") }}</h2>
              <p>
                {{ $t("integration_support_desc") }}
              </p>
            </div>
            <img src="~/public/images/u1022.png" alt="" />
            <div
              class="card-container-div"
              style="padding-top: 20px; padding-right: 20px"
            >
              <h2> {{ $t("integration_services") }}</h2>
              <p>
                {{ $t("integration_services_desc") }}
              </p>
            </div>
          </div>

          <div
            class="card-container"
            style="align-items: flex-start; margin-top: 10px"
          >
            <img src="~/public/images/u1023.png" alt="" />
            <div
              class="card-container-div"
              style="padding-top: 20px; padding-right: 20px"
            >
              <h2> {{ $t("integration_office") }}</h2>
              <p>
                 {{ $t("integration_office_desc") }}
              </p>
            </div>
            <img src="~/public/images/u1024.png" alt="" />
            <div
              class="card-container-div"
              style="padding-top: 20px; padding-right: 20px"
            >
              <h2> {{ $t("integration_resource") }}</h2>
              <p>
                {{ $t("integration_resource_desc") }}
              </p>
            </div>
          </div>

          <div
            class="card-container"
            style="align-items: flex-start; margin-top: 10px"
          >
            <img src="~/public/images/u1025.png" alt="" />
            <div
              class="card-container-div"
              style="padding-top: 20px; padding-right: 20px"
            >
              <h2>  {{ $t("integration_migrate") }}</h2>
              <p>
                 {{ $t("integration_migrate_desc") }}
              </p>
            </div>
            <img src="~/public/images/u1026.png" alt="" />
            <div
              class="card-container-div"
              style="padding-top: 20px; padding-right: 20px"
            >
              <h2>  {{ $t("integration_visual") }}</h2>
              <p>
                 {{ $t("integration_visual_desc") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
