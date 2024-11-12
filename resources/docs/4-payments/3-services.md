#meta-data title: Services, description: Access services associated with your payment needs.

## Services

Access services associated with your payment needs.

### Different Services Available

<div class="overview">
<a class="overview-card" href="#airtime">
    <div class="overview-card-title">
      <span class="material-symbols-outlined"> phone_in_talk </span>
      Airtime
    </div>
    <div class="overview-card-content">
     Easily top-up your mobile phone with airtime from your preferred network.
    </div>
  </a>
  <a class="overview-card" href="#internet">
    <div class="overview-card-title">
      <span class="material-symbols-outlined"> language </span>
      Internet
    </div>
    <div class="overview-card-content">
     Recharge your internet data for a faster and smoother browsing experience
    </div>
  </a>
   <a class="overview-card" href="#tv">
    <div class="overview-card-title">
      <span class="material-symbols-outlined"> tv </span>
      TV
    </div>
    <div class="overview-card-content">
     Top-up your TV subscription and continue enjoying your favorite channels
    </div>
  </a>
   <a class="overview-card" href="#utilities">
    <div class="overview-card-title">
      <span class="material-symbols-outlined"> power </span>
     Utitlities
    </div>
    <div class="overview-card-content">
     Pay for your essential utility services like electricity and water
    </div>
  </a>
</div>

### Airtime

To purchase airtime, make a `POST` request to the `/bw/buy-airtime` endpoint. Here is a sample request using axios:

```js
const response = axios.post(
  "<BASE_URL>/api/collection",
  {
    amount: 1, // The amount to be processed for the transaction
    network: "MTN", // The network provider for the transaction (e.g., "MTN", "Vodafone")
    ticket: "12342ff22355a434cf2fe45e3a736900", // Unique ticket ID gotten after verifying your pin
    account_id: 475178, // ID of the account being used for the transaction
    phone_number: "0554221525", // Phone number associated with the account for the top-up or transaction
  },
  {
    headers: {
      accept: "application/json",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,fr-FR;q=0.7,fr;q=0.6",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json",
      "sec-ch-ua":
        '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      Referer: "https://app.built.africa/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
  }
);
```

#### Sample Response Object

```json
{
  "code": "03",
  "msg": "Your current balance is insufficient to complete this transaction"
}
```

### Internet

To purchase internet, make a `POST` request to the `/bw/buy-bundle/:service`. Here is the list of services and their values:

- mtn_data - `mtn`
- mtn_fibre - `mtn-fibre`
- vodafone_bundle - `vodafone`
- vodafone_broadband - `vodafone-broadband`
- glo_data - `glo`

Here is a sample request payload:

```json
{
  "phone_number": "0554221525", // Phone number associated with the account for the transaction or service
  "bundleID": "MTNFB6GB25", // Unique identifier for the bundle or plan being used (e.g., "MTNFB6GB25" for a specific bundle)
  "account_id": 475178, // ID of the account being used for the transaction or service
  "ticket": "5c89190fb3df6e6bb5ebd2fa60b3ce2f" // Unique ticket ID after verifying your pin
}
```

To get a list of bundles for a specific service, make a `GET` request to the `/api/bw/services/bundles/:service-key`. Sample request using axios:

```js
const response = await axios.get("/api/bw/services/bundles/mtn_data");
```

#### Sample Response Object

```json
{
  "msg": "list of MTN bundles currently available",
  "system_code": "PS010",
  "code": "00",
  "data": {
    "list": [
      {
        "planName": "FixData",
        "content": [
          {
            "productID": "MTNDB1",
            "description": {
              "volume": "17.79MB",
              "name": "MTNDB1Plan",
              "validity": "N/A",
              "price": "0.50"
            }
          },
          {
            "productID": "MTNDB2",
            "description": {
              "volume": "35.57MB",
              "name": "MTNDB2Plan",
              "validity": "N/A",
              "price": "1.00"
            }
          },
          {
            "productID": "MTNDB3",
            "description": {
              "volume": "349.24MB",
              "name": "MTNDB3Plan",
              "validity": "N/A",
              "price": "3.00"
            }
          },
          {
            "productID": "MTNDB4",
            "description": {
              "volume": "718.91MB",
              "name": "MTNDB4Plan",
              "validity": "N/A",
              "price": "10.00"
            }
          },
          {
            "productID": "MTNDB5",
            "description": {
              "volume": "92.88GB",
              "name": "MTNDB5Plan",
              "validity": "N/A",
              "price": "350"
            }
          }
        ]
      },
      {
        "planName": "KOKROKOO",
        "content": [
          {
            "productID": "KOKROKOO",
            "description": {
              "volume": "400MB 5AM to 8AM Kokrokoo",
              "name": "KOKROKOOPlan",
              "validity": "N/A",
              "price": "1.24"
            }
          }
        ]
      },
      {
        "planName": "SocialMedia",
        "content": [
          {
            "productID": "MTNSMB1",
            "description": {
              "volume": "70.87MB",
              "name": "MTNSMB1Plan",
              "validity": "N/A",
              "price": "1.00"
            }
          },
          {
            "productID": "MTNSMB2",
            "description": {
              "volume": "354.36MB",
              "name": "MTNSMB2Plan",
              "validity": "N/A",
              "price": "5.00"
            }
          },
          {
            "productID": "MTNSMB3",
            "description": {
              "volume": "708.72MB",
              "name": "MTNSMB3Plan",
              "validity": "N/A",
              "price": "10.00"
            }
          }
        ]
      },
      {
        "planName": "Video",
        "content": [
          {
            "productID": "MTNVB1",
            "description": {
              "volume": "135.69MB",
              "name": "MTNVB1Plan",
              "validity": "N/A",
              "price": "1.00"
            }
          },
          {
            "productID": "MTNVB2",
            "description": {
              "volume": "678.43MB",
              "name": "MTNVB2Plan",
              "validity": "N/A",
              "price": "5.00"
            }
          },
          {
            "productID": "MTNVB3",
            "description": {
              "volume": "1356.85MB",
              "name": "MTNVB3Plan",
              "validity": "N/A",
              "price": "10.00"
            }
          }
        ]
      }
    ]
  }
}
```

#### Sample Response Object after Purchasing Internet

```json
{
  "code": "03",
  "msg": "Your current balance is insufficient to complete this transaction"
}
```

### TV

To pay for TV subscription, you neeed to get a list of all available tv services. Make a `GET` request to the `/bw/service/TV` to get a list of available services.

#### Sample Response Object

```json
[
  {
    "name": "DSTV",
    "logo": "/img/logos/dstv_logo.png",
    "key": "DSTV"
  },
  {
    "name": "GoTV",
    "logo": "/img/logos/gotv_logo.png",
    "key": "GoTV"
  },
  {
    "name": "StarTimes",
    "logo": "/img/logos/startimes_logo.png",
    "key": "StarTimes"
  }
]
```

<div class="info-card">
<span class="material-symbols-outlined">
info
</span>
When paying for subscription use the key of the service you want to purchase as the `service-key` in the request below. The key should be lowercased
</div>

#### Paying for TV subscription

To pay for a TV subscription, make a `POST` request to the `/bw/query-service/:service-key` endpoint. Here is the request payload

```json
{
  "account_number": "324545655453453" // The account number associated with your TV service for identification and billing
}
```

### Utilities

To pay for Utilities, you neeed to get a list of all available utitliy services. Make a `GET` request to the `/bw/service/Utilities` to get a list of available services.

#### Sample Response Object

```json
[
  {
    "name": "ECG",
    "logo": "/img/logos/ecg_logo.png",
    "key": "ECG"
  },
  {
    "name": "Ghana Water",
    "logo": "/img/logos/ghana_water_logo.png",
    "key": "Ghana_Water"
  }
]
```

<div class="info-card">
<span class="material-symbols-outlined">
info
</span>
When paying for subscription use the key of the service you want to purchase as the `service-key` in the request below. The key should be lowercased
</div>

#### Paying for Utilities

To pay for a TV subscription, make a `POST` request to the `/bw/query-service/:service-key` endpoint. Here is the request payload

```json
{
  "accountno": "324545655453453" // The account number associated with your Utitlity service for identification and billing
}
```
