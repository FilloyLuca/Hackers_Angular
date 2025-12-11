import { Injectable } from '@angular/core';
import { Hacker } from '../models/Hackers';

@Injectable({
  providedIn: 'root',
})
export class ManagerHacker {

  constructor() { }


 /**
  * Les hackers sont stockés localement côté client (localStorage)
  * @renvoie la liste des Hackers
  */
  getAllHackers(): Hacker[] {
    return JSON.parse(localStorage.getItem('badguys') || '[]');
  }

}
