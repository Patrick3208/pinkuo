<template>
  <div class="page-product-ai">
    <section class="tmpl-banner">
      <div class="grid-container">
        <div style="text-align: left" class="text">
          <h1 class="title">{{$t("huoyanmao_intro_title")}}</h1>
          <p class="content-p">
            {{$t("huoyanmao_intro_desc")}}
          </p>
        </div>
      </div>
    </section>
    <section class="section-content">
      <div class="vertical-wrapper">
        <h1
          data-aos="none"
          data-aos-once="true"
          style="font-size: 48px; color: rgba(0, 0, 0, 0.85); max-width: 794px"
        >
          {{$t("ai_tryon_title")}}
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
            {{$t("ai_tryon_features")}}
        </p>
      </div>
    </section>
    <section
      class="product-box"
      style="background-image: url('/images/u193-Photoroom.png')"
    >
      <div class="product-box-item" style="padding: 100px">
        <h3> {{$t("model_custom_title")}}</h3>
        <p>
         {{$t("model_custom_desc")}}
        </p>
      </div>
    </section>
    <section
      class="product-box"
      style="background-image: url('/images/u194-Photoroom.png')"
    >
      <div class="product-box-item" style="right: 40px; top: 80px">
        <h3>  {{$t("cloth_detail_title")}}</h3>
        <p>
          {{$t("cloth_detail_desc")}}
        </p>
      </div>
    </section>
    <section
      class="product-box"
      style="background-image: url('/images/u196-Photoroom.png')"
    >
      <div
        class="product-box-item"
        style="right: 100px; top: 10px; max-width: 1000px; text-align: center"
      >
        <h3>  {{$t("scene_custom_title")}}</h3>
        <p>
          {{$t("scene_custom_desc")}} </p>
      </div>
    </section>

    <section
      class="product-box"
      style="background-image: url('/images/u197-Photoroom.png')"
    >
      <div
        class="product-box-item"
        style="right: 100px; top: 10px; max-width: 1000px; text-align: center"
      >
        <h3>  {{$t("tryon_experience_title")}}</h3>
        <p>
           {{$t("tryon_experience_desc")}}
        </p>
      </div>
    </section>

    <!-- 
    vue内图片放 \public\images  url('/images/u215-Photoroom.png')  
    scss内图片放 \assets\images url("../images/u80-Photoroom.png");
    -->
    <section class="section-content">
      <div class="vertical-wrapper">
        <h1
          data-aos="none"
          data-aos-once="true"
          style="font-size: 48px; color: rgba(0, 0, 0, 0.85); max-width: 794px"
        >
          {{$t("data_analysis_title")}}
        </h1>
      </div>
    </section>
    <section
      class="product-box"
      style="background-image: url('/images/u215-Photoroom.png') ;height: 645px;"
    >
      <div
        class="product-box-item"
        style="right: 100px; top: 5px; max-width: 1000px; text-align: center"
      >
        <h3> {{$t("data_analysis_title")}}</h3>
        <p>
           {{$t("data_analysis_desc")}}
        </p>
      </div>
    </section>
  </div>
</template>
