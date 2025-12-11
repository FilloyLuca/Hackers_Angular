import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hacker } from '../../models/Hackers';
import { IHacker } from '../../models/IHackers';
import { LookupIp } from '../../service/lookup-ip';
import { ManagerHacker } from '../../service/manager-hacker';

@Component({
  selector: 'app-hacker-form',
  standalone: false,
  templateUrl: './hacker-form.html',
  styleUrl: './hacker-form.css',
})
export class HackerForm {

  constructor(private lookupIpService: LookupIp, private managerHackerservice: ManagerHacker) { }

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

  // hackerForm = new FormGroup({
  //   ip: new FormControl(''),
  //   countryName: new FormControl(''),
  //   regionName: new FormControl(''),
  //   city: new FormControl(''),
  //   id: new FormControl(undefined)
  // })
  hackerForm = new FormGroup({
    ip: new FormControl<string>(''),
    countryName: new FormControl<string>(''),
    regionName: new FormControl<string>(''),
    city: new FormControl<string>(''),
    id: new FormControl<string | null | undefined>(null)  // <= ici
  });


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

  ngOnInit(): void {
    this.managerHackerservice.editHackerEvent
      .subscribe((hacker: IHacker) => {
        console.log('Event message editEvent')
        this.hacker_to_hackerForm(hacker)
      })
  }

  /**
  * Créer une instance de Hacker à partir des données hackerForm
  * @renvoie une référence à l’objet Hacker
  */
  private hackerForm_to_hacker(): IHacker {
    return new Hacker(

      this.hackerForm.controls.ip.value ?? '',
      this.hackerForm.controls.countryName.value ?? '',
      this.hackerForm.controls.regionName.value ?? '',
      this.hackerForm.controls.city.value ?? '',
      this.hackerForm.controls.id.value ?? undefined)
  }


  /**
  * Initialise this.hackerForm à partir du paramètre hacker instance (object)
  */
  private hacker_to_hackerForm(hacker: IHacker): void {
    this.hackerForm.patchValue({
      ip: hacker.ip,
      countryName: hacker.countryName,
      regionName: hacker.regionName,
      city: hacker.city,
      id: hacker.id ?? null
    })
  }


}
