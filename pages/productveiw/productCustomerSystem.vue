<template>
  <div class="page-product-customer-system">
    <section class="tmpl-banner">
      <div class="grid-container">
        <div style="text-align: left" class="text">
          <h1 class="title">{{$t("kuoshuntong_title")}}</h1>
          <p class="content-p">
            {{$t("kuoshuntong_intro")}}
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
            {{$t("kuoshuntong_solution_title")}}
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
           {{$t("kuoshuntong_solution_desc")}} </p>
      </div>
    </section>
    <section class="produt-imgbox">
      <div
        class="items-container"
        style="background-image: url('/images/u3011-Photoroom.png')"
      >
        <div class="item">
          <span class="title"> {{$t("industry_iot")}} </span>
          <span class="subtitle">Internet of Things</span>
        </div>
        <div class="item">
          <span class="title">{{$t("industry_energy")}} </span>
          <span class="subtitle">New Energy</span>
        </div>
        <div class="item">
          <span class="title">{{$t("industry_manufacture")}}</span>
          <span class="subtitle">Manufacturing</span>
        </div>
        <div class="item">
          <span class="title">{{$t("industry_foreign_trade")}}</span>
          <span class="subtitle">Foreign Trade</span>
        </div>
        <div class="item">
          <span class="title">{{$t("industry_retail")}}</span>
          <span class="subtitle">Retail Wholesale</span>
        </div>
        <div class="item">
          <span class="title">{{$t("industry_it")}}</span>
          <span class="subtitle">Software IT</span>
        </div>
      </div>
    </section>
    <section class="produt-imgbox">
      <div
        class="items-container"
        style="background-image: url('/images/u3012-Photoroom.png')"
      >
        <div class="item">
          <span class="title">{{$t("industry_medical")}} </span>
          <span class="subtitle">Medical Treatment</span>
        </div>
        <div class="item">
          <span class="title">{{$t("industry_education")}} </span>
          <span class="subtitle">Education</span>
        </div>
        <div class="item">
          <span class="title">{{$t("industry_finance")}}</span>
          <span class="subtitle">Finance</span>
        </div>
        <div class="item">
          <span class="title">{{$t("industry_environment")}}</span>
          <span class="subtitle">EnvironmentalProtection</span>
        </div>
        <div class="item">
          <span class="title">{{$t("industry_professional")}}</span>
          <span class="subtitle">ProfessionalServices</span>
        </div>
        <div class="item">
          <span class="title">{{$t("industry_logistics")}}</span>
          <span class="subtitle">LogisticsTransportation</span>
        </div>
      </div>
    </section>

    <section class="section-contentbox">
      <div
        class="items-container"
        style="
          background-image: url('/images/u3022-Photoroom.png');
          background-size: 1200px 644px;
        "
      >
        <div class="left-content">
          <h1>
            {{$t("crm_users")}}<br />
             {{$t("crm_users_desc")}}
          </h1>
          <h2>
            {{$t("crm_slogan")}}<br />
             {{$t("crm_benefit_1")}}
          </h2>
        </div>
        <div class="right-content">
          <div class="metric">
            <span> {{$t("crm_benefit_2")}}</span>
            <h1 data-count="37">0%</h1>
          </div>
          <div class="metric">
            <span> {{$t("crm_benefit_3")}}</span>
            <h1 data-count="58">0%</h1>
          </div>
          <div class="metric">
            <span> {{$t("crm_benefit_4")}}</span>
            <h1 data-count="88">0%</h1>
          </div>
          <div class="metric">
            <span> {{$t("crm_benefit_5")}}</span>
            <h1 data-count="96">0%</h1>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
onMounted(() => {
  const animateNumbers = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const elements = document.querySelectorAll(".metric h1");
        elements.forEach((el) => {
          const target = parseInt(el.getAttribute("data-count"), 10);
          let current = 0;
          const duration = 2000; // Animation duration in milliseconds (2 seconds)
          const interval = 20; // Update every 20ms
          const steps = duration / interval; // Total steps
          const increment = target / steps; // Increment per step

          const updateCount = () => {
            current += increment;
            if (current >= target) {
              el.textContent = `${target}%`;
              return;
            }
            el.textContent = `${Math.ceil(current)}%`;
            setTimeout(updateCount, interval);
          };
          updateCount();
        });
        observer.disconnect(); // Run animation once
      }
    });
  };

  const observer = new IntersectionObserver(animateNumbers, {
    threshold: 0.5, // Trigger when 50% of section is visible
  });
  const section = document.querySelector(".section-contentbox");
  if (section) observer.observe(section);

  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>
