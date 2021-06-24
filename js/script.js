
/*Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.*/



const app = new Vue(
      {
          el: '#app',

          data: {
              text:'funziona sta pagina?',
              answer: '',

          
          
          
            },

            methods: {
                  message: function (){
                        alert(`La risposta è ${this.answer}`)
                  },




            }

       } 
       );