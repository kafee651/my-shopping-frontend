import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoolAppBodyProductComponent } from './kool-app-body-product.component';

describe('KoolAppBodyProductComponent', () => {
  let component: KoolAppBodyProductComponent;
  let fixture: ComponentFixture<KoolAppBodyProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoolAppBodyProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoolAppBodyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
