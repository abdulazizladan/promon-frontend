import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddContractorComponent } from '../add-contractor/add-contractor.component';
import { ContractorService } from '../../services/contractor.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Contractor } from '../../models/contractor.model';

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

  public contractors: any
  displayedColumns: string[] = ['_id', 'name', 'website']

  /**
   *
   * @param dialog
   * @param contractorService
   */
  constructor(
    public dialog: MatDialog,
    private contractorService: ContractorService
  ) { }

  /**
   *
   */
  ngOnInit(): void {
    this.getContracts();
  }

  /**
   *
   */
  openDialog(): void{
    this.dialog.open(AddContractorComponent)
  }

  /**
   *
   */
  private getContracts(): void{
    this.contractorService.findAll().subscribe(
      res => {
        this.contractors = res;
      }, err => {
        console.log(err)
      }
    )
  }

}
