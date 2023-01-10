import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';






@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomePageComponent implements OnInit {

	@ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  constructor(config: NgbCarouselConfig) {
		config.interval = 2000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = true;
	}
   data=[
    {
      name: 'Carnuba',
      img:'../../../assets/Img/Carnuba/carnuba wax 1.PNG',
      describe:''
    },
    {
      name: 'Fully Refined Paraffin wax',
      img:'../../../assets/Img/Fully Refined Paraffin wax/fully refined paraffin 3.PNG',
      describe:''
    },
    {
      name: 'Gel Wax',
      img:'../../../assets/Img/Gel wax/gel wax 2.PNG',
      describe:''
    },
    {
      name: 'Granules',
      img:'../../../assets/Img/Granules/granules 3.PNG',
      describe:''
    },
    {
      name: 'Gum Rosin',
      img:'../../../assets/Img/Gum rosin/gum rosin 1.PNG',
      describe:''
    },
    {
      name: 'Light Liquid Paraffin',
      img:'../../../assets/Img/Light liquid paraffin/light  liquid paraffin. 3.PNG',
      describe:''
    },
    {
      name: 'Micro Crystalline Wax',
      img:'../../../assets/Img/Micro Crystalline wax/micro crystalline wax 1.PNG',
      describe:''
    },
    {
      name: 'Paraffin Wax Emulsifier',
      img:'../../../assets/Img/Paraffin wax emulsifier/paraffin wax emulsifier 2.PNG',
      describe:''
    },
    {
      name: 'Plam Wax',
      img:'../../../assets/Img/Plam wax/plam wax 2.PNG',
      describe:''
    },
    {
      name: 'Polyethylene Wax',
      img:'../../../assets/Img/Polyethylene wax/polyethylene wax 1.PNG',
      describe:''
    },
    {
      name: 'Residue Wax',
      img:'../../../assets/Img/residue wax/residue wax 2.PNG',
      describe:''
    },
    {
      name: 'Slack',
      img:'../../../assets/Img/Slack/slack 1.PNG',
      describe:''
    },
    {
      name: 'Titanium Dioxide',
      img:'../../../assets/Img/Titanium dioxide/titanium dioxide 3.PNG',
      describe:''
    },
    {
      name: 'White Petro Jelly',
      img:'../../../assets/Img/white petro jelly/white petro jelly 4.PNG',
      describe:''
    },

  ]

   ngOnInit(): void {
  }

}
