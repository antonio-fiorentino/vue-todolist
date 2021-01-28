// scrivere in un input
// premendo invio nell'input oppure cliccando sul submit, salvare nella lista la nuova nota
// visualizzare tutte le note nel box sottostante
// cancellare la nota, cliccando sulla X corrispondente

var app = new Vue({
 el: '#root',
 data:{
   text:'',
   submit:[]
 },
 methods:{
   go: function () {
     console.log(this.submit);
     this.submit.push(this.text);
     this.text= '';
   },
   removeElement: function (index) {
    this.submit.splice(0, 1);
  }
 }
});
Vue.config.devtools = true
