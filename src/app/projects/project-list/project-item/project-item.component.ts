import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../project.model';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css'
})
export class ProjectItemComponent {
  @Input() project!: Project
  activeProject: string = 'portfolio-angular'
}
