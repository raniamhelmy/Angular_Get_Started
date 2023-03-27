import { Component, AfterViewInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {


  ngAfterViewInit(){
    $(document).ready(function(){

      $(document).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        if (scrollDistance > 80) {
          $("nav").removeClass("paddingNav");
        } else {
          $("nav").addClass("paddingNav");
        }
      });
    });
}


}
