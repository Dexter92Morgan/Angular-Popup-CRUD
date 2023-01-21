import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  ModalDismissReasons,
  NgbDatepickerModule,
  NgbModal
} from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from '../service/service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-popupreactiveforms',
  templateUrl: './popupreactiveforms.component.html',
  styleUrls: ['./popupreactiveforms.component.css']
})
export class PopupreactiveformsComponent implements OnInit {
  closeResult = '';
  constructor(
    private modalService: NgbModal,
    private service: ServiceService
  ) {}

  @ViewChild('content') addview!: ElementRef;
  ngOnInit(): void {}

  empform = new FormGroup({
    codeid: new FormControl({ value: '0', disabled: true }),
    empname: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ),
    designation: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required)
    // email: new FormControl('',Validators.email)
  });

  //values
  get empname() {
    return this.empform.get('empname');
  }

  get designation() {
    return this.empform.get('designation');
  }

  get department() {
    return this.empform.get('department');
  }

  //error Mesages
  errormessage = '';
  errorclass = '';

  saveresponse: any;

  SaveEmployee() {
    if (this.empform.valid) {
      this.service
        .SaveData(this.empform.getRawValue())
        .subscribe((result: any) => {
          this.saveresponse = result;

          if (this.saveresponse.result == 'pass') {
            this.errormessage = 'Saved Successfully';
            this.errorclass = 'successmessage';
          } else {
            this.errormessage = 'Failed to Save Data';
            this.errorclass = 'errormessage';
          }
        });
    } else {
      this.errormessage = 'Please Enter the Valid Data';
      this.errorclass = 'errormessage';
    }
  }

  LoadEditData(id:any){
    console.log(id);
  }

  open() {
    this.modalService
      .open(this.addview, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  close(alert: any) {}
}
