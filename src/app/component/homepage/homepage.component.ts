import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DREAM_INSERT_FORM } from 'src/app/form/dream.form';
import { Dream } from 'src/app/model/dream.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(builder: FormBuilder, private router: Router) { 
    this.dreamInsertForm = builder.group(DREAM_INSERT_FORM); 
  }

  dreamInsertForm : FormGroup; 
  dreamToAdd! : Dream; 

  onSubmit(){};

  return(){
    this.dreamInsertForm.reset(); 
  }; 

  ngOnInit(): void {
  }

}
