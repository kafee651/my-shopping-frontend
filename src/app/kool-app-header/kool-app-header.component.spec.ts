import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoolAppHeaderComponent } from './kool-app-header.component';

describe('KoolAppHeaderComponent', () => {
  let component: KoolAppHeaderComponent;
  let fixture: ComponentFixture<KoolAppHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoolAppHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoolAppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
