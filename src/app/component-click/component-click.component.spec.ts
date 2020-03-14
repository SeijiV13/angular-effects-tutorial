import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentClickComponent } from './component-click.component';

describe('ComponentClickComponent', () => {
  let component: ComponentClickComponent;
  let fixture: ComponentFixture<ComponentClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
