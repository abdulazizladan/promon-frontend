import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  public projects: Array<Project> = [];

  constructor( private projectService: ProjectService) { }

  ngOnInit(): void {

  }

  private getProjects() {

  }

}
