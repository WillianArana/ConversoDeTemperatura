import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { map, takeUntil, tap } from 'rxjs/operators';
import { temperatura } from './temperatura';

@Component({
  selector: 'app-input-temperatura',
  templateUrl: './input-temperatura.component.html',
  styleUrls: ['./input-temperatura.component.css']
})
export class InputTemperaturaComponent implements OnInit {

  temperatura: temperatura;

  private readonly url: string = 'http://localhost:52694/ConverterTemperaturas';

  constructor( 
    private http: Http) { }

  ngOnInit() {    
    this.temperatura = new temperatura(0, 0);
  }

  onSubmit(form) {
    const url: string = this.url + `/ParaFahrenheit/${ form.value.celsius }`;
    this.http.get(url).pipe(map(res => res))
             .subscribe(
               dados => 
               {
                 this.temperatura.celsius = form.value.celsius ;
                 this.temperatura.fahrenheit = dados['_body'];
                });
  }

}
