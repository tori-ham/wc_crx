import * as React from "react";
import Column from "./Column";
// import AssetRow from "./AssetRow";
// import { IAssetData } from "../helpers/types";
// import {apiNFTMetadata} from "../helpers/api";

const AccountNFTs = (props: any) => {
    const {nft_uri_list} = props;
    // let allowed_contracts = new Set<string>(['0x0beed7099af7514ccedf642cfea435731176fb02']);
    // // let allowed_contracts_id_map = new Map<string, string>();
    // let nft_id_list: string[] = [];
    // let nft_uri_list: string[] = [];
    // for (const curr_nft in NFTs.ownedNfts) {
    //     if (allowed_contracts.has(curr_nft.contract.address)) {
    //         // allowed_contracts_id_map.set(curr_nft.contract.address, curr_nft.id.tokenId)
    //         nft_id_list.push(curr_nft.contract.address, curr_nft.id.tokenId)
    //         const metadata = await apiNFTMetadata(curr_nft.contract.address, curr_nft.id.tokenId)
    //         nft_uri_list.push(metadata.media.uri)
    //     }
    // }

    return (
        <Column center>
            <div>
                {nft_uri_list.map((imgSrc: any, index: any) => (<img src={imgSrc} key={index}/>))}
            </div>
        </Column>
    );
};

export default AccountNFTs;
