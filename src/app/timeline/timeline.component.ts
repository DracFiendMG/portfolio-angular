import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import TagCloud from 'TagCloud';
import { DisplayImage } from '../home/display-image.model';
import { HomeService } from '../home/home.service';
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
  radius = 200
  displayImages: DisplayImage[] = []

  experiences: Experience[] = [];
  
  constructor(private http: HttpClient, private homeService: HomeService, private experienceService: ExperienceService) {}

  ngOnInit() {
    this.displayImages = this.homeService.displayImages
    this.experiences = this.experienceService.experiences

    const container: string = '.cloud'
    let text = []
    let image = ''
    for (let i = 1; i < this.displayImages.length; i++) {
      image = `<img class="icon" src=${this.displayImages[i].imagePath} alt=${this.displayImages[i].description} width="15%">`
      // image = `<app-pages></app-pages>`
      text.push(image)
    }

    TagCloud(container, text, {
      radius: this.radius,
      maxSpeed: 'normal',
      useHTML: true,
    })
  }
}
