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
  private audios: HTMLAudioElement[] = [];
  //pop dia1
  pop1:boolean = false
  pop2:boolean = false
  pop3:boolean = false
  //pop dia 2
  pop4:boolean = false

  constructor() {
    for (let i = 1; i <= 4; i++) { //agrego audios
      const audio = new Audio(`assets/${i}.mp3`);
      this.audios.push(audio);
    }
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

      //initial - reinicia audios
      for (let i = 1; i <= 4; i++){
        this.audios[i].pause()
        this.audios[i].currentTime = 0
      }

      //animacion de botones
      document.getElementById("anim").classList.add("rebote")
      document.getElementById("anim1").classList.add("rebote")

      //Diapositiva 1 - audio 0
      if(evento['indexh']===1 ){
        this.audios[0].volume = 0.2
        this.audios[0].play()
      }
      //Diapositiva 2 - audio 1
      if(evento['indexh']===2 ){
        this.audios[1].volume = 0.2
        this.audios[1].play()
      }


      //console.log('Evento slidechanged h:', event['indexh']);
      Reveal.addEventListener('fragmentshown',event=>{ //al entrar
        //console.log(event.fragment.dataset.fragmentIndex)
        console.log("Presentacion: "+evento['indexh']+", Fragmento: "+event.fragment.dataset.fragmentIndex)

        if(evento['indexh']===2){ //fragmentos de 2
          //initial
          this.audios[1].pause()
          this.audios[1].currentTime = 0
          if(event.fragment.dataset.fragmentIndex === "0"){
            this.audios[1].pause()
            this.audios[1].currentTime = 0
            console.log("entrada1")
            this.audios[2].volume = 0.2
            this.audios[2].play()
          }
          if(event.fragment.dataset.fragmentIndex === "1"){
            this.audios[2].pause()
            this.audios[2].currentTime = 0
            console.log("entrada2")
            this.audios[3].volume = 0.2
            this.audios[3].play()
          }
        }
      });

      


    })


  }

  goToSlide(indexh, indexv) {
    Reveal.slide(indexh, indexv);
  }

  goToMainSlide(indexh){
    Reveal.slide(indexh)
    
  }

  siguiente(){
    Reveal.next()
  }

  anterior(){
    Reveal.prev()
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

