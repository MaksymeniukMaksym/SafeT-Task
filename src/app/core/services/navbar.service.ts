import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private _isBlur: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isBlur$: Observable<boolean> = this._isBlur.asObservable();

  private _isOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isOpen$: Observable<boolean> = this._isOpen.asObservable();

  constructor() { }

  public toggleBlurState(data: boolean) {
    this._isBlur.next(data);
  }

  public toggleOpenState(data: boolean) {
    this._isOpen.next(data);
  }

}
