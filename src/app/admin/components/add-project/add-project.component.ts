import { Component, OnInit } from '@angular/core';
//import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  public addProjectForm!: FormGroup;

  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void{
    this.addProjectForm = this.fb.group({
      title: (['', [Validators.required]])
    })
  }

}
