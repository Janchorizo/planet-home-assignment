import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { DataService } from './data.service';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            ApiService,
            DataService
        ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
