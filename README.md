# Fullstack web3 demo

This was made for a workshop in the King of Devs 2.0 Hackathon.

A video version of going through the setup and the code step by step can be found here
[![Video](https://img.youtube.com/vi/fhLlgfIrElI/maxresdefault.jpg)](https://www.youtube.com/live/fhLlgfIrElI?feature=share&t=13712)

# Final Result
A simple app that allows you to login with your browser wallet and interact with a simple Storage.sol contract.

![image](https://github.com/Eyon42/KoD-Fullstack-Demo/raw/main/Screenshot%202023-04-18%20at%2022.05.01.png)

# Setup Steps

> At the time of building this npm was broken with the wagmi cli so I used pnpm. Now I've submitted a PR that solved that so feel free to use npm

## Create Hardhat project

```bash
$ mkdir contracts
$ cd contracts
$ pnpm init
$ pnpm add --save-dev hardhat
$ pnpm hardhat
  > Select typescript
  > Install dependencies
```

## Write Contract

Replace default Lock Contract with Storage contract

```bash
$ pnpm hardhat compile
```
Editar el script de deploy

Iniciar el nodo de hardhat en otra consola
```
$ pnpm hardhat node
```
Nos va a tirar unas llaves privadas. Guardamos una de estas y la importamos en Metamask para poder usar desde la app frontend.

Hacer el deployment en red local:
```
$ pnpm hardhat compile
$ pnpm hardhat run scripts/deploy.ts --network localhost
```
Copiar el address del contrato (Usando plugins como hardhat deploy se puede automatizar este paso)

## Create React Project

```bash
$ mkdir frontend
$ cd frontend
$ pnpm init
$ pnpm add --save-dev create-t3-app
$ pnpm  create-t3-app
  > select "." as project folder
  > Select Tailwind, to make the demo pretty
  > Select overwrite directory
```

## Generate code for interacting with smart contracts

```bash
$ pnpm add --save-dev @wagmi/cli
$ pnpm add wagmi ethers@^5
$ pnpx wagmi init
```

Add hardhat and react plugins

Run the generate command 
```
$ pnpm wagmi generate
```

This generates a file with an abi for the contract and hooks using the abi. You migth want to add this file to your .gitignore and ignore it on your linter.

## Building the frontend APP

In `src/pages/app.tsx` add chain config, client and wrap the app in a Wagmi Client as [the guide here shows](https://wagmi.sh/react/getting-started)

Go to `src/pages/index.tsx` and delete the page content.
Add the code to connect to the wallet
