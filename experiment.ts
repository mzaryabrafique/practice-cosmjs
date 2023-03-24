import { IndexedTx, StargateClient } from "@cosmjs/stargate"

const rpc = "rpc.sentry-01.theta-testnet.polypore.xyz:26657";

const runAll = async(): Promise<void> => {
    const client = await StargateClient.connect(rpc);

    console.log("With client, chain id:", await client.getChainId(), ", height:", await client.getHeight())
    
    // get All Balances
    console.log(
        "Alice balances:",
        await client.getAllBalances("cosmos1gd3lmm3p3rv2g5nuvz7vxpcmemuc4czwjrs5hp"), // <-- replace with your generated address
    )

    // Get the faucet address
    const faucetTx: IndexedTx = (await client.getTx(
        "43164308B48F1939D882FD23A7230A988AE36C752F29D4739DE394E9D198D547",
    ))!

    console.log("Faucet Tx:", faucetTx)
}

runAll()