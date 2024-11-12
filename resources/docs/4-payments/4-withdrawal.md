#meta-data title: Withdrawal, description: How can you make withdrawals using Built APIs

## Withdrawals

Process withdrawals to external accounts efficiently.

### Make a Withdrawal

To make a Withdrawal, make a `POST` request to the `/bw/withdraw` endpoint. Here is what the payload looks like

```json
{
  "amount": 1, // The amount to be withdrawn
  "account_id": 23969, // ID of the account from which the withdrawal is being made
  "ticket": "6ae34f73bbef1ac3bc973f72e8eae07c" // Unique ticket ID after verifying your pin
```
