import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnal-informations',
  templateUrl: './personnal-informations.component.html',
  styleUrls: ['./personnal-informations.component.css']
})
export class PersonnalInformationsComponent implements OnInit{
  myData: string[][] = [
    ['Name', 'BELMADANI Khadija'],
    ['DOB', '25/05/2002'],
    ['Education', 'National School of Applied Sciences'],
    ['Interests', 'Problem Solving'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineering student .',
    'As a Computer Science student at the National School of Applied Sciences, my portfolio offers a snapshot of my academic journey and technical prowess',
    'From software development to system architecture, it showcases my passion for innovative solutions.',
    'Explore my projects, highlighting a commitment to practical applications and continuous growth in the ever-evolving field of computer science.',
  ];

  constructor() {}
  ngOnInit(): void {
  }

}
