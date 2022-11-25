import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Contractor } from '../../models/contractor.model';
import { ContractorsService } from '../../services/contractors.service';
import { AddContractorComponent } from '../add-contractor/add-contractor.component';

@Component({
  selector: 'app-contractors-list',
  templateUrl: './contractors-list.component.html',
  styleUrls: ['./contractors-list.component.scss']
})
export class ContractorsListComponent implements OnInit {

  contractors$: Observable<Contractor[]> | undefined;
  constructor(
    private dialog: MatDialog,
    private contractorsService: ContractorsService ) { }

  ngOnInit(): void {
  }

  getContractors() {

  }

  openAddContractorDialog() {
    this.dialog.open(AddContractorComponent, {
      width: '480px',
      panelClass: 'panel'
    })
  }

}
