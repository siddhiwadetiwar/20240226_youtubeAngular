import { ComponentFixture, TestBed } from '@angular/core/testing';

import { navTop } from './top-bar.component';

describe('navTop', () => {
  let component: navTop;
  let fixture: ComponentFixture<navTop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [navTop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(navTop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
