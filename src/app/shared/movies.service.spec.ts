import { TestBed } from '@angular/core/testing';
import { createStore } from 'redux';
import { MoviesService } from './movies.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { DataService } from './data.service';
import { UserActions } from 'src/redux/userActions';
import { MoviesActions } from 'src/redux/moviesActions';
import { appReducer } from 'src/redux/appReducer';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    const store = createStore(appReducer);

    TestBed.configureTestingModule({
      imports:[
          HttpClientModule
      ],
      providers: [
          ApiService,
          DataService,
          { provide: 'AppStore', useValue: store },
          UserActions,
          MoviesActions
      ]
  });
    service = TestBed.inject(MoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
