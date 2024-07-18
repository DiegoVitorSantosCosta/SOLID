import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCertoComponent } from './login-certo.component';

describe('LoginCertoComponent', () => {
  let component: LoginCertoComponent;
  let fixture: ComponentFixture<LoginCertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginCertoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
