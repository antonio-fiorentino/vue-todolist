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
     return this.submit.push(this.text);
   },
 }
});
Vue.config.devtools = true