import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DisplayImage } from "./display-image.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class HomeService {
    displayImages: DisplayImage[] = 
    [
        {
            name: "profile-image",
            description: "my profile image",
            // imagePath: "https://www.themarysue.com/wp-content/uploads/2022/02/bleach-anime-big-three-is-iconic.jpg?w=1200"
            imagePath: "./assets/profile-image.png"
        },
        {
            name: "figma-icon",
            description: "figma image",
            imagePath: "./assets/figma-icon.png"
        },
        {
            name: "angular-icon",
            description: "angular image",
            imagePath: "./assets/angular-icon.png"
        },
        {
            name: "java-icon",
            description: "java image",
            imagePath: "./assets/java-icon.png"
        },
        {
            name: "springboot-icon",
            description: "springboot image",
            imagePath: "./assets/springboot-icon.png"
        },
        {
            name: "typescript-icon",
            description: "typescript image",
            imagePath: "./assets/typescript-icon.png"
        },
        {
            name: "html-icon",
            description: "html image",
            imagePath: "./assets/html-icon.webp"
        },
        {
            name: "css-icon",
            description: "css image",
            imagePath: "./assets/css-icon.png"
        },
        {
            name: "mulesoft-icon",
            description: "mulesoft image",
            imagePath: "./assets/mulesoft-icon.webp"
        },
        {
            name: "sql-icon",
            description: "sql image",
            imagePath: "./assets/sql-icon.png"
        },
    ]

    // private URL = "/images"

    // constructor(private _http: HttpClient) { }

    // getImages(): Observable<DisplayImage[]> {
    //     let headers = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}

    //     return this._http.get<DisplayImage[]>(this.URL)
    // }
}