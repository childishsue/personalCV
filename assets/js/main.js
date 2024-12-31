const app = Vue.createApp({
  data() {
    return {
      activeIndex: 0,
      swiper1: null,
      swiper2: null,
      swiper3: null,
      radarCharts: [],
      resizeTimeout: null,
    };
  },
  methods: {
    changeSection(index) {
      this.activeIndex = index;

      this.$nextTick(() => {
        if (index === 0) {
          this.initSwiper1();
          this.initRadarCharts();
        } else {
          if (this.swiper1) {
            this.swiper1.destroy();
            this.swiper1 = null;
          }
          this.destroyRadarCharts();
        }

        if (index === 1) {
          this.initSwiper2();
          this.initSwiper3();
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

    initRadarCharts() {
      this.destroyRadarCharts();

      setTimeout(() => {
        const chartData = [
          {
            id: 'radarChart1',
            title: '軟體',
            labels: ['Illustrator', 'fimag', 'Xd', 'photoshop', 'animate', 'premiere', 'AE', 'audition', 'VS code'],
            data: [90, 80, 60, 90, 90, 40, 40, 40, 90],
            color: '54, 162, 235',
          },
          {
            id: 'radarChart2',
            title: '設計',
            labels: ['UI', 'UX', '視覺識別', '平面設計', '網頁設計', '剪輯'],
            data: [80, 60, 90, 90, 90, 30],
            color: '75, 192, 192',
          },
          {
            id: 'radarChart3',
            title: '前端',
            labels: ['HTML5', 'CSS3', 'SCSS', 'PUG', 'JQuery', 'VUE'],
            data: [90, 90, 80, 80, 75, 30],
            color: '255, 99, 132',
          },
        ];

        chartData.forEach((chart) => {
          const ctx = document.getElementById(chart.id).getContext('2d');
          this.radarCharts.push(
            new Chart(ctx, {
              type: 'radar',
              data: {
                labels: chart.labels,
                datasets: [
                  {
                    label: chart.title,
                    data: chart.data,
                    backgroundColor: `rgba(${chart.color}, 0.2)`,
                    borderColor: `rgb(${chart.color})`,
                    pointBackgroundColor: `rgb(${chart.color})`,
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: `rgb(${chart.color})`,
                    borderWidth: 2,
                  },
                ],
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  r: {
                    beginAtZero: true,
                    min: 0,
                    max: 100,
                    font: {
                      size: function (context) {
                        let width = window.innerWidth;
                        if (width < 576) return 8;
                        if (width < 992) return 10;
                        return 12;
                      },
                    },
                    pointLabels: {
                      color: 'rgba(255, 255, 255, 0.5)',
                    },
                    grid: {
                      color: 'rgba(255, 255, 255, 0.5)',
                      lineWidth: 1,
                    },
                    angleLines: {
                      color: 'rgba(255, 255, 255, 0.5)',
                      lineWidth: 1,
                    },
                  },
                },
                plugins: {
                  title: {
                    display: true,
                    text: chart.title,
                    align: 'center',
                    color: 'rgba(255, 255, 255, 0.7)',
                    font: {
                      size: function (context) {
                        let width = window.innerWidth;
                        if (width < 576) return 16;
                        if (width < 992) return 18;
                        return 20;
                      },
                      weight: 'bold',
                    },
                    padding: {
                      top: 10,
                      bottom: 30,
                    },
                  },
                  legend: {
                    display: false,
                  },
                },
                animation: {
                  duration: 1500,
                  easing: 'easeOutQuart',
                },
              },
            })
          );
        });
      }, 300);
    },

    destroyRadarCharts() {
      this.radarCharts.forEach((chart) => chart.destroy());
      this.radarCharts = [];
    },

    initSwiper1() {
      if (this.swiper1) {
        this.swiper1.destroy();
      }

      this.swiper1 = new Swiper('.swiper-1', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        speed: 600,
        slidesPerView: 'auto',
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
          el: '.swiper-1 .swiper-pagination',
          clickable: true,
        },
      });
    },

    initSwiper2() {
      if (this.swiper2) {
        this.swiper2.destroy();
      }

      this.swiper2 = new Swiper('.swiper-2', {
        effect: 'creative',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        speed: 600,
        slidesPerView: 1,
        creativeEffect: {
          prev: {
            shadow: true,
            origin: 'left center',
            translate: ['-5%', 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: 'right center',
            translate: ['5%', 0, -200],
            rotate: [0, -100, 0],
          },
        },
        pagination: {
          el: '.swiper-2 .swiper-pagination',
          clickable: true,
        },
      });
    },

    initSwiper3() {
      if (this.swiper3) {
        this.swiper3.destroy();
      }

      this.swiper3 = new Swiper('.swiper-3', {
        effect: 'creative',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        speed: 600,
        slidesPerView: 1,
        creativeEffect: {
          prev: {
            shadow: true,
            origin: 'left center',
            translate: ['-5%', 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: 'right center',
            translate: ['5%', 0, -200],
            rotate: [0, -100, 0],
          },
        },
        pagination: {
          el: '.swiper-3 .swiper-pagination',
          clickable: true,
        },
      });
    },

    handleResize() {
      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }
      this.resizeTimeout = setTimeout(() => {
        if (this.activeIndex === 0) {
          this.radarCharts.forEach((chart) => {
            chart.resize();
          });
        }
      }, 250);
    },
  },
  mounted() {
    if (this.activeIndex === 0) {
      this.initSwiper1();
      this.initRadarCharts();
    } else if (this.activeIndex === 1) {
      this.initSwiper2();
      this.initSwiper3();
    }
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
});

app.mount('#app');