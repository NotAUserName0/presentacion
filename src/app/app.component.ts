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
    for (let i = 1; i <= 5; i++) { //agrego audios
      const audio = new Audio(`assets/${i}.m4a`);
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
      sync: true
    })

    Reveal.addEventListener('slidechanged', evento=>{ //evento de cambio de slide

      console.log("slide changed to: "+ evento['indexh'] + "vertical: " + evento['indexv'])
      Reveal.sync()

      //initial - reinicia audios
      /*this.audios[0].pause()
      this.audios[0].currentTime = 0
      this.audios[1].pause()
      this.audios[1].currentTime = 0
      this.audios[2].pause()
      this.audios[2].currentTime = 0
      this.audios[3].pause()
      this.audios[3].currentTime = 0*/

      for(let i = 0; i < 5 ; i++){
        if(this.audios[i].played){
          this.audios[i].currentTime = 0
          this.audios[i].pause()
        }
      }

      //animacion de botones
      for (let i = 0; i < 10; i++) {
        document.getElementById("anim" + i)?.classList.add("rebote");
    }
    

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

      //Diapositiva 3 - audio 4
      if(evento['indexh']===3 ){
        this.audios[4].volume = 0.2
        this.audios[4].play()
      }


      //console.log('Evento slidechanged h:', event['indexh']);
      Reveal.addEventListener('fragmentshown',event=>{ //al entrar
        //console.log(event.fragment.dataset.fragmentIndex)
        console.log("Presentacion: "+evento['indexh']+", Fragmento: "+event.fragment.dataset.fragmentIndex)

        if(evento['indexh']===2){ //fragmentos de diapositiva 2
          //audios 2, 3
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

  goToMainSlide(indexh, indexv, fragment){
    Reveal.slide(indexh, indexv,fragment);

  }

  siguiente(){
    Reveal.next()
  }

  anterior(){
    Reveal.prev()
  }

  control(id){
    if(!this.audios[id].paused){
      this.audios[id].pause()
    }else{
      this.audios[id].play()
    }
  }

  noClose(event: MouseEvent){ //General
    event.stopPropagation()
  }

  msg(){
    alert("Click presionado")
  }

}

