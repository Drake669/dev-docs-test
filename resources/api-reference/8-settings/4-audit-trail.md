#meta-data title: Audit Trail

## Audit Trail

### Get User Actions

<div class="api-content">

<div class="table-content no-scrollbar">

#### Headers

<table>
  <tbody>
<tr>
                <td style="text-align:left">Authorization
                  <div class="table-description">string</div>
                </td>
                <td style="text-align:left">Set value to <code>Bearer SECRET_KEY</code></td>
              </tr>  </tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/user-actions",
  headers: {
    Authorization: "Bearer {{token}}",
  },
})
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

```go
package main

import (
    "bytes"
    "fmt"
    "io/ioutil"
    "net/http"
)

func main() {
    client := &http.Client{}

    req, err := http.NewRequest("GET", "/api/v3/user-actions", nil)
    if err != nil {
        fmt.Println(err)
        return
    }
    req.Header = map[string][]string{
        "Authorization": {"Bearer {{token}}"}
    }
    resp, err := client.Do(req)
    if err != nil {
        fmt.Println(err)
        return
    }
    defer resp.Body.Close()

    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println(string(body))
}
```

```php
<?php

require 'vendor/autoload.php';

use GuzzleHttpClient;

$client = new Client();

try {
    $response = $client->request("GET", "/api/v3/user-actions", [
        'headers' => [
            "Authorization" => "Bearer {{token}}"
        ],


    ]);

    echo $response->getBody();
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>
```

```json
[
  {
    "name": "200 Success",
    "body": {
      "current_page": 1,
      "data": [
        {
          "id": 13884,
          "user_id": 31,
          "business_id": 57,
          "action": "Created account (Covid tax)",
          "created_at": "2024-11-26T20:01:09.000000Z",
          "updated_at": "2024-11-26T20:01:09.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13882,
          "user_id": 31,
          "business_id": 57,
          "action": "Created account (Covid tax)",
          "created_at": "2024-11-26T19:08:01.000000Z",
          "updated_at": "2024-11-26T19:08:01.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13881,
          "user_id": 31,
          "business_id": 57,
          "action": "Created account (dads)",
          "created_at": "2024-11-26T19:06:02.000000Z",
          "updated_at": "2024-11-26T19:06:02.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13880,
          "user_id": 31,
          "business_id": 57,
          "action": "Created account (some tax1)",
          "created_at": "2024-11-26T18:11:19.000000Z",
          "updated_at": "2024-11-26T18:11:19.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13879,
          "user_id": 31,
          "business_id": 57,
          "action": "Created account (some tax)",
          "created_at": "2024-11-26T18:11:00.000000Z",
          "updated_at": "2024-11-26T18:11:00.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13878,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited quick sale <a target='_blank' class='m-2' small href='/sales/126'>CAS7</a>",
          "created_at": "2024-11-26T16:59:42.000000Z",
          "updated_at": "2024-11-26T16:59:42.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13877,
          "user_id": 31,
          "business_id": 57,
          "action": "Created quick sale <a target='_blank' class='m-2' small href='/sales/126'>CAS7</a>",
          "created_at": "2024-11-26T16:59:32.000000Z",
          "updated_at": "2024-11-26T16:59:32.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13876,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited Invoice <a target='_blank' class='m-2' small href='/invoices/3644'>INV49</a>",
          "created_at": "2024-11-26T16:50:59.000000Z",
          "updated_at": "2024-11-26T16:50:59.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13875,
          "user_id": 31,
          "business_id": 57,
          "action": "Created invoice <a target='_blank' class='m-2' small href='/invoices/3644'>INV49</a>",
          "created_at": "2024-11-26T16:50:52.000000Z",
          "updated_at": "2024-11-26T16:50:52.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13874,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited product/service (Books) to ",
          "created_at": "2024-11-26T12:42:22.000000Z",
          "updated_at": "2024-11-26T12:42:22.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13873,
          "user_id": 31,
          "business_id": 57,
          "action": "Created bill <a target='_blank' class='m-2' small href='/expenses/bills/210'>BILL7</a>",
          "created_at": "2024-11-26T12:42:22.000000Z",
          "updated_at": "2024-11-26T12:42:22.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13872,
          "user_id": 31,
          "business_id": 57,
          "action": "Created quote <a target='_blank' class='m-2' small href='/invoices/quote/73'>QTE16</a>",
          "created_at": "2024-11-21T19:49:13.000000Z",
          "updated_at": "2024-11-21T19:49:13.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13871,
          "user_id": 31,
          "business_id": 57,
          "action": "Deleted quote <a target='_blank' class='m-2' small href='/invoices/quote/71'>QTE14</a>",
          "created_at": "2024-11-21T18:58:38.000000Z",
          "updated_at": "2024-11-21T18:58:38.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13870,
          "user_id": 31,
          "business_id": 57,
          "action": "Created quote <a target='_blank' class='m-2' small href='/invoices/quote/72'>QTE15</a>",
          "created_at": "2024-11-21T18:49:36.000000Z",
          "updated_at": "2024-11-21T18:49:36.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13869,
          "user_id": 31,
          "business_id": 57,
          "action": "Created quote <a target='_blank' class='m-2' small href='/invoices/quote/71'>QTE14</a>",
          "created_at": "2024-11-21T18:39:52.000000Z",
          "updated_at": "2024-11-21T18:39:52.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13864,
          "user_id": 31,
          "business_id": 57,
          "action": "Created quote <a target='_blank' class='m-2' small href='/invoices/quote/66'>QTE9</a>",
          "created_at": "2024-11-21T18:39:15.000000Z",
          "updated_at": "2024-11-21T18:39:15.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13863,
          "user_id": 31,
          "business_id": 57,
          "action": "Created quote <a target='_blank' class='m-2' small href='/invoices/quote/65'>QTE8</a>",
          "created_at": "2024-11-21T18:37:07.000000Z",
          "updated_at": "2024-11-21T18:37:07.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13862,
          "user_id": 31,
          "business_id": 57,
          "action": "Created quote <a target='_blank' class='m-2' small href='/invoices/quote/64'>QTE7</a>",
          "created_at": "2024-11-21T18:36:26.000000Z",
          "updated_at": "2024-11-21T18:36:26.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13861,
          "user_id": 31,
          "business_id": 57,
          "action": "Created quote <a target='_blank' class='m-2' small href='/invoices/quote/63'>QTE6</a>",
          "created_at": "2024-11-21T18:35:45.000000Z",
          "updated_at": "2024-11-21T18:35:45.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13856,
          "user_id": 31,
          "business_id": 57,
          "action": "Created deposit with amount 10<a target='_blank' class='m-2' href='/customers/4341?tab=tab-deposits'>10.00</a>",
          "created_at": "2024-11-21T18:16:40.000000Z",
          "updated_at": "2024-11-21T18:16:40.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13855,
          "user_id": 31,
          "business_id": 57,
          "action": "Created account (Someone Somewhere prepayments/credits)",
          "created_at": "2024-11-21T18:16:40.000000Z",
          "updated_at": "2024-11-21T18:16:40.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13854,
          "user_id": 31,
          "business_id": 57,
          "action": "Created order <a target='_blank' class='m-2' small href='/orders/32'>9d8aa97f-2bfb-4cf7-9d80-f558ed2656a6</a>",
          "created_at": "2024-11-21T11:32:27.000000Z",
          "updated_at": "2024-11-21T11:32:27.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13853,
          "user_id": 31,
          "business_id": 57,
          "action": "Created order <a target='_blank' class='m-2' small href='/orders/31'>9d8aa334-33cd-4176-b864-54ff157cc6b4</a>",
          "created_at": "2024-11-21T11:14:51.000000Z",
          "updated_at": "2024-11-21T11:14:51.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13852,
          "user_id": 31,
          "business_id": 57,
          "action": "Created order <a target='_blank' class='m-2' small href='/orders/30'>9d8a9ee6-f77c-467d-8a79-d11ea37b8982</a>",
          "created_at": "2024-11-21T11:02:49.000000Z",
          "updated_at": "2024-11-21T11:02:49.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13851,
          "user_id": 31,
          "business_id": 57,
          "action": "Deleted quick sale <a target='_blank' class='m-2' small href='/sales/125'>CAS6</a>",
          "created_at": "2024-11-21T10:22:45.000000Z",
          "updated_at": "2024-11-21T10:22:45.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13850,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited quick sale <a target='_blank' class='m-2' small href='/sales/125'>CAS6</a>",
          "created_at": "2024-11-21T10:18:58.000000Z",
          "updated_at": "2024-11-21T10:18:58.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13849,
          "user_id": 31,
          "business_id": 57,
          "action": "Created quick sale <a target='_blank' class='m-2' small href='/sales/125'>CAS6</a>",
          "created_at": "2024-11-21T09:47:57.000000Z",
          "updated_at": "2024-11-21T09:47:57.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13844,
          "user_id": 31,
          "business_id": 57,
          "action": "Created quick sale <a target='_blank' class='m-2' small href='/sales/120'>CAS5</a>",
          "created_at": "2024-11-21T09:29:43.000000Z",
          "updated_at": "2024-11-21T09:29:43.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13843,
          "user_id": 31,
          "business_id": 57,
          "action": "Created quick sale <a target='_blank' class='m-2' small href='/sales/119'>CAS4</a>",
          "created_at": "2024-11-20T16:58:54.000000Z",
          "updated_at": "2024-11-20T16:58:54.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13842,
          "user_id": 31,
          "business_id": 57,
          "action": "Added a payment of GHS12.00 to invoice  <a target='_blank' class='m-2' small href='/invoices/3643'>INV49</a>",
          "created_at": "2024-11-20T12:32:52.000000Z",
          "updated_at": "2024-11-20T12:32:52.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13841,
          "user_id": 31,
          "business_id": 57,
          "action": "Removed a payment of GHS12 from invoice <a target='_blank' class='m-2' small href='/invoices/3643'>INV49</a>",
          "created_at": "2024-11-20T12:32:15.000000Z",
          "updated_at": "2024-11-20T12:32:15.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13840,
          "user_id": 31,
          "business_id": 57,
          "action": "Removed a payment of GHS12 from invoice  <a target='_blank' class='m-2' small href='/invoices/3643'>INV49</a>",
          "created_at": "2024-11-20T12:32:15.000000Z",
          "updated_at": "2024-11-20T12:32:15.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13839,
          "user_id": 31,
          "business_id": 57,
          "action": "Added a payment of GHS12.00 to invoice  <a target='_blank' class='m-2' small href='/invoices/3643'>INV49</a>",
          "created_at": "2024-11-20T12:21:13.000000Z",
          "updated_at": "2024-11-20T12:21:13.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13838,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited product/service (Books) to ",
          "created_at": "2024-11-20T11:44:33.000000Z",
          "updated_at": "2024-11-20T11:44:33.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13837,
          "user_id": 31,
          "business_id": 57,
          "action": "Created invoice <a target='_blank' class='m-2' small href='/invoices/3641'>INV48</a>",
          "created_at": "2024-11-20T11:43:19.000000Z",
          "updated_at": "2024-11-20T11:43:19.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13836,
          "user_id": 31,
          "business_id": 57,
          "action": "Deleted invoice <a target='_blank' class='m-2' small href='/invoices/3588'>INV6</a>",
          "created_at": "2024-11-20T11:36:55.000000Z",
          "updated_at": "2024-11-20T11:36:55.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13835,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited Invoice <a target='_blank' class='m-2' small href='/invoices/3588'>INV6</a>",
          "created_at": "2024-11-20T11:32:58.000000Z",
          "updated_at": "2024-11-20T11:32:58.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13834,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited Invoice <a target='_blank' class='m-2' small href='/invoices/3588'>INV6</a>",
          "created_at": "2024-11-20T11:25:28.000000Z",
          "updated_at": "2024-11-20T11:25:28.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13833,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited Invoice <a target='_blank' class='m-2' small href='/invoices/3588'>INV6</a>",
          "created_at": "2024-11-20T11:11:13.000000Z",
          "updated_at": "2024-11-20T11:11:13.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13832,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited Invoice <a target='_blank' class='m-2' small href='/invoices/3'>INV2</a>",
          "created_at": "2024-11-20T11:07:46.000000Z",
          "updated_at": "2024-11-20T11:07:46.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13831,
          "user_id": 31,
          "business_id": 57,
          "action": "Created invoice <a target='_blank' class='m-2' small href='/invoices/3639'>INV47</a>",
          "created_at": "2024-11-20T10:55:39.000000Z",
          "updated_at": "2024-11-20T10:55:39.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13830,
          "user_id": 31,
          "business_id": 57,
          "action": "Created invoice <a target='_blank' class='m-2' small href='/invoices/3638'>INV46</a>",
          "created_at": "2024-11-20T10:54:02.000000Z",
          "updated_at": "2024-11-20T10:54:02.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13829,
          "user_id": 31,
          "business_id": 57,
          "action": "Created invoice <a target='_blank' class='m-2' small href='/invoices/3637'>INV45</a>",
          "created_at": "2024-11-20T10:31:53.000000Z",
          "updated_at": "2024-11-20T10:31:53.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13828,
          "user_id": 31,
          "business_id": 57,
          "action": "Created order <a target='_blank' class='m-2' small href='/orders/29'>9d86ecc9-6a78-4b50-ab2b-9cfcfbe999bc</a>",
          "created_at": "2024-11-19T14:57:18.000000Z",
          "updated_at": "2024-11-19T14:57:18.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13827,
          "user_id": 31,
          "business_id": 57,
          "action": "Created order <a target='_blank' class='m-2' small href='/orders/28'>9d86ec54-6ec4-48d1-92b4-b367d4c02b09</a>",
          "created_at": "2024-11-19T14:56:01.000000Z",
          "updated_at": "2024-11-19T14:56:01.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13824,
          "user_id": 31,
          "business_id": 57,
          "action": "Created order <a target='_blank' class='m-2' small href='/orders/25'>9d86eae9-a4d4-4439-96b6-9fe33cb9e737</a>",
          "created_at": "2024-11-19T14:52:03.000000Z",
          "updated_at": "2024-11-19T14:52:03.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13823,
          "user_id": 31,
          "business_id": 57,
          "action": "Created order <a target='_blank' class='m-2' small href='/orders/24'>9d86ea64-ffcb-495c-bd89-f882ceac252c</a>",
          "created_at": "2024-11-19T14:50:36.000000Z",
          "updated_at": "2024-11-19T14:50:36.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13822,
          "user_id": 31,
          "business_id": 57,
          "action": "Created order <a target='_blank' class='m-2' small href='/orders/23'>9d86ea23-5327-4dbb-86d7-4c8977805aa5</a>",
          "created_at": "2024-11-19T14:49:53.000000Z",
          "updated_at": "2024-11-19T14:49:53.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13821,
          "user_id": 31,
          "business_id": 57,
          "action": "Created order <a target='_blank' class='m-2' small href='/orders/22'>9d86ea16-890f-484f-b4e8-743550cad5e2</a>",
          "created_at": "2024-11-19T14:49:45.000000Z",
          "updated_at": "2024-11-19T14:49:45.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13820,
          "user_id": 31,
          "business_id": 57,
          "action": "Created order <a target='_blank' class='m-2' small href='/orders/21'>9d86c7d3-96ff-48d3-935e-e13c6139431b</a>",
          "created_at": "2024-11-19T13:13:57.000000Z",
          "updated_at": "2024-11-19T13:13:57.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13819,
          "user_id": 31,
          "business_id": 57,
          "action": "Created order <a target='_blank' class='m-2' small href='/orders/20'>9d86c577-4baa-43f6-a9ae-cbe519beb13f</a>",
          "created_at": "2024-11-19T13:07:21.000000Z",
          "updated_at": "2024-11-19T13:07:21.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13818,
          "user_id": 31,
          "business_id": 57,
          "action": "Created order <a target='_blank' class='m-2' small href='/orders/19'>9d86c3bb-647f-48f4-a8aa-f46c9403ac42</a>",
          "created_at": "2024-11-19T13:02:30.000000Z",
          "updated_at": "2024-11-19T13:02:30.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13817,
          "user_id": 31,
          "business_id": 57,
          "action": "Created order <a target='_blank' class='m-2' small href='/orders/18'>9d86c39c-8a94-4de2-97e0-d70d3cb80a5f</a>",
          "created_at": "2024-11-19T13:02:09.000000Z",
          "updated_at": "2024-11-19T13:02:09.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13816,
          "user_id": 31,
          "business_id": 57,
          "action": "Created order <a target='_blank' class='m-2' small href='/orders/17'>9d86c199-213d-4b14-b16e-514612eaa015</a>",
          "created_at": "2024-11-19T12:56:32.000000Z",
          "updated_at": "2024-11-19T12:56:32.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13656,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited account (Some name)",
          "created_at": "2024-11-06T11:45:42.000000Z",
          "updated_at": "2024-11-06T11:45:42.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13655,
          "user_id": 31,
          "business_id": 57,
          "action": "Created account (Some name)",
          "created_at": "2024-11-06T11:44:28.000000Z",
          "updated_at": "2024-11-06T11:44:28.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13610,
          "user_id": 31,
          "business_id": 57,
          "action": "Created order <a target='_blank' class='m-2' small href='/orders/16'>9d5bf59d-3a4e-48c1-b50e-1849b051c193</a>",
          "created_at": "2024-10-29T06:21:23.000000Z",
          "updated_at": "2024-10-29T06:21:23.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13609,
          "user_id": 31,
          "business_id": 57,
          "action": "Created payrun<a target='_blank' class='m-2' small href='/payroll/payrun/27'>2024-10-28 00:00:00</a>",
          "created_at": "2024-10-28T12:01:45.000000Z",
          "updated_at": "2024-10-28T12:01:45.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13608,
          "user_id": 31,
          "business_id": 57,
          "action": "Created payrun<a target='_blank' class='m-2' small href='/payroll/payrun/27'>2024-10-28 00:00:00</a>",
          "created_at": "2024-10-28T12:01:45.000000Z",
          "updated_at": "2024-10-28T12:01:45.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13607,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited employee<a target='_blank' class='m-2' small href='/payroll/employee/18'>Manuel Amponsah</a>",
          "created_at": "2024-10-28T12:01:38.000000Z",
          "updated_at": "2024-10-28T12:01:38.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13606,
          "user_id": 31,
          "business_id": 57,
          "action": "Created payrun<a target='_blank' class='m-2' small href='/payroll/payrun/26'>2024-10-28 00:00:00</a>",
          "created_at": "2024-10-28T12:01:14.000000Z",
          "updated_at": "2024-10-28T12:01:14.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13605,
          "user_id": 31,
          "business_id": 57,
          "action": "Created payrun<a target='_blank' class='m-2' small href='/payroll/payrun/26'>2024-10-28 00:00:00</a>",
          "created_at": "2024-10-28T12:01:14.000000Z",
          "updated_at": "2024-10-28T12:01:14.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13604,
          "user_id": 31,
          "business_id": 57,
          "action": "Created payrun<a target='_blank' class='m-2' small href='/payroll/payrun/25'>2024-10-28 00:00:00</a>",
          "created_at": "2024-10-28T12:00:35.000000Z",
          "updated_at": "2024-10-28T12:00:35.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13603,
          "user_id": 31,
          "business_id": 57,
          "action": "Created payrun<a target='_blank' class='m-2' small href='/payroll/payrun/25'>2024-10-28 00:00:00</a>",
          "created_at": "2024-10-28T12:00:35.000000Z",
          "updated_at": "2024-10-28T12:00:35.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13602,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited employee<a target='_blank' class='m-2' small href='/payroll/employee/18'>Manuel Amponsah</a>",
          "created_at": "2024-10-28T12:00:26.000000Z",
          "updated_at": "2024-10-28T12:00:26.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13601,
          "user_id": 31,
          "business_id": 57,
          "action": "Deleted employee<a target='_blank' class='m-2' small href='/payroll/employee/20'>Ama Joseph</a>",
          "created_at": "2024-10-28T11:59:53.000000Z",
          "updated_at": "2024-10-28T11:59:53.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13600,
          "user_id": 31,
          "business_id": 57,
          "action": "Deleted employee<a target='_blank' class='m-2' small href='/payroll/employee/19'>Ama Joseph</a>",
          "created_at": "2024-10-28T11:59:49.000000Z",
          "updated_at": "2024-10-28T11:59:49.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13599,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited employee<a target='_blank' class='m-2' small href='/payroll/employee/19'>Ama Joseph</a>",
          "created_at": "2024-10-28T11:58:45.000000Z",
          "updated_at": "2024-10-28T11:58:45.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13598,
          "user_id": 31,
          "business_id": 57,
          "action": "Removed a payment of GHS250 from invoice <a target='_blank' class='m-2' small href='/invoices/3636'>INV44</a>",
          "created_at": "2024-10-25T12:40:59.000000Z",
          "updated_at": "2024-10-25T12:40:59.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13597,
          "user_id": 31,
          "business_id": 57,
          "action": "Removed a payment of GHS250 from invoice  <a target='_blank' class='m-2' small href='/invoices/3636'>INV44</a>",
          "created_at": "2024-10-25T12:40:59.000000Z",
          "updated_at": "2024-10-25T12:40:59.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13596,
          "user_id": 31,
          "business_id": 57,
          "action": "Added a payment of GHS249.89 to invoice  <a target='_blank' class='m-2' small href='/invoices/3636'>INV44</a>",
          "created_at": "2024-10-25T12:36:58.000000Z",
          "updated_at": "2024-10-25T12:36:58.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13595,
          "user_id": 31,
          "business_id": 57,
          "action": "Created invoice <a target='_blank' class='m-2' small href='/invoices/3636'>INV44</a>",
          "created_at": "2024-10-25T12:35:23.000000Z",
          "updated_at": "2024-10-25T12:35:23.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13594,
          "user_id": 31,
          "business_id": 57,
          "action": "Created order <a target='_blank' class='m-2' small href='/orders/15'>9d505ec0-588a-4e85-b654-16ddbcfce181</a>",
          "created_at": "2024-10-23T12:05:26.000000Z",
          "updated_at": "2024-10-23T12:05:26.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13592,
          "user_id": 31,
          "business_id": 57,
          "action": "Removed a payment of GHS50 from invoice <a target='_blank' class='m-2' small href='/invoices/3635'>INV43</a>",
          "created_at": "2024-10-23T09:44:14.000000Z",
          "updated_at": "2024-10-23T09:44:14.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13591,
          "user_id": 31,
          "business_id": 57,
          "action": "Removed a payment of GHS50 from invoice  <a target='_blank' class='m-2' small href='/invoices/3635'>INV43</a>",
          "created_at": "2024-10-23T09:44:14.000000Z",
          "updated_at": "2024-10-23T09:44:14.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13590,
          "user_id": 31,
          "business_id": 57,
          "action": "Added a payment of GHS50.00 to invoice  <a target='_blank' class='m-2' small href='/invoices/3635'>INV43</a>",
          "created_at": "2024-10-23T09:38:06.000000Z",
          "updated_at": "2024-10-23T09:38:06.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13589,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited product/service (Sweets) to ",
          "created_at": "2024-10-22T10:52:16.000000Z",
          "updated_at": "2024-10-22T10:52:16.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13588,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited product/service (Books) to ",
          "created_at": "2024-10-22T10:52:16.000000Z",
          "updated_at": "2024-10-22T10:52:16.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13587,
          "user_id": 31,
          "business_id": 57,
          "action": "Created bill <a target='_blank' class='m-2' small href='/expenses/bills/209'>BILL6</a>",
          "created_at": "2024-10-22T10:52:16.000000Z",
          "updated_at": "2024-10-22T10:52:16.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13586,
          "user_id": 31,
          "business_id": 57,
          "action": "Deleted bill <a target='_blank' class='m-2' small href='/expenses/bills/208'>BILL6</a>",
          "created_at": "2024-10-22T10:52:16.000000Z",
          "updated_at": "2024-10-22T10:52:16.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13585,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited product/service (Books) to ",
          "created_at": "2024-10-22T10:52:16.000000Z",
          "updated_at": "2024-10-22T10:52:16.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13584,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited product/service (Books) to ",
          "created_at": "2024-10-22T10:49:21.000000Z",
          "updated_at": "2024-10-22T10:49:21.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13583,
          "user_id": 31,
          "business_id": 57,
          "action": "Created bill <a target='_blank' class='m-2' small href='/expenses/bills/208'>BILL6</a>",
          "created_at": "2024-10-22T10:49:21.000000Z",
          "updated_at": "2024-10-22T10:49:21.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13582,
          "user_id": 31,
          "business_id": 57,
          "action": "Deleted bill <a target='_blank' class='m-2' small href='/expenses/bills/207'>BILL6</a>",
          "created_at": "2024-10-22T10:49:21.000000Z",
          "updated_at": "2024-10-22T10:49:21.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13581,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited product/service (Sweets) to ",
          "created_at": "2024-10-22T10:49:21.000000Z",
          "updated_at": "2024-10-22T10:49:21.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13580,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited product/service (Books) to ",
          "created_at": "2024-10-22T10:49:21.000000Z",
          "updated_at": "2024-10-22T10:49:21.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13579,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited product/service (Sweets) to ",
          "created_at": "2024-10-22T10:29:37.000000Z",
          "updated_at": "2024-10-22T10:29:37.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13578,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited product/service (Books) to ",
          "created_at": "2024-10-22T10:29:37.000000Z",
          "updated_at": "2024-10-22T10:29:37.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13577,
          "user_id": 31,
          "business_id": 57,
          "action": "Created bill <a target='_blank' class='m-2' small href='/expenses/bills/207'>BILL6</a>",
          "created_at": "2024-10-22T10:29:37.000000Z",
          "updated_at": "2024-10-22T10:29:37.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13576,
          "user_id": 31,
          "business_id": 57,
          "action": "Deleted bill <a target='_blank' class='m-2' small href='/expenses/bills/206'>BILL6</a>",
          "created_at": "2024-10-22T10:29:37.000000Z",
          "updated_at": "2024-10-22T10:29:37.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13575,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited product/service (Books) to ",
          "created_at": "2024-10-22T10:29:37.000000Z",
          "updated_at": "2024-10-22T10:29:37.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13574,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited product/service (Books) to ",
          "created_at": "2024-10-22T10:19:57.000000Z",
          "updated_at": "2024-10-22T10:19:57.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13573,
          "user_id": 31,
          "business_id": 57,
          "action": "Created bill <a target='_blank' class='m-2' small href='/expenses/bills/206'>BILL6</a>",
          "created_at": "2024-10-22T10:19:57.000000Z",
          "updated_at": "2024-10-22T10:19:57.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13572,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited product/service (Books) to ",
          "created_at": "2024-10-21T18:11:02.000000Z",
          "updated_at": "2024-10-21T18:11:02.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13571,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited product/service (Books) to ",
          "created_at": "2024-10-21T18:10:56.000000Z",
          "updated_at": "2024-10-21T18:10:56.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13570,
          "user_id": 31,
          "business_id": 57,
          "action": "Edited account ((Payable))",
          "created_at": "2024-10-21T17:12:49.000000Z",
          "updated_at": "2024-10-21T17:12:49.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13569,
          "user_id": 31,
          "business_id": 57,
          "action": "Created account (some name(Payable))",
          "created_at": "2024-10-21T17:02:37.000000Z",
          "updated_at": "2024-10-21T17:02:37.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13568,
          "user_id": 31,
          "business_id": 57,
          "action": "Created invoice <a target='_blank' class='m-2' small href='/invoices/3635'>INV43</a>",
          "created_at": "2024-10-21T15:30:33.000000Z",
          "updated_at": "2024-10-21T15:30:33.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13567,
          "user_id": 31,
          "business_id": 57,
          "action": "Created account (Dummy(Receivable))",
          "created_at": "2024-10-21T11:43:33.000000Z",
          "updated_at": "2024-10-21T11:43:33.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        },
        {
          "id": 13566,
          "user_id": 31,
          "business_id": 57,
          "action": "Added a payment of GHS249.89 to invoice  <a target='_blank' class='m-2' small href='/invoices/3631'>INV40</a>",
          "created_at": "2024-10-15T21:43:58.000000Z",
          "updated_at": "2024-10-15T21:43:58.000000Z",
          "user": {
            "id": 31,
            "first_name": "Someone",
            "last_name": "Somewhere",
            "photo": null
          }
        }
      ],
      "first_page_url": "http://built.test/api/v3/user-actions?page=1",
      "from": 1,
      "last_page": 3,
      "last_page_url": "http://built.test/api/v3/user-actions?page=3",
      "links": [
        {
          "url": null,
          "label": "&laquo; Previous",
          "active": false
        },
        {
          "url": "http://built.test/api/v3/user-actions?page=1",
          "label": "1",
          "active": true
        },
        {
          "url": "http://built.test/api/v3/user-actions?page=2",
          "label": "2",
          "active": false
        },
        {
          "url": "http://built.test/api/v3/user-actions?page=3",
          "label": "3",
          "active": false
        },
        {
          "url": "http://built.test/api/v3/user-actions?page=2",
          "label": "Next &raquo;",
          "active": false
        }
      ],
      "next_page_url": "http://built.test/api/v3/user-actions?page=2",
      "path": "http://built.test/api/v3/user-actions",
      "per_page": 100,
      "prev_page_url": null,
      "to": 100,
      "total": 231
    }
  }
]
```

</div>

</div>

### Filter User Actions

<div class="api-content">

<div class="table-content no-scrollbar">

#### Headers

<table>
  <tbody>
<tr>
                <td style="text-align:left">Authorization
                  <div class="table-description">string</div>
                </td>
                <td style="text-align:left">Set value to <code>Bearer SECRET_KEY</code></td>
              </tr>  </tbody>
</table>

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">from
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The start date
            </td>
        </tr><tr>
          <td style="text-align:left">to
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The end date
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/user-actions/filter/:from/:to",
  headers: {
    Authorization: "Bearer {{token}}",
  },
})
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

```go
package main

import (
    "bytes"
    "fmt"
    "io/ioutil"
    "net/http"
)

func main() {
    client := &http.Client{}

    req, err := http.NewRequest("GET", "/api/v3/user-actions/filter/:from/:to", nil)
    if err != nil {
        fmt.Println(err)
        return
    }
    req.Header = map[string][]string{
        "Authorization": {"Bearer {{token}}"}
    }
    resp, err := client.Do(req)
    if err != nil {
        fmt.Println(err)
        return
    }
    defer resp.Body.Close()

    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println(string(body))
}
```

```php
<?php

require 'vendor/autoload.php';

use GuzzleHttpClient;

$client = new Client();

try {
    $response = $client->request("GET", "/api/v3/user-actions/filter/:from/:to", [
        'headers' => [
            "Authorization" => "Bearer {{token}}"
        ],


    ]);

    echo $response->getBody();
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>
```

```json
[
  {
    "name": "302 Errors",
    "body": "Invalid date"
  },
  {
    "name": "200 Success",
    "body": [
      {
        "id": 13872,
        "user_id": 31,
        "business_id": 57,
        "action": "Created quote <a target='_blank' class='m-2' small href='/invoices/quote/73'>QTE16</a>",
        "created_at": "2024-11-21T19:49:13.000000Z",
        "updated_at": "2024-11-21T19:49:13.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13871,
        "user_id": 31,
        "business_id": 57,
        "action": "Deleted quote <a target='_blank' class='m-2' small href='/invoices/quote/71'>QTE14</a>",
        "created_at": "2024-11-21T18:58:38.000000Z",
        "updated_at": "2024-11-21T18:58:38.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13870,
        "user_id": 31,
        "business_id": 57,
        "action": "Created quote <a target='_blank' class='m-2' small href='/invoices/quote/72'>QTE15</a>",
        "created_at": "2024-11-21T18:49:36.000000Z",
        "updated_at": "2024-11-21T18:49:36.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13869,
        "user_id": 31,
        "business_id": 57,
        "action": "Created quote <a target='_blank' class='m-2' small href='/invoices/quote/71'>QTE14</a>",
        "created_at": "2024-11-21T18:39:52.000000Z",
        "updated_at": "2024-11-21T18:39:52.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13864,
        "user_id": 31,
        "business_id": 57,
        "action": "Created quote <a target='_blank' class='m-2' small href='/invoices/quote/66'>QTE9</a>",
        "created_at": "2024-11-21T18:39:15.000000Z",
        "updated_at": "2024-11-21T18:39:15.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13863,
        "user_id": 31,
        "business_id": 57,
        "action": "Created quote <a target='_blank' class='m-2' small href='/invoices/quote/65'>QTE8</a>",
        "created_at": "2024-11-21T18:37:07.000000Z",
        "updated_at": "2024-11-21T18:37:07.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13862,
        "user_id": 31,
        "business_id": 57,
        "action": "Created quote <a target='_blank' class='m-2' small href='/invoices/quote/64'>QTE7</a>",
        "created_at": "2024-11-21T18:36:26.000000Z",
        "updated_at": "2024-11-21T18:36:26.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13861,
        "user_id": 31,
        "business_id": 57,
        "action": "Created quote <a target='_blank' class='m-2' small href='/invoices/quote/63'>QTE6</a>",
        "created_at": "2024-11-21T18:35:45.000000Z",
        "updated_at": "2024-11-21T18:35:45.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13856,
        "user_id": 31,
        "business_id": 57,
        "action": "Created deposit with amount 10<a target='_blank' class='m-2' href='/customers/4341?tab=tab-deposits'>10.00</a>",
        "created_at": "2024-11-21T18:16:40.000000Z",
        "updated_at": "2024-11-21T18:16:40.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13855,
        "user_id": 31,
        "business_id": 57,
        "action": "Created account (Someone Somewhere prepayments/credits)",
        "created_at": "2024-11-21T18:16:40.000000Z",
        "updated_at": "2024-11-21T18:16:40.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13854,
        "user_id": 31,
        "business_id": 57,
        "action": "Created order <a target='_blank' class='m-2' small href='/orders/32'>9d8aa97f-2bfb-4cf7-9d80-f558ed2656a6</a>",
        "created_at": "2024-11-21T11:32:27.000000Z",
        "updated_at": "2024-11-21T11:32:27.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13853,
        "user_id": 31,
        "business_id": 57,
        "action": "Created order <a target='_blank' class='m-2' small href='/orders/31'>9d8aa334-33cd-4176-b864-54ff157cc6b4</a>",
        "created_at": "2024-11-21T11:14:51.000000Z",
        "updated_at": "2024-11-21T11:14:51.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13852,
        "user_id": 31,
        "business_id": 57,
        "action": "Created order <a target='_blank' class='m-2' small href='/orders/30'>9d8a9ee6-f77c-467d-8a79-d11ea37b8982</a>",
        "created_at": "2024-11-21T11:02:49.000000Z",
        "updated_at": "2024-11-21T11:02:49.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13851,
        "user_id": 31,
        "business_id": 57,
        "action": "Deleted quick sale <a target='_blank' class='m-2' small href='/sales/125'>CAS6</a>",
        "created_at": "2024-11-21T10:22:45.000000Z",
        "updated_at": "2024-11-21T10:22:45.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13850,
        "user_id": 31,
        "business_id": 57,
        "action": "Edited quick sale <a target='_blank' class='m-2' small href='/sales/125'>CAS6</a>",
        "created_at": "2024-11-21T10:18:58.000000Z",
        "updated_at": "2024-11-21T10:18:58.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13849,
        "user_id": 31,
        "business_id": 57,
        "action": "Created quick sale <a target='_blank' class='m-2' small href='/sales/125'>CAS6</a>",
        "created_at": "2024-11-21T09:47:57.000000Z",
        "updated_at": "2024-11-21T09:47:57.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13844,
        "user_id": 31,
        "business_id": 57,
        "action": "Created quick sale <a target='_blank' class='m-2' small href='/sales/120'>CAS5</a>",
        "created_at": "2024-11-21T09:29:43.000000Z",
        "updated_at": "2024-11-21T09:29:43.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13843,
        "user_id": 31,
        "business_id": 57,
        "action": "Created quick sale <a target='_blank' class='m-2' small href='/sales/119'>CAS4</a>",
        "created_at": "2024-11-20T16:58:54.000000Z",
        "updated_at": "2024-11-20T16:58:54.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13842,
        "user_id": 31,
        "business_id": 57,
        "action": "Added a payment of GHS12.00 to invoice  <a target='_blank' class='m-2' small href='/invoices/3643'>INV49</a>",
        "created_at": "2024-11-20T12:32:52.000000Z",
        "updated_at": "2024-11-20T12:32:52.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13841,
        "user_id": 31,
        "business_id": 57,
        "action": "Removed a payment of GHS12 from invoice <a target='_blank' class='m-2' small href='/invoices/3643'>INV49</a>",
        "created_at": "2024-11-20T12:32:15.000000Z",
        "updated_at": "2024-11-20T12:32:15.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13840,
        "user_id": 31,
        "business_id": 57,
        "action": "Removed a payment of GHS12 from invoice  <a target='_blank' class='m-2' small href='/invoices/3643'>INV49</a>",
        "created_at": "2024-11-20T12:32:15.000000Z",
        "updated_at": "2024-11-20T12:32:15.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13839,
        "user_id": 31,
        "business_id": 57,
        "action": "Added a payment of GHS12.00 to invoice  <a target='_blank' class='m-2' small href='/invoices/3643'>INV49</a>",
        "created_at": "2024-11-20T12:21:13.000000Z",
        "updated_at": "2024-11-20T12:21:13.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13838,
        "user_id": 31,
        "business_id": 57,
        "action": "Edited product/service (Books) to ",
        "created_at": "2024-11-20T11:44:33.000000Z",
        "updated_at": "2024-11-20T11:44:33.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13837,
        "user_id": 31,
        "business_id": 57,
        "action": "Created invoice <a target='_blank' class='m-2' small href='/invoices/3641'>INV48</a>",
        "created_at": "2024-11-20T11:43:19.000000Z",
        "updated_at": "2024-11-20T11:43:19.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13836,
        "user_id": 31,
        "business_id": 57,
        "action": "Deleted invoice <a target='_blank' class='m-2' small href='/invoices/3588'>INV6</a>",
        "created_at": "2024-11-20T11:36:55.000000Z",
        "updated_at": "2024-11-20T11:36:55.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13835,
        "user_id": 31,
        "business_id": 57,
        "action": "Edited Invoice <a target='_blank' class='m-2' small href='/invoices/3588'>INV6</a>",
        "created_at": "2024-11-20T11:32:58.000000Z",
        "updated_at": "2024-11-20T11:32:58.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13834,
        "user_id": 31,
        "business_id": 57,
        "action": "Edited Invoice <a target='_blank' class='m-2' small href='/invoices/3588'>INV6</a>",
        "created_at": "2024-11-20T11:25:28.000000Z",
        "updated_at": "2024-11-20T11:25:28.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13833,
        "user_id": 31,
        "business_id": 57,
        "action": "Edited Invoice <a target='_blank' class='m-2' small href='/invoices/3588'>INV6</a>",
        "created_at": "2024-11-20T11:11:13.000000Z",
        "updated_at": "2024-11-20T11:11:13.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13832,
        "user_id": 31,
        "business_id": 57,
        "action": "Edited Invoice <a target='_blank' class='m-2' small href='/invoices/3'>INV2</a>",
        "created_at": "2024-11-20T11:07:46.000000Z",
        "updated_at": "2024-11-20T11:07:46.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13831,
        "user_id": 31,
        "business_id": 57,
        "action": "Created invoice <a target='_blank' class='m-2' small href='/invoices/3639'>INV47</a>",
        "created_at": "2024-11-20T10:55:39.000000Z",
        "updated_at": "2024-11-20T10:55:39.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13830,
        "user_id": 31,
        "business_id": 57,
        "action": "Created invoice <a target='_blank' class='m-2' small href='/invoices/3638'>INV46</a>",
        "created_at": "2024-11-20T10:54:02.000000Z",
        "updated_at": "2024-11-20T10:54:02.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13829,
        "user_id": 31,
        "business_id": 57,
        "action": "Created invoice <a target='_blank' class='m-2' small href='/invoices/3637'>INV45</a>",
        "created_at": "2024-11-20T10:31:53.000000Z",
        "updated_at": "2024-11-20T10:31:53.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13828,
        "user_id": 31,
        "business_id": 57,
        "action": "Created order <a target='_blank' class='m-2' small href='/orders/29'>9d86ecc9-6a78-4b50-ab2b-9cfcfbe999bc</a>",
        "created_at": "2024-11-19T14:57:18.000000Z",
        "updated_at": "2024-11-19T14:57:18.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13827,
        "user_id": 31,
        "business_id": 57,
        "action": "Created order <a target='_blank' class='m-2' small href='/orders/28'>9d86ec54-6ec4-48d1-92b4-b367d4c02b09</a>",
        "created_at": "2024-11-19T14:56:01.000000Z",
        "updated_at": "2024-11-19T14:56:01.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13824,
        "user_id": 31,
        "business_id": 57,
        "action": "Created order <a target='_blank' class='m-2' small href='/orders/25'>9d86eae9-a4d4-4439-96b6-9fe33cb9e737</a>",
        "created_at": "2024-11-19T14:52:03.000000Z",
        "updated_at": "2024-11-19T14:52:03.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13823,
        "user_id": 31,
        "business_id": 57,
        "action": "Created order <a target='_blank' class='m-2' small href='/orders/24'>9d86ea64-ffcb-495c-bd89-f882ceac252c</a>",
        "created_at": "2024-11-19T14:50:36.000000Z",
        "updated_at": "2024-11-19T14:50:36.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13822,
        "user_id": 31,
        "business_id": 57,
        "action": "Created order <a target='_blank' class='m-2' small href='/orders/23'>9d86ea23-5327-4dbb-86d7-4c8977805aa5</a>",
        "created_at": "2024-11-19T14:49:53.000000Z",
        "updated_at": "2024-11-19T14:49:53.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13821,
        "user_id": 31,
        "business_id": 57,
        "action": "Created order <a target='_blank' class='m-2' small href='/orders/22'>9d86ea16-890f-484f-b4e8-743550cad5e2</a>",
        "created_at": "2024-11-19T14:49:45.000000Z",
        "updated_at": "2024-11-19T14:49:45.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13820,
        "user_id": 31,
        "business_id": 57,
        "action": "Created order <a target='_blank' class='m-2' small href='/orders/21'>9d86c7d3-96ff-48d3-935e-e13c6139431b</a>",
        "created_at": "2024-11-19T13:13:57.000000Z",
        "updated_at": "2024-11-19T13:13:57.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13819,
        "user_id": 31,
        "business_id": 57,
        "action": "Created order <a target='_blank' class='m-2' small href='/orders/20'>9d86c577-4baa-43f6-a9ae-cbe519beb13f</a>",
        "created_at": "2024-11-19T13:07:21.000000Z",
        "updated_at": "2024-11-19T13:07:21.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13818,
        "user_id": 31,
        "business_id": 57,
        "action": "Created order <a target='_blank' class='m-2' small href='/orders/19'>9d86c3bb-647f-48f4-a8aa-f46c9403ac42</a>",
        "created_at": "2024-11-19T13:02:30.000000Z",
        "updated_at": "2024-11-19T13:02:30.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13817,
        "user_id": 31,
        "business_id": 57,
        "action": "Created order <a target='_blank' class='m-2' small href='/orders/18'>9d86c39c-8a94-4de2-97e0-d70d3cb80a5f</a>",
        "created_at": "2024-11-19T13:02:09.000000Z",
        "updated_at": "2024-11-19T13:02:09.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13816,
        "user_id": 31,
        "business_id": 57,
        "action": "Created order <a target='_blank' class='m-2' small href='/orders/17'>9d86c199-213d-4b14-b16e-514612eaa015</a>",
        "created_at": "2024-11-19T12:56:32.000000Z",
        "updated_at": "2024-11-19T12:56:32.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13656,
        "user_id": 31,
        "business_id": 57,
        "action": "Edited account (Some name)",
        "created_at": "2024-11-06T11:45:42.000000Z",
        "updated_at": "2024-11-06T11:45:42.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      },
      {
        "id": 13655,
        "user_id": 31,
        "business_id": 57,
        "action": "Created account (Some name)",
        "created_at": "2024-11-06T11:44:28.000000Z",
        "updated_at": "2024-11-06T11:44:28.000000Z",
        "user": {
          "id": 31,
          "first_name": "Someone",
          "phone_number": "0248000000",
          "last_name": "Somewhere",
          "email": "someone@somewhere.com",
          "email_verified_at": "2024-05-03T09:09:11.000000Z",
          "is_admin": 1,
          "api_token": "NA",
          "photo": null,
          "created_at": "2024-05-03T09:00:59.000000Z",
          "updated_at": "2024-05-03T09:00:59.000000Z",
          "is_affiliate": 0,
          "has_fa": false,
          "notification_token": null,
          "gender": ""
        }
      }
    ]
  }
]
```

</div>

</div>
