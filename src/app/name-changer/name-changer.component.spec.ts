import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameChangerComponent } from './name-changer.component';

describe('NameChangerComponent', () => {
  let component: NameChangerComponent;
  let fixture: ComponentFixture<NameChangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameChangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
