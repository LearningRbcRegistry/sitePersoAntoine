import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiwikComponent } from './piwik.component';

describe('PiwikComponent', () => {
  let component: PiwikComponent;
  let fixture: ComponentFixture<PiwikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiwikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiwikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
