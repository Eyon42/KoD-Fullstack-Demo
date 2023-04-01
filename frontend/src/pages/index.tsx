import { ethers } from "ethers";
import { type NextPage } from "next";
import Head from "next/head";
import { type FC, type ReactNode, useEffect, useState } from "react";
import { useAccount, useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import {
  usePrepareStorageStore,
  useStorageRead,
  useStorageWrite,
} from "../generated";

const NoSSR: FC<{ children: ReactNode }> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return <>{children}</>;
};

const Home: NextPage = () => {
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  const { data: storageData, refetch } = useStorageRead({
    address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    functionName: "retrieve",
  });

  const [newNumber, setNewNumber] = useState("");

  const { config } = usePrepareStorageStore({
    address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    args: [ethers.BigNumber.from(newNumber || "0")],
    enabled: !!newNumber,
  });
  console.log(config);
  const { write, isLoading } = useStorageWrite({
    async onSuccess() {
      await refetch();
    },
    ...config,
  });

  const { address, isConnected } = useAccount();
  return (
    <>
      <Head>
        <title>Fullstack Web3 DApp</title>
        <meta
          name="description"
          content="Fullstack Web3 Dapp built with hardhat, Next.js and wagmi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-primary">
        <h1 className="text-3xl font-bold text-white">Fullstack Web3 app</h1>
        <NoSSR>
          {isConnected ? (
            <div className="flex flex-col items-center justify-center gap-12">
              <div className="flex flex-col items-center justify-center gap-1">
                <p className="text-white">Connected to wallet</p>
                <p className="text-white">{address}</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <h2 className="text-xl font-bold text-white">
                  Storage contract
                </h2>
                <p className="text-white">Number: {storageData?.toString()}</p>
                <input
                  value={newNumber}
                  type="number"
                  onChange={(e) => setNewNumber(e.target.value || "")}
                ></input>
                <button
                  className="rounded-full bg-secondary px-4 py-2 font-bold text-white disabled:opacity-50"
                  onClick={() => write && write()}
                  disabled={!write}
                >
                  Set Number
                </button>
                {isLoading && <p>loading...</p>}
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-secondary px-4 py-2 font-bold text-white"
              onClick={() => connect()}
            >
              Conectar Wallet
            </button>
          )}
        </NoSSR>
      </main>
    </>
  );
};

export default Home;
