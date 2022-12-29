import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Video16Directivas3Component } from './video16-directivas3.component';

describe('Video16Directivas3Component', () => {
  let component: Video16Directivas3Component;
  let fixture: ComponentFixture<Video16Directivas3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Video16Directivas3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Video16Directivas3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
