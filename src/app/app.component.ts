import {AfterViewInit, Component} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import Reveal from 'reveal.js'
import Swal from "sweetalert2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(200)), // Puedes ajustar la duración según tus preferencias
    ]),
    trigger('pop', [
      state('void', style({
        opacity: 0,
        transform: 'scale(0.8)'
      })),
      transition('void <=> *', animate(300)),
    ]),
  ]
})
export class AppComponent implements AfterViewInit{
  title = 'demoD';
  private audio: HTMLAudioElement;
  //pop dia1
  pop1:boolean = false
  pop2:boolean = false

  constructor() {
    this.audio = new Audio("assets/1.mp3")
  }

  ngAfterViewInit(){

    Reveal.initialize({
      controls:false,
      history:true,
      touch:true,
      transition: 'concave',
      autoSlide: false,
    })

    Reveal.addEventListener('slidechanged', evento=>{ //evento de cambio de slide

      console.log("slide changed to: "+ evento['indexh'] + "vertical: " + evento['indexv'])

      //Diapositiva 1
      if(evento['indexh']===1 ){
        this.audio.volume = 0.2
        this.audio.play()
      }else{
        this.audio.pause()
        if(evento['indexv']!==1){
          this.audio.currentTime = 0
        }
      }


      //console.log('Evento slidechanged h:', event['indexh']);
      Reveal.addEventListener('fragmentshown',event=>{ //al entrar
        //console.log(event.fragment.dataset.fragmentIndex)
        console.log("Presentacion: "+evento['indexh']+", Fragmento: "+event.fragment.dataset.fragmentIndex)

      });

    })


  }

  goToSlide(indexh, indexv) {
    Reveal.slide(indexh, indexv);
  }

  siguiente(){
    Reveal.next()
  }

  pause(){

  }

  reanuda(){

  }

  noClose(event: MouseEvent){ //General
    event.stopPropagation()
  }

  msg(){
    alert("Click presionado")
  }

}

