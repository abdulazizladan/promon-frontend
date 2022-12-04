import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadContractors } from '../../store/contractors.actions';
import { ContractorsState } from '../../store/contractors.reducer';

@Component({
  selector: 'app-contractors-list',
  templateUrl: './contractors-list.component.html',
  styleUrls: ['./contractors-list.component.scss']
})
export class ContractorsListComponent implements OnInit {

  constructor( private store: Store<{ contractors: ContractorsState }>) { }

  displayedColumns: string[] = ['RC No.', 'name'];

  ngOnInit(): void {
    this.store.dispatch(loadContractors())
  }

}
