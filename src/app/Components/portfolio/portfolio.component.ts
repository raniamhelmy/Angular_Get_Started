import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  images: any[] = [
    {
      title:"log cabin",
      img: './assets/Images/cabin.png',
      alt: 'cabin Image',
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
    {
      title:"Tasty cake",
      img: './assets/Images/cake.png',
      alt: 'cake Image',
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
    {
      title:"circus tent",
      img: './assets/Images/circus.png',
      alt: 'circus Image',
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
    {
      title:"controller",
      img: './assets/Images/game.png',
      alt: 'game Image',
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
    {
      title:"locked safe",
      img: './assets/Images/safe.png',
      alt: 'safe Image',
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
    {
      title:"submarine",
      img: './assets/Images/submarine.png',
      alt: 'submarine Image',
      desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
    },
  ];

  objDetails:any={} //data saved here

  
  showModal(data:any):void{
    this.objDetails=data;
    console.log(data)
  }



}
