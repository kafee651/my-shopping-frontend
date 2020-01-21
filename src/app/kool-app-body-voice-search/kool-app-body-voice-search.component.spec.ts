import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoolAppBodyVoiceSearchComponent } from './kool-app-body-voice-search.component';

describe('KoolAppBodyVoiceSearchComponent', () => {
  let component: KoolAppBodyVoiceSearchComponent;
  let fixture: ComponentFixture<KoolAppBodyVoiceSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoolAppBodyVoiceSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoolAppBodyVoiceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
