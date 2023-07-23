// Author: Jervin Macalawa
// Added on: July 19, 2023
// Description: CRUD for Events
const actions = {
  async add({ commit },  data ) {
    const response = await this.$axios.$post(
      "/events/",
      data
    );
    response.data = data;
  },
  async edit({ commit },  data ) {
    const response = await this.$axios.$put(
      `/events/${data.id}/`,
      data
    );
    response.data = data;
  },
  async delete({ commit },  data ) {
    const response = await this.$axios.$delete(
      `/events/${data.id}/`,
      data
    );
    response.data = data;
    
    return
  },
  async view({ commit }, ) {
      const response = await this.$axios.$get(
        "/events/"
      );
      commit("SET_EVENT", response);
    },
};

export default actions;
