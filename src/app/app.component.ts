import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
 
  ngOnInit(): void {
      
  }

  title = 'FrigoSense';
  mostrarNav: boolean = true;

 

  ngAfterViewInit() {
    this.crearScript("../assets/js/jquery.min.js");
    this.crearScript("../assets/js/plugins.js");
    this.crearScript("../assets/js/SmoothScroll.js");
    
    this.crearScript("../assets/js/bootstrap.bundle.min.js");
  
    this.crearScript("https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js");
    this.crearScript("../assets/js/script.min.js");
    this.crearScript("../assets/js/script/nodernizr.min.js");

    // Vendor 
		this.crearScript("../assets/vendor/jquery/jquery.min.js");
		this.crearScript("../assets/vendor/jquery.appear/jquery.appear.min.js");
		this.crearScript("../assets/vendor/jquery.easing/jquery.easing.min.js");
		this.crearScript("../assets/vendor/jquery-cookie/jquery-cookie.min.js");
		this.crearScript("../assets/vendor/popper/umd/popper.min.js");
		this.crearScript("../assets/vendor/bootstrap/js/bootstrap.min.js");
		this.crearScript("../assets/vendor/common/common.min.js");
    this.crearScript("../assets/vendor/jquery.validation/jquery.validation.min.js");
		this.crearScript("../assets/vendor/jquery.easy-pie-chart/jquery.easy-pie-chart.min.js");
		this.crearScript("../assets/vendor/jquery.gmap/jquery.gmap.min.js");
		this.crearScript("../assets/vendor/jquery.lazyload/jquery.lazyload.min.js");
		this.crearScript("../assets/vendor/isotope/jquery.isotope.min.js");
		this.crearScript("../assets/vendor/owl.carousel/owl.carousel.min.js");
		this.crearScript("../assets/vendor/magnific-popup/jquery.magnific-popup.min.js");
		this.crearScript("../assets/vendor/vide/vide.min.js");
		
		// Theme Base, Components and Settings 
		this.crearScript("../assets/js/theme.js");
		
		// Theme Custom 
		this.crearScript("../assets/js/custom.js");
		
		// Theme Initialization Files 
		this.crearScript("../assets/js/theme.init.js");
  }

  crearScript(dir: string) {
    const body = document.body;
    const script = document.createElement('script');

    script.innerHTML = '';
    script.src = dir;
    script.async = false;
    script.defer = true;

    body.appendChild(script);
  } 

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const ocultarEn = ['/', '/inicio', '/login', '/registro'];
        this.mostrarNav = !ocultarEn.includes(event.urlAfterRedirects);
      }
    })
  }

}

