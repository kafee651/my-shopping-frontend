import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoolAppBodyTextSearchComponent } from './kool-app-body-text-search.component';

describe('KoolAppBodyTextSearchComponent', () => {
  let component: KoolAppBodyTextSearchComponent;
  let fixture: ComponentFixture<KoolAppBodyTextSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoolAppBodyTextSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoolAppBodyTextSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
