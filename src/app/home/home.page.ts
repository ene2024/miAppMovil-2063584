import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  verdadero: boolean = true; // Definición de la propiedad verdadero
  title: string = 'Mi nueva pagina!';
  imgUrl: string = 'https://i.redd.it/7ksiaa4exhh01.gif'
  constructor() { 
    console.log("AppComponent: Constructor");
  }
  ngOnChanges() {
    console.log("AppComponent: OnChanges");
  }

<<<<<<< HEAD
  ngOnInit() {
    console.log("AppComponent: OnInit");
  }

  ngDoCheck() {
    console.log("AppComponent: OnChanges");
  }

=======
  constructor() {
    console.log("AppComponent: Constructor");
  }


  ngOnChanges() {
    console.log("AppComponent: OnChanges");
  }

  ngOnInit() {
    console.log("AppComponent: OnInit");
  }

  ngDoCheck() {
    console.log("AppComponent: DoCheck");
  }

>>>>>>> d386d30489682502835e8b64fd65958d8dea200f
  ngAfterContentInit() {
    console.log("AppComponent: AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("AppComponent: AfterContentChecked");
  }

  ngAfterViewInit() {
<<<<<<< HEAD
    console.log("AppComponent: AfterContentViewInit");
=======
    console.log("AppComponent: AfterViewInit");
>>>>>>> d386d30489682502835e8b64fd65958d8dea200f
  }

  ngAfterViewChecked() {
    console.log("AppComponent: AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("AppComponent: OnDestroy");
  }
<<<<<<< HEAD
  hazmeClic(): void{
    alert("hiciste clic!");
  }
=======
  title: string = 'Nueva página';

  hazmeClic(): void{
    alert("¡Hiciste click!");
  }

  
>>>>>>> d386d30489682502835e8b64fd65958d8dea200f
}


