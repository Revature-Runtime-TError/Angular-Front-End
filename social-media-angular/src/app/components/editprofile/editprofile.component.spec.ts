import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

import { EditprofileComponent } from './editprofile.component';

describe('EditprofileComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprofileComponent ],
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule],
      providers: [HttpClient]
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(EditprofileComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have updatedUser`, () => {
    const fixture = TestBed.createComponent(EditprofileComponent);
    const component = fixture.componentInstance;
    expect(component.updatedUser).toEqual({
      id: 0,
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      bio: ""
    });
  });

  it('should render filter question', () => {
    const fixture = TestBed.createComponent(EditprofileComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.updateh1')?.textContent).toContain("Update Profile");
  });
});
