import detectEthereumProvider from '@metamask/detect-provider'
import Web3 from 'web3';
declare const window: any;

export class Web3Provider {
	private _provider: any|null = null;
	private _web3: any|null = null;

	constructor() {
		
	}
	
	private async _setProvider() {
		this._provider = await detectEthereumProvider();
	}

	getProvider() {
		return this._provider;
	}

	isValidProvider(_prov: any) {
		return (
			_prov === window.ethereum
		);
	}

	async setWeb3() {
		await this._setProvider();
		if (this.isValidProvider(this._provider)) {
			this._web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
		} else {
			throw new Error('Web3Error: Error creating web3 instance (invalid provider)');
		}
	}

	getWeb3() {
		return this._web3;
	}

	async requestAccounts() {
		const accounts = await this._web3.eth.requestAccounts();
		return accounts;
	}

	

}
