import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenealogieComponent } from './genealogie.component';

describe('GenealogieComponent', () => {
  let component: GenealogieComponent;
  let fixture: ComponentFixture<GenealogieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenealogieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenealogieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
