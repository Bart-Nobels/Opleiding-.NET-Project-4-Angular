import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  category: string = "News"
  //animateTypewriter: boolean = true;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(parameters => {
      const nameCategory = parameters['categoryname'];
      if (nameCategory != null) {
        this.category = nameCategory;
      }
    });
  }

  //Vragen aan Yannick:
  /* constructor(private route: ActivatedRoute) {
     this.route.params.subscribe(parameters => {
       this.animateTypewriter = false;
       const nameCategory = parameters['categoryname'];
       if (nameCategory != null) {
         this.category = nameCategory;
       }
       this.animateTypewriter = true;
     });
   } */
}
