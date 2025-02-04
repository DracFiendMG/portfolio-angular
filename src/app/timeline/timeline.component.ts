import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import TagCloud from 'TagCloud';
import { DisplayImage } from '../about/model/display-image.model';
import { AboutService } from '../about/about.service';
import { Experience } from './experience/experience.interface';
import { ExperienceService } from './experience/experience.service';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  radius = 250
  displayImages: DisplayImage[] = []

  experiences: Experience[] = [];
  
  constructor(private http: HttpClient, private aboutService: AboutService, private experienceService: ExperienceService) {}

  ngOnInit() {
    this.aboutService.skills$.subscribe((data) => {
      this.displayImages = data
    })
    
    this.experienceService.experience$.subscribe((data) => {
      this.experiences = data
    })

    const skill = {"description":"bitbucket image","imagePath":"./assets/bitbucket-icon.png","name":"bitbucket-icon"}

    const container: string = '.cloud'
    let text = []
    let image = ''
    for (let i = 1; i < this.displayImages.length; i++) {
      image = `<img class="icon" src=${this.displayImages[i].imagePath} alt=${this.displayImages[i].description} width="15%">`
      text.push(image)
    }

    TagCloud(container, text, {
      radius: this.radius,
      maxSpeed: 'normal',
      useHTML: true,
    })
  }
}
