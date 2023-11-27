import { AfterViewInit, Component } from '@angular/core';
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
export class AppComponent implements AfterViewInit {
  title = 'demoD';
  private audios: HTMLAudioElement[] = [];
  //pop dia1
  pop1: boolean = false
  pop2: boolean = false
  pop3: boolean = false
  //pop dia 2
  pop4: boolean = false
  //pop dia 11
  pop5: boolean = false
  pop6: boolean = false
  pop7: boolean = false
  //pop dia 14
  pop8: boolean = false
  //pop dia 21
  pop9: boolean = false
  pop10: boolean = false

  constructor() {
    for (let i = 1; i <= 60; i++) { //agrego audios
      const audio = new Audio(`assets/${i}.m4a`);
      this.audios.push(audio);
    }
  }

  ngAfterViewInit() {
    document.getElementById("home")?.classList.add("dontShow")

    Reveal.initialize({
      controls: false,
      history: true,
      touch: true,
      transition: 'concave',
      autoSlide: false,
      sync: true
    })

    Reveal.addEventListener('slidechanged', evento => { //evento de cambio de slide

      console.log("slide changed to: " + evento['indexh'] + "vertical: " + evento['indexv'])
      Reveal.sync()
      document.getElementById("home")?.classList.remove("dontShow")

      //initial - reinicia audios
      for (let i = 0; i < 60; i++) {
        if (this.audios[i].played) {
          this.audios[i].currentTime = 0
          this.audios[i].pause()
        }
      }

      //animacion de botones
      for (let i = 0; i < 60; i++) { //49
        document.getElementById("anim" + i)?.classList.add("rebote");
      }


      if (evento['indexh'] === 0) {
        document.getElementById("home")?.classList.add("dontShow")
      }
      //Diapositiva 1 - audio 0
      if (evento['indexh'] === 1) {
        this.audios[0].volume = 0.2
        this.audios[0].play()
      }
      //Diapositiva 2 - audio 1
      if (evento['indexh'] === 2) {
        this.audios[1].volume = 0.2
        this.audios[1].play()
      }

      //Diapositiva 3 - audio 4
      if (evento['indexh'] === 3) {
        this.audios[4].volume = 0.2
        this.audios[4].play()
      }

      if (evento['indexh'] === 4) {
        this.audios[5].volume = 0.2
        this.audios[5].play()
      }

      if (evento['indexh'] === 5) {
        this.audios[6].volume = 0.2
        this.audios[6].play()
      }


      if (evento['indexh'] === 6) {
        this.audios[7].volume = 0.2
        this.audios[7].play()
      }

      if (evento['indexh'] === 7) {
        this.audios[8].volume = 0.2
        this.audios[8].play()
      }

      if (evento['indexh'] === 8) {
        this.audios[9].volume = 0.2
        this.audios[9].play()
      }

      if (evento['indexh'] === 9) {
        this.audios[10].volume = 0.2
        this.audios[10].play()
      }

      if (evento['indexh'] === 10) {
        this.audios[11].volume = 0.2
        this.audios[11].play()
      }

      if (evento['indexh'] === 11 && evento['indexv'] === 0) {
        this.audios[12].volume = 0.2
        this.audios[12].play()
      }

      if (evento['indexh'] === 11 && evento['indexv'] === 1) {
        this.audios[13].volume = 0.2
        this.audios[13].play()
      }

      if (evento['indexh'] === 11 && evento['indexv'] === 2) {
        this.audios[14].volume = 0.2
        this.audios[14].play()
      }

      if (evento['indexh'] === 11 && evento['indexv'] === 3) {
        this.audios[15].volume = 0.2
        this.audios[15].play()
      }

      if (evento['indexh'] === 11 && evento['indexv'] === 4) {
        this.audios[16].volume = 0.2
        this.audios[16].play()
      }

      if (evento['indexh'] === 11 && evento['indexv'] === 5) {
        this.audios[17].volume = 0.2
        this.audios[17].play()
      }

      if (evento['indexh'] === 11 && evento['indexv'] === 6) {
        this.audios[18].volume = 0.2
        this.audios[18].play()
      }

      if (evento['indexh'] === 11 && evento['indexv'] === 7) {
        this.audios[19].volume = 0.2
        this.audios[19].play()
      }

      if (evento['indexh'] === 11 && evento['indexv'] === 8) {
        this.audios[20].volume = 0.2
        this.audios[20].play()
      }

      if (evento['indexh'] === 12 && evento['indexv'] === 0) {
        this.audios[21].volume = 0.2
        this.audios[21].play()
      }

      if (evento['indexh'] === 12 && evento['indexv'] === 1) {
        this.audios[22].volume = 0.2
        this.audios[22].play()
      }

      if (evento['indexh'] === 13 && evento['indexv'] === 0) {
        this.audios[23].volume = 0.2
        this.audios[23].play()
      }

      if (evento['indexh'] === 14 && evento['indexv'] === 0) {
        this.audios[24].volume = 0.2
        this.audios[24].play()
      }

      if (evento['indexh'] === 14 && evento['indexv'] === 1) {
        this.audios[25].volume = 0.2
        this.audios[25].play()
      }

      if (evento['indexh'] === 15 && evento['indexv'] === 0) {
        this.audios[26].volume = 0.2
        this.audios[26].play()
      }

      if (evento['indexh'] === 15 && evento['indexv'] === 1) {
        this.audios[27].volume = 0.2
        this.audios[27].play()
      }

      if (evento['indexh'] === 15 && evento['indexv'] === 2) {
        this.audios[28].volume = 0.2
        this.audios[28].play()
      }

      if (evento['indexh'] === 15 && evento['indexv'] === 3) {
        this.audios[29].volume = 0.2
        this.audios[29].play()
      }

      if (evento['indexh'] === 15 && evento['indexv'] === 4) {
        this.audios[30].volume = 0.2
        this.audios[30].play()
      }

      if (evento['indexh'] === 15 && evento['indexv'] === 5) {
        this.audios[31].volume = 0.2
        this.audios[31].play()
      }

      if (evento['indexh'] === 15 && evento['indexv'] === 6) {
        this.audios[32].volume = 0.2
        this.audios[32].play()
      }

      if (evento['indexh'] === 15 && evento['indexv'] === 7) {
        this.audios[33].volume = 0.2
        this.audios[33].play()
      }

      if (evento['indexh'] === 15 && evento['indexv'] === 8) {
        this.audios[34].volume = 0.2
        this.audios[34].play()
      }

      if (evento['indexh'] === 15 && evento['indexv'] === 9) {
        this.audios[35].volume = 0.2
        this.audios[35].play()
      }

      if (evento['indexh'] === 15 && evento['indexv'] === 10) {
        this.audios[36].volume = 0.2
        this.audios[36].play()
      }

      if (evento['indexh'] === 15 && evento['indexv'] === 11) {
        this.audios[37].volume = 0.2
        this.audios[37].play()
      }

      if (evento['indexh'] === 15 && evento['indexv'] === 12) {
        this.audios[38].volume = 0.2
        this.audios[38].play()
      }

      if (evento['indexh'] === 16 && evento['indexv'] === 0) {
        this.audios[39].volume = 0.2
        this.audios[39].play()
      }

      if (evento['indexh'] === 16 && evento['indexv'] === 1) {
        this.audios[40].volume = 0.2
        this.audios[40].play()
      }

      if (evento['indexh'] === 17 && evento['indexv'] === 0) {
        this.audios[41].volume = 0.2
        this.audios[41].play()
      }

      if (evento['indexh'] === 18 && evento['indexv'] === 0) {
        this.audios[42].volume = 0.2
        this.audios[42].play()
      }

      if (evento['indexh'] === 19 && evento['indexv'] === 0) {
        this.audios[43].volume = 0.2
        this.audios[43].play()
      }

      if (evento['indexh'] === 20 && evento['indexv'] === 0) {
        this.audios[44].volume = 0.2
        this.audios[44].play()
      }

      if (evento['indexh'] === 21 && evento['indexv'] === 0) {
        this.audios[45].volume = 0.2
        this.audios[45].play()
      }

      if (evento['indexh'] === 21 && evento['indexv'] === 1) {
        this.audios[46].volume = 0.2
        this.audios[46].play()
      }

      if (evento['indexh'] === 21 && evento['indexv'] === 2) {
        this.audios[47].volume = 0.2
        this.audios[47].play()
      }

      if (evento['indexh'] === 22 && evento['indexv'] === 0) {
        this.audios[48].volume = 0.2
        this.audios[48].play()
      }

      if (evento['indexh'] === 22 && evento['indexv'] === 1) {
        this.audios[49].volume = 0.2
        this.audios[49].play()
      }

      if (evento['indexh'] === 22 && evento['indexv'] === 2) {
        this.audios[50].volume = 0.2
        this.audios[50].play()
      }

      if (evento['indexh'] === 22 && evento['indexv'] === 3) {
        this.audios[51].volume = 0.2
        this.audios[51].play()
      }

      if (evento['indexh'] === 23 && evento['indexv'] === 0) {
        this.audios[52].volume = 0.2
        this.audios[52].play()
      }

      if (evento['indexh'] === 24 && evento['indexv'] === 0) {
        this.audios[53].volume = 0.2
        this.audios[53].play()
      }

      if (evento['indexh'] === 25) {
        this.audios[54].volume = 0.2
        this.audios[54].play()
      }

      if (evento['indexh'] === 26) {
        this.audios[55].volume = 0.2
        this.audios[55].play()
      }

      if (evento['indexh'] === 27) {
        this.audios[56].volume = 0.2
        this.audios[56].play()
      }



      Reveal.addEventListener('fragmentshown', event => { //al entrar
        //console.log(event.fragment.dataset.fragmentIndex)
        console.log("Presentacion: " + evento['indexh'] + ", Fragmento: " + event.fragment.dataset.fragmentIndex)

        if (evento['indexh'] === 2) { //fragmentos de diapositiva 2
          //audios 2, 3
          //initial
          this.audios[1].pause()
          this.audios[1].currentTime = 0
          if (event.fragment.dataset.fragmentIndex === "0") {
            this.audios[1].pause()
            this.audios[1].currentTime = 0
            this.audios[2].volume = 0.2
            this.audios[2].play()
          }
          if (event.fragment.dataset.fragmentIndex === "1") {
            this.audios[2].pause()
            this.audios[2].currentTime = 0
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

  goToMainSlide(indexh, indexv, fragment) {
    Reveal.slide(indexh, indexv, fragment);

  }

  siguiente() {
    Reveal.next()
  }

  anterior() {
    Reveal.prev()
  }

  control(id) {
    if (!this.audios[id].paused) {
      this.audios[id].pause()
    } else {
      this.audios[id].play()
    }
  }

  noClose(event: MouseEvent) { //General
    event.stopPropagation()
  }

  msg() {
    alert("Click presionado")
  }

}

