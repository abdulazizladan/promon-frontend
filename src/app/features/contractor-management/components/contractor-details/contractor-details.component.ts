import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadDetails } from '../../store/contractors.actions';
import { ContractorsState } from '../../store/contractors.reducer';

@Component({
  selector: 'app-contractor-details',
  templateUrl: './contractor-details.component.html',
  styleUrls: ['./contractor-details.component.scss']
})
export class ContractorDetailsComponent implements OnInit {

  id: string = '1234';

  constructor( private store: Store<{ state: ContractorsState}>) { }

  ngOnInit(): void {
    const id = this.id;
    this.store.dispatch(loadDetails({id: id}))
  }

}
