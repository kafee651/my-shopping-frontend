import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoolAppBodyComponent } from './kool-app-body.component';

describe('KoolAppBodyComponent', () => {
  let component: KoolAppBodyComponent;
  let fixture: ComponentFixture<KoolAppBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoolAppBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoolAppBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
