import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateProject } from '../../actions/project.actions';
import { Store } from '@ngrx/store';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  projectForm: FormGroup = new FormGroup({});

  submitted: boolean = false;
  fail: boolean = false;

  constructor(
    private fb: FormBuilder,
    private store: Store<{project: Project}>
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void{
    this.projectForm = this.fb.group({
      title: ['', Validators.required],
      sector: [''],
      description: ['', Validators.required],
      beneficiary: [''],
      budget: [0, Validators.required],
      state: [''],
      lga: [''],
      streetAddress: ['']
    })
  }

  submit(): void{
    const formData = this.projectForm.value;
    this.submitted = true;
    this.store.dispatch(CreateProject(formData))
    setTimeout(() => {
      this.submitted = false;
    }, 5000)
    console.log(formData)
  }

}
