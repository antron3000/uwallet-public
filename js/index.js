//To do:
//transaction feedback (console log enough for now)
// save and retrieve state on graph
// sample smart contract
	//array
	//struct
	//different types
	//
// token wallet
	//token functions
	//transaction history
			//fix eth tx history (add sent to contract)
			//fix token transaction history (add IN OUT)
			//see a

	//metatransactions
	//

	//switch between injected web3 and built in Wallet
	//reveal seed phrase, import seed phrase

	//save resolver contracts for all testnets in config file
	//register tokens on every chain

	//1 homestead
	//3 ropsten
	//42 kovan
	//4 rinkeby
	//5 goerli
let networkId
let networkName
let provider;
let etherscanProvider;
let wallet;
let walletAddress;
let utils;





//dom objects
let myAddressLabel,myEthBalanceLabel;
let nameLabel,symbolLabel,supplyLabel,contractLabel;
let balanceLabel,approvedTo,approvedAmount;
let transferTo, transferAmount;
let approveTo,approveAmount;
let transferFromTo,transferFromFrom,transferFromAmount;
let metaTransferButton,metaApproveButton,metaTransferFromButton


let txHistory

async function initialize(web3) {

	if (customTokenAddress==undefined){
		tokenAddress = defaultTokenAddresses[networkId]
	}

	provider = ethers.getDefaultProvider(networkName)
	etherscanProvider = new ethers.providers.EtherscanProvider(); //what network?
  utils = ethers.utils;



  contract = new ethers.Contract(tokenAddress,tokenABI,wallet)
	resolverContract = new ethers.Contract(resolverAddresses[networkId],resolverABI,wallet)
	//registryContract = new ethers.Contract(registrytokenAddress,registryABI,wallet)

	tokenDecimals = await contract.decimals()
	tokenSymbol = await contract.symbol()
	utils = ethers.utils;

	ethBalance = await wallet.getBalance()
	ethAmount = utils.formatUnits(ethBalance,18)
	ethAmount = utils.commify(ethAmount)

	await getElements()
	myAddressLabel.innerHTML = "My Address: " + utils.getAddress(walletAddress)
	myEthBalanceLabel.innerHTML = "Balance: " + ethAmount + " ETH"
  await getTokenDetails()

	await getTxHistoryEth()
	await getTxHistoryTokens()
	await displayTxHistoryEth()
	await displayTxHistoryTokens()
}

async function getElements(){
	myAddressLabel = document.getElementById("myAddress")
  myEthBalanceLabel = document.getElementById("myEthBalance")

	nameLabel = document.getElementById("nameLabel");
	symbolLabel = document.getElementById("symbolLabel")
	supplyLabel = document.getElementById("totalSupplyLabel")
	contractLink = document.getElementById("contractLink")

	balanceLabel = document.getElementById("balanceLabel")
	approvedTo = document.getElementById("approvedTo")
	approvedAmount  = document.getElementById("approvedAmount")

	transferTo = document.getElementById("transferTo");
	transferAmount = document.getElementById("transferAmount");

	approveTo = document.getElementById("approveTo");
	approveAmount = document.getElementById("approveAmount");

	transferFromTo = document.getElementById("transferFromTo");
	transferFromFrom = document.getElementById("transferFromFrom");
	transferFromAmount = document.getElementById("transferFromAmount");

	metaTransferButton = document.getElementById("metaTransferButton")
	metaApproveButton = document.getElementById("metaApproveButton")
	metaTransferFromButton = document.getElementById("metaTransferFromButton")

}

async function getTokenDetails() {

	nameLabel.innerHTML = "Name: ";
	symbolLabel.innerHTML = "Symbol: "
	supplyLabel.innerHTML = "Total Supply: "
	contractLink.innerHTML = "Contract: "
	balanceLabel.innerHTML = "Balance: "
	nameLabel.innerHTML += await contract.name()
	symbolLabel.innerHTML += await contract.symbol()

	supplyLabel.innerHTML +=  await getTotalSupply()
	let a = document.createElement('a');
	a.href =  "https://etherscan.io/address/" + tokenAddress
	a.innerHTML = tokenAddress
	contractLink.innerHTML = "Contract: "
	contractLink.appendChild(a)
	balanceLabel.innerHTML += await getBalance()
}

async function getTotalSupply(){
	let totalSupply = await contract.totalSupply()
	totalSupply = formatAmount(totalSupply)
	return(totalSupply)
}
async function getBalance(){
	let balance = await contract.balanceOf(walletAddress)
	balance = formatAmount(balance)
	return(balance)
}


async function resolveAddress(ensName){
		if (ensName.includes(".")){
			console.log(ensName)
			let nameHash = utils.namehash(ensName)
			ensName = await resolverContract.addr(nameHash)
		}

		return ensName
}

async function updateToken(){
	let address
	try{
	address = utils.getAddress(document.getElementById("tokenAddress").value)
	tokenAddress = await resolveAddress(address);
}catch {
	console.log("invalid address")
}
	initialize(web3)
}

function getNetwork() {
  if (typeof web3 !== 'undefined') {
     console.log('web3 is enabled')
     if (web3.currentProvider.isMetaMask === true) {
       console.log('MetaMask is active')
     } else {
       console.log('MetaMask is not available')
     }
   } else {
     console.log('web3 is not found')
   }

	 web3.eth.getAccounts(function(err, accounts){
    if (err != null) console.error("An error occurred: "+err);
    else if (accounts.length == 0) console.log("User is not logged in to MetaMask");
    else console.log("User is logged in to MetaMask");
});
  web3.version.getNetwork((err, netId) => {
  switch (netId) {
    case "1":
      console.log('This is mainnet',netId)
      break
    case "2":
      console.log('This is the deprecated Morden test network. Network ID:',netId)
      break
    case "3":
      console.log('This is the ropsten test network. Network ID:',netId)
      break
    case "4":
      console.log('This is the rinkeby test network. Network ID:',netId)
      break
    case "5":
      console.log('This is the goerli test network. Network ID:',netId)
      break
    case "42":
      console.log('This is the kovan test network. Network ID:',netId)
      break
    default:
      console.log('This is an unknown network. Network ID:',netId)
  }
})

}

async function getTxHistoryEth(){
	console.log("getting ETH tx history")
	txHistoryEth = await etherscanProvider.getHistory(walletAddress)
}
async function getTxHistoryTokens() {
	console.log("getting token tx history")
	txHistoryTokens = new Array();

	let topic = ethers.utils.id("Transfer(address,address,uint256)");

  let blockNumber = await provider.getBlockNumber()
console.log(blockNumber)
	let filter = {
    address: tokenAddress,
    fromBlock: 8000000,
    toBlock: blockNumber,
    topics: [ topic ]
	}

	let result = await provider.getLogs(filter)
	console.log(result)
	console.log(result.length)
		for (let j = 0;j<result.length;j++){
			console.log(j)
			//console.log(result[j])
			let tx = new Object()
			tx.amount = utils.bigNumberify(result[j].data)
      tx.from = utils.getAddress("0x" + (result[j].topics[1]).slice(26,66))
      tx.to = utils.getAddress("0x" + (result[j].topics[2]).slice(26,66))
      tx.hash = result[j].transactionHash
      tx.info = result[j]
			if(tx.from==walletAddress||tx.to==walletAddress){
				txHistoryTokens.push(tx)
			}
		}
}

async function displayTxHistoryEth(){
	var txHistoryEthTable = document.getElementById('txHistoryEth')

  console.log("display Eth Transaction History")

	for(var o=0;o<txHistoryEth.length;o++){

			var newRow  = txHistoryEthTable.insertRow(txHistoryEthTable.rows.length);

      var Hash = txHistoryEth[o].hash

      let a_tx_hash = document.createElement('a');
      a_tx_hash.href =  "https://etherscan.io/tx/" + Hash
      a_tx_hash.innerHTML = Hash
			var HashCell  = newRow.insertCell(0);
			HashCell.appendChild(a_tx_hash);

			var from = txHistoryEth[o].from
			var to = txHistoryEth[o].to

      let a_from = document.createElement('a');
      a_from.href =  "https://etherscan.io/address/" + from
      a_from.innerHTML = from

			var fromCell  = newRow.insertCell(1);
			fromCell.appendChild(a_from);

			var inOutCell = newRow.insertCell(2);
			let inOutText
			if(from==walletAddress){
				inOutText = document.createTextNode('OUT')
			} else if (to==walletAddress){
				inOutText = document.createTextNode('IN')
			}
			inOutCell.appendChild(inOutText)

      let a_to = document.createElement('a');
      a_to.href =  "https://etherscan.io/address/" + to
      a_to.innerHTML = to

			var toCell  = newRow.insertCell(3);
			toCell.appendChild(a_to);

      var amount = utils.formatEther(txHistoryEth[o].value)
       amount += " ETH"
      var amountCell  = newRow.insertCell(4);
      var amountText = document.createTextNode(amount);
      amountCell.appendChild(amountText);

	    var time = new Date(txHistoryEth[0].timestamp*1000)

			var timeCell  = newRow.insertCell(5);
			var timeText  = document.createTextNode(time);
			timeCell.appendChild(timeText);
		}
}

async function displayTxHistoryTokens(){
	var txHistoryTokenTable = document.getElementById('txHistoryToken')
	console.log("display Token Transaction History")
	for(var o=0;o<txHistoryTokens.length;o++){

			var newRow  = txHistoryTokenTable.insertRow(txHistoryTokenTable.rows.length);

			var Hash = txHistoryTokens[o].hash

			let a_tx_hash = document.createElement('a');
			a_tx_hash.href =  "https://etherscan.io/tx/" + Hash
			a_tx_hash.innerHTML = Hash
			var HashCell  = newRow.insertCell(0);
			HashCell.appendChild(a_tx_hash);


			var from = txHistoryTokens[o].from
			var to = txHistoryTokens[o].to

			let a_from = document.createElement('a');
			a_from.href =  "https://etherscan.io/adress/" + from
			a_from.innerHTML = from

			var fromCell  = newRow.insertCell(1);
			fromCell.appendChild(a_from);

			var inOutCell = newRow.insertCell(2);
			let inOutText
			console.log(from)
			console.log(to)
			console.log(walletAddress)

			if(from==walletAddress){
				inOutText = document.createTextNode('OUT')
				console.log("neah2")
			} else if (to==walletAddress){
				console.log("yeah")
				inOutText = document.createTextNode('IN')
			} else {
				console.log("neah")
				inOutText = document.createTextNode('')
			}
			inOutCell.appendChild(inOutText)

			let a_to = document.createElement('a');
			a_to.href =  "https://etherscan.io/address/" + to
			a_to.innerHTML = to

			var toCell  = newRow.insertCell(3);
			toCell.appendChild(a_to);

			var amount = utils.formatUnits(txHistoryTokens[o].amount,tokenDecimals)
			 amount += " " + tokenSymbol
			var amountCell  = newRow.insertCell(4);
			var amountText = document.createTextNode(amount);
			amountCell.appendChild(amountText);

			var time = new Date(txHistoryEth[0].timestamp*1000)

			var timeCell  = newRow.insertCell(4);
			var timeText  = document.createTextNode(time);
			timeCell.appendChild(timeText);

		}
}


async function switchNetwork(){

	if(document.getElementById("mainnet_network").checked){
		networkId = 1
		networkName = "homestead"
	} else if(document.getElementById("ropsten_network").checked){
		networkId = 3
		networkName = "ropsten"
	}else if(document.getElementById("kovan_network").checked){
		networkId = 42
		networkName = "kovan"
	}else if(document.getElementById("rinkeby_network").checked){
		networkId = 4
		networkName = "rinkeby"
	}else if(document.getElementById("goerli_network").checked){
		networkId = 5
		networkName = "goerli"
	} else{
		console.log("love")
		document.getElementById("mainnet_network").checked = true;
		switchNetwork()
	}

}

async function switchWallet(web3) {
	console.log("abcd")

		//document.getElementById("mainnet_network").checked=true

		await switchNetwork()
		console.log("test1")
		let mnemonic = localStorage.getItem("mnemonic")
		console.log(mnemonic)
		if (mnemonic == undefined) {
			wallet = ethers.Wallet.createRandom().connect(ethers.getDefaultProvider(networkName));
			localStorage.setItem("mnemonic",wallet.signingKey.mnemonic)
		} else {
			wallet = ethers.Wallet.fromMnemonic(mnemonic).connect(ethers.getDefaultProvider(networkName));
		}
		console.log("test2")
		console.log(wallet)
		walletAddress = wallet.address
		console.log(walletAddress)
		enableNetworkButtons()
		console.log("enabled")
		initialize(web3)

}

async function switchNetworkRadioButton(){
	switch(networkId){
		case 1:
			document.getElementById("mainnet_network").checked=true
			break;
		case 3:
			document.getElementById("ropsten_network").checked=true
			break;
		case 42:
			document.getElementById("kovan_network").checked=true
			break;
		case 4:
			document.getElementById("rinkeby_network").checked=true
			break;
		case 5:
			document.getElementById("goerli_network").checked=true
	}
}

function enableNetworkButtons() {
		document.getElementById("mainnet_network").disabled = false;
		document.getElementById("ropsten_network").disabled = false;
		document.getElementById("kovan_network").disabled = false;
		document.getElementById("rinkeby_network").disabled = false;
		document.getElementById("goerli_network").disabled = false;
}

function disableNetworkButtons() {
		document.getElementById("mainnet_network").disabled = true;
		document.getElementById("ropsten_network").disabled = true;
		document.getElementById("kovan_network").disabled = true;
		document.getElementById("rinkeby_network").disabled = true;
		document.getElementById("goerli_network").disabled = true;
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
