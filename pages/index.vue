<template>
  <div class="container">
    <h2>หน้าหลัก</h2>
    <div class="row pa-3 mt-4">
      <NuxtLink class="col menuIndex" to="/home/sellticket"
        >จำหน่ายตั๋ว</NuxtLink
      >
      <NuxtLink class="col menuIndex" to="/home/postponeticket"
        >เลื่อนตั๋ว</NuxtLink
      >
      <NuxtLink class="col menuIndex" to="/home/requestpostponeticket"
        >คำขอเลื่อนตั๋ว</NuxtLink
      >
      <NuxtLink class="col menuIndex" to="/home/returnticket">คืนตั๋ว</NuxtLink>
      <NuxtLink class="col menuIndex" to="/home/requestreturnticket"
        >คำขอคืนตั๋ว</NuxtLink
      >
      <NuxtLink class="col menuIndex" to="/home/ticketentry"
        >รายการตั๋ว</NuxtLink
      >
      <NuxtLink class="col menuIndex" to="/home/postponeticketlist"
        >รายการเลื่อนตั๋ว</NuxtLink
      >
      <NuxtLink class="col menuIndex" to="/home/returnticketlist"
        >รายการคืนตั๋ว</NuxtLink
      >
      <NuxtLink class="col menuIndex" to="/home/report">รายงานการขาย</NuxtLink
      ><NuxtLink class="col menuIndex" to="/home/profitreport"
        >ผลตอบแทน</NuxtLink
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
