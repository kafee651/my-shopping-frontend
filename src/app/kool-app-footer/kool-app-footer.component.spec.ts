import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoolAppFooterComponent } from './kool-app-footer.component';

describe('KoolAppFooterComponent', () => {
  let component: KoolAppFooterComponent;
  let fixture: ComponentFixture<KoolAppFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoolAppFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoolAppFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
