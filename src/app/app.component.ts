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

  constructor() {
  }

  ngAfterViewInit(){

    Reveal.initialize({
      controls:false,
      history:true,
      touch:true,
      transition: 'concave',
      autoSlide: false
    })

    Reveal.addEventListener('slidechanged', evento=>{ //evento de cambio de slide

      console.log("slide changed to: "+ evento['indexh'])
      
      if(evento['indexh']===1){
        
      }

      //console.log('Evento slidechanged h:', event['indexh']);
      Reveal.addEventListener('fragmentshown',event=>{ //al entrar
        //console.log(event.fragment.dataset.fragmentIndex)
        console.log("Presentacion: "+evento['indexh']+", Fragmento: "+event.fragment.dataset.fragmentIndex)

        
      });

    })

    Reveal.addEventListener('slidehidden',event=>{
      
    })


  }

  siguiente(){
    Reveal.next()
  }

  atras(){
    Reveal.prev()
  }

  goToSlide(indexh, indexv) {
    Reveal.slide(indexh, indexv);
  }


}

