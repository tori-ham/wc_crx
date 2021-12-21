import * as React from "react";
import Column from "./Column";

import Button from "../components/Button";
import styled from "styled-components";
import {fonts} from "../styles";

const DisplayButton = styled(Button as any)`
  border-radius: 8px;
  font-size: ${fonts.size.medium};
  height: 40px;
  width: 20%;
  margin: 12px 0;
`;

const DisplayGrid = styled.div`
    display: table; 
    width:100%;
`;
const DisplayCell = styled.div`
    display: table-cell; 
    vertical-align: middle;
`;

// import AssetRow from "./AssetRow";
// import { IAssetData } from "../helpers/types";
// import {apiNFTMetadata} from "../helpers/api";


// const toggleModal = () => {
//     window.webkit.messageHandlers.log.postMessage("submit");
// }


const AccountNFTs = (props: any) => {
    const {nft_uri_list} = props;
    console.log(nft_uri_list)
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
            <div >
                {nft_uri_list.map((imgSrc: any, index: any) => (
                    // <div display={"table"} width={"100%"}>
                    //     <div className="int-box">
                    <DisplayGrid>
                        <DisplayCell>
                            <p><img src={imgSrc} key={index} style={{ width: "50%", height: "50%" }}/></p>
                            <DisplayButton id="display-button" type="button" >Display</DisplayButton>
                        </DisplayCell>
                    </DisplayGrid>
                    )
                )}
            </div>
        </Column>
    );
};

export default AccountNFTs;
