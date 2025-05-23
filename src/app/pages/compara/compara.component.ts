import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-compara',
  standalone:false,
  templateUrl: './compara.component.html',
  styleUrl: './compara.component.css'
})
export class ComparaComponent implements OnInit, OnDestroy {

  constructor(private render: Renderer2) {}
  ngOnInit(): void {
    const script = this.render.createElement('script');
    script.src = '../../../assets/js/compara.js'; 
    script.type ='text/javascript';
    script.async = true;

    this.render.appendChild(document.body, script);
  }

  ngOnDestroy(): void {
      
  }
}
