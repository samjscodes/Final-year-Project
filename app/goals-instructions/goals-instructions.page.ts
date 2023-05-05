import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-goals-instructions',
  templateUrl: './goals-instructions.page.html',
  styleUrls: ['./goals-instructions.page.scss'],
  
}
)
export class GoalsInstructionsPage {
  selectedHobbies: {[hobby: string]: boolean} = {};



  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.selectedHobbies = this.navParams.get('selectedHobbies');
    console.log("Received hobbies:", this.selectedHobbies);
  }
  
  

  navigateToGoals() {
    this.navCtrl
    .navigateForward(['/goals'], { state: { selectedHobbies: this.selectedHobbies }});
  }

  
  
}
