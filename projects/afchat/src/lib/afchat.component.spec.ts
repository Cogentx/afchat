import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfchatComponent } from './afchat.component';

describe('AfchatComponent', () => {
  let component: AfchatComponent;
  let fixture: ComponentFixture<AfchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
