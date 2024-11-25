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

    // projects: Project[] = [
    //     {
    //         name: "portfolio-angular",
    //         description: "",
    //         imagePath: "http://m.gettywallpapers.com/wp-content/uploads/2021/05/4k-Wallpaper-Cool-scaled.jpg",
    //         projectLink: "https://github.com/DracFiendMG/portfolio-angular"
    //     },
    //     {
    //         name: "airbnb-demo",
    //         description: "",
    //         imagePath: "http://m.gettywallpapers.com/wp-content/uploads/2021/05/4k-Wallpaper-Cool-scaled.jpg",
    //         projectLink: "https://github.com/DracFiendMG/airbnb-demo"
    //     },
    //     {
    //         name: "EDPlayer",
    //         description: "",
    //         imagePath: "http://m.gettywallpapers.com/wp-content/uploads/2021/05/4k-Wallpaper-Cool-scaled.jpg",
    //         projectLink: "https://github.com/DracFiendMG/EDPlayer"
    //     },
    //     {
    //         name: "Online_VCDS",
    //         description: "",
    //         imagePath: "http://m.gettywallpapers.com/wp-content/uploads/2024/08/Black-Myth-Wukong-Wallpaper.jpg",
    //         projectLink: "https://github.com/DracFiendMG/Online_VCDS"
    //     }
    // ]

    updateCurrentIndex(index: number): void {
        this.currentIndexSubject.next(index)
    }

    getProjects(): Observable<Project[]> {
        return this.projects$
    }

    private fetchProjects(): void {
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