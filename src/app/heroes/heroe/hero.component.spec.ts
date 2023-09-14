import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeComponent } from './heroe.component';

describe('HeroComponent', () => {
  let component: HeroeComponent;
  let fixture: ComponentFixture<HeroeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroeComponent]
    });
    fixture = TestBed.createComponent(HeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
