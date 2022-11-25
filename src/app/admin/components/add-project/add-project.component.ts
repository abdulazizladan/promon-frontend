import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  public addProjectForm: FormGroup = new FormGroup({});

  constructor( private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.addProjectForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      description: ['', [Validators.required, Validators.minLength(50)]],
      location: this.fb.group({
        country: ['', [Validators.required]],
        state: ['', [Validators.required]],
        lga: ['', [Validators.required]],
        streetAddress: ['', [Validators.required]],
        coordinates: this.fb.group({
          longitude: [''],
          latitude: ['']
        })
      })
    })
  }

  submit() {
    console.log(this.addProjectForm.value)
  }

}
