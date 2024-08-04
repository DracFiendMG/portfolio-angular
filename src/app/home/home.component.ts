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
    // this.homeService.displayImages.subscribe({
    //   next: (displayImages) => {
    //     console.log(displayImages)
    //     this.displayImages = displayImages
    //   }
    // })
    
    // this.homeService.getImages().subscribe({
    //   next: (displayImages) => {
    //     console.log(displayImages)
    //     this.displayImages = displayImages
    //   }
    // })

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
