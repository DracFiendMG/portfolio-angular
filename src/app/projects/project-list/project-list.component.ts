import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemComponent } from "./project-item/project-item.component";
import { Project } from '../project.model';
// import * as projectData from 'assets/projectData.json'
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ProjectsService } from '../projects.service';

@Component({
    selector: 'app-project-list',
    standalone: true,
    templateUrl: './project-list.component.html',
    styleUrl: './project-list.component.css',
    imports: [CommonModule, 
              ProjectItemComponent,
              HttpClientModule],
})
export class ProjectListComponent {
  projects!: Project[];
  currentIndex: number = 0;
  // for getting data from json
  // url: string = './assets/projectData.json'

  constructor(private http: HttpClient,
              private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsService.projects$.subscribe((data) => {
      this.projects = data;
    });
  }

  // Method to go to the next image
  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.projectsService.updateCurrentIndex(this.currentIndex);
  }

  // Method to go to the previous image
  previousImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    this.projectsService.updateCurrentIndex(this.currentIndex);
  }
}
