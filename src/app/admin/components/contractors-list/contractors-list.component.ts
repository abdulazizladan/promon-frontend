import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContractorsService } from '../../services/contractors.service';
import { AddContractorComponent } from '../add-contractor/add-contractor.component';

@Component({
  selector: 'app-contractors-list',
  templateUrl: './contractors-list.component.html',
  styleUrls: ['./contractors-list.component.scss']
})
export class ContractorsListComponent implements OnInit {

  constructor( private dialog: MatDialog, private contractorsService: ContractorsService ) { }

  ngOnInit(): void {
  }

  openAddContractorDialog() {
    this.dialog.open(AddContractorComponent)
  }

}
