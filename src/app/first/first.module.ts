import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { FirstComponent } from './first.component';
import {MockDataService} from './mock-data.service';
import {ItemService} from './item.service';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { ListComponent } from './list/list/list.component';
import {NgxSmartModalModule} from 'ngx-smart-modal';
import { VieweditComponent } from './viewedit/viewedit.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FirstRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(MockDataService),
    NgxSmartModalModule.forRoot(),
    FormsModule

  ],
  declarations: [FirstComponent, ListComponent, VieweditComponent],
  providers: [ItemService]
})
export class FirstModule { }
