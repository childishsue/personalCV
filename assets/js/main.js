const app = Vue.createApp({
  data() {
    return {
      activeIndex: 0,
      swiper1: null,
      swiper2: null,
      swiper3: null
    };
  },
  methods: {
    changeSection(index) {
      this.activeIndex = index;

      this.$nextTick(() => {
        // 總覽頁面 (index === 0) 的 swiper1
        if (index === 0) {
          this.initSwiper1();
        } else {
          if (this.swiper1) {
            this.swiper1.destroy();
            this.swiper1 = null;
          }
        }

        // 經歷頁面 (index === 1) 的 swiper2
        if (index === 1) {
          console.log('Initializing experience page sliders');
          this.initSwiper2();
          this.initSwiper3(); // 同時初始化 swiper3
        } else {
          if (this.swiper2) {
            this.swiper2.destroy();
            this.swiper2 = null;
          }
          if (this.swiper3) {
            this.swiper3.destroy();
            this.swiper3 = null;
          }
        }
      });
    },

    initSwiper1() {
      if (this.swiper1) {
        this.swiper1.destroy();
      }

      this.swiper1 = new Swiper(".swiper-1", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        speed: 600,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 10,
          stretch: 120,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: ".swiper-1 .swiper-pagination",
          clickable: true
        }
      });
    },

    initSwiper2() {
      if (this.swiper2) {
        this.swiper2.destroy();
      }

      this.swiper2 = new Swiper(".swiper-2", {
        effect: "creative",
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        speed: 600,
        slidesPerView: 1,
        creativeEffect: {
          prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: "right center",
            translate: ["5%", 0, -200],
            rotate: [0, -100, 0],
          },
        },
        pagination: {
          el: ".swiper-2 .swiper-pagination",
          clickable: true
        }
      });
    },

    initSwiper3() {
      if (this.swiper3) {
        this.swiper3.destroy();
      }

      this.swiper3 = new Swiper(".swiper-3", {
        effect: "creative",
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        speed: 600,
        slidesPerView: 1,
        creativeEffect: {
          prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: "right center",
            translate: ["5%", 0, -200],
            rotate: [0, -100, 0],
          },
        },
        pagination: {
          el: ".swiper-3 .swiper-pagination",
          clickable: true
        }
      });
    }
  },
  mounted() {
    // 根據初始頁面初始化對應的 Swiper
    if (this.activeIndex === 0) {
      this.initSwiper1();
    } else if (this.activeIndex === 1) {
      this.initSwiper2();
    } else if (this.activeIndex === 2) {
      this.initSwiper3();
    }
  }
});

app.mount("#app");