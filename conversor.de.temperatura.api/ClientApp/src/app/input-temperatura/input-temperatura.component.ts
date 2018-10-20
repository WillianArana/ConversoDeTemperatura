import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { map, takeUntil, tap } from 'rxjs/operators';
import { Temperatura } from './Temperatura';

@Component({
  selector: 'app-input-temperatura',
  templateUrl: './input-temperatura.component.html',
  styleUrls: ['./input-temperatura.component.css']
})
export class InputTemperaturaComponent implements OnInit {

  temperatura: Temperatura;

  private readonly hrefConverterTemp: string;

  constructor(private http: Http) {
    let href = window.location.href;
    this.hrefConverterTemp = href + "ConverterTemperaturas";
  }

  ngOnInit() {
    this.temperatura = new Temperatura();
  }

  onSubmit(form) {
    var celsius = form.value.celsius;
    this.ObterFahrenheit(celsius);
  }

  private ObterFahrenheit(celsius: number)
  {
    const hrefConverterParaFahrenheit = `${this.hrefConverterTemp}/${celsius}/ParaFahrenheit`;
    this.http.get(hrefConverterParaFahrenheit).pipe(map(res => res))
             .subscribe(
                 dados => {
                   this.temperatura.celsius = celsius;
                   this.temperatura.fahrenheit = dados['_body'];
                 });
  }

}
