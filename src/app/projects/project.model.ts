export class Project {
    public name: string
    public description: string
    public imagePath: string
    public projectLink: string

    constructor(name: string, description: string, imagePath: string, projectLink: string) {
        this.name = name
        this.description = description
        this.imagePath = imagePath
        this.projectLink = projectLink
    }
}