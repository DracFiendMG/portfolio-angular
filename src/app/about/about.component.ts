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
  summary: String = ''
  contents: { [key: string]: Content } = {};
  experienceYears: number = 0

  // declare function require(params:type);

  constructor(
    private http: HttpClient,
    private aboutService: AboutService
  ) {
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
          this.calculateExperience(content.text)
        }
      })
    })
  }

  calculateExperience(text: String): void {
    const startDate = new Date('2022-12-29') // Start date
    const currentDate = new Date() // Current date

    // Calculate the difference in time (milliseconds)
    const timeDifference = currentDate.getTime() - startDate.getTime()
    
    // Convert the time difference to years (milliseconds in a year)
    this.experienceYears = timeDifference / (1000 * 3600 * 24 * 365)
    this.summary = text.replace('${this.experienceYears}', this.experienceYears.toFixed(1).toString())
  }
}
