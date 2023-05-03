import React, { useEffect } from "react";
import { formatEther } from "ethers";
import cn from "classnames";

import Button from "react-bootstrap/Button";
import { Post } from "@/interfaces/post";
import useUserStore from "@/stores/user";

import s from "./HomePage.module.scss";

const HomePage: React.FunctionComponent<{ posts: Post[] }> = ({ posts }) => {
  const setUser = useUserStore(state => state.setUser);
  const user = useUserStore(state => state.user);

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
          balance: formatEther(result),
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
        {/* {posts?.map(post => (
          <div key={post.id} className={cn("col-2", s.post)}>
            <div>{post.title}</div>
            <hr />
            <div>{post.body}</div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default HomePage;
