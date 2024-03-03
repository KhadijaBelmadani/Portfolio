import { Component } from '@angular/core';
import { Project } from '../models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Streaming Platforme (In Progress)',
      technologies: 'Spring Boot , Angular , Spring Security , MongoDb ,AWS S3, Recommended System using Python & Flask  ',
      description: [
        'Streaming Platform aims to redefine the streaming experience, providing users with a feature-rich, secure, and interactive environment. Whether its binge-watching favorite videos, discovering new content, or participating in live events, this platform offers a comprehensive streaming solution at the intersection of powerful backend technologies and a dynamic frontend interface.',
      ],
    },
    {
      title: 'Sales management Web Application',
      technologies: 'ASP.NET , .NET Framework ,SQL Server , C#, Bootstrap , javascript',
      description: [
        'This web application is a Sales Management system built using ASP.NET and .NET Framework. It provides functionality for managing sales, customers and products.',
      ],
    },
    {
      title: 'JAVA QCM Application',
      technologies: 'JAVA',
      description: [
        'The Java QCM application is a robust and user-friendly platform designed for creating and taking Multiple Choice Question (MCQ) quizzes. Developed using Java, this application seamlessly combines functionality with an intuitive user interface, catering to both quiz creators and participants.',
       
      ],
    },
    {
      title: 'Movies Website',
      technologies: 'Angular , HTML , CSS Bootsrap , TMDB API',
      description: [
        'The website taps into TMDBs extensive database, offering a vast collection of movies and TV shows. Users can explore details about their favorite films, actors, genres, and more.',
      ],
    },
    {
      title: 'News Website',
      technologies: 'Angular , HTML , CSS Bootsrap , News API',
      description: [
        'Access the latest news articles, headlines, and breaking news from a wide range of reputable sources, all powered by the News API.',
      ],
    },
  ];
}
