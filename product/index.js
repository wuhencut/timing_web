new Vue({
  el: "#page",
  data() {
    return {
      active1: 1,
      active2: 1, // nav 
    }
  },
  mounted() {
    this.initSwiper1();
  },
  methods: {
    click2(num) {
      if(num != this.active2){
        this.active2 = num;
      } else {
        this.active2 = 3;
      }
    },
    click1(num) {
      this.active1 = num;
    },
    initSwiper1() {
      new Swiper(".swiper1", {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        speed: 2000,
        autoplay: {
          delay: 5000,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    }
  }
})