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
              "https://qaapi.gobuzmobile.com/api/v1/DashBoard/GetBusLineListForDropDownByTransportId",
              {
                headers: {
                  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIwIiwiRnVsbE5hbWUiOiJBZG1pbmlzdHJhdG9yIiwiQXZhdGFyIjoiIiwiRW1haWwiOiIiLCJTZWNvbmRhcnlFbWFpbCI6IiIsIkRlZmF1bHRMYW5ndWFnZSI6IlRIIiwiRGVmYXVsdEN1cnJlbmN5IjoiIiwiSXNBdXRoZW50aWNhdGVkIjoiVHJ1ZSIsIklzVHJhbnNwb3J0VXNlciI6IlRydWUiLCJDdXN0b21lckdVSUQiOiIiLCJUcmFuc3BvcnRVc2VySWQiOiIyIiwiVHJhbnNwb3J0SWQiOiIyIiwiTW9iaWxlTm8iOiIwMTExMTExMTExIiwiUm9sZUNvZGUiOiJBTSIsIkF1dGhlbk1lc3NhZ2UiOiIiLCJleHAiOjE2Nzc4NDEyMjgsImlzcyI6ImRldi5nb2J1em1vYmlsZS5jb20iLCJhdWQiOiJkZXYuZ29idXptb2JpbGUuY29tIn0.3Yr2seHtgNKp5BDj4Y5nji1aUimPhp0Qjh0AhbwOqv8`,
                },
              }
            );
            resolve(data);ผ
          } catch (error) {
            reject(error);
          }
        });
      },
      async getvehicleclasslist(context, id) {
        return new Promise(async (resolve, reject) => {
          try {
            let data = await this.$axios.get(
              `https://qaapi.gobuzmobile.com/api/manage/getvehicleclasslist?buslineId=${id}`
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
              `https://qaapi.gobuzmobile.com/api/user/getuserlist`
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
