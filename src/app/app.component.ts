import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ProjectsComponent } from "./projects/projects.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { PagesComponent } from "./pages/pages.component";
import { FooterComponent } from "./footer/footer.component";
import { ProjectsService } from './projects/projects.service';
import { HomeComponent } from "./home/home.component";
import { HomeService } from './home/home.service';
import { SkillsComponent } from "./skills/skills.component";
import { ExperienceService } from './timeline/experience/experience.service';
import { Subscription } from 'rxjs';
import { Project } from './projects/project.model';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [ProjectsService, HomeService, ExperienceService],
    imports: [CommonModule,
    RouterOutlet,
    HeaderComponent,
    ProjectsComponent,
    TimelineComponent,
    PagesComponent,
    FooterComponent, 
    HomeComponent, 
    SkillsComponent]
})
export class AppComponent {
  title = 'portfolio-angular';
  loadedTab = 'home'
  currentImage: string = ''
  currentProject!: Project

  subscription: Subscription = new Subscription();

  constructor(private projectService: ProjectsService) {
    
  }

  ngOnInit(): void {
    // Subscribe to the currentIndex observable
    this.subscription = this.projectService.currentIndex$.subscribe((index) => {
      this.currentProject = this.projectService.projects[index]
      this.currentImage = this.projectService.projects[index].imagePath;
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    this.subscription.unsubscribe();
  }

  onNavigate(tab: string) {
    this.loadedTab = tab
  }
}
