import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Video19ComunicacionComponentesComponent } from './video19-comunicacion-componentes.component';

describe('Video19ComunicacionComponentesComponent', () => {
  let component: Video19ComunicacionComponentesComponent;
  let fixture: ComponentFixture<Video19ComunicacionComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Video19ComunicacionComponentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Video19ComunicacionComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
