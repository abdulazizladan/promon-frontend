import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProjects } from '../../store/actions/projects.actions';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor( private store: Store<{ users: any }> ) { }

  ngOnInit(): void {
    //this.store.dispatch()
  }

}
