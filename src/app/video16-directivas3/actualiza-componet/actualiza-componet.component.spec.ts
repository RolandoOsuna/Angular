import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizaComponetComponent } from './actualiza-componet.component';

describe('ActualizaComponetComponent', () => {
  let component: ActualizaComponetComponent;
  let fixture: ComponentFixture<ActualizaComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizaComponetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizaComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
