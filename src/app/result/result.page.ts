import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  flames = ['F', 'L', 'A', 'M', 'E', 'S']

  constructor(
    public parse: DataService,
    public router: Router
  ) {
    if (this.parse.flamesResult == undefined) {
      this.router.navigateByUrl('/home')
    }
  }

  ngOnInit() {
  }

}
