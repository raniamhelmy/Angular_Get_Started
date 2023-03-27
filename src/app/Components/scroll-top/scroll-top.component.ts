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
      $(window).on('load', function() {
        // let scrollTop = document.documentElement.scrollTop;
        // if (scrollTop === 0) {
        //   $('#scrollTop').addClass("d-none");
        // } else {
        //   $('#scrollTop').removeClass("d-none");
        // }
        var scrollDistance = $(window).scrollTop();
        if (scrollDistance > 100) {
          $('#scrollTop').removeClass("d-none");
          $('.scroll-to-top').fadeIn();
        } else {
          // $('.scroll-to-top').fadeOut();
        }

      });

      $('#scrollTop').on('click', function() {
        console.log('hi');
        $(window).scrollTop(0);
      })

      $(document).scroll(function () {
        var scrollDistance = $(window).scrollTop();
        if (scrollDistance > 100) {
          $('#scrollTop').removeClass("d-none");
          $('.scroll-to-top').fadeIn();
        } else {
          $('.scroll-to-top').fadeOut();
        }
      });
    });
  }
}
