import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../project.model';
import { ProjectsService } from '../../projects.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css',
})
export class ProjectItemComponent {
  @Input() project!: Project
  activeProject: string = 'portfolio-angular'
  currentProject!: Project

  subscription: Subscription = new Subscription()

  constructor(private projectService: ProjectsService) {

  }

  ngOnInit(): void {
    // Subscribe to the currentIndex observable
    // this.subscription = this.projectService.currentIndex$.subscribe((index) => {
    //   this.currentProject = this.projectService.projects[index]
    // });
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    this.subscription.unsubscribe();
  }
}
