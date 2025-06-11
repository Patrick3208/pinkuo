<template>
  <header>
    <!-- <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about#introduction">About</NuxtLink></li>
        <li><LanguageSwitcher /></li>
      </ul>
    </nav> -->
    <nav class="navbar" :class="[{ 'navbar-bg-br': isScrolled }]">
      <div class="navbar-container">
        <div class="navbar-header">
          <NuxtLink to="/">
            <span class="navbar-brand"
              ><span class="navbar-brand-logo"></span
            ></span>
          </NuxtLink>
        </div>
        <div class="site-header-navbar">
          <ul class="navbar-category">
            <li class="category-item">
              <NuxtLink to="/" class="nav-item-title">{{ $t("home") }}</NuxtLink>
            </li>
            <li class="category-item">
              <NuxtLink to="/finance" class="nav-item-title">{{ $t("fintech") }}</NuxtLink>
            </li>
            <li class="category-item">
              <NuxtLink to="/itservice" class="nav-item-title"
                >{{ $t("it_services") }}</NuxtLink
              >
            </li>
            <li class="category-item">
              <NuxtLink to="/product" class="nav-item-title">{{ $t("product_center") }}</NuxtLink>
            </li>
            <li class="category-item">
              <NuxtLink to="/customer" class="nav-item-title"
                >{{ $t("customer_cases") }}</NuxtLink
              >
            </li>
            <li class="category-item">
              <NuxtLink to="/contactus" class="nav-item-title"
                >{{ $t("contact_us") }}</NuxtLink
              >
            </li>
            <li class="category-item">
              <NuxtLink to="/about#introduction" class="nav-item-title"
                >{{ $t("about_us") }}</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div style="line-height: 64px">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup lang="ts">
const isScrolled = ref(false);
const route = useRoute();
function handleScroll() {
  isScrolled.value = window.scrollY > 1 || route.path !== "/"; // 滚动超过 10px 就加 class
}
watch(
  () => route.path,
  () => {
    handleScroll();
  }
);
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // 初始判断（刷新时也能生效）
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
