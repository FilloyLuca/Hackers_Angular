import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerForm } from './hacker-form';

describe('HackerForm', () => {
  let component: HackerForm;
  let fixture: ComponentFixture<HackerForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HackerForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HackerForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
