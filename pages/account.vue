<template>
  <div class="container">
    <h3>บัญชี</h3>
    <div class="row pa-3 mt-5">
      <NuxtLink class="col menuIndex" to="/account/privacypolicy"
        >นโยบายความเป็นส่วนตัว</NuxtLink
      >
      <NuxtLink class="col menuIndex" to="/account/help"
        >ความช่วยเหลือ</NuxtLink
      >
      <NuxtLink class="col menuIndex" to="/account/requestpostponeticket"
        >เกี่ยวกับ GOBUZBIZZ</NuxtLink
      >
      <NuxtLink class="col menuIndex" to="/account/returnticket"
        >คืนตั๋ว</NuxtLink
      >
      <NuxtLink class="col menuIndex" to="/account/termandcondition"
        >ข้อกำหนดการใช้งาน</NuxtLink
      >
      <NuxtLink class="col menuIndex" to="/account/ticketentry"
        >ตั้งค่า</NuxtLink
      >
    </div>
    <div>
      <NuxtChild />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
