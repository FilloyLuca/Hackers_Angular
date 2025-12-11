import { Component } from '@angular/core';
import { Hacker } from '../../models/Hackers';
import { ManagerHacker } from '../../service/manager-hacker';

@Component({
  selector: 'app-hacker-list',
  standalone: false,
  templateUrl: './hacker-list.html',
  styleUrl: './hacker-list.css',
})
export class HackerList {

  hackers: Hacker[]

  constructor(private managerHackerService: ManagerHacker) {
    this.hackers = managerHackerService.getAllHackers()
  }

  editHacker(hacker: Hacker) {
    this.managerHackerService.editHacker(hacker) 
  }

}
