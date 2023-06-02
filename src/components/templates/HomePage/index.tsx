import React, { useEffect, useState, ChangeEvent } from "react";
import * as ethers from "ethers";
import cn from "classnames";

import Button from "react-bootstrap/Button";
// import { Post } from "@/interfaces/post";
import useUserStore from "@/stores/user";
// Upload files to IPFS
import { useStorageUpload, MediaRenderer } from "@thirdweb-dev/react";
import { DataStore } from "aws-amplify";
import { IpfsStorage } from "@/models";

import s from "./HomePage.module.scss";

const HomePage: React.FunctionComponent = () => {
  const setUser = useUserStore(state => state.setUser);
  const user = useUserStore(state => state.user);

  // const [files, setFiles] = useState<File[]>([]);
  const [uris, setUris] = useState<string[]>([]);
  const [isUploading, setUploading] = useState<boolean>(false);
  const [yourListFiles, setYourListFiles] = useState<IpfsStorage[]>([]);

  const { mutateAsync: upload } = useStorageUpload();

  const uploadData = async ({ target }: ChangeEvent<HTMLInputElement>) => {
    setUploading(true);
    if (target.files && target.files?.length > 0) {
      // setFiles(target.files);
      let urls = [] as any[];
      for (let index = 0; index < target.files?.length; index++) {
        urls.push(upload({ data: [target.files[index]] }));
      }
      urls = await Promise.all(urls);
      // eslint-disable-next-line prefer-spread
      urls = [].concat.apply([], urls);
      setUris(urls);
      saveUpload(urls);
    }
    setUploading(false);
  };

  const saveUpload = async (urls: string[]) => {
    const modelFields = {
      address: user.address,
      origin_ipfs_url: urls?.[0],
      public_ipfs_url: `https://ipfs-2.thirdwebcdn.com/${urls?.[0]?.replace(
        "://",
        "/"
      )}`,
    };
    const abc = await DataStore.save(new IpfsStorage(modelFields));
    console.log("save file", abc);
  };

  const queryData = async () => {
    const record = await DataStore.query(IpfsStorage, c =>
      c.and(c => [c.address.eq(user.address)])
    );
    setYourListFiles(record);
    console.log("get list files", record);
  };

  const connectToWallet = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x1" }], // chainId must be in hexadecimal numbers
        });

        const addressList = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const result = await window.ethereum.request({
          method: "eth_getBalance",
          params: [addressList?.[0], "latest"],
        });
        setUser({
          isReady: true,
          address: addressList?.[0],
          balance: ethers.utils.formatEther(result),
        });
      } else {
        alert("install metamask extension!!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    connectToWallet();
  }, []);

  useEffect(() => {
    if (user.address) {
      queryData();
    }
  }, [user.address, uris]);

  return (
    <div className={cn("container", s.home)}>
      <div className="row">
        <h1>This is home page</h1>
        <div>
          <p>Address: {user.address}</p>
          <p>Balance: {user.balance} ETH</p>
        </div>
        {!user.isReady && (
          <div>
            <Button onClick={connectToWallet}>Connect to wallet</Button>
          </div>
        )}
        <div>
          <input
            type="file"
            multiple
            onChange={uploadData}
            disabled={isUploading}
          />
          <div className="media-uploaded">
            {uris?.length > 0 &&
              uris.map((url, index) => (
                <MediaRenderer key={`media-${index}`} src={url} />
              ))}
          </div>
        </div>
        {isUploading && <div>Loading...</div>}
        {/* {posts?.map(post => (
          <div key={post.id} className={cn("col-2", s.post)}>
            <div>{post.title}</div>
            <hr />
            <div>{post.body}</div>
          </div>
        ))} */}
      </div>
      <div className="row">
        <h1>Your list files</h1>
        <div>
          {yourListFiles?.length > 0 &&
            yourListFiles.map(item => (
              <MediaRenderer key={item.id} src={item.origin_ipfs_url} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
