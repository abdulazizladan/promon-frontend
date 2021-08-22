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

  error: string = '';
  public addProjectForm!: FormGroup;
  public country: any;

  /**
   * Dependencies
   * @param projectService 
   * @param fb 
   */
  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder
    ) { }

  /**
   * First lifecycle hook
   */
  ngOnInit(): void {
    this.getStates();
    this.initializeForm();
  }

  /**
   * Initialize form
   */
  initializeForm(): void{
    this.addProjectForm = this.fb.group({
      title: (['', [Validators.required]]),
      description: (['', [Validators.required]]),
      dateAwarded: ([null, [Validators.required]])
    })
  }

  /**
   * get array of states and their LGAs
   */
  getStates() {
    this.projectService.getStates().subscribe(
      res => {
        this.country = res;
      }, err => {
        this.error = "Unable to get states";
      }
    )
  }

  /**
   * Add Project
   */
  submit(): void{
    this.projectService.create(this.addProjectForm.value)
  }

}
