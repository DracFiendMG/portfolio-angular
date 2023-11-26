import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from "./project-list/project-list.component";
import { ProjectDetailsComponent } from "./project-details/project-details.component";

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    imports: [CommonModule, 
              ProjectListComponent, 
              ProjectDetailsComponent]
})
export class ProjectsComponent {
  
}
