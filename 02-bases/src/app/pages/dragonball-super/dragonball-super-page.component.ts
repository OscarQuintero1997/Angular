import { Component, inject } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list';
import { CharaAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, CharaAddComponent],
})
export class dragonBallSuperPageComponent {
  // //Metodo tradicional de inyectar dependencias.
  // constructor (
  //   public DragonballService: DragonballService
  // ) {}

  //Inyección de dependencias.
  public dragonballService = inject(DragonballService);
}
