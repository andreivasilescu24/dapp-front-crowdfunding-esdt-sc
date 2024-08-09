import { IPlainTransactionObject, Transaction } from "@multiversx/sdk-core/out";
import { useEffect, useState } from "react";
import {
  useGetAccount,
  useGetLoginInfo,
  useGetPendingTransactions,
} from "@multiversx/sdk-dapp/hooks";
import { sendTransactions } from "@multiversx/sdk-dapp/services";
import axios from "axios"

let ct = 0;

//Adresa lui BOB
const user = "erd1kyaqzaprcdnv4luvanah0gfxzzsnpaygsy6pytrexll2urtd05ts9vegu7";

export const TransactionSection = () => {
  const [tx, setTx] = useState<Transaction>();
  const { pendingTransactionsArray } = useGetPendingTransactions();

  
  const { address } = useGetAccount();
  const {tokenLogin } = useGetLoginInfo();
 const bearerToken = tokenLogin?.nativeAuthToken

 const [userInput, setUserInput] = useState<string>('');
 const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  setUserInput(event.target.value);
 }
  // Creează un state pentru fonduri
  const [funds, setFunds] = useState<string | null>(null);



//VIEW -URI 

 //FUNDS
 const viewFunds = async () => {

  console.log("Req view funds: " + bearerToken)
  const tx = await axios.get<IPlainTransactionObject>('http://localhost:3000/crowdfunding/getFunds', {
    headers: {
      'Authorization' : 'Bearer ' + bearerToken,
      'Origin': 'localhost:5173'
    }

  }
  );

  console.log("View funds: ")
  console.log(tx.data)
  setTx(Transaction.fromPlainObject(tx.data));
  setFunds(tx.data.value);
 }


//TARGET

 const viewTarget = async () => {

  console.log("Req view target: " + bearerToken)
  const tx = await axios.get<IPlainTransactionObject>('http://localhost:3000/crowdfunding/getTarget', {
    headers: {
      'Authorization' : 'Bearer ' + bearerToken,
      'Origin': 'localhost:5173'
    }

  }
  );
  
  console.log("View  target : ")
  console.log(tx.data)
  setTx(Transaction.fromPlainObject(tx.data));
 }


//DEADLINE

 const viewDeadline = async () => {

  console.log("Req view deadline: " + bearerToken)
  const tx = await axios.get<IPlainTransactionObject>('http://localhost:3000/crowdfunding/getDeadline', {
    headers: {
      'Authorization' : 'Bearer ' + bearerToken,
      'Origin': 'localhost:5173'
    }

  }
  );
  
  console.log("View deadline : ")
  console.log(tx.data)
  setTx(Transaction.fromPlainObject(tx.data));
 }


//DEPOSIT  aici ar trebui numar ? dar da string

const viewDeposit = async () => {

  console.log("Req view deposit: " + bearerToken)
  const tx = await axios.get<IPlainTransactionObject>('localhost:3000/crowdfunding/getDeposit/erd1l453hd0gt5gzdp7czpuall8ggt2dcv5zwmfdf3sd3lguxseux2fsmsgldz', {
    headers: {
      'Authorization' : 'Bearer ' + bearerToken,
      'Origin': 'localhost:5173'
    }

  }
  );
  
  console.log("View deposit : ")
  console.log(tx.data)
  setTx(Transaction.fromPlainObject(tx.data));
 }


//TOKENID

const viewTokenID = async () => {

  console.log("Req view TokenID: " + bearerToken)
  const tx = await axios.get<IPlainTransactionObject>('localhost:3000/crowdfunding/getTokenId', {
    headers: {
      'Authorization' : 'Bearer ' + bearerToken,
      'Origin': 'localhost:5173'
    }

  }
  );
  
  console.log("View TokenID : ")
  console.log(tx.data)
  setTx(Transaction.fromPlainObject(tx.data));
 }


 //STATUS - aici da undefined

const viewStatus = async () => {

  console.log("Req view Status: " + bearerToken)
  const tx = await axios.get<IPlainTransactionObject>('localhost:3000/crowdfunding/getStatus', {
    headers: {
      'Authorization' : 'Bearer ' + bearerToken,
      'Origin': 'localhost:5173'
    }

  }
  );
  
  console.log("View Status : ")
  console.log(tx.data)
  setTx(Transaction.fromPlainObject(tx.data));
 }


 //ENDPOINT URI

 
  const createTransaction = () => {
    const txToSign = new Transaction({
      sender: address,
      receiver: address,
      value: "0",
      gasLimit: 100000n,
      chainID: "D",
      version: 0,
      data: Buffer.from(`Transaction ${ct++}`),
    });
    setTx(txToSign);
  };

  /*
  const createTransactionFund = () => {
    const txToSign = new Transaction({
      sender: user,
      receiver: address,
      value: "0",
      gasLimit: 100000n,
      chainID: "D",
      version: 0,
      token_id: "EGLD",
      token_nonce: 0,
      token_amount: 1,
     
      data: Buffer.from(`Transaction ${ct++}`),
    });
    setTx(txToSign);
  };
 */


  const sendTransaction = async () => {
    if (!address || !tx) {
      console.error("Address or transaction not found");
      return;
    }

    await sendTransactions({
      transactions: [tx],
      transactionsDisplayInfo: {
        processingMessage: "Processing transaction",
        errorMessage: "An error has occured",
        successMessage: "Transaction successful",
      },
      signWithoutSending: false,
    });
  };

  useEffect(() => {
    console.log("tx", tx);
  }, [tx]);

  return (
    <div className="w-1/2 flex flex-col p-9 rounded-xl bg-white">
      <h2 className="flex font-medium group text-sm">
        Create and send transaction
      </h2>
   

{/* 
  {    <button
        onClick={createTransaction}
        className="w-96 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 my-2 rounded"
      >
        Create transaction
      </button> }

*/}

  <button
    onClick={viewFunds}
    className="w-36 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 my-2 rounded-full shadow-lg"
  >
    Funds
  </button>

  <button
    onClick={viewTarget}
    className="w-36 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 my-2 rounded-full shadow-lg"
  >
    Target
  </button>

  <button
    onClick={viewDeadline}
    className="w-36 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 my-2 rounded-full shadow-lg"
  >
    Deadline
  </button>

  <button
    onClick={viewDeposit}
    className="w-36 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 my-2 rounded-full shadow-lg"
  >
    Deposit
  </button>

  <button
    onClick={viewTokenID}
    className="w-36 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 my-2 rounded-full shadow-lg"
  >
    TokenID
  </button>

  <button
    onClick={viewStatus}
    className="w-36 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 my-2 rounded-full shadow-lg"
  >
    Status
</button>





      <pre className="text-sm text-left">
        <code>{JSON.stringify(tx?.toPlainObject(), null, 2)}</code>
      </pre>

      {/* 
      <button
        onClick={sendTransaction}
        className="w-96 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 my-2 rounded"
        disabled={pendingTransactionsArray.length > 0}
      >
        {pendingTransactionsArray.length > 0 ? (
          <span>Sending...</span>
        ) : (
          <span>Send transaction</span>
        )}
      </button>*/}
    </div>
  );
};
