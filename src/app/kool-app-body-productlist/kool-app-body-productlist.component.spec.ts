import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoolAppBodyProductlistComponent } from './kool-app-body-productlist.component';

describe('KoolAppBodyProductlistComponent', () => {
  let component: KoolAppBodyProductlistComponent;
  let fixture: ComponentFixture<KoolAppBodyProductlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoolAppBodyProductlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoolAppBodyProductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
