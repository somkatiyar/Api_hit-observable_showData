//import statement
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router} from '@angular/router';

//component declaration
@Component({
  selector: 'app-root1',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

//clASS DECLARATION
export class Home {
  title = 'app';
  user = [];
  details = {};
  result : String='';


//constructor of the class
  constructor(private http: Http,private router: Router){

//method invoke/hit the url
    this.http.get("https://jsonplaceholder.typicode.com/users").toPromise().then(
        res => {

        this.user = res.json();


  }

      ).catch(error => console.log(error));
  }

  //navigate page with ithe id value
    getObj(x){
    this.router.navigate(['/showdata',x.id]);

  }


  ngOnInit(){

  }
}
