import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItemComponent } from "./project-item/project-item.component";
import { Project } from '../project.model';
// import * as projectData from 'assets/projectData.json'
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Component({
    selector: 'app-project-list',
    standalone: true,
    templateUrl: './project-list.component.html',
    styleUrl: './project-list.component.css',
    imports: [CommonModule, 
              ProjectItemComponent,
              HttpClientModule]
})
export class ProjectListComponent {
  projects!: Project[];
  url: string = 'assets/projectData.json'

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Project[]>(this.url).subscribe(res => {
      this.projects = res
    })
  }
  // projects: Project[] = [
  //   new Project('A Test Project','This is a simple test','https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/IchigoKurosakiBleach.jpg/220px-IchigoKurosakiBleach.jpg','https://github.com/DracFiendMG/meme-generator'),
  //   new Project('A Test Project','This is a simple test','https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/IchigoKurosakiBleach.jpg/220px-IchigoKurosakiBleach.jpg','https://github.com/DracFiendMG/meme-generator'),
  //   new Project('A Test Project','This is a simple test','https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/IchigoKurosakiBleach.jpg/220px-IchigoKurosakiBleach.jpg','https://github.com/DracFiendMG/meme-generator'),
  //   new Project('A Test Project','This is a simple test','https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/IchigoKurosakiBleach.jpg/220px-IchigoKurosakiBleach.jpg','https://github.com/DracFiendMG/meme-generator'),
  //   new Project('A Test Project','This is a simple test','https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/IchigoKurosakiBleach.jpg/220px-IchigoKurosakiBleach.jpg','https://github.com/DracFiendMG/meme-generator'),
  //   new Project('A Test Project','This is a simple test','https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/IchigoKurosakiBleach.jpg/220px-IchigoKurosakiBleach.jpg','https://github.com/DracFiendMG/meme-generator')
  // ]
}
