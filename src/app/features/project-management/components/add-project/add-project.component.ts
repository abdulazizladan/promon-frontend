import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProjectsState } from '../../store/project.reducer';
import { addProject } from '../../store/projects.actions';
import { Project, Status } from '../../models/project.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  public addProjectForm: FormGroup = new FormGroup({})

  constructor( private store: Store<{ state: ProjectsState }>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.addProjectForm = this.fb.group({
      id: ['', [Validators.required, Validators.minLength(8)]],
      title: ['', [Validators.required, Validators.minLength(8)]],
      description: ['', [Validators.required, Validators.minLength(20)]],
      status: [Status.notStarted],
      dateAdded: [new Date(Date.now())]
    })
  }

  addProject() {
    const newProject = this.addProjectForm.value;
    this.store.dispatch(addProject({project: newProject}))
  }

}
