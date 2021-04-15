import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MoviesPageComponent } from './movies-page.component';

describe('MoviesPageComponent', () => {
  let component: MoviesPageComponent;
  let fixture: ComponentFixture<MoviesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesPageComponent ],
      imports: [
        RouterTestingModule.withRoutes(
          [
            {path: 'app', children: [
              {
                  path: 'movies',
                  loadChildren: () => import('../movies-page.module').then(m => m.MoviesPageModule)
              },
            ]}
          ]
        )
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
