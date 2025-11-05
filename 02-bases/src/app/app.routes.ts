import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from "./pages/hero/hero-page.component";
import { CarPageComponent } from './pages/car/car-page.component';

export const routes: Routes = [

{
  path: '',
  component: CounterPageComponent,
},

{
  path: 'hero',
  component: HeroPageComponent,
},

{
  path: 'car',
  component: CarPageComponent,
}

];
