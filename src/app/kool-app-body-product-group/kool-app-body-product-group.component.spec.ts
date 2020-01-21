import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoolAppBodyProductGroupComponent } from './kool-app-body-product-group.component';

describe('KoolAppBodyProductGroupComponent', () => {
  let component: KoolAppBodyProductGroupComponent;
  let fixture: ComponentFixture<KoolAppBodyProductGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoolAppBodyProductGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoolAppBodyProductGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
