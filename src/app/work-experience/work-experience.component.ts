import { Component } from '@angular/core';
import { WorkExperience } from '../models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workExpList: WorkExperience[] = [
    {
      role: ' Initiation Internship',
      company: 'WebMarko',
      duration: 'June - 2023',
      description: [
        'I worked on a web stock management application using Laravel, Bootstrap, and jQuery.',
        'Working to acquire and advance skills in emerging technologies, aiming to enhance and simplify daily living experiences.',
      ],
    },
    
    
  ];
}
