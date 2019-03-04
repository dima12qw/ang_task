import {Component, OnInit} from '@angular/core';
import {ItemService} from '../item.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-viewedit',
  templateUrl: './viewedit.component.html',
  styleUrls: ['./viewedit.component.css']
})
export class VieweditComponent implements OnInit {
  sub: Subscription;
  item = <any>{id: '', name: '', description: '', active: false};
  isEditing = false;

  constructor(private itemService: ItemService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['id']) {
        let id = params['id'];
        this.itemService.getItem(id).subscribe((item) => {
          this.item = item;
          this.isEditing = true;
        });
      } else {
        this.isEditing = false;
        // this.item = null;
      }
    });
  }


  onSubmit() {
    if (!this.isEditing) {
      console.log(this.item);
      this.itemService.createItem(this.item).subscribe(data => {
        console.log(data);
      });
    } else {
      this.itemService.updateItem(this.item).subscribe(data => {
        console.log(data);
      });
    }
  }
}
