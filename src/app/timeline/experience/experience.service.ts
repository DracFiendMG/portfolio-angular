import { Experience } from "./experience.interface";

export class ExperienceService {
    experiences: Experience[] = [
        {
          startDate: '2022',
          endDate: 'PRESENT',
          title: 'Project Engineer',
          company: 'Wipro',
          description: 'Build and maintain critical components used to construct Advicework`s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
          techStack: ['Java', 'Spring Boot', 'Angular', 'Mulesoft', 'AWS', 'New Relic', 'RabbitMQ', 'Redis', 'PostgreSQL', 'HTML & SCSS', 'Gen AI']
        },
        {
          startDate: 'NOV 2022',
          endDate: 'DEC 2022',
          title: 'Software Developer Intern',
          company: 'Testright Nanosystems',
          description: 'Build and maintain critical components used to construct Advicework`s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
          techStack: ['QtC++', 'MPLAB', 'Android']
        }
      ];
}