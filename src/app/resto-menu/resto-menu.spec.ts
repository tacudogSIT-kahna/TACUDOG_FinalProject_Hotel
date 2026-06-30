import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoMenu } from './resto-menu';

describe('RestoMenu', () => {
  let component: RestoMenu;
  let fixture: ComponentFixture<RestoMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestoMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(RestoMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
