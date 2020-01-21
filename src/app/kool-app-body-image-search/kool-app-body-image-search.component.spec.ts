import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoolAppBodyImageSearchComponent } from './kool-app-body-image-search.component';

describe('KoolAppBodyImageSearchComponent', () => {
  let component: KoolAppBodyImageSearchComponent;
  let fixture: ComponentFixture<KoolAppBodyImageSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoolAppBodyImageSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoolAppBodyImageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
