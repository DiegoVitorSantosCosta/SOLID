import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginErradoComponent } from './login-errado.component';

describe('LoginErradoComponent', () => {
  let component: LoginErradoComponent;
  let fixture: ComponentFixture<LoginErradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginErradoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginErradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
