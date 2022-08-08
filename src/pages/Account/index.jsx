// Libraries
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import UI
import { Button, Box, Text, Tag, Badge } from "@chakra-ui/react";

const Account = () => {
  // state
  const [balance, setBalance] = useState(undefined);
  const [address, setAddress] = useState(undefined);
  const [chainId, setChainID] = useState(undefined);
  const [chainAddress, setChainAddress] = useState(undefined);

  // toast
  const notify = () => toast("Wallet Address Copied !!!");

  // fetch data
  const fetchWalletData = async () => {
    /// web3 provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    // signing
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const balance = await signer.getBalance();
    const chainID = await signer.getChainId();
    setAddress(address);
    setBalance(ethers.utils.formatEther(balance));
    setChainID(chainID);
  };

  const copyToClipBoard = async (data) => {
    await navigator.clipboard.writeText(data);
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="Column"
        alignItems="center"
        justifyContent="flex-start"
        sx={{ width: "100%", height: "85vh" }}
      >
        {!address ? (
          <Box
            sx={{
              width: { sm: "95%", xs: "95%", md: "60%" },
              margin: "auto auto",
            }}
            className="shadow p-8"
          >
            <Button onClick={fetchWalletData}>Connect Wallet</Button>
          </Box>
        ) : (
          <>
            <ToastContainer />
            <Box
              sx={{
                width: { sm: "95%", xs: "95%", md: "60%" },
                margin: "auto auto",
              }}
              className="shadow p-8"
            >
              <Text>
                <Tag
                  size={{ sm: "sm", xs: "xs", md: "md" }}
                  variant="solid"
                  className="mr-5"
                  bgColor={"gray.500"}
                >
                  Wallet Address
                </Tag>
                {address}
                <Badge
                  className="ml-5 cursor-pointer"
                  bgColor="green.200"
                  onClick={() => {
                    copyToClipBoard(address);
                    notify();
                  }}
                >
                  Copy
                </Badge>
              </Text>

              {/* Balance */}
              <Text className="mt-4">
                <Tag
                  size={{ sm: "sm", xs: "xs", md: "md" }}
                  variant="solid"
                  className="mr-5"
                  bgColor={"green.500"}
                >
                  Wallet Balance
                </Tag>
                {balance} <Badge>ETH</Badge>
              </Text>

              {/* Chain ID */}
              <Text className="mt-4">
                <Tag
                  size={{ sm: "sm", xs: "xs", md: "md" }}
                  variant="solid"
                  className="mr-5"
                  bgColor={"yellow.500"}
                >
                  Chain ID
                </Tag>
                {chainId}
              </Text>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

export default Account;
