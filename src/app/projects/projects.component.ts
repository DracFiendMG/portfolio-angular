import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from "./project-list/project-list.component";

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    imports: [CommonModule, 
              ProjectListComponent]
})
export class ProjectsComponent {
  
}
