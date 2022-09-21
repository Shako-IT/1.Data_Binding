const app = Vue.createApp({
  data() {
    return {
      myName: "Shalva",
      myAge: 34,
      favoriteNumber: Math.random(),
      imageLink: "https://source.unsplash.com/user/c_v_r/1900x800",
    };
  },
  methods: {
    fiveYears() {
      return this.myAge + 5;
    },
  },
});

app.mount("#assignment");
