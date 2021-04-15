import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPageComponent } from './account-page.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AccountPageComponent', () => {
  let component: AccountPageComponent;
  let fixture: ComponentFixture<AccountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountPageComponent ],
      imports: [
        RouterTestingModule.withRoutes(
          [
            {path: 'app', children: [
              {
                  path: 'movies',
                  loadChildren: () => import('../account-page.module').then(m => m.AccountPageModule)
              },
            ]}
          ]
        )
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
