import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';
import { CreateProject } from '../../actions/project.actions';
import { Store } from '@ngrx/store';
import { Project } from '../../models/project.model';
import { State } from '../../models/states.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit, AfterViewInit {

  projectForm: FormGroup = new FormGroup({});
  public nigeria: any;

  submitted: boolean = false;
  fail: boolean = false;

  /**
   *
   * @param fb
   * @param projectsService
   * @param store
   */
  constructor(
    private fb: FormBuilder,
    private projectsService: ProjectsService,
    private store: Store<{project: Project}>
  ) { }

  ngOnInit(): void {
    this.getStates();
    this.initializeForm();
  }

  ngAfterViewInit() {
    console.log(this.nigeria);
  }


  /**
   *
   */
  initializeForm(): void{
    this.projectForm = this.fb.group({
      title: ['', Validators.required],
      //sector: [''],
      description: ['', Validators.required],
      beneficiary: [''],
      budget: [0, Validators.required],
      state: [''],
      lga: [''],
      streetAddress: ['']
    })
  }

  /**
   *
   */
  submit(): void{
    const formData = this.projectForm.value;
    this.submitted = true;
    this.store.dispatch(CreateProject(formData))
    setTimeout(() => {
      this.submitted = false;
    }, 5000)
    console.log(formData)
  }

  getStates(): void{
    this.projectsService.getStates()
    .pipe()
    .subscribe(
      res => {
        this.nigeria = res;
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }

}
