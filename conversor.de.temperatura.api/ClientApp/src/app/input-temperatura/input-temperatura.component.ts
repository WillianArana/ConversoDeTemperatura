import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-temperatura',
  templateUrl: './input-temperatura.component.html',
  styleUrls: ['./input-temperatura.component.css']
})
export class InputTemperaturaComponent implements OnInit {

  celsius: number;

  constructor() { }

  ngOnInit() {
    this.celsius = 0;
  }

}
