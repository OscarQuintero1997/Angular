
import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent],
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
    id: this.characters().length + 1,
    name: this.name(),
    power: this.power()
  };
  this.characters.update(list => [...list, newCharacter]);
  this.resetFils();
}

  resetFils() {
    this.name.set('');
    this.power.set(0);
  }
}

