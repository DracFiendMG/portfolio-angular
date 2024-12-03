import { BehaviorSubject, Observable } from "rxjs";
import { Experience } from "./experience.interface";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/prod/environment.prod";
import { Injectable } from "@angular/core";

@Injectable()
export class ExperienceService {
  private apiUrl = environment.apiUrl
  private experienceSubject = new BehaviorSubject<Experience[]>([])

  experience$ = this.experienceSubject.asObservable()

  constructor(private http: HttpClient) {
    this.fetchExperience()
  }

  getExperience(): Observable<Experience[]> {
    return this.experience$
  }

  private fetchExperience(): void {
    this.http.get<Experience[]>(`${this.apiUrl}/experience`).subscribe(
      (data) => {
        this.experienceSubject.next(data)
      },
      (error) => {
        console.error('Error fetching experience:', error);
      }
    )
  }
}