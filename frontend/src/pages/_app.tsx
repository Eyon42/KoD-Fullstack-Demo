import { type AppType } from "next/dist/shared/lib/utils";
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { hardhat } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
 
import "~/styles/globals.css";


const { chains, provider, webSocketProvider } = configureChains(
  [hardhat],
  [publicProvider()],
)

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return  <WagmiConfig client={client}>
    <Component {...pageProps} />;
    </WagmiConfig>
};

export default MyApp;
