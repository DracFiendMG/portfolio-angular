import { HttpClient, HttpHeaders } from "@angular/common/http";
import { DisplayImage } from "./display-image.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class HomeService {
    links = [
        {
            name: "linkedIn",
            link: "https://www.linkedin.com/in/sreeram-17ba861a4/"
        }, 
        {
            name: "github",
            link: "https://github.com/DracFiendMG"
        },
        {
            name: "whatsapp",
            link: "https://wa.me/+918140266972"
        },
        {
            name: "mail",
            link: "mailto:sreeramrdy@gmail.com"
        }
    ]
    
    summary = `I’m a <b class="keywords">Full Stack Developer</b> with over 1.5 years of experience at Wipro, 
                specializing in <b class="keywords">Java</b>, <b class="keywords">Spring Boot</b>, <b class="keywords">MuleSoft</b> and <b class="keywords">Angular</b>. 
                I have a strong background in <b class="keywords">REST API development</b>, messaging with <b class="keywords">RabbitMQ</b>, 
                and deploying applications using <b class="keywords">Jenkins</b>. I’m also experienced in database 
                management with <b class="keywords">MySQL</b>, and <b class="keywords">PostgreSQL</b>, and have a solid understanding of 
                <b class="keywords">AWS</b> cloud services. Recently, I earned an <b class="keywords">OCI Gen AI</b> certification, 
                enhancing my skills in AI and machine learning.`
    
    
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