import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

import { CommentComponent } from './comment.component';

describe('CommentComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentComponent ],
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule],
      providers:[HttpClient, PostService, AuthService]
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CommentComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render Make a Post prompt', () => {
    const fixture = TestBed.createComponent(CommentComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    console.log(compiled.querySelector('myLabel'));
    expect(compiled.querySelector('.comment-reply-text')?.textContent).toContain('reply');
  });
});
