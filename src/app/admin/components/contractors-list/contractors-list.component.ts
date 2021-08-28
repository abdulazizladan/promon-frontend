import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddContractorComponent } from '../add-contractor/add-contractor.component';
import { ContractorService } from '../../services/contractor.service';
import { tap } from 'rxjs/operators';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Contractor } from '../../models/contractor.model';
import { Store } from '@ngrx/store';
import { AdminState } from 'src/app/store';
import { loadContractors } from '../../actions/contractor.actions';

@Component({
  selector: 'app-contractors-list',
  templateUrl: './contractors-list.component.html',
  styleUrls: ['./contractors-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ContractorsListComponent implements OnInit {

  expandedContractor: any | null;

  public contractors!: Contractor[];
  displayedColumns: string[] = ['sno', 'name', 'website', '_id']

  /**
   * Constructor
   * @param dialog
   * @param contractorService
   */
  constructor(
    public dialog: MatDialog,
    private contractorService: ContractorService,
    private store: Store<AdminState>
  ) { }

  /**
   * First lifecycle hook
   */
  ngOnInit(): void {
    this.getContracts();
  }

  /**
   * open add-contractor dialog
   */
  openDialog(): void{
    this.dialog.open(AddContractorComponent)
  }

  /**
   * retrieve list of contractors
   */
  private getContracts(): void{
    this.contractorService.findAll()
    .pipe(
      tap( contractors => {
        console.log(contractors)
        this.contractors = contractors;
        this.store.dispatch(loadContractors())
      })
      ).subscribe(
        () => console.log('b')
      )
    //this.contractorService.findAll().subscribe(
    //  res => {
    //    this.contractors = res;
    //  }, err => {
    //    console.log(err)
    // }
    //)
  }

}
