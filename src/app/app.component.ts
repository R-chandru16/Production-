import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VisualizationApp';
  username:string=" ";
  name:string="";
  constructor(){
    if(localStorage.getItem("email")!=null){
       this.username="style"
       this.name=localStorage.getItem("email")!!
    }
    else{
      this.username="style1"
      this.name=" "

    }
   }
  }
  


// }
// export class AppComponent implements AfterViewInit {
//   constructor(private elementRef: ElementRef) {}
//   ngAfterViewInit() {
//       this.elementRef.nativeElement.ownerDocument
//           .body.style.backgroundColor = 'yourColor';
//   }
// }
