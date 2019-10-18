import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public flamesResult: string
  public names: object = {
    boyName: '',
    girlName: ''
  }

  constructor() { }
}
