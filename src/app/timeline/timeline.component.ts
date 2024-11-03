import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import TagCloud from 'TagCloud';
import { DisplayImage } from '../home/display-image.model';
import { HomeService } from '../home/home.service';

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

  experience = {
    startDate: '2024',
    endDate: 'PRESENT',
    title: 'Senior Frontend Engineer, Accessibility',
    company: 'Klaviyo',
    description: 'Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
    techStack: ['JavaScript', 'TypeScript', 'React', 'Storybook']
  };
  
  constructor(private http: HttpClient, private homeService: HomeService) {}

  ngOnInit() {
    this.displayImages = this.homeService.displayImages

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
