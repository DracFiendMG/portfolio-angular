import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayImage } from './display-image.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeService } from './home.service';
import TagCloud from 'TagCloud';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  displayImages!: DisplayImage[]

  // declare function require(params:type);

  constructor(private http: HttpClient, private homeService: HomeService) {
    
  }
  
  ngOnInit() {
    this.displayImages = this.homeService.displayImages
    // const TagCloud = node.require('TagCloud')
    const container: string = '.cloud'
    let text = []
    let image = '<img class="icon angular" src="./assets/angular-icon.png" alt="displayImages[2].description" width="15%">'
    for (let i = 1; i < this.displayImages.length; i++) {
      image = `<img class="icon angular" src=${this.displayImages[i].imagePath} alt=${this.displayImages[i].description} width="15%">`
      text.push(image)
    }
    
    // text = ['3D', 'TagCloud', 'JavaScript',
    // 'CSS3', '<i>Animation</i>', image,
    // 'Mouse', 'Rolling', 'Sphere',
    // '6KB', 'v2.x',]

    TagCloud(container, text, {
      radius: 230,
      maxSpeed: 'normal',
      useHTML: true
    })
  }
}
