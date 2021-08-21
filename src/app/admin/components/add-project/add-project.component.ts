import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  public addProjectForm!: FormGroup;
  public country: any;

  /**
   * 
   * @param projectService 
   * @param fb 
   */
  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder
    ) { }

  /**
   * 
   */
  ngOnInit(): void {
    this.getStates();
    this.initializeForm();
  }

  /**
   * 
   */
  initializeForm(): void{
    this.addProjectForm = this.fb.group({
      title: (['', [Validators.required]]),
      description: (['', [Validators.required]]),
      dateAwarded: ([null, [Validators.required]])
    })
  }

  getStates() {
    this.projectService.getStates().subscribe(
      res => {
        this.country = res;
      }, err => {

      }
    )
  }

  submit(): void{
    this.projectService.create(this.addProjectForm.value)
  }

}
