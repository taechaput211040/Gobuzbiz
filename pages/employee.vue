<template>
  <div class="container">
    <div class="d-flex">
      <h3>จัดการผู้ใช้งาน</h3>
      <v-spacer></v-spacer
      ><v-btn color="pink" @click="handleOpenAdduser" outlined rounded
        ><v-icon left>mdi-plus-circle</v-icon> เพิ่มผู้ใช้งาน</v-btn
      >
    </div>

    <div class="mt-5">
      <v-card class="rounded-lg">
        <v-data-table hide-default-footer :headers="headers" :items="userList">
          <template #[`item.FullName`]="{ item }">
            <div class="font-weight-bold">{{ item.FullName }}</div>
            <div>{{ item.RoleCode }}</div>
          </template>
          <template #[`item.IsActive`]="{ item }">
            <v-chip v-if="item.IsActive" color="success" outlined>
              <v-icon left>mdi-circle-medium</v-icon>ใช้งาน</v-chip
            >
            <v-chip small v-else color="error" outlined>
              <v-icon left>mdi-circle-medium</v-icon>ปิดใช้งาน</v-chip
            >
          </template>
        </v-data-table>
      </v-card>
    </div>
    <v-dialog
      v-model="dladduser"
      max-width="650px"
      transition="dialog-transition"
    >
      <v-card class="pa-3">
        <v-card-title class="justify-center font-weight-bold"
          >เพิ่มผู้ใช้งาน</v-card-title
        >
        <div>
          <label for="name">ชื่อ นามสกุล</label>
          <v-text-field
            dense
            outlined
            name="name"
            v-model="userform.FullName"
          ></v-text-field>
          <label for="MobileNo">หมายเลขโทรศัพท์</label>
          <v-text-field
            dense
            outlined
            name="MobileNo"
            v-model="userform.MobileNo"
          ></v-text-field>
          <label for="email">อีเมลล์</label>
          <v-text-field
            dense
            outlined
            name="email"
            v-model="userform.Email"
          ></v-text-field>
          <label for="RoleCode">หน้าที่</label>
          <v-radio-group class="mt-0" v-model="userform.RoleCode" name="RoleCode" column>
            <v-radio label="ผู้ดูแล" value="AM"></v-radio>
            <v-radio label="คนขับ" value="DV"></v-radio>
            <v-radio label="พนักงานต้อนรับบนรถ" value="AC"></v-radio>
            <v-radio label="พนักงานจำหน่ายตั๋ว" value="TA"></v-radio>
          </v-radio-group>
        </div>
        <v-card-actions class="justify-center">
          <v-btn color="pink white--text">บันทึก</v-btn>
          <v-btn color="error " outlined @click="dladduser = false"
            >ยกเลิก</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dladduser: false,
      userform: {
        FullName: "",
        MobileNo: "",
        Email: "",
        RoleCode: "AM",
      },
      userList: [
        {
          FullName: "admin",
          IsActive: "ใช้งาน",
          RoleCode: "AM",
        },
      ],
      headers: [
        { text: "ผู้ใช้งานทั้งหมด", value: "FullName" },
        { text: "การใช้งาน", value: "IsActive"},
      ],
    };
  },
  async fetch() {
    try {
      let { data } = await this.$store.dispatch("getuserlist");
      this.userList = data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async handleOpenAdduser() {
      this.dladduser = true;
    },
  },
};
</script>

<style></style>
