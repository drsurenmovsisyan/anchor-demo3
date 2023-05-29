use anchor_lang::prelude::*;

declare_id!("BQmo3cEsGEzNHXCPKUqvtTkEH3Epz4Prq9LQQMVQHV8z");

#[program]
pub mod anchor_demo3 {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        ctx.accounts.counter.count = 0;
        Ok(())
    }

pub fn increment (ctx: Context<Increment>) -> Result<()> {
    ctx.accounts.counter.count += 1;
    Ok(())
}
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, 
        payer = payer, 
        space = 8 + 8, 
        seeds = [b"counter"], 
        bump
     )]
    pub counter: Account<'info, Counter>,
    #(account(mut))
    pub payer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Increment<'info> {
    #[account(seeds=[b"counter", bump, mut)]
    pub counter: Account<'info, Counter>,
    pub payer: Signer<'info>

}

#[account]
pub struct Counter {
    pub count: u8,
}