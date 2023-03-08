import Vuex from "vuex";
export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      accessToken: localStorage.getItem("accessToken") || null,
      expire: localStorage.getItem("expire") || null,
      roleCode: localStorage.getItem("roleCode") || null,
      transportId: localStorage.getItem("transportId") || null,
    },
    actions: {
      async login({ commit }, form) {
        return new Promise(async (resolve, reject) => {
          try {
            let { data } = await this.$axios.post(
              "https://qaapi.gobuzmobile.com/api/v1/authentication/signin",
              form
            );
            console.log(data, "data2222");
            commit("set_login", data);

            resolve(data);
          } catch (error) {
            reject(error);
          }
        });
      },

      //account
      async getPolicy() {
        return new Promise(async (resolve, reject) => {
          try {
            let data = await this.$axios.get(
              "https://qaapi.gobuzmobile.com/api/v1/master/customer/privacypolicy?appType=Transport&languageCode=TH"
            );
            resolve(data);
          } catch (error) {
            reject(error);
          }
        });
      },
      async getHelp() {
        return new Promise(async (resolve, reject) => {
          try {
            let data = await this.$axios.get(
              "https://qaapi.gobuzmobile.com/api/v1/help/gethelpgobuzbiz"
            );
            resolve(data);
          } catch (error) {
            reject(error);
          }
        });
      },
      async getTermandcondition() {
        return new Promise(async (resolve, reject) => {
          try {
            let data = await this.$axios.get(
              "https://qaapi.gobuzmobile.com/api/v1/master/customer/termandcondition?appType=Transport&languageCode=TH"
            );
            resolve(data);
          } catch (error) {
            reject(error);
          }
        });
      },
      //account
      //management
      async getBuslinelist() {
        return new Promise(async (resolve, reject) => {
          try {
            let data = await this.$axios.get(
              "https://qaapi.gobuzmobile.com/api/v1/DashBoard/GetBusLineListForDropDownByTransportId"
            );
            resolve(data);
            ผ;
          } catch (error) {
            reject(error);
          }
        });
      },
      async getvehicleclasslist(context, id) {
        return new Promise(async (resolve, reject) => {
          try {
            let data = await this.$axios.get(
              `https://qaapi.gobuzmobile.com/api/v1/Manage/GetVehicleClassList?buslineId=${id}`
            );
            resolve(data);
          } catch (error) {
            reject(error);
          }
        });
      },
      async getvehiclelistById(context, payload) {
        return new Promise(async (resolve, reject) => {
          try {
            let data = await this.$axios.get(
              `https://qaapi.gobuzmobile.com/api/v1/Manage/GetVehicleListByBusline?buslineId=${payload.buslineId}&vehClassId=${payload.vehClassId}`
            );
            resolve(data);
          } catch (error) {
            reject(error);
          }
        });
      },
      async getuserlist(context) {
        return new Promise(async (resolve, reject) => {
          try {
            let data = await this.$axios.get(
              `https://qaapi.gobuzmobile.com/api/v1/user/getuserlist`
            );
            resolve(data);
          } catch (error) {
            reject(error);
          }
        });
      },
      //ลิสผังที่นั่ง//
      async getSeatplanvehicle(context, id) {
        return new Promise(async (resolve, reject) => {
          try {
            let data = await this.$axios.get(
              `https://qaapi.gobuzmobile.com/api/v1/seatplan/getseatplanvehicle?vehicleId=${id}`
            );
            resolve(data);
          } catch (error) {
            reject(error);
          }
        });
      },
      //ดรอปผังที่นั่ง//
      async getDropdownTemplateList(context) {
        return new Promise(async (resolve, reject) => {
          try {
            let data = await this.$axios.get(
              `https://qaapi.gobuzmobile.com/api/v1/manage/GetSeatTempleteList`
            );
            resolve(data);
          } catch (error) {
            reject(error);
          }
        });
      },

      //ข้อมูลรถ//
      async getvehicleInfo(context, id) {
        return new Promise(async (resolve, reject) => {
          try {
            let data = await this.$axios.get(
              `https://qaapi.gobuzmobile.com/api/v1/manage/getvehicle?vehicleId=${id}`
            );
            resolve(data);
          } catch (error) {
            reject(error);
          }
        });
      },
      // Dropdown ประเภทรถ
      async getvehicletypefordropdown(context, id) {
        return new Promise(async (resolve, reject) => {
          try {
            let data = await this.$axios.get(
              `https://qaapi.gobuzmobile.com/api/v1/manage/getvehicletypefordropdown`
            );
            resolve(data);
          } catch (error) {
            reject(error);
          }
        });
      }, // Dropdown ยี่ห้อรถ
      async getbrandlistfordropdown(context, id) {
        return new Promise(async (resolve, reject) => {
          try {
            let data = await this.$axios.get(
              `https://qaapi.gobuzmobile.com/api/v1/manage/getbrandlistfordropdown`
            );
            resolve(data);
          } catch (error) {
            reject(error);
          }
        });
      },
    },

    //management

    mutations: {
      set_login(state, payload) {
        console.log(payload, "dataa");
        state.accessToken = payload.AccessToken;
        state.expire = payload.Expire;
        state.roleCode = payload.RoleCode;
        state.transportId = payload.TransportId;
        localStorage.setItem("accessToken", payload.AccessToken);
        localStorage.setItem("expire", payload.Expire);
        localStorage.setItem("roleCode", payload.RoleCode);
        localStorage.setItem("transportId", payload.TransportId);
      },
    },
  });
  return Store;
}
