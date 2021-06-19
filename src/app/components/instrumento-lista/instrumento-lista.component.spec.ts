import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentoListaComponent } from './instrumento-lista.component';

describe('InstrumentoListaComponent', () => {
  let component: InstrumentoListaComponent;
  let fixture: ComponentFixture<InstrumentoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentoListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
