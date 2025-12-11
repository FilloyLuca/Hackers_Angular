import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hacker } from '../../models/Hackers'; //'src/app/models/Hacker'
import { LookupIp } from '../../service/lookup-ip';

@Component({
  selector: 'app-hacker-form',
  standalone: false,
  templateUrl: './hacker-form.html',
  styleUrl: './hacker-form.css',
})
export class HackerForm {

  constructor(private lookupIpService: LookupIp) { }

  getInfoByIP() {
    this.lookupIpService.getGeoLocationIp(this.hackerForm.value.ip || '').subscribe({
      next: (data) => {
        console.log(data);
        this.hackerForm.controls.countryName.setValue(data.country_name);
        this.hackerForm.controls.regionName.setValue(data.region_name);
        this.hackerForm.controls.city.setValue(data.city);
      },
      error: (err) => {
        console.error('Error fetching IP information:', err);
      }
    });
  }

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

  // clear() {
  //   this.hackerForm.controls.ip.setValue("103.125.234.210")
  //   console.log("cancel")
  //   console.log(this.hackerForm.value)
  // }
  clear() {
    this.hackerForm.reset();
    console.log("Formulaire réinitialisé");
  }

}
