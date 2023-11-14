import {AfterViewInit, Component} from '@angular/core';

import Reveal from 'reveal.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
    })

    Reveal.addEventListener('fragmentshown',event=>{
      console.log(event.fragment.dataset.fragmentIndex)
    });
  }

  siguiente(){
    Reveal.next()
  }
}
