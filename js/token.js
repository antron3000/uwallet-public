let tokenABI = [
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
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "relayer",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
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
				"internalType": "address",
				"name": "relayer",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
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
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
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
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "metaNonce",
				"type": "uint256"
			}
		],
		"name": "getApprovePayload",
		"outputs": [
			{
				"internalType": "bytes32",
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
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "getMetaNonce",
		"outputs": [
			{
				"internalType": "uint256",
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
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_by",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "metaNonce",
				"type": "uint256"
			}
		],
		"name": "getTransferFromPayload",
		"outputs": [
			{
				"internalType": "bytes32",
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
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "nonce",
				"type": "uint256"
			}
		],
		"name": "getTransferPayload",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "payload",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_signer",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "payload",
				"type": "bytes32"
			},
			{
				"internalType": "bytes",
				"name": "signature",
				"type": "bytes"
			}
		],
		"name": "isValidSignature",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "masterCreator",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "metaNonce",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "signature",
				"type": "bytes"
			}
		],
		"name": "metaApprove",
		"outputs": [
			{
				"internalType": "bool",
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
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "metaNonce",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "signature",
				"type": "bytes"
			}
		],
		"name": "metaTransfer",
		"outputs": [
			{
				"internalType": "bool",
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
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_by",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "fee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "metaNonce",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "signature",
				"type": "bytes"
			}
		],
		"name": "metaTransferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			}
		],
		"name": "meta_nonce",
		"outputs": [
			{
				"internalType": "uint256",
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
				"internalType": "string",
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
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
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
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

let defaultTokenAddresses = {
	1:"0x92e52a1A235d9A103D970901066CE910AAceFD37",  //mainnet
	3: "0xE6CC8c8cF673f13fc6090b4b7B619E61C473CD34", //ropsten
	42:"0xF10F754c6734Dcc8b4B78e462dCc85C15F359718", //kovan
	4: "0x3689C19A7407E354fEFA41aA51cB138898f7ee8e", //rinkeby
	5: "0xF10F754c6734Dcc8b4B78e462dCc85C15F359718"  //goerli
}

let tokenAddress;
let customTokenAddress;

//token
let tokenName;
let tokenSymbol;
let tokenDecimals;

async function transfer(to,amount) {
	//let to = transferTo.value
	to = await resolveAddress(to)
	amount = parseAmount(amount)
	let overrides = {
		gasLimit:230000
	}
	await contract.transfer(to,amount,overrides)
	alert("Transfer Successful")
}
async function approve(to,amount) {
	//let to = approveTo.value
	to = await resolveAddress(to)
	amount = parseAmount(amount)
	await contract.approve(to,amount)
}
async function transferFrom(from,to,amount) {
	//let from = transferFromFrom.value
	//let to = transferFromTo.value
	to = await resolveAddress(to)
	from = await resolveAddress(from)

	amount = parseAmount(amount)
	let overrides = {gasLimit:100000}
	await contract.transferFrom(from,to,amount,overrides)
}

async function allowance() {
	try{
		let spender = utils.getAddress(approvedTo.value)
		let allowed = await contract.allowance(walletAddress,spender)
		allowed = formatAmount(allowed)
		approvedAmount.innerHTML = allowed
	} catch {
		approvedAmount.innerHTML = "not a valid address"
	}

}

async function metaTransfer(to,amount) {

  //let to = transferTo.value;
	to = await resolveAddress(to)

  //let amount = transferAmount.value;
  let fee = "1";
	console.log(amount)
  amount = ethers.utils.parseUnits(amount,tokenDecimals)
	console.log(amount)
	console.log(fee)
  fee = ethers.utils.parseUnits(fee,tokenDecimals)
	console.log(fee)
  //uConverterContract
  let nonce = await contract.getMetaNonce(walletAddress);

  console.log(walletAddress,to,amount,nonce)

  let payloadToSign = await contract.getTransferPayload(walletAddress,to, amount, fee, nonce);

  let arrayifiedHash = ethers.utils.arrayify(payloadToSign)

  let flatSig = await wallet.signMessage(arrayifiedHash)
  console.log(flatSig)
  httpGETmetaTransfer(walletAddress,to,amount,fee,nonce,flatSig);



  // await GenieContract.grantWish(walletAddress,nonce,flatSig,overrides)

  //let verified = await WishContract.verifyApproval(walletAddress,payloadToSign,flatSig);

  // console.log(verified)
}

async function metaApprove(to,amount) {

  //let to = approveTo.value;
	to = await resolveAddress(to)

  //let amount = approveAmount.value;

  let fee = "1";

  amount = ethers.utils.parseUnits(amount,tokenDecimals)
  fee = ethers.utils.parseUnits(fee,tokenDecimals)

  //uConverterContract
  let nonce = await contract.getMetaNonce(walletAddress);

  let payloadToSign = await contract.getApprovePayload(walletAddress,to, amount, fee, nonce);

  let arrayifiedHash = ethers.utils.arrayify(payloadToSign)

  let flatSig = await wallet.signMessage(arrayifiedHash)
  console.log(flatSig)
  httpGETmetaApprove(walletAddress,to,amount,fee,nonce,flatSig);

  // await GenieContract.grantWish(walletAddress,nonce,flatSig,overrides)

  //let verified = await WishContract.verifyApproval(walletAddress,payloadToSign,flatSig);

  // console.log(verified)
}

async function metaTransferFrom(from,to,amount) {

  //let from = transferFromFrom.value;
  //let to = transferFromTo.value;
	to = await resolveAddress(to)
	from = await resolveAddress(from)

  //let amount = transferFromAmount.value;
  let fee = "1";

  //console.log(from,to,amount,fee)
  amount = ethers.utils.parseUnits(amount,tokenDecimals)
  fee = ethers.utils.parseUnits(fee,tokenDecimals)

  let nonce = await contract.getMetaNonce(walletAddress);

  let payloadToSign = await contract.getTransferFromPayload(from,to,walletAddress, amount, fee, nonce);

  let arrayifiedHash = ethers.utils.arrayify(payloadToSign)

  let flatSig = await wallet.signMessage(arrayifiedHash)
  console.log(flatSig)
  httpGETmetaTransferFrom(from,to,walletAddress,amount,fee,nonce,flatSig);

  // await GenieContract.grantWish(walletAddress,nonce,flatSig,overrides)

  //let verified = await WishContract.verifyApproval(walletAddress,payloadToSign,flatSig);

  // console.log(verified)
}

function parseAmount(amount) {
	amount = ethers.utils.parseUnits(amount,tokenDecimals)
	return amount;
}
function formatAmount(amount) {
	amount = ethers.utils.formatUnits(amount,tokenDecimals)
	amount = ethers.utils.commify(amount)
	amount += " "
	amount += tokenSymbol
	return amount;
}
