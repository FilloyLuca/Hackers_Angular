import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerList } from './hacker-list';

describe('HackerList', () => {
  let component: HackerList;
  let fixture: ComponentFixture<HackerList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HackerList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HackerList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
