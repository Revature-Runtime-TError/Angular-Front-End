import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';

import { UserCardComponent } from './user-card.component';

describe('UserCardComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardComponent ],
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule],
      providers: [HttpClient, AuthService]
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(UserCardComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it("should render 'Revature Network'", () => {
    const fixture = TestBed.createComponent(UserCardComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.user-card label')?.textContent).toContain('Revature Network');
  });
});
