<template>
  <div id="__layout">
    <div class="layout-wrapper" data-v-5357e832="">
      <div class="container" data-v-5357e832="">
        <div class="menu gray g0" data-v-5357e832="">
          <NuxtLink to="/">
            <div
              class="logo"
              :class="{
                'logo-white': ['#talent', '#story'].includes(activeHash),
              }"
              data-v-5357e832=""
            >
              <!-- <a href="/" data-v-5357e832=""></a> -->
            </div>
          </NuxtLink>
          <div class="menu-content" data-v-5357e832="">
            <ul
              class="menu-group"
              :class="[
                {
                  'menu-group-white': ['#talent', '#story'].includes(
                    activeHash
                  ),
                },
              ]"
              data-v-5357e832=""
            >
              <li
                class=""
                :class="{
                  active: activeHash === '#introduction',
                  'all-bold': activeHash === '#introduction',
                }"
                data-v-5357e832=""
              >
                <a href="#introduction" data-v-5357e832=""> {{ $t("about_company_intro") }} </a>
              </li>
              <li
                data-v-5357e832=""
                class=""
                :class="{
                  active: activeHash === '#culture',
                  'all-bold': activeHash === '#culture',
                }"
              >
                <a href="#culture" data-v-5357e832="">  {{ $t("about_culture") }}  </a>
              </li>
              <li
                data-v-5357e832=""
                class=""
                :class="{
                  active: activeHash === '#talent',
                  'all-bold': activeHash === '#talent',
                }"
              >
                <a href="#talent" data-v-5357e832="">  {{ $t("about_social_responsibility") }} </a>
              </li>
              <li
                data-v-5357e832=""
                class=""
                :class="{
                  active: activeHash === '#story',
                  'all-bold': activeHash === '#story',
                }"
              >
                <a href="#story" data-v-5357e832="">  {{ $t("about_founder_message") }}  </a>
              </li>
            </ul>
            <ul
              class="menu-group"
              :class="[
                {
                  'menu-group-white': ['#talent', '#story'].includes(
                    activeHash
                  ),
                },
              ]"
              data-v-5357e832=""
            >
              <li
                data-v-5357e832=""
                class=""
                :class="{
                  active: activeHash === '#history',
                  'all-bold': activeHash === '#history',
                }"
              >
                <a href="#history" data-v-5357e832="">  {{ $t("about_timeline") }}  </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pages">
          <div id="introduction" class="page page-1" data-v-5357e832="">
            <section class="pined-page active" data-v-5357e832="">
              <div class="note note-page-1" data-v-5357e832="">
                <p>
                   {{ $t("about_company_full") }} 
                  <br />
                  <br />
                  {{ $t("about_certification") }}  {{ $t("about_team_intro") }}  {{ $t("about_project_experience") }} 
                  <br />
                  <br />
                   {{ $t("about_industry_stats") }} 
                </p>
              </div>
            </section>
          </div>
          <div id="culture" class="page page-2" data-v-5357e832="">
            <section class="pined-page" data-v-5357e832="">
              <div class="note-container" data-v-5357e832="">
                <div class="note-inner" data-v-5357e832="">
                  <div class="content" data-v-5357e832="">
                    <h2 data-v-5357e832="">  {{ $t("about_culture") }} </h2>
                    <div class="note note-page-2" data-v-5357e832="">
                      <p>
                          {{ $t("about_team_strength") }} 
                      </p>
                      <p>   {{ $t("about_team_diversity") }} </p>
                      <p>
                        {{ $t("about_team_value") }} 
                      </p>
                      <p>
                          {{ $t("about_integration_service") }}  {{ $t("about_integration_strength") }} 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cultural-dji" data-v-5357e832=""></div>
            </section>
          </div>
          <div id="talent" class="page page-2 page-3" data-v-5357e832="">
            <section class="pined-page" data-v-5357e832="">
              <div class="cultural-dji" data-v-5357e832=""></div>
              <div class="note-container" data-v-5357e832="">
                <div class="note-inner" data-v-5357e832="">
                  <div class="content" data-v-5357e832="">
                    <h2 data-v-5357e832=""> {{ $t("about_social_responsibility") }}</h2>
                    <div
                      class="note note-page-2 note-page-3"
                      data-v-5357e832=""
                    >
                      <p>
                        <strong>{{ $t("csr_finance") }}</strong
                        ><span
                          >{{ $t("csr_finance_detail") }}</span
                        >
                      </p>
                      <p>
                        <strong>{{ $t("csr_it_service") }}</strong
                        ><span
                          >{{ $t("csr_it_clients") }}</span
                        >
                      </p>
                      <p>
                        <strong>{{ $t("csr_rnd") }}</strong
                        ><span
                          >{{ $t("csr_rnd_detail") }}</span
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div id="story" class="page page-4" data-v-5357e832="">
            <section class="pined-page active" data-v-5357e832="">
              <div class="note note-page-4" data-v-5357e832="">
                <p>{{ $t("founder_message_placeholder") }}</p>

                <span>——{{ $t("company_name") }}</span>
              </div>
            </section>
          </div>

          <div id="history" class="timeline-container">
            <div
              v-for="(item, index) in years"
              :key="index"
              class="year"
              :class="{ active: activeYear === item.full }"
              @click="activate(item.full)"
              data-v-5357e832=""
              style="padding-top: 50px"
            >
              <h3>{{ activeYear === item.full ? item.full : item.short }}</h3>

              <div class="info" v-if="activeYear === item.full">
                <div v-for="line in item.text" :key="line">
                  • {{ $t(line) }}
                </div>
              </div>

              <!-- 图片轮播 -->
              <div
                v-if="
                  activeYear === item.full && item.imgs && item.imgs.length > 0
                "
                class="carousel-wrapper"
              >
                <div
                  class="carousel-track"
                  :style="{
                    transform: `translateX(-${activeImageIndex * 100}%)`,
                  }"
                >
                  <img
                    v-for="(img, i) in item.imgs"
                    :key="i"
                    :src="img"
                    alt=""
                    class="carousel-img"
                  />
                </div>

                <!-- 左右按钮（原样） -->
                <button
                  v-if="item.imgs.length > 1"
                  class="nav-btn prev"
                  @click.stop="prevImage(item.imgs)"
                >
                  ‹
                </button>
                <button
                  v-if="item.imgs.length > 1"
                  class="nav-btn next"
                  @click.stop="nextImage(item.imgs)"
                >
                  ›
                </button>
                <!-- ~左右按钮（原样） -->
              </div>
              <!-- ~图片轮播 -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: false, // 禁用布局系统
});

//  选中的年份
const activeYear = ref("2023");
//  ~选中的年份
// 时间轴数据
const years = [
  {
    short: "23",
    full: "2023",
    text: ["iso_certification"],
    imgs: [
      "images/Snipasteabout01.png",
      "images/Snipasteabout02.png"
    ],
  },
  {
    short: "22",
    full: "2022",
    text: ["energy_research_collaboration"],
    imgs: [
     
      "images/Snipasteabout04.png"
    ],
  },
  {
    short: "21",
    full: "2021",
    text: ["iot_security_cooperation"],
    imgs: [], // 没图时不显示轮播
  },
  {
    short: "20",
    full: "2020",
    text: ["high_tech_enterprise"],
    imgs: [], // 没图时不显示轮播
  },
  {
    short: "19",
    full: "2019",
    text: ["kstu_crm_release"],
    imgs: [], // 没图时不显示轮播
  },
  {
    short: "18",
    full: "2018",
    text: ["ip_certification"],
    imgs: [], // 没图时不显示轮播
  },
  {
    short: "17",
    full: "2017",
    text: ["national_support"],
    imgs: [], // 没图时不显示轮播
  },
  {
    short: "16",
    full: "2016",
    text: ["edu_platform_launch"],
    imgs: [ "images/Snipasteabout03.png",], // 没图时不显示轮播
  },
  {
    short: "15",
    full: "2015",
    text: ["course_device_launch"],
    imgs: [], // 没图时不显示轮播
  },
  {
    short: "14",
    full: "2014",
    text: ["company_established"],
    imgs: [], // 没图时不显示轮播
  },
];
// ~时间轴数据

// 选中年份的点击事件
function activate(year: string) {
  console.log(year);
  activeYear.value = year;
}
// ~选中年份的点击事件

// 图片轮播
const activeImageIndex = ref(0);

watch(activeYear, () => {
  activeImageIndex.value = 0;
});

// 下一页按钮
function nextImage(imgs: string[]) {
  if (!imgs || imgs.length <= 1) return;
  activeImageIndex.value = (activeImageIndex.value + 1) % imgs.length;
}
// ~下一页按钮

// 上一页按钮
function prevImage(imgs: string[]) {
  if (!imgs || imgs.length <= 1) return;
  activeImageIndex.value =
    (activeImageIndex.value - 1 + imgs.length) % imgs.length;
}
// ~上一页按钮

// ~图片轮播

// ~选中的年份

// 侧边栏的点击事件
const activeHash = ref("");

// 初始化 & 监听 hash 改变
function updateActiveHash() {
  activeHash.value = window.location.hash;
}

const isManualScrolling = ref(false);

function scrollToSection(hash: string) {
  const section = document.getElementById(hash.replace("#", ""));
  if (section) {
    isManualScrolling.value = true;
    section.scrollIntoView({ behavior: "smooth" });
    // 不直接设置 hash，等 onScroll 判定到距离后再切换
    setTimeout(() => {
      isManualScrolling.value = false;
    }, 700); // 视滚动动画时长调整
  }
}

const sectionList = [
  { id: "introduction", hash: "#introduction" },
  { id: "culture", hash: "#culture" },
  { id: "talent", hash: "#talent" },
  { id: "story", hash: "#story" },
  { id: "history", hash: "#history" },
];

function onScroll() {
  if (isManualScrolling.value) return;
  let found = false;
  for (const section of sectionList) {
    const el = document.getElementById(section.id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 300 && rect.bottom > 100) {
        if (window.location.hash !== section.hash) {
          history.replaceState(history.state, "", section.hash);
          activeHash.value = section.hash;
        }
        found = true;
        break;
      }
    }
  }
  if (!found && window.location.hash) {
    history.replaceState(history.state, "", " ");
    activeHash.value = "";
  }
}

onMounted(() => {
  updateActiveHash();
  window.addEventListener("scroll", onScroll, { passive: true });
  setTimeout(onScroll, 100);
});
onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
// 侧边栏的点击事件
</script>
<style lang="scss" scoped></style>
