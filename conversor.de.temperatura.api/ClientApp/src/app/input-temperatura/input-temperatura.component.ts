import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { map, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-input-temperatura',
  templateUrl: './input-temperatura.component.html',
  styleUrls: ['./input-temperatura.component.css']
})
export class InputTemperaturaComponent implements OnInit {

  celsius: number;
  fahrenheit: number;

  constructor(private http: Http) { }

  ngOnInit() {
    this.celsius = 0;
  }

  onSubmit(formulario) {

    this.http.post('https://httpbin.org/post', JSON.stringify(formulario.value))
    .pipe(map(res => res))
    .subscribe(
      dados => 
      {
        console.log(dados);
       });

  }

}
