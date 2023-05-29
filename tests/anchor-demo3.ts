import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { AnchorDemo3 } from "../target/types/anchor_demo3";

describe("anchor-demo3", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.AnchorDemo3 as Program<AnchorDemo3>;


//   it("Is initialized!", async () => {
//    const[counterAddress] = await anchor.web3.PublicKey.findProgramAddressSync(
//       ["Buffer.from("counter")],
//      program.programId
//    )
    
//    const accounts = {
// counter:  counterAddress,
// payer: program.provider.publicKey,
// systemProgram: anchor.web3.SystemProgram.programId,
//    }
//     Add your test here.
//    const tx = await program.methods.initialize().accounts(accounts, ).rpc();
//    console.log("Your transaction signature", tx);

//    const counter = await program.account.counter.fetch(counterAddress)
//    expect(counter.count).to.equal(0)
//  });

it("Increments", async () => {
const[counterAddress] = await anchor.web3.PublicKey.findProgramAddressSync(
["Buffer.from("counter")],
program.programId
)
})
const originalCounter = await program.account.counter.fetch(counterAddress)

await program.methods
.increment()
.accounts({counter: counterAddress})
.rpc()

const counterAfterTx = await program.account.counter.fetch(counterAddress)

expect(counterAfterTx.count).to.equal(originalCounter.count + 1)
})


