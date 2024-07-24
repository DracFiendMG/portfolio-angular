import { DisplayImage } from "./display-image.model";

export class HomeService {
    displayImages: DisplayImage[] = [
        {
            name: "profile-image",
            description: "my profile image",
            // imagePath: "https://www.themarysue.com/wp-content/uploads/2022/02/bleach-anime-big-three-is-iconic.jpg?w=1200"
            imagePath: "./assets/profile-image.png"
        },
        {
            name: "figma-icon",
            description: "my profile image",
            imagePath: "./assets/figma-icon.png"
        },
        {
            name: "angular-icon",
            description: "my profile image",
            imagePath: "./assets/angular-icon.png"
        },
        {
            name: "java-icon",
            description: "my profile image",
            imagePath: "./assets/java-icon.png"
        },
        {
            name: "springboot-icon",
            description: "my profile image",
            imagePath: "./assets/springboot-icon.png"
        },
        {
            name: "typescript-icon",
            description: "my profile image",
            imagePath: "./assets/typescript-icon.png"
        },
        {
            name: "html-icon",
            description: "my profile image",
            imagePath: "./assets/html-icon.webp"
        },
        {
            name: "css-icon",
            description: "my profile image",
            imagePath: "./assets/css-icon.png"
        },
        {
            name: "mulesoft-icon",
            description: "my profile image",
            imagePath: "./assets/mulesoft-icon.webp"
        },
        {
            name: "sql-icon",
            description: "my profile image",
            imagePath: "./assets/sql-icon.png"
        },
    ]
}