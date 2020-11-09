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
          console.log(angkaBenar)
      },
      mulai() {
          this.jawaban = false;
          this.clicked = false;
          this.angkaInput = null;
      },
      lagi(){
        location.reload();
    }
  },
});

new Vue({
    el: "#app1",
    data: {
        todos:[
            
        ],
    },
    methods: {
        simpan() {
            let catatan = document.getElementById('catatan');
            let judul = document.getElementById('judul');
            let prioritas = document.getElementById('prioritas');
            
            let todo = {
                judul : judul.value,
                prioritas : prioritas.value,
                catatan : catatan.value,
            }
            document.getElementById('catatan').value="";
            document.getElementById('judul').value="";
            document.getElementById('prioritas').value="";
            this.todos.push(todo);
            console.log(this.todos);
        },
        reset(){
            document.getElementById('catatan').value="";
            document.getElementById('judul').value="";
            document.getElementById('prioritas').value="";
        },
        hapus(index){
            this.todos.splice(index,1);
        },
    },
});