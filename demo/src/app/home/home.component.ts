import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title, private wowService: NgwWowService) {
  }

  ngOnInit() {
    this.titleService.setTitle('Home | ngx-wow');
  }

  reset() {
    this.wowService.init();
  }
}
