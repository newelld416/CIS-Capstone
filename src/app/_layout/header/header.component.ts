import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BrowserStorageService } from '../../shared/services/browser-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;
  lessonsCompleted: boolean[];
  lesson0: boolean;
  lesson1: boolean;
  lesson2: boolean;
  lesson3: boolean;
  lesson4: boolean;
  lesson5: boolean;
  lesson6: boolean;
  lesson7: boolean;

  constructor(private router: Router, private browserStorage: BrowserStorageService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.isLoggedIn = true;
    this.lessonsCompleted = this.browserStorage.getLocalStorage("LessonsCompleted");

    document.addEventListener('storage', (e: any) => {
      if (e.key === 'LessonsCompleted') {
        console.log("works");
      }
    });

    if (this.lessonsCompleted == undefined) {
      this.lesson0 = false;
      this.lesson1 = false;
      this.lesson2 = false;
      this.lesson3 = false;
      this.lesson4 = false;
      this.lesson5 = false;
      this.lesson6 = false;
      this.lesson7 = false;
    } else {
      this.lesson0 = this.lessonsCompleted[0];
      this.lesson1 = this.lessonsCompleted[1];
      this.lesson2 = this.lessonsCompleted[2];
      this.lesson3 = this.lessonsCompleted[3];
      this.lesson4 = this.lessonsCompleted[4];
      this.lesson5 = this.lessonsCompleted[5];
      this.lesson6 = this.lessonsCompleted[6];
      this.lesson7 = this.lessonsCompleted[7];
    }
  }

  navigateMenu(tag) {
    this.router.navigate([`/${tag}`]);
  }

}
