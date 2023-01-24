import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  user={
    name:"faho",
    lasename:"kaho",
    color:'red'
  }
  color='red';
  students=[
    {
      nom:"fatma",
      prenom:"karkach",
      age:24
    },
    {
      nom:"houssaine",
      prenom:"hssini",
      age:28
    }
  ]
  imageURL='https://pbs.twimg.com/profile_images/3218658603/3aa51fd70b325033b531c87a0204a08c_400x400.jpeg';
  display=true;
  cars=[
    'bmw','toyota','firari'
  ]
  /*  user={
      nom:'sabfoura',
      age:22,
      url:'https://pbs.twimg.com/profile_images/1121655375218954240/bwDAkyR7_400x400.jpg'
    };
    name='fatma';
    text='';
    imageURL='https://pbs.twimg.com/profile_images/3218658603/3aa51fd70b325033b531c87a0204a08c_400x400.jpeg';
    change(){
      this.name='fahoo';
    }*/
/*
  display=true;
*/

}
