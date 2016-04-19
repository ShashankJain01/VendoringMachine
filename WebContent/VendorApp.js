var Cash = {
	    "Quarter": 0.25,
	    "Dime": 0.10,
	    "Nickel": 0.05,
	    "Penny":0.01
	};

var Product = {
		"Cola" : 1.00,
		"Chip" : 0.50,
		"Candy": 0.65
};

function Accept() {
  this.display = '';
  this.value = 0.00;
  this.prodvalue= 0.00;

  this.AcceptCoin =function(Inputcoin){
	switch (Inputcoin){
     case QUARTER:
    	 this.value  = Cash["QUARTER"];
   	  	 break;
     case DIME:
         this.value  = Cash["DIME"];
         break;
     case NICKEL:
         this.value  = Cash["NICKEL"];
         break;
     default:
         this.display  = "Coin returned";
         this.value =0.00;
         break;
     };
    this.value += this.value;

  this.DisplayCredit(this.value);
  };
  
  this.DisplayCredit = function(credit) {
	    if (this.credit > 0) {
	      this.display = '$' + this.credit.toFixed(2);
	    } else {
	      this.display = 'INSERT COIN';
	    }
  };
  
  this.selectProduct = function(Inputproduct) {
	    switch (Inputproduct){
	     case Cola:
	   	      this.prodvalue  = Product["Cola"];
	   	      break;
	     case Chip:
	         this.prodvalue  = Cash["Chip"];
	         break;
	     case Candy:
	         this.prodvalue  = Cash["Candy"];
	         break;
	     default:
	         this.display  = "Select a valid Product";
	         this.prodvalue =0.00;
	         break;
	     };
	  
	     if(this.prodvalue >= this.value){
	    	 this.display = "Thank You";
	     }
	     this.makeChange();
	     
  };  

  this.makeChange = function(product) {
    this.change = this.value - productvalue;
    this.DisplayCredit(this.change);
  };


}
