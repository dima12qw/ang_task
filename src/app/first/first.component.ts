import { Component, OnInit } from '@angular/core';
import {ItemService} from './item.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private itemService : ItemService) { }

  ngOnInit() {

  }

}
