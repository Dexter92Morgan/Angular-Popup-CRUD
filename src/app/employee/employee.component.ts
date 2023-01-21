import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { PopupreactiveformsComponent } from '../popupreactiveforms/popupreactiveforms.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  constructor(private service: ServiceService) {
    this.GetEmployee();
    }
  
  ngOnInit(): void {}

  @ViewChild(PopupreactiveformsComponent) addview  !: PopupreactiveformsComponent

  empdata: any;
 
  GetEmployee(){
    this.service.GetData().subscribe((result: any) => {
      this.empdata = result;
    });
  }

  functionedit(code: any) {
    this.addview.LoadEditData(code);
  }

  functiondelete(id: any) {
    
    if(confirm("Do you want to delete?")){
      this.service.RemoveEmployee(id).subscribe((result: any) => {
        this.GetEmployee();
      });
    }
  }
}
