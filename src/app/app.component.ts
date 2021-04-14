import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'planet-home-assignment';
  name = '';
  focused = false;
  transitioned = false;

  onCLick() {
      this.transitioned = !this.transitioned;
  }

  handleMouseEnter(){
      this.focused = true;
  }

  handleMouseExit(){
    this.focused = false;
}

  handleNameChange(newName: string){
      this.name = newName;
  }
}
