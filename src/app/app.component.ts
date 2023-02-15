import { Component, OnInit } from '@angular/core';
import { EmpPipe } from './emp.pipe';
import { NewPipePipe } from './new-pipe.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  title = 'pipes-app';
  // constructor(private pipeAdd: NewPipePipe){}
  // ngOnInit(): void {
  //   this.title =  this.pipeAdd.transform(this.title)

  // }


  // heading : string = 'Hello World this is a test application';

  // valueDate = new Date ();

  // datas = {
  //   'name': 'rahul',
  //   'age': '22',
  //   'houseNo' : 18
  // }




  // 


 
  //    record  = [{
  //     'empn':'101',
  //     'empName':'Rahul K Suresh',
  //     'Gender':'Male',
  //     'Dept':'Development',

  //   },
  //   {
  //     'empn':'102',
  //     'empName':' Anne Frank',
  //     'Gender':'Female',
  //     'Dept':'Writing',


  //   },
  //   {
  //     'empn':'103',
  //     'empName':'Elon Musk',
  //     'Gender':'Male',
  //     'Dept':'Development',


  //   },
  //   {
  //     'empn':'104',
  //     'empName':'Alice Louise Walton',
  //     'Gender':'Female',
  //     'Dept':'Designing',


  //   },
  //   {
  //     'empn':'105',
  //     'empName':'MacKenzie Scott',
  //     'Gender':'Female',
  //     'Dept':'Business',


  //   },
  //   {
  //     'empn':'106',
  //     'empName':'Jeff Bezos',
  //     'Gender':'Male',
  //     'Dept':'Business',


  //   },
  // ]

  record :  Array<any> = [{
    empn: '101',
    empName: 'Rahul K Suresh',
    Gender: 'Male',
    Dept: 'Front-End Development',

  },
  {
    empn: '102',
    empName: 'Abhishek A K',
    Gender: 'Male',
    Dept: 'Front-End Development',


  },
  {
    empn: '103',
    empName: 'Anagha C M',
    Gender: 'Female',
    Dept: 'Front-End Development',


  },
  {
    empn: '104',
    empName: 'Ishwarya Mathivanan',
    Gender: 'Female',
    Dept: 'Front-End Development',


  },
  {
    empn: '105',
    empName: 'Manu Martin',
    Gender: 'Male',
    Dept: 'Front-End Development',


  },
  {
    empn: '106',
    empName: 'Megha Elsa Shibu',
    Gender: 'Female',
    Dept: 'Front-End Development',


  },
  {
    empn: '107',
    empName: 'Noel Sam Itty',
    Gender: 'Male',
    Dept: 'Front-End Development',


  },
  {
    empn: '108',
    empName: 'Sivapriya P',
    Gender: 'Female',
    Dept: 'Front-End Development',


  },
  {
    empn: '109',
    empName: 'Sooraj Krishna M S',
    Gender: 'Male',
    Dept: 'Front-End Development',


  },
  {
    empn: '110',
    empName: 'Visakh V',
    Gender: 'Male',
    Dept: 'Front-End Development',


  },
  ]

 

  constructor(private titleAbbr: EmpPipe) {
  }
  ngOnInit() {
      // this.record.empName = this.titleAbbr.transform(this.record.empName,this.record.Gender)


      let k: keyof typeof this.record;
      for (k in this.record){
        this.record[k].empName = this.titleAbbr.transform(this.record[k].empName,this.record[k].Gender)

      }

      
      
      
     
      

      
   
    
    
  }

 
}