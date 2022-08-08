// Libraries
import { useState, useEffect } from "react";
import { ethers } from "ethers";

const Account = () => {
  // state
  const [balance, setBalance] = useState(undefined);
  const [address, setAddress] = useState(undefined);
  const [chainId, setChainID] = useState(undefined);
  const [chainAddress, setChainAddress] = useState(undefined);

  // useEffect
  useEffect(() => {}, []);

  return <div>Account</div>;
};

export default Account;
