import { Component, AfterViewInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css'],
})
export class ScrollTopComponent {
  ngAfterViewInit() {
    $(document).ready(function () {
      $(document).scroll(function () {
        var scrollDistance = $(window).scrollTop();
        if (scrollDistance > 100) {
          $('.scroll-to-top').fadeIn();
        } else {
          $('.scroll-to-top').fadeOut();
        }
      });
    });
  }
}
