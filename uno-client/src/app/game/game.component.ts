import { Component } from '@angular/core';
import { PlayerHandComponent } from '../shared/ui/player-hand/player-hand.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [PlayerHandComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

}
