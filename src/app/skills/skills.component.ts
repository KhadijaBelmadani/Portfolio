import { Component } from '@angular/core';
import { Skill } from '../models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Advanced',
      rating: 60,
    },
    {
      name: 'TypeScript',
      level: 'Advanced',
      rating: 60,
    },
    {
      name: 'ASP.NET & .NET Framework',
      level: 'Intermediate',
      rating: 50,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Advanced',
      rating: 70,
    },
    {
      name: 'JAVA',
      level: 'intermediate',
      rating: 50,
    },
    {
      name: 'Spring Boot',
      level: 'Advanced',
      rating: 70,
    },
    {
      name: 'C#',
      level: 'Intermediate',
      rating: 50,
    },
    {
      name: 'PHP',
      level: 'Intermediate',
      rating: 50,
    },
    {
      name: 'LARAVEL',
      level: 'Advanced',
      rating: 60,
    },
   
    {
      name: 'SQL / MySQL',
      level: 'Advanced',
      rating: 70,
    },
    {
      name: 'NOSQL / MongoDB',
      level: 'biginner',
      rating: 20,
    },
    {
      name: 'GIT & GITHUB',
      level: 'Intermediate',
      rating: 50,
    },
    {
      name: 'JAVASCRIPT',
      level: 'Intermediate',
      rating: 50,
    },
    {
      name: 'C++',
      level: 'Intermediate',
      rating: 50,
    },
    {
      name: 'C',
      level: 'Intermediate',
      rating: 50,
    },
  ];
}
