//import statement
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { DataService }  from '../../service/service';
import {  ActivatedRoute,Router} from '@angular/router';

//component declaration

@Component({
  selector: 'app-getservice',
  templateUrl: './getservice.html',
  styleUrls: ['./getservice.css']
})

//class declaration
export class GetService {

	[x: string]: any;
  title = 'app';
  user = [];
  details = {};

//constructor of the class
constructor(private myservice : DataService,private router: Router){}

// method invoke when the component lode
  ngOnInit(){


//function invoke service
    this.myservice.fetchdata().subscribe((data) => {

      this.user=data;
      console.log(this.user);

    });

  }

//page navigate with id
  navigateShowData(x){
    this.router.navigate(['/showdata',x.id]);

  }
}
