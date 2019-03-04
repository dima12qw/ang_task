import {Component, OnDestroy, OnInit} from '@angular/core';
import {ItemService} from '../../item.service';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  items;
  item = {};
  sub : Subscription;

  constructor(private itemService: ItemService, public modalService: NgxSmartModalService,
              private router: Router) {
  }

  ngOnInit() {
    this.sub = this.itemService.getItems().subscribe((items) => {
      this.items = items;
    });
  }

  openModal(itCode) {
    this.itemService.getItem(itCode).subscribe((item) => {
      this.item = item;
      this.modalService.getModal('myModal').open();
    });
  }

  navEdit(id) {
    this.router.navigate(['/first/edit'], {queryParams: {id: id}});
  }

  navAdd() {
    this.router.navigate(['/first/edit'], {queryParams: {add: true}});
  }

  onDelete(id: string) {
    if (window.confirm('Are you sure do you want to delete')) {
      this.itemService.deleteItem(id).subscribe(data => {console.log('Item deleted');
      this.itemService.getItems().subscribe((data)=>{
        this.items=data;
      })});
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
