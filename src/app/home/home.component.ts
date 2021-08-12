import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  TotalAmount = 0;
  state = "disabled";
  temp = [{ AccountNum: 0, AccountType: "", amount: 0, State: "" }]

  constructor(private router: Router) {

  }


  accountList = [
    { AccountNum: 6331103626640816, AccountType: 'Cheque', amount: -296.65 },
    { AccountNum: 5248117462997084, AccountType: 'Savings', amount: -20.00 },
    { AccountNum: 3581474249964105, AccountType: 'Savings', amount: 980.20 },
    { AccountNum: 6709502417011722, AccountType: 'Savings', amount: 905.81 },
    { AccountNum: 5308160489139568, AccountType: 'Cheque', amount: -986.10 },
    { AccountNum: 3559243852997209, AccountType: 'Cheque', amount: 531.75 },
    { AccountNum: 3585913435866604, AccountType: 'Cheque', amount: 253.14 },
    { AccountNum: 3564003756077737, AccountType: 'Savings', amount: 896.79 },
    { AccountNum: 3543910523783643, AccountType: 'Cheque', amount: -590.47 },
    { AccountNum: 3532070362684767, AccountType: 'Savings', amount: 58.00 },
  ];

  ngOnInit(): void {
    this.getTotalAmount()
  }

  getTotalAmount() {
    this.temp.splice(1, 1);
    this.accountList.forEach(a => {
      this.TotalAmount = this.TotalAmount + a.amount;
      

      switch (a.AccountType) {
        case 'Cheque':
        
          if (a.amount > -501) {
            this.state="Active"
          }else{
            this.state="Disabled"
          }

          break;

          case 'Savings':
          
          if (a.amount>0) {
            this.state="Active"
          }else{
            this.state="Disabled"
          }

          break;
      
        default:
          break;
      }

      this.temp.push({ AccountNum: a.AccountNum, AccountType: a.AccountType, amount: a.amount, State: this.state })

    });
  }


  notify() {
    alert("Success");
  }

}

