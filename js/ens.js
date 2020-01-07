let resolverAddresses = {
	1:"0x993bCd0Cd7fC77b80cFba3778A22f0A1Ac1Da5dD",
	3: "0x5FfC014343cd971B7eb70732021E26C35B744cc4",
	42:"",
	4: "0x06E6B4E68b0B9B2617b35Eec811535050999282F",
	5: "0xfF77b96d6bafCec0D684bB528b22e0Ab09C70663"
}//"0x9C4c3B509e47a298544d0fD0591B47550845e903"
let resolverABI = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "interfaceID",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
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
		"constant": false,
		"inputs": [
			{
				"name": "node",
				"type": "bytes32"
			},
			{
				"name": "key",
				"type": "string"
			},
			{
				"name": "value",
				"type": "string"
			}
		],
		"name": "setText",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "node",
				"type": "bytes32"
			},
			{
				"name": "contentTypes",
				"type": "uint256"
			}
		],
		"name": "ABI",
		"outputs": [
			{
				"name": "contentType",
				"type": "uint256"
			},
			{
				"name": "data",
				"type": "bytes"
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
				"name": "node",
				"type": "bytes32"
			},
			{
				"name": "x",
				"type": "bytes32"
			},
			{
				"name": "y",
				"type": "bytes32"
			}
		],
		"name": "setPubkey",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "node",
				"type": "bytes32"
			}
		],
		"name": "content",
		"outputs": [
			{
				"name": "ret",
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
				"name": "node",
				"type": "bytes32"
			}
		],
		"name": "addr",
		"outputs": [
			{
				"name": "ret",
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
				"name": "node",
				"type": "bytes32"
			},
			{
				"name": "key",
				"type": "string"
			}
		],
		"name": "text",
		"outputs": [
			{
				"name": "ret",
				"type": "string"
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
				"name": "node",
				"type": "bytes32"
			},
			{
				"name": "contentType",
				"type": "uint256"
			},
			{
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "setABI",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "node",
				"type": "bytes32"
			}
		],
		"name": "name",
		"outputs": [
			{
				"name": "ret",
				"type": "string"
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
				"name": "node",
				"type": "bytes32"
			},
			{
				"name": "name",
				"type": "string"
			}
		],
		"name": "setName",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "node",
				"type": "bytes32"
			},
			{
				"name": "hash",
				"type": "bytes32"
			}
		],
		"name": "setContent",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "node",
				"type": "bytes32"
			}
		],
		"name": "pubkey",
		"outputs": [
			{
				"name": "x",
				"type": "bytes32"
			},
			{
				"name": "y",
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
				"name": "node",
				"type": "bytes32"
			},
			{
				"name": "addr",
				"type": "address"
			}
		],
		"name": "setAddr",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "ensAddr",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "node",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "a",
				"type": "address"
			}
		],
		"name": "AddrChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "node",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "hash",
				"type": "bytes32"
			}
		],
		"name": "ContentChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "node",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "name",
				"type": "string"
			}
		],
		"name": "NameChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "node",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"name": "contentType",
				"type": "uint256"
			}
		],
		"name": "ABIChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "node",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "x",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "y",
				"type": "bytes32"
			}
		],
		"name": "PubkeyChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "node",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"name": "indexedKey",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "key",
				"type": "string"
			}
		],
		"name": "TextChanged",
		"type": "event"
	}
]
let resolvercontract;

let registrytokenAddress = "0x357DBd063BeA7F0713BF88A3e97B7436B0235979"
let registryABI = [{"constant":true,"inputs":[{"name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_prices","type":"address"}],"name":"setPriceOracle","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"commitments","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"name","type":"string"},{"name":"duration","type":"uint256"}],"name":"rentPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"owner","type":"address"},{"name":"duration","type":"uint256"},{"name":"secret","type":"bytes32"}],"name":"register","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"MIN_REGISTRATION_DURATION","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minCommitmentAge","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"name","type":"string"}],"name":"valid","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"duration","type":"uint256"}],"name":"renew","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"name","type":"string"}],"name":"available","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxCommitmentAge","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"commitment","type":"bytes32"}],"name":"commit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"name","type":"string"},{"name":"owner","type":"address"},{"name":"secret","type":"bytes32"}],"name":"makeCommitment","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"inputs":[{"name":"_base","type":"address"},{"name":"_prices","type":"address"},{"name":"_minCommitmentAge","type":"uint256"},{"name":"_maxCommitmentAge","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"name","type":"string"},{"indexed":true,"name":"label","type":"bytes32"},{"indexed":true,"name":"owner","type":"address"},{"indexed":false,"name":"cost","type":"uint256"},{"indexed":false,"name":"expires","type":"uint256"}],"name":"NameRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"name","type":"string"},{"indexed":true,"name":"label","type":"bytes32"},{"indexed":false,"name":"cost","type":"uint256"},{"indexed":false,"name":"expires","type":"uint256"}],"name":"NameRenewed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oracle","type":"address"}],"name":"NewPriceOracle","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]
let resigtryContract;
