const app = Vue.createApp({
  data() {
    return {
      activeIndex: 0,
      swiper: null
    };
  },
  methods: {
    changeSection(index) {
      this.activeIndex = index;
      // 當切換回總覽頁面時，初始化 Swiper
      if (index === 0) {
        this.$nextTick(() => {
          this.initSwiper();
        });
      }
    },
    initSwiper() {
      // 如果已存在 swiper 實例，先銷毀
      if (this.swiper) {
        this.swiper.destroy();
      }

      // 重新初始化 Swiper
      this.swiper = new Swiper(".swiper", {
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
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        on: {
          click: function(swiper, event) {
            const clickedSlide = event.target.closest('.swiper-slide');
            if (clickedSlide) {
              const index = [...clickedSlide.parentElement.children].indexOf(clickedSlide);
              this.slideTo(index);
            }
          }
        }
      });
    }
  },
  mounted() {
    // 初始化載入時，如果在總覽頁面就初始化 Swiper
    if (this.activeIndex === 0) {
      this.initSwiper();
    }
  }
});

app.mount("#app");