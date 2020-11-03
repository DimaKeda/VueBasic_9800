new Vue({
  el: '#app',
  data: {
      dima: {
          nama: 'Dima Keda',
          npm: '180709800',
          kelas: 'PAW C',
      },
      counter: 3,
      clicked: false,
      jawaban: false,
      angkaBenar: Math.floor(Math.random() * 10) + 1,
      angkaInput: null
  },

  methods: {
      checkForm: function (e) {
          if (this.angkaBenar == this.angkaInput) {
              this.jawaban = true;
              this.clicked = true;
              this.counter = 3;
          } else {
              this.jawaban = false;
              this.clicked = true;
              this.counter--;
          }
          e.preventDefault();
      },
      mulai() {
          this.jawaban = false;
          this.clicked = false;
          this.angkaInput = null;
      }
  },
});