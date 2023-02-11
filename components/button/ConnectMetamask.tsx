import type { FC } from 'react';
import { ethers } from "ethers";
import Image from 'next/image';
import { useStore } from 'libs/store';

const ConnectMetamask: FC = () => {
  const { setAddress } = useStore((state) => state)

  return (
    <button type="button" onClick={() => connectWallet(setAddress)} className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
      <Image src="/images/metamask-logo.svg" width={32} height={32} alt="Metamask Logo" className='mr-4' />
      Connect with MetaMask
    </button>
  )
}

const connectWallet = async (_setAddress: any) => {
  if (!(window as any).ethereum) {
    console.error('!window.ethereum')
    return
  }

  const provider = new ethers.providers.Web3Provider((window as any).ethereum)
  console.log("provider:", provider)
  await provider.send('eth_requestAccounts', [])

  const signer = provider.getSigner()
  console.log("signer:", signer)

  const address = await signer.getAddress()
  console.log(`address: ${address}`)
  _setAddress(address);

}


export default ConnectMetamask;
