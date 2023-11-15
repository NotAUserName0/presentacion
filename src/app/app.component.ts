import {AfterViewInit, Component} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import Reveal from 'reveal.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)), // Puedes ajustar la duración según tus preferencias
    ]),
  ],
})
export class AppComponent implements AfterViewInit{
  title = 'demoD';
  backButton:boolean =false;
  contador: number = 0;
  intervalId: any;

  constructor() {
  }

  ngAfterViewInit(){

    Reveal.initialize({
      controls:false,
      history:true,
      touch:true,
      transition: 'concave',
    })

    Reveal.addEventListener('slidechanged', evento=>{ //evento de cambio de slide

      console.log("slide changed to: "+ evento['indexh'])

      if(evento['indexh']===0){
        this.backButton = false;
      }else{
        this.backButton = true;
      }
      const slide2 = document.getElementById('slide2');

      if(evento['indexh']===1){

        this.intervalId = setInterval(() => {
          if(this.contador === 0){
            console.log("1")
            this.contador++
          }else if(this.contador === 1){
            console.log("2")
            this.contador++
          }else if(this.contador === 2){
            console.log("3")
            this.contador++
          }/*else{
            console.log(this.contador)
            this.contador++
          }*/
        }, 1000)
      }

      //console.log('Evento slidechanged h:', event['indexh']);
      Reveal.addEventListener('fragmentshown',event=>{ //al entrar
        //console.log(event.fragment.dataset.fragmentIndex)
        console.log("Presentacion: "+evento['indexh']+", Fragmento: "+event.fragment.dataset.fragmentIndex)

        /*if(evento['indexh'] === 2 && event.fragment.dataset.fragmentIndex === "1"){
          alert("Llegaste")
          console.log("llegaste")
        }else{
          console.log("no es")
        }*/
      });

      /*Reveal.addEventListener('fragmenthidden',event=>{ //al salir
        if(evento['indexh'] === 2 && event.fragment.dataset.fragmentIndex === "1"){
          alert("Llegaste")
          console.log("llegaste")
        }else{
          console.log("no es")
        }
      })*/
    })


  }

  siguiente(){
    Reveal.next()
  }

  atras(){
    Reveal.prev()
  }


}

