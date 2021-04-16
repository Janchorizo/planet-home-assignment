import { TestBed } from '@angular/core/testing';
import { createStore } from 'redux';

import { DataService } from './data.service';
import { UserActions } from 'src/redux/userActions';
import { appReducer } from 'src/redux/appReducer';
import { MoviesActions } from 'src/redux/moviesActions';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    const store = createStore(appReducer);

    TestBed.configureTestingModule({
      providers: [
        { provide: 'AppStore', useValue: store },
        UserActions,
        MoviesActions
      ]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
