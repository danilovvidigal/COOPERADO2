import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosCooperadoComponent } from './dados-cooperado.component';

describe('DadosCooperadoComponent', () => {
  let component: DadosCooperadoComponent;
  let fixture: ComponentFixture<DadosCooperadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosCooperadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosCooperadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
