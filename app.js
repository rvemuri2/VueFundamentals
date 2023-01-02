Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Smith",
    };
  },
}).mount("#app");

Vue.createApp({
  data() {
    return {
      firstName: "Jane",
      lastName: "Doe",
    };
  },
}).mount("#app2");
