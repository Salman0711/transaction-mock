/*
const user = {
  name: "Balaji",
  amount: 100,
  transactions: []
}

const merchant = {
  name: "Mar",
  amount: 0,
  transactions: []
}


const masterTransaction = []

function transfer(amount, type) {

}

transfer(100, "dr")*/
class transaction{
  constructor(){
    this.userWallet=0;
    this.merchantWallet=0;
    this.scashWallet=0;
    this.transactions=[]
  }
  transfer(amount,type){
    const transactionamount=amount;
    if(transactionamount<=0){
      console.log('The amount enteres must be more then zero');
      return;
    }
    if(type==='credit'){
      const cashback=transactionamount*0.035;
      const scashfees=cashback*0.1;
      const total_cashback=cashback-scashfees;

      this.userWallet+=total_cashback;
      this.merchantWallet=transactionamount-cashback;
      this.scashWallet+=scashfees;
      this.transactions.push({amount: transactionamount,User:'user',type,Merchant:'merchant',cashback:cashback.toFixed(2),Scashfee:scashfees.toFixed(2)});
      console.log(`Congratulations! You've earned cashback of $${total_cashback.toFixed(2)}  .`);
    }
    else if(type==='debit'){
      this.userWallet+=transactionamount;
      this.merchantWallet-=transactionamount;
      this.transactions.push({amount: transactionamount,User:'user',type,Merchant:'merchant'});
      console.log(`Refund of $${transactionamount} deposited to user`);

    }
    else{
      console.log('Invalid Transaction Type,Use Valid Transaction Type');
    }
  }
  printBalances() {
      console.log(`User Wallet: $${this.userWallet.toFixed(2)}`);
      console.log(`Merchant Wallet: $${this.merchantWallet.toFixed(2)}`);
     // console.log(`Scash wallet: $${this.scashWallet.toFixed(2)}`);
  }
    getTransactionHistory(){

      return this.transactions;
    }
  
}
const transactionsystem=new transaction();
//const transactionSystem = new TransactionSystem();
transactionsystem.transfer(100, 'credit');
//transactionsystem.transfer(15, 'debit');
//transactionsystem.transfer(15, 'credit');
transactionsystem.transfer(200,'credit');

console.log('TransactionHistory:',transactionsystem.getTransactionHistory());
console.log(transactionsystem.printBalances());


