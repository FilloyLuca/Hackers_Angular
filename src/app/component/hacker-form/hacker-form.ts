import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hacker } from '../../models/Hackers';
import { IHacker } from '../../models/IHackers';
import { LookupIp } from '../../service/lookup-ip';
import { ManagerHacker } from '../../service/manager-hacker';

@Component({
  selector: 'app-hacker-form',
  templateUrl: './hacker-form.html',
  styleUrl: './hacker-form.css',
  standalone: false
})
export class HackerForm {

  constructor(
    private lookupIpService: LookupIp,
    private managerHackerservice: ManagerHacker
  ) { }

  hackerForm = new FormGroup({
    ip: new FormControl<string>(''),
    countryName: new FormControl<string>(''),
    regionName: new FormControl<string>(''),
    city: new FormControl<string>(''),
    id: new FormControl<string | null>(null)
  });

  ngOnInit(): void {
    this.managerHackerservice.editHackerEvent
      .subscribe((hacker: IHacker) => {
        console.log('Edition reçue dans le formulaire !');
        this.hacker_to_hackerForm(hacker);
      });
  }

  getInfoByIP() {
    this.lookupIpService.getGeoLocationIp(this.hackerForm.value.ip || '').subscribe({
      next: (data) => {
        this.hackerForm.controls.countryName.setValue(data.country_name);
        this.hackerForm.controls.regionName.setValue(data.region_name);
        this.hackerForm.controls.city.setValue(data.city);
      },
      error: (err) => console.error('Erreur Lookup IP', err)
    });
  }

  onSubmit() {
    if (this.hackerForm.invalid) return;

    const hacker = this.hackerForm_to_hacker();
    this.managerHackerservice.addOrUpdate(hacker);

    this.hackerForm.reset();
  }

  clear() {
    this.hackerForm.reset();
    console.log('Formulaire réinitialisé');
  }

  private hackerForm_to_hacker(): IHacker {
    return new Hacker(
      this.hackerForm.controls.ip.value ?? '',
      this.hackerForm.controls.countryName.value ?? '',
      this.hackerForm.controls.regionName.value ?? '',
      this.hackerForm.controls.city.value ?? '',
      this.hackerForm.controls.id.value ?? undefined
    );
  }

  private hacker_to_hackerForm(hacker: IHacker): void {
    this.hackerForm.patchValue({
      ip: hacker.ip,
      countryName: hacker.countryName,
      regionName: hacker.regionName,
      city: hacker.city,
      id: hacker.id ?? null
    });
  }
}
