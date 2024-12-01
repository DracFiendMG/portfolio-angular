import { BehaviorSubject, Observable } from "rxjs";
import { Project } from "./project.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/prod/environment.prod";

@Injectable({
    providedIn: 'root',
})
export class ProjectsService {
    private currentIndexSubject = new BehaviorSubject<number>(0)
    private projectsSubject = new BehaviorSubject<Project[]>([])

    currentIndex$ = this.currentIndexSubject.asObservable()
    projects$ = this.projectsSubject.asObservable()

    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {
        this.fetchProjects()
    }

    updateCurrentIndex(index: number): void {
        this.currentIndexSubject.next(index)
    }

    getProjects(): Observable<Project[]> {
        return this.projects$
    }

    private fetchProjects(): void {
        console.log("This is my URL: ", this.apiUrl);
        this.http.get<Project[]>(`${this.apiUrl}/projects`).subscribe(
            (data) => {
                this.projectsSubject.next(data)
            },
            (error) => {
                console.error('Error fetching projects:', error);
            }
        )
    }

}