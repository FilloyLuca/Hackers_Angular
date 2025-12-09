import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hacker } from '../../models/Hackers'; //'src/app/models/Hacker'

@Component({
  selector: 'app-hacker-form',
  standalone: false,
  templateUrl: './hacker-form.html',
  styleUrl: './hacker-form.css',
})
export class HackerForm {
  hacker: Hacker = new Hacker('', '', '', '')

  hackerForm = new FormGroup({
    ip: new FormControl(''),
    countryName: new FormControl(''),
    regionName: new FormControl(''),
    city: new FormControl(''),
    id: new FormControl(undefined)
  })

  onSubmit() {
    console.log("Submit")
    console.log(this.hackerForm.value)
  }
  clear() {
    this.hackerForm.controls.ip.setValue("103.125.234.210")
    console.log("cancel")
    console.log(this.hackerForm.value)
  }

}
