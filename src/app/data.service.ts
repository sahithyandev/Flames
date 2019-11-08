import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public flamesResult: string
  public names = {
    boyName: '',
    girlName: ''
  }

  constructor() { }
}
