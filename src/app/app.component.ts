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

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [ProjectsService],
    imports: [CommonModule,
        RouterOutlet,
        HeaderComponent,
        ProjectsComponent,
        TimelineComponent,
        PagesComponent,
        FooterComponent, HomeComponent]
})
export class AppComponent {
  title = 'portfolio-angular';
  loadedTab = 'home'

  onNavigate(tab: string) {
    this.loadedTab = tab
  }
}
