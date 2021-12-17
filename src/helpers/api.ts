import axios, { AxiosInstance } from "axios";
import { IAssetData, IGasPrices, IParsedTx } from "./types";

const api: AxiosInstance = axios.create({
  baseURL: "https://ethereum-api.xyz",
  timeout: 30000, // 30 secs
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const apiNFT: AxiosInstance = axios.create({
  baseURL: "https://eth-mainnet.g.alchemy.com/demo/v1",
  timeout: 30000, // 30 secs
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export async function apiGetAccountNFTs(address: string, chainId: number){
  const response = await apiNFT.get(`/getNFTs/?owner=${address}`);
  const result = response.data;
  console.log(result)
  return result;
}

export async function apiNFTMetadata(contract: string, tokenId: string){
  const response = await apiNFT.get(`/getNFTMetadata?contractAddress=${contract}&tokenId=${tokenId}&tokenType=erc721`);
  const result = response.data;
  console.log(result)
  return result;
}


export async function apiGetAccountAssets(address: string, chainId: number): Promise<IAssetData[]> {
  const response = await api.get(`/account-assets?address=${address}&chainId=${chainId}`);
  const { result } = response.data;
  console.log(result)
  return result;
}

export async function apiGetAccountTransactions(
  address: string,
  chainId: number,
): Promise<IParsedTx[]> {
  const response = await api.get(`/account-transactions?address=${address}&chainId=${chainId}`);
  const { result } = response.data;
  return result;
}

export const apiGetAccountNonce = async (address: string, chainId: number): Promise<string> => {
  const response = await api.get(`/account-nonce?address=${address}&chainId=${chainId}`);
  const { result } = response.data;
  return result;
};

export const apiGetGasPrices = async (): Promise<IGasPrices> => {
  const response = await api.get(`/gas-prices`);
  const { result } = response.data;
  return result;
};
