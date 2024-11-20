import { BehaviorSubject } from "rxjs";
import { Project } from "./project.model";

export class ProjectsService {
    private currentIndexSubject = new BehaviorSubject<number>(0)
    currentIndex$ = this.currentIndexSubject.asObservable()

    projects: Project[] = [
        {
            name: "portfolio-angular",
            description: "",
            imagePath: "http://m.gettywallpapers.com/wp-content/uploads/2021/05/4k-Wallpaper-Cool-scaled.jpg",
            projectLink: "https://github.com/DracFiendMG/portfolio-angular"
        },
        {
            name: "airbnb-demo",
            description: "",
            imagePath: "http://m.gettywallpapers.com/wp-content/uploads/2021/05/4k-Wallpaper-Cool-scaled.jpg",
            projectLink: "https://github.com/DracFiendMG/airbnb-demo"
        },
        {
            name: "EDPlayer",
            description: "",
            imagePath: "http://m.gettywallpapers.com/wp-content/uploads/2021/05/4k-Wallpaper-Cool-scaled.jpg",
            projectLink: "https://github.com/DracFiendMG/EDPlayer"
        },
        {
            name: "Online_VCDS",
            description: "",
            imagePath: "http://m.gettywallpapers.com/wp-content/uploads/2024/08/Black-Myth-Wukong-Wallpaper.jpg",
            projectLink: "https://github.com/DracFiendMG/Online_VCDS"
        }
    ]

    updateCurrentIndex(index: number): void {
        this.currentIndexSubject.next(index)
    }

}