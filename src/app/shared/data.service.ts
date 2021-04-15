import { Injectable, Inject } from '@angular/core';
import { Store } from 'redux'
import { UserActions } from 'src/redux/userActions';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  appStore: Store;
  userSubject: BehaviorSubject<object>;
  unsubscribeStore: CallableFunction;

  constructor(
      @Inject('AppStore') appStore: Store,
      private userActions: UserActions
  ) {
    this.appStore = appStore;
    const initialState = this.appStore.getState();
    this.userSubject = new BehaviorSubject(initialState.user);

    this.unsubscribeStore = this.appStore.subscribe(
      this.handleStoreUpdate.bind(this));
  }

  private handleStoreUpdate() {
    const newState = this.appStore.getState();
    this.userSubject.next(newState.user);
  }

  getUser(): BehaviorSubject<object> {
    return this.userSubject;
  }

  setUser(user) {
    const payload = {user};
    this.appStore.dispatch(this.userActions.setUser(payload));
  }

  clearUser() {
    this.appStore.dispatch(this.userActions.clearUser({}));
  }
}
