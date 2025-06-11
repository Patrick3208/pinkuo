<template>
  <div class="homepage-banner">
    <!-- <LanguageSwitcher style="margin-top: 100px;" /> -->
    <!-- <h1>{{ $t("welcome") }}</h1>
    <div class="box">11</div>
    <div>
      <h2>{{ counter.count }}</h2>
      <h4>Double: {{ counter.double }}</h4>
      <button @click="counter.increment()">+1</button>
      <div>123</div>
    </div> -->
    <!-- <img src="~/assets/images/logo.png" alt="" srcset="">
      <img src="~/public/images/logo.png" alt="" srcset=""> -->
    <section class="homepage-banner">
      <div class="swiper-container">
        <div class="swiper-btn-prev">
          <button @click="prevSlide">‹</button>
        </div>
        <div class="swiper-btn-next">
          <button @click="nextSlide">›</button>
        </div>
         <NuxtLink to="/finance">
        <div class="swiper-wrapper" ref="swiperWrapper">
         
        </div>
        </NuxtLink>
        <div class="banner-text" ref="bannerText">
          <!-- :style="{ animationDelay: text.animationDelay }" -->
          <h3
            v-for="(text, i) in translatedTexts"
            :key="`${currentIndex}-${i}`"
          >
            {{ $t(text.text) }}
          </h3>
        </div>
        <div class="swiper-scroller">
          <div id="sliderBar">
            <div id="sliderProgress" ref="sliderProgress"></div>
          </div>
          <!-- <div id="listBox">
            <ul class="swiper-scroller-list" ref="scrollerList"></ul>
          </div> -->

          <div id="listBox">
            <ul class="swiper-scroller-list" ref="scrollerList">
              <li
                v-for="(item, i) in visibleNames"
                :key="`listBox-${i}`"
                :class="{ active: i === 1 }"
                @click="
                  handleListItemClick(
                    (currentIndex + i - 1 + images.length) % images.length
                  )
                "
              >
                {{ $t(item.name) }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务 -->
    <section class="introduce">
      <div class="company-introduce">
        <div class="module-title-wrap">
          <p class="introduce-p">{{ $t("our_commitment") }}</p>
          <h2 class="introduce-h2">{{ $t("tech_excellence") }}</h2>
          <p class="introduce-p2">{{ $t("holistic_solutions") }}</p>
        </div>
        <ul class="card-list">
          <li class="list-li delay-1" ref="listItem1">
            <img
              class="normal"
              alt="为世界带来全新视角"
              src="~/public/images/icon3.png"
              style="background-image: unset"
            />
            <h3 class="danger">{{ $t("software_development") }}</h3>
            <p style="line-height: 25px">
              {{ $t("software_development_intro") }}
            </p>
          </li>
          <li class="list-li delay-2" ref="listItem2">
            <img
              class="normal"
              alt="为世界带来全新视角"
              src="~/public/images/icon2.png"
              style="background-image: unset"
            />
            <h3 class="danger">{{ $t("software_testing") }}</h3>
            <p style="line-height: 25px">
             {{ $t("software_testing_intro") }}
            </p>
          </li>
          <li class="list-li delay-3" ref="listItem3">
            <img
              class="normal"
              alt="为世界带来全新视角"
              src="~/public/images/icon1.png"
              style="background-image: unset"
            />
            <h3 class="danger">{{ $t("system_integration") }}</h3>
            <p style="line-height: 25px">
              {{ $t("system_integration_intro") }}
            </p>
          </li>
        </ul>
      </div>
    </section>
    <!-- ~服务 -->

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
                {{$t("iot_security_intro")}}
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
              <div class="main-content">{{ $t("firecat_ai") }}</div>
              <h5 class="subhead">{{ $t("firecat_ai_intro") }}</h5>
            </div>
          </li>
        </NuxtLink>
        <a href="https://dingdingkaike.cn/" target="_blank">
          <li class="list-li" style="background-image: url('images/u303.png')">
            <div class="products-banner-text">
              <div class="top-content">
                <div class="eyebow">DDKK Online Education Platform</div>
              </div>
              <div class="main-content">{{ $t("dingding_learning") }}</div>
              <h5 class="subhead">
                {{ $t("dingding_learning_intro") }}
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
                <div class="eyebow">Kuoshuntong Customer Management Syste</div>
              </div>
              <div class="main-content">{{ $t("kstu_crm") }}</div>
              <h5 class="subhead">
                {{ $t("kstu_crm_intro") }}
              </h5>
            </div>
          </li>
        </NuxtLink>
      </ul>
    </section>
    <!-- ~产品 -->

    <!-- 荣誉 -->
    <section class="homepage-stories-module" id="honors">
      <div class="content">
        <div class="stories-text-box">
          <div class="title">{{ $t("honors") }}</div>
          <div class="desc">
            {{ $t("honors_intro") }}
          </div>
        </div>
        <div class="stories-module">
          <div class="scroll-wrapper">
            <img src="~/public/images/u34.png" alt="" />
            <img src="~/public/images/u34.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- ~荣誉 -->

    <!-- 案例 -->
    <section class="homepage-child-module">
      <div class="content">
        <div class="title">{{ $t("customer_cases") }}</div>
        <div class="desc">
          {{ $t("customer_cases_intro") }}
        </div>
        <ul class="stories-module-list">
          <li
            class="stories-module-liitem"
            style="background-image: url('images/u361-Photoroom.png')"
          >
            <h2 style="margin-left: 20px; margin-bottom: 20px">{{ $t("clients.sgcc") }}</h2>
            <p style="font-size: 16px; margin: 0 20px 45px">
              {{ $t("clients_description.inspur") }}
            </p>
          </li>
          <li
            class="stories-module-liitem"
            style="background-image: url('images/u362-Photoroom.png')"
          >
            <h2 style="margin-left: 20px; margin-bottom: 20px">{{ $t("clients.inspur") }}</h2>
            <p style="font-size: 16px; margin: 0 20px 45px">
               {{ $t("clients_description.inspur_alt") }}
            </p>
          </li>
          <li
            class="stories-module-liitem"
            style="background-image: url('images/u363-Photoroom.png')"
          >
            <h2 style="margin-left: 20px; margin-bottom: 20px">{{ $t("clients.shenzhen_customs") }}</h2>
            <p style="font-size: 16px; margin: 0 20px 45px">
               {{ $t("clients_description.shenzhen_customs") }}
            </p>
          </li>
          <li
            class="stories-module-liitem"
            style="background-image: url('images/u364-Photoroom.png')"
          >
            <h2 style="margin-left: 20px; margin-bottom: 20px">{{ $t("clients.neu") }}</h2>
            <p style="font-size: 16px; margin: 0 20px 45px">
               {{ $t("clients_description.neu") }}
            </p>
          </li>
          <li
            class="stories-module-liitem"
            style="background-image: url('images/u365-Photoroom.png')"
          >
            <h2 style="margin-left: 20px; margin-bottom: 20px">{{ $t("clients.sgcc") }}</h2>
            <p style="font-size: 16px; margin: 0 20px 45px">
               {{ $t("clients_description.beixinyuan") }}
            </p>
          </li>
          <li
            class="stories-module-liitem"
            style="background-image: url('images/u366-Photoroom.png')"
          >
            <h2 style="margin-left: 20px; margin-bottom: 20px">{{ $t("clients.ouc") }}</h2>
            <p style="font-size: 16px; margin: 0 20px 45px">
               {{ $t("clients_description.ouc") }}
            </p>
          </li>
        </ul>
      </div>
    </section>
    <!-- ~案例 -->
  </div>
</template>
<script setup lang="ts">
// const counter = useCounterStore();

const visibleNames = computed(() => {
  const result = [];
  for (let i = -1; i <= 3; i++) {
    const index = (i + images.length + currentIndex.value) % images.length;
    result.push(images[index]);
  }
  return result;
});

const handleListItemClick = (index: number) => {
  if (index === currentIndex.value) return;
  currentIndex.value = index;
  updateImmediately();
  restartTimer();
};

// 服务

const listItem1 = ref<HTMLElement | null>(null);
const listItem2 = ref<HTMLElement | null>(null);
const listItem3 = ref<HTMLElement | null>(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  listItem1.value && observer.observe(listItem1.value);
  listItem2.value && observer.observe(listItem2.value);
  listItem3.value && observer.observe(listItem3.value);
});
// ~服务

// 产品

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  const textBlocks = document.querySelectorAll(".products-banner-text");
  textBlocks.forEach((el) => observer.observe(el));
});
// ~产品

// 图片轮播
// import logo from '~/assets/images/logo.png'
const images = [
  // { url: logo, texts: ["信息1", "AAAAA", "aaaa", "asdf"], name: "项目 1" },
  {
    url: "images/banner1-Photoroom.png",
    texts: [
      "support_sgb",
      "create_digital_finance_future",
      "join_sgb_digital_finance",
      "learn_more",
    ],
    name: "sgb_name",
  },
  {
    url: "images/banner2-Photoroom.png",
    texts: [
      "award_2023",
      "industry_leader",
      "certified_enterprise",
      "learn_more",
    ],
    name: "specialized_enterprise",
  },
  {
    url: "images/banner3-Photoroom.png",
    texts: [
      "r_d_leader_with_patents",
      "preferred_by_listed_companies",
      "leading_r_d_provider",
      "learn_more",
    ],
    name: "r_d_service",
  },
  {
    url: "images/banner4-Photoroom.png",
    texts: [
      "ai_enabled",
      "intelligent_leading",
      "tech_power_for_brand",
      "learn_more",
    ],
    name: "ai_enabled",
  },
];

let currentIndex = ref(0);
let timer: any = null;
const interval = 5000;

// DOM refs
const swiperWrapper: any = ref(null);
const bannerText: any = ref(null);
const scrollerList: any = ref(null);
const sliderProgress: any = ref(null);
// 创建轮播图
const createSlides = () => {
  if (swiperWrapper.value) {
    images.forEach((img, index) => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      slide.style.backgroundImage = `url(${img.url})`;
      if (index === 0) slide.classList.add("active");
      swiperWrapper.value.appendChild(slide);
    });
  }
};
const translatedTexts = ref<TranslatedText[]>([]); // 明确声明类型
interface TranslatedText {
  text: string; // 翻译后的文本
  animationDelay: string; // 动画延迟
}
// 更新轮播图和文字
const updateSlideAndText = () => {
  if (swiperWrapper.value) {
    document
      .querySelectorAll(".swiper-slide")
      .forEach((s, i) =>
        s.classList.toggle("active", i === currentIndex.value)
      );
  }

  // 使用 $t() 获取翻译文本并更新 translatedTexts
  const texts = images[currentIndex.value].texts.map((textKey, i) => {
    return {
      text: textKey, // 使用 $t() 获取翻译文本
      animationDelay: `${0.2 + i * 0.2}s`,
    };
  });

  // 更新 translatedTexts，Vue 会自动渲染更新
  translatedTexts.value = texts;
};
// 初始化名称列表
const initList = () => {
  for (let i = -1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent =
      images[(i + images.length + currentIndex.value) % images.length].name;
    if (i === 0) li.classList.add("active");
    scrollerList.value.appendChild(li);
  }
};
// 更新名称列表
const updateList = (offset = 0) => {
  const lis = scrollerList.value.querySelectorAll("li");
  for (let i = 0; i < lis.length; i++) {
    const realIndex =
      (currentIndex.value + i - 1 + offset + images.length) % images.length;
    lis[i].textContent = images[realIndex].name;
    lis[i].className = "";
    if (i === 1) lis[i].classList.add("active");
    lis[i].onclick = () => {
      if (realIndex === currentIndex.value) return;
      currentIndex.value = realIndex;
      updateImmediately();
      restartTimer();
    };
  }
};
// 滚动到下一个名称列表
const scrollNameListNext = () => {
  scrollerList.value.style.transition = "transform 0.4s ease";
  scrollerList.value.style.transform = "translateY(-30px)";
  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
    scrollerList.value.style.transition = "none";
    scrollerList.value.style.transform = "translateY(0)";
    // updateList(0);
    updateSlideAndText();
  }, 400);
};
// 动画
const updateImmediately = () => {
  // updateList(0);
  updateSlideAndText();
  scrollerList.value.style.transition = "none";
  scrollerList.value.style.transform = "translateY(0)";
};
// 滑动
const update = () => {
  scrollNameListNext();
};
// 更新轮播图和文字
const startProgress = () => {
  let start = performance.now();
  function frame(now: any) {
    const elapsed = now - start;
    const percent = Math.min(elapsed / interval, 1);
    sliderProgress.value.style.height = `${percent * 100}%`;
    if (percent < 1) {
      timer = requestAnimationFrame(frame);
    } else {
      nextSlide();
    }
  }
  sliderProgress.value.style.height = "0%";
  cancelAnimationFrame(timer);
  timer = requestAnimationFrame(frame);
};
// 重置计时器
const restartTimer = () => {
  cancelAnimationFrame(timer);
  startProgress();
};
// 下一页
const nextSlide = () => {
  update();
  restartTimer();
};

// 上一页
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
  updateImmediately();
  restartTimer();
};

// ~图片轮播

onMounted(() => {
  createSlides();
  // initList();
  // updateList(0);
  updateImmediately();
  startProgress();
});

onBeforeUnmount(() => {
  cancelAnimationFrame(timer);
});
</script>
<style lang="scss" scoped>
// .box {
//   padding: 1rem;
//   background-color: $primary;
// }
</style>
