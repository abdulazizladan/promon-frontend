import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddContractorComponent } from '../add-contractor/add-contractor.component';
import { ContractorService } from '../../services/contractor.service';
import { Contractor } from '../../models/contractor.model';

@Component({
  selector: 'app-contractors-list',
  templateUrl: './contractors-list.component.html',
  styleUrls: ['./contractors-list.component.scss']
})
export class ContractorsListComponent implements OnInit {

  public contractors: any
  displayedColumns: string[] = ['name', 'lastName', 'email', 'role', 'active']

  constructor(
    public dialog: MatDialog,
    private contractorService: ContractorService
  ) { }

  ngOnInit(): void {
    this.getContracts();
  }

  openDialog(): void{
    this.dialog.open(AddContractorComponent)
  }

  private getContracts(): void{
    this.contractorService.findAll();
  }

}
