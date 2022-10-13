import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

import { PostComponent } from './post.component';

describe('PostComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostComponent ],
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule], 
      providers: [HttpClient, PostService, AuthService]
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PostComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render Reply Button', () => {
    const fixture = TestBed.createComponent(PostComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.myDiv button')?.textContent).toContain('Reply');
  });
});
