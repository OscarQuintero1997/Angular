import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list';
import type { Character } from '../../interfaces/character.interface';
import { CharaAddComponent } from '../../components/dragonball/character-add/character-add.component';

@Component({
  selector: 'dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, CharaAddComponent],
})
export class dragonBallSuperPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

  AddCharacter(character: Character) {
    this.characters.update((list)=> [...list, character]);
  }
  resetFils() {
    this.name.set('');
    this.power.set(0);
  }
}
