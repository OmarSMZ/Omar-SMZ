import { ComponentFixture, TestBed } from '@angular/core/testing';
import { newproduct } from './newproduct';

describe('Newproduct', () => {
  let component: newproduct;
  let fixture: ComponentFixture<newproduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [newproduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(newproduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
