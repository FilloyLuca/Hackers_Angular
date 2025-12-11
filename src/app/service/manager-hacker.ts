import { EventEmitter,Injectable, Output } from '@angular/core';
import { Hacker } from '../models/Hackers';
import { IHacker } from '../models/IHackers';


@Injectable({
  providedIn: 'root',
})
export class ManagerHacker {

  constructor() { }

  @Output() editHackerEvent = new EventEmitter<IHacker>()

  editHacker(hacker: IHacker) {
    this.editHackerEvent.emit(hacker)
  }

  /**
   * Les hackers sont stockés localement côté client (localStorage)
   * @renvoie la liste des Hackers
   */
  getAllHackers(): Hacker[] {
    return JSON.parse(localStorage.getItem('badguys') || '[]');
  }



}
