import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  boyName: string = 'John'
  girlName: string = 'Jessica'
  flamesResult
  flamesMeaning = {
    F: 'Friends',
    L: 'Love',
    A: 'Affectionate',
    M: 'Married',
    E: 'Enemy',
    S: 'Sibilings'
  }

  constructor(
    public parse: DataService,
    public router: Router
  ) {

  }

  ngOnInit() {
  }
  
  removeMatchingLetters(str1: Array<string>, str2: Array<string>) {
    for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < str2.length; j++) {
        if (str1[i] == str2[j]) {
          str2[j] = ''
          str1[i] = ''
        }
      }
    }

    return str1.concat(str2).filter((value) => {
      return value != ''
    })
  }

  getArray(str: string) {
    let result: Array<string> = []
    for (let letter of str) {
      result.push(letter)
    }

    return result
  }

  check() {
    console.log('checking')
    if (this.boyName.toLocaleLowerCase() == this.girlName.toLocaleLowerCase()) {
      console.log('are you sure?')
      return;
    }
    this.boyName.replace(' ', '')
    this.girlName.replace(' ', '')
    this.doFlames()
  }

  doFlames() {
    let removedArray = this.removeMatchingLetters(this.getArray(this.boyName), this.getArray(this.girlName))
    this.flamesResult = this.result(removedArray.length)
    this.goToResultsPage()
  }

  goToResultsPage() {
    this.parse.flamesResult = this.flamesMeaning[this.flamesResult]
    this.parse.names = {
      boyName: this.boyName,
      girlName: this.girlName
    }
    this.router.navigateByUrl('/result')
  }

  result(number) {
    let string = "FLAMES"
    let process = new Array()

    while (string.length > 1) {
      var j = 0
      process = []
      let position = number % string.length

      if (position != 0) {
        for (let i = position + 1; i <= string.length; i++) {
          process[j] = string.charAt(i - 1)
          j++
        }

        for (let i = 0; i <= position - 2; i++) {
          process[j] = string.charAt(i)
          j++
        }
        string = process.toString().replace(/,/gi, "")
      }
      else {
        string = string.slice(0, -1)
      }
    }
    return string.toLocaleUpperCase()
  }

}
