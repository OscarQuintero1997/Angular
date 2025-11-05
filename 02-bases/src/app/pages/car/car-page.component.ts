import { Component, computed, signal } from "@angular/core";


@Component ({
  templateUrl: './car-page.component.html'
})

export class CarPageComponent {
  brand = signal ('toyota');
  model = signal ('Corola');
  year = signal (2020);
  color = signal ('Rojo');

  carSummary = computed(() => {
    return `${this.color()} ${this.brand()} ${this.model()} del año ${this.year()}`;
  });

  changeColor () {
    this.color.set ('Negro');
  }

  getCarDescription () {
    `La marca del carro es ${this.brand()} y el modelo es ${this.model}`;
  }
  changeCar () {
    this.brand.set ('ford');
    this.model.set ('raptor');
    this.year.set (2021);
  }

  updateYear () {
    this.year.set (2025);
  }

  resetCar () {
    this.brand.set ('toyota');
    this.model.set ('corola');
    this.year.set (2020);
    this.color.set ('Rojo');
  }
}


