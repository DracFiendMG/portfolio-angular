import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayImage } from '../home/display-image.model';
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../home/home.service';
import TagCloud from 'TagCloud';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  displayImages: DisplayImage[] = []
  
  constructor(private http: HttpClient, private homeService: HomeService) {}

  ngOnInit() {
    this.displayImages = this.homeService.displayImages

    const container: string = '.cloud'
    let text = []
    let image = ''
    for (let i = 1; i < this.displayImages.length; i++) {
      image = `<img class="icon angular" src=${this.displayImages[i].imagePath} alt=${this.displayImages[i].description} width="15%">`
      // image = `<app-pages></app-pages>`
      text.push(image)
    }

    TagCloud(container, text, {
      radius: 230,
      maxSpeed: 'normal',
      useHTML: true,
    })
  }
}
