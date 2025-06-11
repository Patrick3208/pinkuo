<template>
   <select v-model="locale" @change="switchLocale" class="custom-select">
    <option v-for="lang in locales" :key="lang.code" :value="lang.code">
      {{ lang.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();

const switchLocale = () => {
  setLocale(locale.value);
};
</script>

<style scoped>
select{
  background-color: transparent;
    border: none;
    color: #f9a025;
}
.custom-select {
  /* 去掉原生箭头样式 */
  /* appearance: none;  */
  /* 去掉背景色 */
  background: none; 
  /* 去掉边框 */
  border: none;     
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  /* 选中时不出现蓝边 */
  outline: none;    
  color: #f9a025;
}

.custom-select:focus {
  outline: none;
   /* 防止浏览器默认高亮 */
  box-shadow: none;
}

.custom-select option {
  /* 保证下拉项可见 */
  background-color: white; 
  color: #f9a025;
}
</style>
