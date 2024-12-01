import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayImage } from './model/display-image.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import TagCloud from 'TagCloud';
import { Contact } from './model/contact.model';
import { AboutService } from './about.service';
import { Content } from './model/content.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  links: Contact[] = []
  displayImages: DisplayImage[] = []
  summary: String = ""
  contents: { [key: string]: Content } = {};

  // declare function require(params:type);

  constructor(private http: HttpClient, private aboutService: AboutService) {
  }
  
  ngOnInit() {
    this.aboutService.contacts$.subscribe((data) => {
      this.links = data
    })

    this.aboutService.skills$.subscribe((data) => {
      this.displayImages = data
    })
    
    this.aboutService.content$.subscribe((data) => {
      data.forEach((content) => {
        if (content.name === 'about') {
          this.summary = content.text
        }
      })
    })
  }
}
