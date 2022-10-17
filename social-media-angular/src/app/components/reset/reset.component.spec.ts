import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';
import { ResetService } from 'src/app/services/reset.service';

import { ResetComponent } from './reset.component';

describe('ResetComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetComponent ],
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule],
      providers: [HttpClient]
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ResetComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render reset message', () => {
    const fixture = TestBed.createComponent(ResetComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.login-wrapper mat-card-title')?.textContent).toContain("Reset Password");
  });

  it(`should have a User of 'author'`, () => {
    const fixture = TestBed.createComponent(ResetComponent);
    const component = fixture.componentInstance;
    expect(component.user).toEqual({
      id: 0,
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      bio: ""
    });
  });

});
