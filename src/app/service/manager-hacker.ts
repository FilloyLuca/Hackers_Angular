import { EventEmitter, Injectable, Output } from '@angular/core';
import { Hacker } from '../models/Hackers';
import { IHacker } from '../models/IHackers';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ManagerHacker {

  private storageKey = 'badguys'; 


  // Observable pour notifier les changements de la liste
  private hackersChangedSubject = new Subject<Hacker[]>();
  hackersChanged$ = this.hackersChangedSubject.asObservable();

  constructor() { }

  // Evénement pour pré-remplir le formulaire lors de l'édition
  @Output() editHackerEvent = new EventEmitter<IHacker>();
  // Evénement pour notifier les changements de liste (ajout/màj)
  @Output() hackersChanged = new EventEmitter<Hacker[]>();


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

  addOrUpdate(hacker: IHacker): Hacker[] {
    if (hacker.id) {
      return this.update(hacker);
    }
    return this.add(hacker);
  }

  private add(hacker: IHacker): Hacker[] {
    const list = this.loadAll();
    // Générer un ID unique juste avant la sauvegarde
    const id = this.generateUniqueId();
    const toSave = new Hacker(hacker.ip, hacker.countryName, hacker.regionName, hacker.city, id);
    list.push(toSave);
    this.saveAll(list);
    this.hackersChanged.emit(list);
    return list;
  }

  private update(hacker: IHacker): Hacker[] {
    const list = this.loadAll();
    const idx = list.findIndex(h => h.id === hacker.id);
    if (idx !== -1) {
      list[idx] = new Hacker(hacker.ip, hacker.countryName, hacker.regionName, hacker.city, hacker.id);
      this.saveAll(list);
      this.hackersChanged.emit(list);
    }
    return list;
  }

  private loadAll(): Hacker[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  private saveAll(list: Hacker[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(list));
  }

  private generateUniqueId(): string {
    // Simple, suffisamment unique pour le contexte localStorage côté client
    // Format: ts-rand-hex
    const ts = Date.now().toString(36);
    const rnd = Math.random().toString(36).slice(2, 10);
    return `${ts}-${rnd}`;
  }

}


