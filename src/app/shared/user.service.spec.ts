import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { createStore } from 'redux';

import { ApiService } from './api.service';
import { DataService } from './data.service';
import { UserService } from './user.service';
import { UserActions } from 'src/redux/userActions';
import { appReducer } from 'src/redux/appReducer';

describe('UserService', () => {
  let service: UserService;

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
            UserActions
        ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
