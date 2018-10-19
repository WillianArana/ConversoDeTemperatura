import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { map, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-input-temperatura',
  templateUrl: './input-temperatura.component.html',
  styleUrls: ['./input-temperatura.component.css']
})
export class InputTemperaturaComponent implements OnInit {

  temperatura: any = {
    celsius: '',
    fahrenheit: ''
  }

  _celsius: number;
  _fahrenheit: number;

  private readonly url: string = 'http://localhost:52694/ConverterTemperaturas';

  constructor( private http: Http ) { }

  ngOnInit() {
    this._celsius = 0;
    this._fahrenheit = 0;
  }

  onSubmit(formulario) {
    const url: string = this.url + `/ParaFahrenheit/${ this.temperatura.celsius }`;
    this.http.get(url, JSON.stringify(formulario.value))
    .pipe(map(res => res))
    .subscribe(
      dados => 
      {
        this._celsius = this.temperatura.celsius;
        this._fahrenheit = dados['_body'];
       });
  }

}
