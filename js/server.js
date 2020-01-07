var express = require('express');
var app = express();
var cors = require('cors');
var ethers = require('ethers')
var gasprice = 7000000000;

var uCADContract

var uCADContractAddress = '0xE6CC8c8cF673f13fc6090b4b7B619E61C473CD34';
var uCADABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_account",
				"type": "address"
			}
		],
		"name": "blacklist",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "creator",
				"type": "address"
			},
			{
				"name": "creatorAllowedAmount",
				"type": "uint256"
			}
		],
		"name": "configureCreator",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "create",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address"
			},
			{
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "destroy",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "spender",
				"type": "address"
			},
			{
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			},
			{
				"name": "fee",
				"type": "uint256"
			},
			{
				"name": "metaNonce",
				"type": "uint256"
			},
			{
				"name": "signature",
				"type": "bytes"
			}
		],
		"name": "metaApprove",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			},
			{
				"name": "fee",
				"type": "uint256"
			},
			{
				"name": "metaNonce",
				"type": "uint256"
			},
			{
				"name": "signature",
				"type": "bytes"
			}
		],
		"name": "metaTransfer",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_by",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			},
			{
				"name": "fee",
				"type": "uint256"
			},
			{
				"name": "metaNonce",
				"type": "uint256"
			},
			{
				"name": "signature",
				"type": "bytes"
			}
		],
		"name": "metaTransferFrom",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "pause",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "creator",
				"type": "address"
			}
		],
		"name": "removeCreator",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "from",
				"type": "address"
			},
			{
				"name": "to",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_account",
				"type": "address"
			}
		],
		"name": "unBlacklist",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "unpause",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newBlacklister",
				"type": "address"
			}
		],
		"name": "updateBlacklister",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newMasterCreator",
				"type": "address"
			}
		],
		"name": "updateMasterCreator",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newPauser",
				"type": "address"
			}
		],
		"name": "updatePauser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "creator",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Create",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "destroyer",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Destroy",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "creator",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "creatorAllowedAmount",
				"type": "uint256"
			}
		],
		"name": "CreatorConfigured",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "oldCreator",
				"type": "address"
			}
		],
		"name": "CreatorRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "newMasterCreator",
				"type": "address"
			}
		],
		"name": "MasterCreatorChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "miner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "MetaTransfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "miner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "MetaApproval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_account",
				"type": "address"
			}
		],
		"name": "Blacklisted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_account",
				"type": "address"
			}
		],
		"name": "UnBlacklisted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "newBlacklister",
				"type": "address"
			}
		],
		"name": "BlacklisterChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "Pause",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "Unpause",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "newAddress",
				"type": "address"
			}
		],
		"name": "PauserChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "owner",
				"type": "address"
			},
			{
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "blacklister",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "creator",
				"type": "address"
			}
		],
		"name": "creatorAllowance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "currency",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			},
			{
				"name": "fee",
				"type": "uint256"
			},
			{
				"name": "txGasPrice",
				"type": "uint256"
			},
			{
				"name": "metaNonce",
				"type": "uint256"
			}
		],
		"name": "getApprovePayload",
		"outputs": [
			{
				"name": "payload",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "sender",
				"type": "address"
			}
		],
		"name": "getMetaNonce",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_by",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			},
			{
				"name": "fee",
				"type": "uint256"
			},
			{
				"name": "txGasPrice",
				"type": "uint256"
			},
			{
				"name": "metaNonce",
				"type": "uint256"
			}
		],
		"name": "getTransferFromPayload",
		"outputs": [
			{
				"name": "payload",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "value",
				"type": "uint256"
			},
			{
				"name": "fee",
				"type": "uint256"
			},
			{
				"name": "txGasPrice",
				"type": "uint256"
			},
			{
				"name": "nonce",
				"type": "uint256"
			}
		],
		"name": "getTransferPayload",
		"outputs": [
			{
				"name": "payload",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_account",
				"type": "address"
			}
		],
		"name": "isBlacklisted",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "account",
				"type": "address"
			}
		],
		"name": "isCreator",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "isOwner",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "masterCreator",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			}
		],
		"name": "meta_nonce",
		"outputs": [
			{
				"name": "nonce",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "pauser",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_signer",
				"type": "address"
			},
			{
				"name": "payload",
				"type": "bytes32"
			},
			{
				"name": "signature",
				"type": "bytes"
			}
		],
		"name": "validSignature",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	}
]

var uCADDecimals;
var overrides;

overrides = {
	gasLimit:2000000,
	gasPrice: 7000000000
}


// on the request to root (localhost:3000/)
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Credentials","true")
  next();
});

app.get('/', function (req, res){

    res.send('<b>My</b> first express http server');

});

app.get('/metaTransfer', function (req, res) {
	console.log("initiating METATRANSFER")
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Credentials","true")
  console.log(req.query)


    //res.send('metaTransfer pending....');
    let from = req.query.from
    let to = req.query.to
    let amount = req.query.amount
    let fee = req.query.fee
    let nonce = req.query.nonce
    let sig = req.query.signature

    metaTransfer(from,to,amount,fee,nonce,sig).then(function(result){
			res.send('metaTransfer complete! ' +'tx hash: ' + result);
		})

});

app.get('/metaApprove', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Credentials","true")
  console.log(req.query)

    //res.send('metaApprove pending....');
    let from = req.query.from
    let to = req.query.to
    let amount = req.query.amount
    let fee = req.query.fee
    let nonce = req.query.nonce
    let sig = req.query.signature

    metaApprove(from,to,amount,fee,nonce,sig).then(function(result){
			res.send('metaTransfer complete! ' +'tx hash: ' + result);
		})

});

app.get('/metaTransferFrom', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Credentials","true")
  console.log(req.query)

    //res.send('metaTransferFrom pending....');
    let from = req.query.from
    let to = req.query.to
    let by = req.query.by
    let amount = req.query.amount
    let fee = req.query.fee
    let nonce = req.query.nonce
    let sig = req.query.signature

    metaTransferFrom(from,to,by,amount,fee,nonce,sig).then(function(result){
			res.send('metaTransfer complete! ' +'tx hash: ' + result);
		})
});

async function metaTransfer(from,to,amount,fee,nonce,sig){
  console.log("antoine is the bestest Transfer")

  console.log(from)
  console.log(to)
  console.log(amount)
  console.log(fee)
  console.log(nonce)
  console.log(sig)
    console.log(overrides)


  let tx = await uCADContract.metaTransfer(from,to,amount,fee,nonce,sig,overrides);
	console.log("mining...")
	await tx.wait()
	console.log("Metatransfer Success")
	console.log("tx hash: " + tx.hash)

	return tx.hash

}

async function metaApprove(from,to,amount,fee,nonce,sig){
  console.log("antoine is the bestest Approve")

  console.log(from)
  console.log(to)
  console.log(amount)
  console.log(fee)
  console.log(nonce)
  console.log(sig)

  let tx = await uCADContract.metaApprove(from,to,amount,fee,nonce,sig,overrides);
	console.log("mining...")
	await tx.wait()
	console.log("Metatransfer Success")
	console.log("tx hash: " + tx.hash)

	return tx.hash

}

async function metaTransferFrom(from,to,by,amount,fee,nonce,sig){
  console.log("antoine is the bestest transferFrom")

  console.log(from)
  console.log(to)
  console.log(by)
  console.log(amount)
  console.log(fee)
  console.log(nonce)
  console.log(sig)

  let tx = await uCADContract.metaTransferFrom(from,to,by,amount,fee,nonce,sig,overrides);
	console.log("mining...")
	await tx.wait()
	console.log("Metatransfer Success")
	console.log("tx hash: " + tx.hash)

	return tx.hash

}




app.listen(process.env.PORT || 7777, function () {
    console.log('Example app listening on port 7777.');

    initialize()
});





async function initialize(){
	let privkey = ""
  let wallet = new ethers.Wallet.createRandom().connect(ethers.getDefaultProvider("ropsten"));
	console.log(wallet.address)
  let provider = ethers.getDefaultProvider('ropsten');

    uCADContract = await new ethers.Contract(uCADContractAddress, uCADABI, wallet);

		//await new Promise(resolve => setTimeout(resolve, 1000));


		uCADDecimals = 8;
    console.log(uCADDecimals)


    console.log("waiting to recieve metaTransactions........")
  }
