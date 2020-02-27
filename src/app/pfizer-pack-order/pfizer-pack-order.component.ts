import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pfizer-pack-order',
  templateUrl: './pfizer-pack-order.component.html',
  styleUrls: ['./pfizer-pack-order.component.css']
})
export class PfizerPackOrderComponent implements OnInit {

  listOfOrders = [];
  listOfOrderss = [];
  paginationArray = [];
  paginationObjNew : any = {};
  paginationObj : any = {};
  // sPaginationArray = [];
  // cPaginationArray = [];
  sPaginationArray = new Array(7);
  cPaginationArray = new Array(7);

  tempPagintionArray = new Array();

  constructor() { }

  getListOfOrders() {
    // let pickOrderServiceUrl = "http://10.12.58.38:7001/csds/LoginAuth/LoginUserService/pickOrdersList";
    // let ordersList = this.http.get(pickOrderServiceUrl);
    // ordersList.subscribe((response) => {
    //   console.log(response);
    // }, (error) => {
    //   console.log(error);
    // });
    this.listOfOrderss = [
      {
        "ProtocolID" : "Protocol 1",
        "OrderID" : "1001",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 2",
        "OrderID" : "1002",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 3",
        "OrderID" : "1003",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 4",
        "OrderID" : "1004",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 5",
        "OrderID" : "1005",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 1",
        "OrderID" : "1006",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 2",
        "OrderID" : "1007",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 3",
        "OrderID" : "1008",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 4",
        "OrderID" : "1009",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 5",
        "OrderID" : "1010",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 1",
        "OrderID" : "1011",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 2",
        "OrderID" : "1012",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 3",
        "OrderID" : "1013",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 4",
        "OrderID" : "1014",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 5",
        "OrderID" : "1015",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 1",
        "OrderID" : "1016",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 2",
        "OrderID" : "1017",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 3",
        "OrderID" : "1018",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 4",
        "OrderID" : "1019",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 5",
        "OrderID" : "1020",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 1",
        "OrderID" : "1021",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 2",
        "OrderID" : "1022",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 3",
        "OrderID" : "1023",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 4",
        "OrderID" : "1024",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 5",
        "OrderID" : "1025",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 1",
        "OrderID" : "1026",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 2",
        "OrderID" : "1027",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 3",
        "OrderID" : "1028",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 4",
        "OrderID" : "1029",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      },
      {
        "ProtocolID" : "Protocol 5",
        "OrderID" : "1030",
        "Date" : "30 Jan 2020",
        "OrderOrPickedQty" : "20/0",
        "Type" : "Shippment"
      }
    ];

    // Here we are calculating maximum pages. 5 rows are limit for page.
    let pagMax = 31 / 5;          
    console.log(pagMax);
    console.log(Math.ceil(pagMax));
    for(var i = 1; i <= pagMax; i++){
      this.paginationObjNew = {};
      (i==1) ? this.paginationObjNew.isActive = "active" : this.paginationObjNew.isActive = "" ;
      this.paginationObjNew.value = i;
      this.paginationArray.push(this.paginationObjNew);
    }
    
    let pageObj = {
      value : 1,
      isActive : "active"
    }
    this.changePage(pageObj);

    this.seperatePagination();
    
  }

  calculateMin(loopMax: number) {
    return (loopMax - 5) + 1;
  }

  calculateMax(pageNum : number) {
    return 5 * pageNum;
  }

  changePage(page) {
    let loopMaxValue = this.calculateMax(page.value);
    let loopMinValue = this.calculateMin(this.calculateMax(page.value));
    this.listOfOrders = []; 
    let finalList = [];
    for( var i = loopMinValue - 1; i < loopMaxValue; i++) {
      this.listOfOrders.push(this.listOfOrderss[i]);
    }
  }

  seperatePagination() {

    let pageMax = 21;
    let pageMin = 1;
    let pagenateObject : any = {};

    let pageMaxValueNew = pageMax + 2;

    if(pageMax <=7) {
      this.sPaginationArray = new Array();
      // for(var i=0; i<pageMax; i++){
      //   pagenateObject = {};
      //   pagenateObject.index = i;
      //   pagenateObject.value = i+1;
      //   pagenateObject.isActive = "";
      //   if(i==0){
      //     pagenateObject.isActive = "active";
      //   }
      //   this.sPaginationArray[i] = pagenateObject;
      // }
      for(var i=0; i<pageMaxValueNew; i++){
        pagenateObject = {};
        pagenateObject.index = i;
        pagenateObject.value = i;
        pagenateObject.isActive = "";
        // if(i==0){
        //   pagenateObject.isActive = "active";
        // }
        if(i==0){
          pagenateObject.value = "Prev";
        }
        else if(i==1) {
          pagenateObject.isActive = "active";
        }
        else if(i == pageMaxValueNew - 1) {
          pagenateObject.value = "Next";
        }
        this.sPaginationArray[i] = pagenateObject;
      }
    }
    else if(pageMax > 7) {

      //this.sPaginationArray = new Array(7);

      for(var i=0; i<9; i++){

        pagenateObject = {};
        pagenateObject.index = i;
        pagenateObject.value = i;
        pagenateObject.isActive = "";
        if(i==0){
          this.sPaginationArray[i] = pagenateObject;
          this.sPaginationArray[i].value = "Prev";
        }
        if(i==1) {
          this.sPaginationArray[i] = pagenateObject;
          this.sPaginationArray[i].isActive = "active";
        }
        if(i == 6){
          this.sPaginationArray[i] = pagenateObject;
          this.sPaginationArray[i].value = "..";
        }
        if (i == 8) {
          this.sPaginationArray[i] = pagenateObject;
          this.sPaginationArray[i].value = "Next"; 
        }
        else if(i == 7){
          this.sPaginationArray[i] = pagenateObject;
          this.sPaginationArray[i].value = pageMax;
        }
        else {
          this.sPaginationArray[i] = pagenateObject;
        }
        
      }
    }
    
    console.log(this.sPaginationArray);
    
  }

  changeFormat(pagee) {
    let pageMax = 21;
    let pageMin = 1;

    let pageMaxValueNew = pageMax + 2;

    if( pageMax <=7){
      //this.sPaginationArray = new Array();
      // for(var i = 0; i<pageMax; i++) {
      //   if(i == pagee.index){
      //     this.sPaginationArray[i].isActive = "active";
      //   }
      //   else{
      //     this.sPaginationArray[i].isActive = "";
      //   }
      // }
      for(var i = 0; i<pageMaxValueNew; i++) {
        // if((i!=0) && (i!= pageMaxValueNew - 1)){
          this.sPaginationArray[i].isActive = "";
          this.sPaginationArray[pagee.index].isActive = "active";
        // }
        // else{
        //   this.sPaginationArray[i].isActive = "";
        // }
      }
    }
    else if( pageMax > 7) {
      //this.sPaginationArray = new Array(7);
      for(var i = 0; i<this.sPaginationArray.length; i++) {
        if(i == pagee.index){
          this.sPaginationArray[i].isActive = "active";
        }
        else{
          this.sPaginationArray[i].isActive = "";
        }
      }

      if( (pagee.index == 5) &&  (pageMax - pagee.value) != 2 ) {
        this.sPaginationArray[2].value = "..";
        this.sPaginationArray[3].value = pagee.value - 1;
        this.sPaginationArray[4].value = pagee.value;
        this.sPaginationArray[4].isActive = "active";
        this.sPaginationArray[5].value = pagee.value + 1;
        this.sPaginationArray[5].isActive = "";
        if((pageMax - pagee.value) == 2) {
          this.sPaginationArray[6].value = pageMax - 1;
        }
      }
      if( (pagee.index == 3) &&  (pagee.value - pageMin) != 2 ) {
        this.sPaginationArray[2].value = "..";
        this.sPaginationArray[3].value = pagee.value - 1;
        this.sPaginationArray[3].isActive = "";
        this.sPaginationArray[4].value = this.sPaginationArray[3].value + 1;
        this.sPaginationArray[5].value = this.sPaginationArray[4].value + 1;
        this.sPaginationArray[4].isActive = "active";
        this.sPaginationArray[6].value = "..";
        if((pagee.value - pageMin) == 2) {
          this.sPaginationArray[2].value = pageMin + 1;
        }
      }
    }

    //this.changePage(pagee);
  }

  ngOnInit() {
    this.getListOfOrders();
    //this.seperatePagination();
  }

}
