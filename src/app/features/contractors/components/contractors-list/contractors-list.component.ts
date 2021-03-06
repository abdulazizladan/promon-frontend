import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddContractorComponent } from '../add-contractor/add-contractor.component';
import { ContractorsService } from '../../services/contractors.service';
import { tap } from 'rxjs/operators';
import { animate, state, style, transition, trigger} from '@angular/animations';
import { Contractor } from '../../models/contractor.model';
import { Store } from '@ngrx/store';
import { loadContractors } from '../../actions/contractor.actions';
import { AdminState } from 'src/app/store';
import { noop } from 'rxjs';


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
  displayedColumns: string[] = ['sno', 'name', 'website', 'rcNumber', '_id']
  constructor(
    public dialog: MatDialog,
    private contractorService: ContractorsService,
    private store: Store<AdminState>
  ) { }

  ngOnInit(): void {
    this.getContractors()
  }

  openDialog(): void{
    this.dialog.open(AddContractorComponent)
  }

  private getContractors(): void{
    this.contractorService.findAll()
    .pipe(
      tap( contractors => {
        //console.log(contractors)
        this.contractors = contractors;
        this.store.dispatch(loadContractors())
      })
      ).subscribe(
        () => noop
      )
    }
  }


