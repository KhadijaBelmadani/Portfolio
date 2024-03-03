import { Component, OnInit } from '@angular/core';
import { Education } from '../models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationList: Education[] = [
    {
      institute: "National School of Applied Sciences of FEZ",
      course: 'Computer Science',
      duration: '2022-2025',
      score: '',
    },
    {
      institute: "National School of Applied Sciences of FEZ",
      course: 'Integrated Preparatory Cycle',
      duration: '2020-2022',
      score: '',
    },
    {
      institute: 'Molay Rachid High School ARFOUD ',
      course: 'Mathematical Sciences A',
      duration: '2017-2020',
      score: '',
    },
    
  ];
  constructor(){}
  ngOnInit(): void {
  }
}
