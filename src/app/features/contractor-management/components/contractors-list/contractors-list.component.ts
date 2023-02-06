import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { filter, Observable } from 'rxjs';
import { Contractor } from '../../models/contractor.model';
import { loadContractors } from '../../store/contractors.actions';
import { ContractorsState } from '../../store/contractors.reducer';
import { AddContractorComponent } from '../add-contractor/add-contractor.component';

@Component({
  selector: 'app-contractors-list',
  templateUrl: './contractors-list.component.html',
  styleUrls: ['./contractors-list.component.scss']
})
export class ContractorsListComponent implements OnInit {

  contractors$: Observable<ContractorsState>;

  constructor( private store: Store<{ contractors: ContractorsState }>, private dialog: MatDialog) {

    this.contractors$ = this.store.select( (contractors) => contractors.contractors ).pipe(

    );

  }

  displayedColumns: string[] = ['id', 'name', 'projects', 'actions'];

  ngOnInit(): void {
    this.store.dispatch(loadContractors());
  }

  openAddContractorDialog(): void {
    this.dialog.open(AddContractorComponent, {width: '800px'})
  }

}
