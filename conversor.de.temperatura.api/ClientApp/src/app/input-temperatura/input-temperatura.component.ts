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

  private readonly url: string = 'https://localhost:44319/ConverterTemperaturas';

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(formulario) {

    console.log(formulario );

    this.http.get( this.url + `/ParaFahrenheit/${ this.temperatura.celsius }`, JSON.stringify(formulario.value))
    .pipe(map(res => res))
    .subscribe(
      dados => 
      {
        this.temperatura.fahrenheit = dados['_body'];
       });

  }

}
