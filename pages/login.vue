<template>
  <div class="bg-page">
    <div class="container mb-3">
      <div class="row bg_login justify-center mx-2">
        <div class="col-12 col-sm-7 col-md-5 card">
          <div class="bgdark_login pa-3 m-3">
            <v-form ref="loginform">
              <div class="pa-3">
                <h2 class="text-center">Login Gobiz</h2>
                <div class="pa-2">
                  <v-text-field
                    label="เบอร์โทรศัพท์"
                    outlined
                    dense
                    v-model="formLogin.MobileNo"
                    hide-details="auto"
                    rounded
                  ></v-text-field>
                </div>
                <div class="pa-2">
                  <v-text-field
                    label="พาสเวิร์ด"
                    outlined
                    v-model="formLogin.Password"
                    dense
                    hide-details="auto"
                    rounded
                  ></v-text-field>
                </div>
                <div class="text-center">
                  <v-btn color="success" @click="authenWithnumber()" rounded
                    >เข้าสู่ระบบ</v-btn
                  >
                </div>
              </div>
            </v-form>
            <div class="font-weight-bold text-center">
              <small>มีปัญหาเข้าสู่ระบบ?</small>
              <small class="pink--text">ติดต่อผู้ให้บริการ</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "layoutsLogin",
  data() {
    return {
      formLogin: {
        Email: "string",
        MobileNo: "",
        Password: "",
        LanguageCode: "TH",
        IsUserBiz: true,
      },
    };
  },
  methods: {
    async authenWithnumber() {
      try {
        await this.$store.dispatch("login", this.formLogin);
        await this.$router.push("/redirect");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
