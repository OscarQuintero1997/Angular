import { Component, inject } from '@angular/core';
import { GifService } from '../../services/gifs.service';




@Component({
  selector: 'app-trending-page',
  imports: [],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent {

  giftService = inject(GifService);

  onScroll(event: Event) {
    console.log(event);
  }
}
