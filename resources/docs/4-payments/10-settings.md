#meta-data title: Settings, description: How do i manage my wallet settings using Built APIs

## Settings

Manage your wallet settings with ease. You can update your wallet accounts, enhance security features, and modify your profile settings to suit your preferences.

### Various Settings

<div class="overview">
<a class="overview-card" href="#wallet-accounts">
    <div class="overview-card-title">
      <span class="material-symbols-outlined"> wallet </span>
      Wallet Accounts
    </div>
    <div class="overview-card-content">
     Configure the accounts associated with your wallet
    </div>
  </a>
  <a class="overview-card" href="#profile-settings">
    <div class="overview-card-title">
      <span class="material-symbols-outlined"> person </span>
      Profile Settings
    </div>
    <div class="overview-card-content">
     Manage your wallet information
    </div>
  </a>
   <a class="overview-card" href="#wallet-security">
    <div class="overview-card-title">
      <span class="material-symbols-outlined"> lock </span>
      Wallet Security
    </div>
    <div class="overview-card-content">
     Configure your wallet security
    </div>
  </a>
</div>

### Wallet Accounts

To get all wallet accounts, make a `GET` request to the `/bw/accounts` endpoint. Here is a sample response:

```json
{
  "id": 1, // Unique identifier for the wallet account
  "wallet_id": 1, // ID of the wallet associated with the accounts
  "telephone_account_id": 37, // ID of the telephone-related account
  "internet_account_id": 475178, // ID of the internet-related account
  "tv_account_id": 23968, // ID of the TV-related account
  "utility_account_id": 19727, // ID of the utility-related account
  "topup_account_id": 1083983, // ID of the top-up account for adding funds
  "withdraw_account_id": 23969, // ID of the account for withdrawal transactions
  "created_at": "2021-09-11T04:09:35.000000Z", // Date and time when the wallet account was created
  "updated_at": "2024-11-07T10:09:23.000000Z" // Date and time when the wallet account was last updated
}
```

### Profile Settings

To get your wallet information, make a `GET` request to the `/bw/wallet` endpoint. Here is a sample response object:

```json
{
  "status": true,
  "data": {
    "id": 1,
    "business_id": 1,
    "user_id": 1,
    "business_name": "FANBASE",
    "business_tin": "129300884",
    "first_name": "Katulie",
    "last_name": "Katulie",
    "birth_date": "1992-05-31",
    "phone_number": "0536474574",
    "email": "",
    "id_type": "passport",
    "id_number": "0012585888",
    "form_d": "",
    "form_b": "https://built-storage.ams3.digitaloceanspaces.com/1/files/yuuz9COtX3hny9w7UL2n6dG5YWK4ZZhoRPbkXoRK.png",
    "form_3": "https://built-storage.ams3.digitaloceanspaces.com/1/files/yuuz9COtX3hny9w7UL2n6dG5YWK4ZZhoRPbkXoRK.png",
    "form_21": "",
    "business_registered": true,
    "currency": "GHS",
    "number": "7978120001",
    "uuid": "91b4ee3e-4718-4ef7-aa97-f45c61a1ed3b",
    "status": "approved",
    "balance": 3427.55,
    "account_id": 123212,
    "deleted_at": null,
    "created_at": "2021-08-12T19:50:12.000000Z",
    "updated_at": "2024-07-19T16:43:15.000000Z",
    "account_number": "0536474574",
    "account_type": "mobilemoney",
    "code": "VODAFONE",
    "account_name": "YUSSIF DONGOBIE KATULIE",
    "gh_card_photo": null,
    "business_certificate_file": null,
    "mpr_customer_id": "81c54165-ed9c-48df-aad6-d00cda0bdb1b",
    "curacel_customer_ref": null,
    "available_balance": -3427.55,
    "settings": {
      "id": 1,
      "wallet_id": 1,
      "has_pin": true,
      "created_at": "2021-10-08T16:55:30.000000Z",
      "updated_at": "2021-10-08T16:57:01.000000Z",
      "start_require_pin": false
    }
  }
}
```

<div class="info-card">
<span class="material-symbols-outlined">
info
</span>
Once your wallet is approved, certain information will become unchangeable.
</div>

### Wallet Security

To change your wallet pin, make a `POST` request to the `/bw/changepin` endpoint. Here is a sample request using axios:

```js
const response = axios.post(
  "<BASE_URL>/bw/changepin",
  {
    pin: 0000, // The new PIN for the wallet account
    ticket: "cc037cc649c3ede37b3cd25253388157", // Unique ticket ID gotten after verifying your old pin
  },
  {
    headers: {
      accept: "application/json",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json",
    },
  }
);
```
