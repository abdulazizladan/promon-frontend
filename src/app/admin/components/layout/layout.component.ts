import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AdminState } from '../../store/reducers/admin.reducer';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  stats$ :Observable<AdminState>;

  constructor( private store: Store<{ stats: AdminState }> ) {
    this.stats$ = this.store.select('stats').pipe()
  }

  ngOnInit(): void {
    //this.store.dispatch()
  }

}
