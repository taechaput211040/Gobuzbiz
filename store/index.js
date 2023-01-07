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
        try {
          let { data } = await this.$axios.post(
            "https://qaapi.gobuzmobile.com/api/v1/authentication/signin",
            form
          );
          console.log(data, "data2222");
          commit("set_login", data);

          return data;
        } catch (error) {
          console.log(error);
        }
      },
    },
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
