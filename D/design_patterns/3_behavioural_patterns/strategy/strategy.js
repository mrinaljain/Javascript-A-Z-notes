class UPI {
  pay() {
    console.log("Payment done via UPI");
  }
}

class Card {
  pay() {
    console.log("Payment done via Card");
  }
}

class Emi {
  pay() {
    console.log("Payment done via Emi");
  }
}



class Payment {
  constructor(configName) {
    this.configName = configName;
    this.paymentMethod = null;
  }

  setPaymentMethod(selectedMethod) {
    this.paymentMethod = selectedMethod;
  }
  pay(){
   this.paymentMethod.pay();
  }
}

let userPayment = new Payment("Upi Payment");

userPayment.setPaymentMethod(new UPI());

userPayment.pay();
