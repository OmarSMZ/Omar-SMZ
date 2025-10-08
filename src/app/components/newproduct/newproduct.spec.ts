import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newproduct } from './newproduct';

describe('Newproduct', () => {
  let component: Newproduct;
  let fixture: ComponentFixture<Newproduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newproduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newproduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
