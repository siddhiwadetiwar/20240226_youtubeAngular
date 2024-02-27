import { ComponentFixture, TestBed } from '@angular/core/testing';

import { navSide } from './side-bar.component';

describe('navSide', () => {
  let component: navSide;
  let fixture: ComponentFixture<navSide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [navSide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(navSide);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
