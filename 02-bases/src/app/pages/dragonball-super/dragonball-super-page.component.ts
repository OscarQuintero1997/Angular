
import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list';
import type { Character } from '../../interfaces/character.interface';
import { CharaAddComponent } from "../../components/dragonball/character-list/character-add.component";


@Component({
  selector: 'dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, CharaAddComponent],
})

export class dragonBallSuperPageComponent {
  name = signal ('');
  power = signal (0);

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegeta', power: 8000},
  ]);

  AddCharacter() {
  if (!this.name() || !this.power() || this.power() <= 0) {
    return;
  }

  const newCharacter:Character = {
    // id: this.characters().length + 1,
    id: 1000,
    name: this.name(),
    power: this.power()
  };
  // this.characters.update(list => [...list, newCharacter]);
  console.log(newCharacter);

  this.resetFils();
}

  resetFils() {
    this.name.set('');
    this.power.set(0);
  }
}

