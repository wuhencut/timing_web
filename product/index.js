new Vue({
  el: "#app",
  data() {
    return {}
  },
  mounted() {
    this.initSwiper1();
  },
  methods: {
    initSwiper1() {
      new Swiper(".swiper1", {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }
  }
})