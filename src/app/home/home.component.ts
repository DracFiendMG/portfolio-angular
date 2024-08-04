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
  }
}
