#meta-data title: Quotes

## Quotes

### Create Quote

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
              </tr><tr>
                  <td style="text-align:left">Accept
                    <div class="table-description">string</div>
                  </td>
                  <td style="text-align:left"><code>application/json</code></td>
                </tr>  </tbody>
</table>

#### Body params

<table>
  <tbody>
<tr>
          <td style="text-align:left">customer_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the customer you want to create quote for
            </td>
        </tr><tr>
          <td style="text-align:left">valid_until
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The date the quote is valid until
            </td>
        </tr><tr>
          <td style="text-align:left">gross_amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The gross amount of the quoute before taxes and discounts
            </td>
        </tr><tr>
          <td style="text-align:left">discount_amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The discount amount on the quote
            </td>
        </tr><tr>
          <td style="text-align:left">amount_due
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The amount due after discount and taxes
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][product_id]
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the product
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][unit_price]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The unit price of the item
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][invoice_quantity]
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The quantity of the item
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][tax_amount]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The tax amount for the item
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][invoice_amount]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The total amount for the item
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">quote_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">A custom qoute number
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][description]
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The description of the product on the quote
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][amount_due]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The amount due for the item after discount and taxes
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][discount_amount]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The discount amount for the item
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][discount_percent]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The discount percent for the item
            </td>
        </tr><tr>
          <td style="text-align:left">note
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">A note to be printed on the quote
            </td>
        </tr><tr>
          <td style="text-align:left">tag
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">A comma separated string of tags
            </td>
        </tr><tr>
          <td style="text-align:left">logo_position
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The position of the logo on the quote. Can be left, right or center
            </td>
        </tr><tr>
          <td style="text-align:left">color
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The color of the quote document
            </td>
        </tr><tr>
          <td style="text-align:left">fx_amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The foreign exchange amount due of the quoute
            </td>
        </tr><tr>
          <td style="text-align:left">fx_rate
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The foreign exchange rate used to calculate the fx amount
            </td>
        </tr><tr>
          <td style="text-align:left">base_currency
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The base currency of the qoute
            </td>
        </tr><tr>
          <td style="text-align:left">fx_currency
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The foreign exchange currency for the quoute
            </td>
        </tr></tbody>
</table>

</div>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/quotes",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    customer_id: 4348,
    valid_until: "2023-09-26",
    quote_number: "",
    gross_amount: 360,
    discount_amount: 0,
    amount_due: 360,
    "items[0][product_id]": 1693,
    "items[0][description]": "",
    "items[0][unit_price]": 30,
    "items[0][invoice_quantity]": 12,
    "items[0][tax_amount]": 0,
    "items[0][invoice_amount]": 360,
    "items[0][amount_due]": 360,
    "items[0][discount_amount]": 0,
    "items[0][discount_percent]": 0,
    note: "",
    tag: "addtag",
    logo_position: "left",
    color: "#FEC008",
    fx_amount: 360,
    fx_rate: 1,
    base_currency: "BRL",
    fx_currency: "BRL",
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

    var jsonStr = []byte(`{
  "customer_id": 4348,
  "valid_until": "2023-09-26",
  "quote_number": "",
  "gross_amount": 360,
  "discount_amount": 0,
  "amount_due": 360,
  "items[0][product_id]": 1693,
  "items[0][description]": "",
  "items[0][unit_price]": 30,
  "items[0][invoice_quantity]": 12,
  "items[0][tax_amount]": 0,
  "items[0][invoice_amount]": 360,
  "items[0][amount_due]": 360,
  "items[0][discount_amount]": 0,
  "items[0][discount_percent]": 0,
  "note": "",
  "tag": "addtag",
  "logo_position": "left",
  "color": "#FEC008",
  "fx_amount": 360,
  "fx_rate": 1,
  "base_currency": "BRL",
  "fx_currency": "BRL"
}`)
    req, err := http.NewRequest("POST", "/api/v3/quotes", bytes.NewBuffer(jsonStr))
    if err != nil {
        fmt.Println(err)
        return
    }
    req.Header = map[string][]string{
        "Accept": {"application/json"},
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
    $response = $client->request("POST", "/api/v3/quotes", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "customer_id": 4348,
  "valid_until": "2023-09-26",
  "quote_number": "",
  "gross_amount": 360,
  "discount_amount": 0,
  "amount_due": 360,
  "items[0][product_id]": 1693,
  "items[0][description]": "",
  "items[0][unit_price]": 30,
  "items[0][invoice_quantity]": 12,
  "items[0][tax_amount]": 0,
  "items[0][invoice_amount]": 360,
  "items[0][amount_due]": 360,
  "items[0][discount_amount]": 0,
  "items[0][discount_percent]": 0,
  "note": "",
  "tag": "addtag",
  "logo_position": "left",
  "color": "#FEC008",
  "fx_amount": 360,
  "fx_rate": 1,
  "base_currency": "BRL",
  "fx_currency": "BRL"
},
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
    "name": "422 Validation Errors",
    "body": {
      "message": "The given data was invalid.",
      "errors": {
        "customer_id": ["The customer id field is required."],
        "valid_until": ["The valid until field is required."],
        "gross_amount": ["The gross amount field is required."],
        "discount_amount": ["The discount amount field is required."],
        "amount_due": ["The amount due field is required."]
      }
    }
  },
  {
    "name": "200 Success",
    "body": {
      "id": 64,
      "quote_number": "QTE7",
      "user_id": 31,
      "business_id": 57,
      "customer_id": 4348,
      "valid_until": "2023-09-26",
      "gross_amount": 360,
      "discount_amount": 0,
      "discount_percentage": "0.0",
      "amount_due": 360,
      "note": "",
      "created_at": "2024-11-21T18:36:26.000000Z",
      "updated_at": "2024-11-21T18:36:26.000000Z",
      "deleted_at": null,
      "fx_amount": 360,
      "fx_rate": 1,
      "base_currency": "BRL",
      "fx_currency": "BRL",
      "tag": "addtag",
      "invoice_color": "#FEC008",
      "logo_position": "left",
      "link": "https://built.ac/q/B3p1Kw3",
      "customer": null,
      "taxes": [],
      "enc_id": "eyJpdiI6Ijl0bHFkZG9LbXdSVHRiWlBRenVONlE9PSIsInZhbHVlIjoiczVrUWNJSlEzbHZ4Z2pNMEZ0Um0yQT09IiwibWFjIjoiZDE2ZGFlMmYwYzllOWIwMzg4MDcxYTIyYTA5ZDg0Y2Y1YWRmMmNhMGE4NWY3NmQ3NjlmM2RmMGU3M2ZhYzUyYiIsInRhZyI6IiJ9",
      "items": [
        {
          "id": 78,
          "quote_id": 64,
          "product_id": 1693,
          "tax_id": 0,
          "quantity": 4,
          "unit_price": 30,
          "amount": 360,
          "tax_amount": 0,
          "description": "",
          "created_at": null,
          "updated_at": null,
          "deleted_at": null,
          "discount_amount": 0,
          "discount_percent": 0,
          "formatedunit_price": "30.00",
          "taxed": false,
          "details": {
            "id": 1693,
            "name": "Sweets",
            "user_id": 31,
            "business_id": 57,
            "purchase_accountID": 8735,
            "description": "",
            "track_inventory": true,
            "type": "Product",
            "taxed": false,
            "tax_id": 0,
            "retail_item": 1,
            "buying_item": 1,
            "quantity": 4,
            "account_id": 8762,
            "unit_price": "2.00",
            "created_at": "2024-05-30T12:37:59.000000Z",
            "updated_at": "2024-11-21T09:29:43.000000Z",
            "code": "ITEM-001693",
            "selling_price": 5,
            "category_id": 40,
            "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
            "inventory_accountID": 8786,
            "deleted_at": null,
            "quantity_limit": 20,
            "discount_amount": 0,
            "discount_percent": 0,
            "archived": false,
            "category": "Uncategorised",
            "product_id": 1693,
            "applied_taxes": [],
            "unit_cost": 2,
            "net_amount": 5,
            "inventory_records": [],
            "rawUnit_price": 2,
            "real_unitPrice": 2.09,
            "display_unitPrice": 2.09,
            "invoice_amount": 0,
            "unformated_balance": "8.4",
            "balance": "8.4",
            "total_debit": "116.20",
            "total_credit": "107.82",
            "used": false
          },
          "type": "Product",
          "track_inventory": true,
          "taxes": null,
          "formatedamount": "360.00",
          "formatedTax_amount": "0.00",
          "name": "Sweets",
          "rawUnit_price": 30,
          "invoice_quantity": 12,
          "invoice_amount": 360,
          "amount_due": 360,
          "applied_taxes": []
        }
      ],
      "extra_headers": []
    }
  },
  {
    "name": "302 Error",
    "body": "Quote number (QTE7) already exists"
  }
]
```

</div>

</div>

### Get Quotes

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
  url: "/api/v3/quotes",
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

    req, err := http.NewRequest("GET", "/api/v3/quotes", nil)
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
    $response = $client->request("GET", "/api/v3/quotes", [
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
          "id": 71,
          "quote_number": "QTE14",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4348,
          "valid_until": "2023-09-26",
          "gross_amount": 360,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "amount_due": 360,
          "note": "",
          "created_at": "2024-11-21T18:39:52.000000Z",
          "updated_at": "2024-11-21T18:39:52.000000Z",
          "deleted_at": null,
          "fx_amount": 360,
          "fx_rate": 1,
          "base_currency": "BRL",
          "fx_currency": "BRL",
          "tag": "addtag",
          "invoice_color": "#FEC008",
          "logo_position": "left",
          "link": "https://built.ac/q/wmGMDKj",
          "items_sum_amount": 360,
          "customer": null,
          "taxes": [],
          "enc_id": "eyJpdiI6IkZPVGNLNi82aFVjRXUzNjlDY1M5NUE9PSIsInZhbHVlIjoieGNtK2RVQWx1YjBCalFtbitXZElzQT09IiwibWFjIjoiODI5ZDNlZmQ3YWYzYjRkZDRkZDBhZWYzNDU3YmJkYWRkODYzNmUxMTk0M2IzNzg3ZjcyNDQwOTNhZDhmNzRkZCIsInRhZyI6IiJ9",
          "items": [
            {
              "id": 81,
              "quote_id": 71,
              "product_id": 1693,
              "tax_id": 0,
              "quantity": 4,
              "unit_price": 30,
              "amount": 360,
              "tax_amount": 0,
              "description": "",
              "created_at": null,
              "updated_at": null,
              "deleted_at": null,
              "discount_amount": 0,
              "discount_percent": 0,
              "formatedunit_price": "30.00",
              "taxed": false,
              "details": {
                "id": 1693,
                "name": "Sweets",
                "user_id": 31,
                "business_id": 57,
                "purchase_accountID": 8735,
                "description": "",
                "track_inventory": true,
                "type": "Product",
                "taxed": false,
                "tax_id": 0,
                "retail_item": 1,
                "buying_item": 1,
                "quantity": 4,
                "account_id": 8762,
                "unit_price": "2.00",
                "created_at": "2024-05-30T12:37:59.000000Z",
                "updated_at": "2024-11-21T09:29:43.000000Z",
                "code": "ITEM-001693",
                "selling_price": 5,
                "category_id": 40,
                "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
                "inventory_accountID": 8786,
                "deleted_at": null,
                "quantity_limit": 20,
                "discount_amount": 0,
                "discount_percent": 0,
                "archived": false,
                "category": "Uncategorised",
                "product_id": 1693,
                "applied_taxes": [],
                "unit_cost": 2,
                "net_amount": 5,
                "inventory_records": [],
                "rawUnit_price": 2,
                "real_unitPrice": 2.09,
                "display_unitPrice": 2.09,
                "invoice_amount": 0,
                "unformated_balance": "8.4",
                "balance": "8.4",
                "total_debit": "116.20",
                "total_credit": "107.82",
                "used": false
              },
              "type": "Product",
              "track_inventory": true,
              "taxes": null,
              "formatedamount": "360.00",
              "formatedTax_amount": "0.00",
              "name": "Sweets",
              "rawUnit_price": 30,
              "invoice_quantity": 12,
              "invoice_amount": 360,
              "amount_due": 360,
              "applied_taxes": []
            }
          ],
          "conversions": []
        },
        {
          "id": 66,
          "quote_number": "QTE9",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4348,
          "valid_until": "2023-09-26",
          "gross_amount": 360,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "amount_due": 360,
          "note": "",
          "created_at": "2024-11-21T18:39:15.000000Z",
          "updated_at": "2024-11-21T18:39:15.000000Z",
          "deleted_at": null,
          "fx_amount": 360,
          "fx_rate": 1,
          "base_currency": "BRL",
          "fx_currency": "BRL",
          "tag": "addtag",
          "invoice_color": "#FEC008",
          "logo_position": "left",
          "link": "https://built.ac/q/pXBxb8o",
          "items_sum_amount": 360,
          "customer": null,
          "taxes": [],
          "enc_id": "eyJpdiI6IlZvcFNRVkJsS3JLdHVGNmJza1RqdlE9PSIsInZhbHVlIjoiZEJoeUk3azlEM3RMSVY2VGI1cHRkQT09IiwibWFjIjoiYTM2ZmEwYzRkMDAyMGZmNGY5MGMwMGE1NTY0ZjhhNGJhZjcwYzVmN2UyNDcxZWE1MDE0ZjU0YzExY2Y5ODRhMyIsInRhZyI6IiJ9",
          "items": [
            {
              "id": 80,
              "quote_id": 66,
              "product_id": 1693,
              "tax_id": 0,
              "quantity": 4,
              "unit_price": 30,
              "amount": 360,
              "tax_amount": 0,
              "description": "",
              "created_at": null,
              "updated_at": null,
              "deleted_at": null,
              "discount_amount": 0,
              "discount_percent": 0,
              "formatedunit_price": "30.00",
              "taxed": false,
              "details": {
                "id": 1693,
                "name": "Sweets",
                "user_id": 31,
                "business_id": 57,
                "purchase_accountID": 8735,
                "description": "",
                "track_inventory": true,
                "type": "Product",
                "taxed": false,
                "tax_id": 0,
                "retail_item": 1,
                "buying_item": 1,
                "quantity": 4,
                "account_id": 8762,
                "unit_price": "2.00",
                "created_at": "2024-05-30T12:37:59.000000Z",
                "updated_at": "2024-11-21T09:29:43.000000Z",
                "code": "ITEM-001693",
                "selling_price": 5,
                "category_id": 40,
                "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
                "inventory_accountID": 8786,
                "deleted_at": null,
                "quantity_limit": 20,
                "discount_amount": 0,
                "discount_percent": 0,
                "archived": false,
                "category": "Uncategorised",
                "product_id": 1693,
                "applied_taxes": [],
                "unit_cost": 2,
                "net_amount": 5,
                "inventory_records": [],
                "rawUnit_price": 2,
                "real_unitPrice": 2.09,
                "display_unitPrice": 2.09,
                "invoice_amount": 0,
                "unformated_balance": "8.4",
                "balance": "8.4",
                "total_debit": "116.20",
                "total_credit": "107.82",
                "used": false
              },
              "type": "Product",
              "track_inventory": true,
              "taxes": null,
              "formatedamount": "360.00",
              "formatedTax_amount": "0.00",
              "name": "Sweets",
              "rawUnit_price": 30,
              "invoice_quantity": 12,
              "invoice_amount": 360,
              "amount_due": 360,
              "applied_taxes": []
            }
          ],
          "conversions": []
        },
        {
          "id": 65,
          "quote_number": "QTE8",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4348,
          "valid_until": "2023-09-26",
          "gross_amount": 360,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "amount_due": 360,
          "note": "",
          "created_at": "2024-11-21T18:37:07.000000Z",
          "updated_at": "2024-11-21T18:37:07.000000Z",
          "deleted_at": null,
          "fx_amount": 360,
          "fx_rate": 1,
          "base_currency": "BRL",
          "fx_currency": "BRL",
          "tag": "addtag",
          "invoice_color": "#FEC008",
          "logo_position": "left",
          "link": "https://built.ac/q/6pbJqvO",
          "items_sum_amount": 360,
          "customer": null,
          "taxes": [],
          "enc_id": "eyJpdiI6InY4TnFuOFl4RWJJbTNMOWJkNHhIeFE9PSIsInZhbHVlIjoiMDJXMkNmcWd0V3RWUXpMOEkyRmc3Zz09IiwibWFjIjoiNTNiNTQ4YzFlODAzNWJjYTUzN2I4YTdiZTlkYjMzMmVhMDgzZDg4Njk1NzY5Mzg2ZTNjNzlmZmFmMTgyZWU3NSIsInRhZyI6IiJ9",
          "items": [
            {
              "id": 79,
              "quote_id": 65,
              "product_id": 1693,
              "tax_id": 0,
              "quantity": 4,
              "unit_price": 30,
              "amount": 360,
              "tax_amount": 0,
              "description": "",
              "created_at": null,
              "updated_at": null,
              "deleted_at": null,
              "discount_amount": 0,
              "discount_percent": 0,
              "formatedunit_price": "30.00",
              "taxed": false,
              "details": {
                "id": 1693,
                "name": "Sweets",
                "user_id": 31,
                "business_id": 57,
                "purchase_accountID": 8735,
                "description": "",
                "track_inventory": true,
                "type": "Product",
                "taxed": false,
                "tax_id": 0,
                "retail_item": 1,
                "buying_item": 1,
                "quantity": 4,
                "account_id": 8762,
                "unit_price": "2.00",
                "created_at": "2024-05-30T12:37:59.000000Z",
                "updated_at": "2024-11-21T09:29:43.000000Z",
                "code": "ITEM-001693",
                "selling_price": 5,
                "category_id": 40,
                "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
                "inventory_accountID": 8786,
                "deleted_at": null,
                "quantity_limit": 20,
                "discount_amount": 0,
                "discount_percent": 0,
                "archived": false,
                "category": "Uncategorised",
                "product_id": 1693,
                "applied_taxes": [],
                "unit_cost": 2,
                "net_amount": 5,
                "inventory_records": [],
                "rawUnit_price": 2,
                "real_unitPrice": 2.09,
                "display_unitPrice": 2.09,
                "invoice_amount": 0,
                "unformated_balance": "8.4",
                "balance": "8.4",
                "total_debit": "116.20",
                "total_credit": "107.82",
                "used": false
              },
              "type": "Product",
              "track_inventory": true,
              "taxes": null,
              "formatedamount": "360.00",
              "formatedTax_amount": "0.00",
              "name": "Sweets",
              "rawUnit_price": 30,
              "invoice_quantity": 12,
              "invoice_amount": 360,
              "amount_due": 360,
              "applied_taxes": []
            }
          ],
          "conversions": []
        },
        {
          "id": 64,
          "quote_number": "QTE7",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4348,
          "valid_until": "2023-09-26",
          "gross_amount": 360,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "amount_due": 360,
          "note": "",
          "created_at": "2024-11-21T18:36:26.000000Z",
          "updated_at": "2024-11-21T18:36:26.000000Z",
          "deleted_at": null,
          "fx_amount": 360,
          "fx_rate": 1,
          "base_currency": "BRL",
          "fx_currency": "BRL",
          "tag": "addtag",
          "invoice_color": "#FEC008",
          "logo_position": "left",
          "link": "https://built.ac/q/B3p1Kw3",
          "items_sum_amount": 360,
          "customer": null,
          "taxes": [],
          "enc_id": "eyJpdiI6Ik9YYk5oSmVJRklqSG41N2hBc01YdEE9PSIsInZhbHVlIjoiaVpjU1ZRbEI1YU5waDRIMEZMbmpNQT09IiwibWFjIjoiZWNhMGE2Y2U4YWZmMjJlN2M2OWFjNmNjZjZmYWVmZjhiMGRjMTM4NzZiOTgwZTllOTJmZTU0MTI4M2VlNWQ5YyIsInRhZyI6IiJ9",
          "items": [
            {
              "id": 78,
              "quote_id": 64,
              "product_id": 1693,
              "tax_id": 0,
              "quantity": 4,
              "unit_price": 30,
              "amount": 360,
              "tax_amount": 0,
              "description": "",
              "created_at": null,
              "updated_at": null,
              "deleted_at": null,
              "discount_amount": 0,
              "discount_percent": 0,
              "formatedunit_price": "30.00",
              "taxed": false,
              "details": {
                "id": 1693,
                "name": "Sweets",
                "user_id": 31,
                "business_id": 57,
                "purchase_accountID": 8735,
                "description": "",
                "track_inventory": true,
                "type": "Product",
                "taxed": false,
                "tax_id": 0,
                "retail_item": 1,
                "buying_item": 1,
                "quantity": 4,
                "account_id": 8762,
                "unit_price": "2.00",
                "created_at": "2024-05-30T12:37:59.000000Z",
                "updated_at": "2024-11-21T09:29:43.000000Z",
                "code": "ITEM-001693",
                "selling_price": 5,
                "category_id": 40,
                "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
                "inventory_accountID": 8786,
                "deleted_at": null,
                "quantity_limit": 20,
                "discount_amount": 0,
                "discount_percent": 0,
                "archived": false,
                "category": "Uncategorised",
                "product_id": 1693,
                "applied_taxes": [],
                "unit_cost": 2,
                "net_amount": 5,
                "inventory_records": [],
                "rawUnit_price": 2,
                "real_unitPrice": 2.09,
                "display_unitPrice": 2.09,
                "invoice_amount": 0,
                "unformated_balance": "8.4",
                "balance": "8.4",
                "total_debit": "116.20",
                "total_credit": "107.82",
                "used": false
              },
              "type": "Product",
              "track_inventory": true,
              "taxes": null,
              "formatedamount": "360.00",
              "formatedTax_amount": "0.00",
              "name": "Sweets",
              "rawUnit_price": 30,
              "invoice_quantity": 12,
              "invoice_amount": 360,
              "amount_due": 360,
              "applied_taxes": []
            }
          ],
          "conversions": []
        },
        {
          "id": 63,
          "quote_number": "QTE6",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4348,
          "valid_until": "2023-09-26",
          "gross_amount": 360,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "amount_due": 360,
          "note": "",
          "created_at": "2024-11-21T18:35:45.000000Z",
          "updated_at": "2024-11-21T18:35:46.000000Z",
          "deleted_at": null,
          "fx_amount": 360,
          "fx_rate": 1,
          "base_currency": "BRL",
          "fx_currency": "BRL",
          "tag": "addtag",
          "invoice_color": "#FEC008",
          "logo_position": "left",
          "link": "https://built.ac/q/x0bEPBk",
          "items_sum_amount": 360,
          "customer": null,
          "taxes": [],
          "enc_id": "eyJpdiI6Iis1MTNYMkcvSTRtRkcwQjZ2UU50cWc9PSIsInZhbHVlIjoiVUU5SS9SYVRvcnpwQWhaOFVZUk5qUT09IiwibWFjIjoiMDg5NDdiNDFiMjY4ZTA3OTg4M2RhZjhhYTQ5MjU3ZGQyOTVjYTM3MDE1ZTgyZDNiNTllMDRkODE2OWRiZjQ4MSIsInRhZyI6IiJ9",
          "items": [
            {
              "id": 77,
              "quote_id": 63,
              "product_id": 1693,
              "tax_id": 0,
              "quantity": 4,
              "unit_price": 30,
              "amount": 360,
              "tax_amount": 0,
              "description": "",
              "created_at": null,
              "updated_at": null,
              "deleted_at": null,
              "discount_amount": 0,
              "discount_percent": 0,
              "formatedunit_price": "30.00",
              "taxed": false,
              "details": {
                "id": 1693,
                "name": "Sweets",
                "user_id": 31,
                "business_id": 57,
                "purchase_accountID": 8735,
                "description": "",
                "track_inventory": true,
                "type": "Product",
                "taxed": false,
                "tax_id": 0,
                "retail_item": 1,
                "buying_item": 1,
                "quantity": 4,
                "account_id": 8762,
                "unit_price": "2.00",
                "created_at": "2024-05-30T12:37:59.000000Z",
                "updated_at": "2024-11-21T09:29:43.000000Z",
                "code": "ITEM-001693",
                "selling_price": 5,
                "category_id": 40,
                "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
                "inventory_accountID": 8786,
                "deleted_at": null,
                "quantity_limit": 20,
                "discount_amount": 0,
                "discount_percent": 0,
                "archived": false,
                "category": "Uncategorised",
                "product_id": 1693,
                "applied_taxes": [],
                "unit_cost": 2,
                "net_amount": 5,
                "inventory_records": [],
                "rawUnit_price": 2,
                "real_unitPrice": 2.09,
                "display_unitPrice": 2.09,
                "invoice_amount": 0,
                "unformated_balance": "8.4",
                "balance": "8.4",
                "total_debit": "116.20",
                "total_credit": "107.82",
                "used": false
              },
              "type": "Product",
              "track_inventory": true,
              "taxes": null,
              "formatedamount": "360.00",
              "formatedTax_amount": "0.00",
              "name": "Sweets",
              "rawUnit_price": 30,
              "invoice_quantity": 12,
              "invoice_amount": 360,
              "amount_due": 360,
              "applied_taxes": []
            }
          ],
          "conversions": []
        },
        {
          "id": 58,
          "quote_number": "QTE1",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4340,
          "valid_until": "2024-05-08",
          "gross_amount": 10,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "amount_due": 10,
          "note": "",
          "created_at": "2024-05-08T12:50:19.000000Z",
          "updated_at": "2024-05-08T12:50:19.000000Z",
          "deleted_at": null,
          "fx_amount": 10,
          "fx_rate": 1,
          "base_currency": "GHS",
          "fx_currency": "GHS",
          "tag": "",
          "invoice_color": "#FEC008",
          "logo_position": "left",
          "link": "https://built.ac/q/l2QklYD",
          "items_sum_amount": 10,
          "taxes": [],
          "enc_id": "eyJpdiI6InhxenZFajlXTzBkWndVcHBBaTRaZFE9PSIsInZhbHVlIjoiTUlBdkkxUERUaktkaUxNS3pQZjByZz09IiwibWFjIjoiZjY2MjcyMmVkM2M3ZDdjMjZjZTM2YjRmM2ZmMWVjZGJhY2ZkZWY5NGVmMTgxZTEwMDM0NGViMDZiOGI4Y2IxNCIsInRhZyI6IiJ9",
          "customer": {
            "id": 4340,
            "owner_id": 31,
            "business_id": 57,
            "first_name": "",
            "last_name": "",
            "phone_number": "",
            "business_name": "Abdul",
            "business_address": "",
            "business_phone": "",
            "business_location": "",
            "business_email": "",
            "created_at": "2024-05-08T12:50:08.000000Z",
            "updated_at": "2024-05-08T12:50:08.000000Z",
            "account_id": 8768,
            "category": "Cohort 2021",
            "category_id": 40,
            "deposit_amount": 0,
            "deposit_account_id": null,
            "archived": false,
            "transactions": [],
            "unformated_balance": 125950.89,
            "balance": "125,950.89",
            "total_debit": "126,761.42",
            "total_credit": "810.53"
          },
          "items": [
            {
              "id": 73,
              "quote_id": 58,
              "product_id": 1691,
              "tax_id": 0,
              "quantity": 0,
              "unit_price": 10,
              "amount": 10,
              "tax_amount": 0,
              "description": "",
              "created_at": null,
              "updated_at": null,
              "deleted_at": null,
              "discount_amount": 0,
              "discount_percent": 0,
              "formatedunit_price": "10.00",
              "taxed": false,
              "details": {
                "id": 1691,
                "name": "Services",
                "user_id": 31,
                "business_id": 57,
                "purchase_accountID": 8735,
                "description": "",
                "track_inventory": false,
                "type": "Service",
                "taxed": false,
                "tax_id": 0,
                "retail_item": 1,
                "buying_item": 1,
                "quantity": 0,
                "account_id": 8762,
                "unit_price": "0.00",
                "created_at": "2024-05-08T12:47:47.000000Z",
                "updated_at": "2024-05-08T12:47:47.000000Z",
                "code": null,
                "selling_price": 0,
                "category_id": 40,
                "photo": "/img/item_photo.png",
                "inventory_accountID": 0,
                "deleted_at": null,
                "quantity_limit": 1,
                "discount_amount": 0,
                "discount_percent": 0,
                "archived": false,
                "category": "Uncategorised",
                "product_id": 1691,
                "applied_taxes": [],
                "unit_cost": 0,
                "net_amount": 0,
                "inventory_records": [],
                "balance": 0,
                "total_debit": 0,
                "total_credit": 0,
                "rawUnit_price": 0,
                "display_unitPrice": 0,
                "invoice_quantity": 1,
                "invoice_amount": 0,
                "used": false
              },
              "type": "Service",
              "track_inventory": false,
              "taxes": null,
              "formatedamount": "10.00",
              "formatedTax_amount": "0.00",
              "name": "Services",
              "rawUnit_price": 10,
              "invoice_quantity": 1,
              "invoice_amount": 10,
              "amount_due": 10,
              "applied_taxes": []
            }
          ],
          "conversions": []
        }
      ],
      "first_page_url": "http://built.test/api/v3/quotes?page=1",
      "from": 1,
      "last_page": 1,
      "last_page_url": "http://built.test/api/v3/quotes?page=1",
      "links": [
        {
          "url": null,
          "label": "&laquo; Previous",
          "active": false
        },
        {
          "url": "http://built.test/api/v3/quotes?page=1",
          "label": "1",
          "active": true
        },
        {
          "url": null,
          "label": "Next &raquo;",
          "active": false
        }
      ],
      "next_page_url": null,
      "path": "http://built.test/api/v3/quotes",
      "per_page": 50,
      "prev_page_url": null,
      "to": 6,
      "total": 6
    }
  }
]
```

</div>

</div>

### Get Quote

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

#### Body params

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the quote to get
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/quotes/:id",
  headers: {
    Authorization: "Bearer {{token}}",
  },

  data: {
    customer_id: 4348,
    valid_until: " 2023-09-26",
    invoice_number: " ",
    gross_amount: 360,
    discount_amount: 0,
    amount_due: 360,
    "items[0][uid]": " _0hdktan02",
    "items[0][id]": 1698,
    "items[0][product_id]": 1698,
    "items[0][description]": " ",
    "items[0][unit_price]": 30,
    "items[0][invoice_quantity]": 12,
    "items[0][tax_amount]": 0,
    "items[0][invoice_amount]": 360,
    "items[0][quantity_error]": false,
    "items[0][amount_due]": 360,
    "items[0][discount_amount]": 0,
    "items[0][discount_percent]": 0,
    note: " ",
    tag: " addtag",
    logo_position: " left",
    color: " #FEC008",
    fx_amount: 360,
    fx_rate: 1,
    base_currency: " BRL",
    fx_currency: " BRL",
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

    var jsonStr = []byte(`{
  "customer_id": 4348,
  "valid_until": " 2023-09-26",
  "invoice_number": " ",
  "gross_amount": 360,
  "discount_amount": 0,
  "amount_due": 360,
  "items[0][uid]": " _0hdktan02",
  "items[0][id]": 1698,
  "items[0][product_id]": 1698,
  "items[0][description]": " ",
  "items[0][unit_price]": 30,
  "items[0][invoice_quantity]": 12,
  "items[0][tax_amount]": 0,
  "items[0][invoice_amount]": 360,
  "items[0][quantity_error]": false,
  "items[0][amount_due]": 360,
  "items[0][discount_amount]": 0,
  "items[0][discount_percent]": 0,
  "note": " ",
  "tag": " addtag",
  "logo_position": " left",
  "color": " #FEC008",
  "fx_amount": 360,
  "fx_rate": 1,
  "base_currency": " BRL",
  "fx_currency": " BRL"
}`)
    req, err := http.NewRequest("GET", "/api/v3/quotes/:id", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("GET", "/api/v3/quotes/:id", [
        'headers' => [
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "customer_id": 4348,
  "valid_until": " 2023-09-26",
  "invoice_number": " ",
  "gross_amount": 360,
  "discount_amount": 0,
  "amount_due": 360,
  "items[0][uid]": " _0hdktan02",
  "items[0][id]": 1698,
  "items[0][product_id]": 1698,
  "items[0][description]": " ",
  "items[0][unit_price]": 30,
  "items[0][invoice_quantity]": 12,
  "items[0][tax_amount]": 0,
  "items[0][invoice_amount]": 360,
  "items[0][quantity_error]": false,
  "items[0][amount_due]": 360,
  "items[0][discount_amount]": 0,
  "items[0][discount_percent]": 0,
  "note": " ",
  "tag": " addtag",
  "logo_position": " left",
  "color": " #FEC008",
  "fx_amount": 360,
  "fx_rate": 1,
  "base_currency": " BRL",
  "fx_currency": " BRL"
},
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
    "name": "302 Error",
    "body": "Quote not found"
  },
  {
    "name": "200 Success",
    "body": {
      "id": 71,
      "quote_number": "QTE14",
      "user_id": 31,
      "business_id": 57,
      "customer_id": 4348,
      "valid_until": "2023-09-26",
      "gross_amount": 360,
      "discount_amount": 0,
      "discount_percentage": "0.0",
      "amount_due": 360,
      "note": "",
      "created_at": "2024-11-21T18:39:52.000000Z",
      "updated_at": "2024-11-21T18:39:52.000000Z",
      "deleted_at": null,
      "fx_amount": 360,
      "fx_rate": 1,
      "base_currency": "BRL",
      "fx_currency": "BRL",
      "tag": "addtag",
      "invoice_color": "#FEC008",
      "logo_position": "left",
      "link": "https://built.ac/q/wmGMDKj",
      "items_sum_amount": 360,
      "customer": null,
      "taxes": [],
      "enc_id": "eyJpdiI6InJKTTlMdlVmLzNJckVYTCt2T0xZQkE9PSIsInZhbHVlIjoiR3cxb1Fzc09YRUJ6S21nR3YxMWYzdz09IiwibWFjIjoiOWY4MjdiNTA5OWQwMjg5NWNiZTE2ZmNiNTE2NWZhYjA4YjgxNzk1ZjA0MzYyNmEzZmVhMzFiMGYwMDI2ZWQ2OCIsInRhZyI6IiJ9",
      "items": [
        {
          "id": 81,
          "quote_id": 71,
          "product_id": 1693,
          "tax_id": 0,
          "quantity": 4,
          "unit_price": 30,
          "amount": 360,
          "tax_amount": 0,
          "description": "",
          "created_at": null,
          "updated_at": null,
          "deleted_at": null,
          "discount_amount": 0,
          "discount_percent": 0,
          "formatedunit_price": "30.00",
          "taxed": false,
          "details": {
            "id": 1693,
            "name": "Sweets",
            "user_id": 31,
            "business_id": 57,
            "purchase_accountID": 8735,
            "description": "",
            "track_inventory": true,
            "type": "Product",
            "taxed": false,
            "tax_id": 0,
            "retail_item": 1,
            "buying_item": 1,
            "quantity": 4,
            "account_id": 8762,
            "unit_price": "2.00",
            "created_at": "2024-05-30T12:37:59.000000Z",
            "updated_at": "2024-11-21T09:29:43.000000Z",
            "code": "ITEM-001693",
            "selling_price": 5,
            "category_id": 40,
            "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
            "inventory_accountID": 8786,
            "deleted_at": null,
            "quantity_limit": 20,
            "discount_amount": 0,
            "discount_percent": 0,
            "archived": false,
            "category": "Uncategorised",
            "product_id": 1693,
            "applied_taxes": [],
            "unit_cost": 2,
            "net_amount": 5,
            "inventory_records": [],
            "rawUnit_price": 2,
            "real_unitPrice": 2.09,
            "display_unitPrice": 2.09,
            "invoice_amount": 0,
            "unformated_balance": "8.4",
            "balance": "8.4",
            "total_debit": "116.20",
            "total_credit": "107.82",
            "used": false
          },
          "type": "Product",
          "track_inventory": true,
          "taxes": null,
          "formatedamount": "360.00",
          "formatedTax_amount": "0.00",
          "name": "Sweets",
          "rawUnit_price": 30,
          "invoice_quantity": 12,
          "invoice_amount": 360,
          "amount_due": 360,
          "applied_taxes": []
        }
      ],
      "conversions": [],
      "extra_headers": []
    }
  }
]
```

</div>

</div>

### Update Quote

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
              </tr><tr>
                  <td style="text-align:left">Accept
                    <div class="table-description">string</div>
                  </td>
                  <td style="text-align:left"><code>application/json</code></td>
                </tr>  </tbody>
</table>

#### Body params

<table>
  <tbody>
<tr>
          <td style="text-align:left">customer_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the customer you want to create quote for
            </td>
        </tr><tr>
          <td style="text-align:left">valid_until
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The date the quote is valid until
            </td>
        </tr><tr>
          <td style="text-align:left">gross_amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The gross amount of the quoute before taxes and discounts
            </td>
        </tr><tr>
          <td style="text-align:left">discount_amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The discount amount on the quote
            </td>
        </tr><tr>
          <td style="text-align:left">amount_due
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The amount due after discount and taxes
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][product_id]
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the product
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][unit_price]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The unit price of the item
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][invoice_quantity]
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The quantity of the item
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][tax_amount]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The tax amount for the item
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][invoice_amount]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The total amount for the item
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">quote_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">A custom qoute number
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][description]
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The description of the product on the quote
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][amount_due]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The amount due for the item after discount and taxes
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][discount_amount]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The discount amount for the item
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][discount_percent]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The discount percent for the item
            </td>
        </tr><tr>
          <td style="text-align:left">note
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">A note to be printed on the quote
            </td>
        </tr><tr>
          <td style="text-align:left">tag
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">A comma separated string of tags
            </td>
        </tr><tr>
          <td style="text-align:left">logo_position
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The position of the logo on the quote. Can be left, right or center
            </td>
        </tr><tr>
          <td style="text-align:left">color
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The color of the quote document
            </td>
        </tr><tr>
          <td style="text-align:left">fx_amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The foreign exchange amount due of the quoute
            </td>
        </tr><tr>
          <td style="text-align:left">fx_rate
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The foreign exchange rate used to calculate the fx amount
            </td>
        </tr><tr>
          <td style="text-align:left">base_currency
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The base currency of the qoute
            </td>
        </tr><tr>
          <td style="text-align:left">fx_currency
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The foreign exchange currency for the quoute
            </td>
        </tr></tbody>
</table>

</div>

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the quote to update
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/quotes/:id",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    customer_id: 4348,
    valid_until: "2023-09-26",
    quote_number: "",
    gross_amount: 360,
    discount_amount: 0,
    amount_due: 360,
    "items[0][product_id]": 1693,
    "items[0][description]": "",
    "items[0][unit_price]": 30,
    "items[0][invoice_quantity]": 12,
    "items[0][tax_amount]": 0,
    "items[0][invoice_amount]": 360,
    "items[0][amount_due]": 360,
    "items[0][discount_amount]": 0,
    "items[0][discount_percent]": 0,
    note: "",
    tag: "addtag",
    logo_position: "left",
    color: "#FEC008",
    fx_amount: 360,
    fx_rate: 1,
    base_currency: "BRL",
    fx_currency: "BRL",
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

    var jsonStr = []byte(`{
  "customer_id": 4348,
  "valid_until": "2023-09-26",
  "quote_number": "",
  "gross_amount": 360,
  "discount_amount": 0,
  "amount_due": 360,
  "items[0][product_id]": 1693,
  "items[0][description]": "",
  "items[0][unit_price]": 30,
  "items[0][invoice_quantity]": 12,
  "items[0][tax_amount]": 0,
  "items[0][invoice_amount]": 360,
  "items[0][amount_due]": 360,
  "items[0][discount_amount]": 0,
  "items[0][discount_percent]": 0,
  "note": "",
  "tag": "addtag",
  "logo_position": "left",
  "color": "#FEC008",
  "fx_amount": 360,
  "fx_rate": 1,
  "base_currency": "BRL",
  "fx_currency": "BRL"
}`)
    req, err := http.NewRequest("POST", "/api/v3/quotes/:id", bytes.NewBuffer(jsonStr))
    if err != nil {
        fmt.Println(err)
        return
    }
    req.Header = map[string][]string{
        "Accept": {"application/json"},
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
    $response = $client->request("POST", "/api/v3/quotes/:id", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "customer_id": 4348,
  "valid_until": "2023-09-26",
  "quote_number": "",
  "gross_amount": 360,
  "discount_amount": 0,
  "amount_due": 360,
  "items[0][product_id]": 1693,
  "items[0][description]": "",
  "items[0][unit_price]": 30,
  "items[0][invoice_quantity]": 12,
  "items[0][tax_amount]": 0,
  "items[0][invoice_amount]": 360,
  "items[0][amount_due]": 360,
  "items[0][discount_amount]": 0,
  "items[0][discount_percent]": 0,
  "note": "",
  "tag": "addtag",
  "logo_position": "left",
  "color": "#FEC008",
  "fx_amount": 360,
  "fx_rate": 1,
  "base_currency": "BRL",
  "fx_currency": "BRL"
},
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
    "name": "302 Error",
    "body": "Quote not found"
  },
  {
    "name": "422 Validation Error",
    "body": {
      "message": "The given data was invalid.",
      "errors": {
        "customer_id": ["The customer id field is required."],
        "valid_until": ["The valid until field is required."],
        "gross_amount": ["The gross amount field is required."],
        "discount_amount": ["The discount amount field is required."],
        "amount_due": ["The amount due field is required."],
        "items": ["The items field is required."]
      }
    }
  },
  {
    "name": "200 Success",
    "body": {
      "id": 71,
      "quote_number": "QTE14",
      "user_id": 31,
      "business_id": 57,
      "customer_id": 4348,
      "valid_until": "2023-09-26",
      "gross_amount": 360,
      "discount_amount": 0,
      "discount_percentage": "0.0",
      "amount_due": 360,
      "note": "",
      "created_at": "2024-11-21T18:39:52.000000Z",
      "updated_at": "2024-11-21T18:54:41.000000Z",
      "deleted_at": null,
      "fx_amount": 360,
      "fx_rate": 1,
      "base_currency": "BRL",
      "fx_currency": "BRL",
      "tag": "addtag",
      "invoice_color": "#FFAD45",
      "logo_position": "left",
      "link": "https://built.ac/q/wmGMDKj",
      "customer": null,
      "taxes": [],
      "enc_id": "eyJpdiI6InRaZ3BOczR6MFBiZXFLWnBtOXkwT3c9PSIsInZhbHVlIjoiS3JDM1hJd2ZNeDFYeTRCMHJsbGJ5QT09IiwibWFjIjoiMDU2Y2E4MjBiNTE5YzEwNmMwNTE5NWI5NDI3YTI3ZGY4YjlkYjQ4ZDViYWFkYzdiYTJhZDQ3YmYyZWE0NDUyOCIsInRhZyI6IiJ9",
      "items": [
        {
          "id": 84,
          "quote_id": 71,
          "product_id": 1693,
          "tax_id": 0,
          "quantity": 4,
          "unit_price": 30,
          "amount": 360,
          "tax_amount": 0,
          "description": "",
          "created_at": "2024-11-21T18:54:41.000000Z",
          "updated_at": "2024-11-21T18:54:41.000000Z",
          "deleted_at": null,
          "discount_amount": 0,
          "discount_percent": 0,
          "formatedunit_price": "30.00",
          "taxed": false,
          "details": {
            "id": 1693,
            "name": "Sweets",
            "user_id": 31,
            "business_id": 57,
            "purchase_accountID": 8735,
            "description": "",
            "track_inventory": true,
            "type": "Product",
            "taxed": false,
            "tax_id": 0,
            "retail_item": 1,
            "buying_item": 1,
            "quantity": 4,
            "account_id": 8762,
            "unit_price": "2.00",
            "created_at": "2024-05-30T12:37:59.000000Z",
            "updated_at": "2024-11-21T09:29:43.000000Z",
            "code": "ITEM-001693",
            "selling_price": 5,
            "category_id": 40,
            "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
            "inventory_accountID": 8786,
            "deleted_at": null,
            "quantity_limit": 20,
            "discount_amount": 0,
            "discount_percent": 0,
            "archived": false,
            "category": "Uncategorised",
            "product_id": 1693,
            "applied_taxes": [],
            "unit_cost": 2,
            "net_amount": 5,
            "inventory_records": [],
            "rawUnit_price": 2,
            "real_unitPrice": 2.09,
            "display_unitPrice": 2.09,
            "invoice_amount": 0,
            "unformated_balance": "8.4",
            "balance": "8.4",
            "total_debit": "116.20",
            "total_credit": "107.82",
            "used": false
          },
          "type": "Product",
          "track_inventory": true,
          "taxes": null,
          "formatedamount": "360.00",
          "formatedTax_amount": "0.00",
          "name": "Sweets",
          "rawUnit_price": 30,
          "invoice_quantity": 12,
          "invoice_amount": 360,
          "amount_due": 360,
          "applied_taxes": []
        }
      ]
    }
  }
]
```

</div>

</div>

### Delete Quote

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
          <td style="text-align:left">id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the quote you want to delete
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "DELETE",
  url: "/api/v3/quotes/:id",
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

    req, err := http.NewRequest("DELETE", "/api/v3/quotes/:id", nil)
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
    $response = $client->request("DELETE", "/api/v3/quotes/:id", [
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
    "name": "302 Error",
    "body": "Quote not found"
  },
  {
    "name": "200 Success",
    "body": {
      "id": 71,
      "quote_number": "QTE14",
      "user_id": 31,
      "business_id": 57,
      "customer_id": 4348,
      "valid_until": "2023-09-26",
      "gross_amount": 360,
      "discount_amount": 0,
      "discount_percentage": 0,
      "amount_due": 360,
      "note": "",
      "created_at": "2024-11-21T18:39:52.000000Z",
      "updated_at": "2024-11-21T18:58:38.000000Z",
      "deleted_at": "2024-11-21T18:58:38.000000Z",
      "fx_amount": 360,
      "fx_rate": 1,
      "base_currency": "BRL",
      "fx_currency": "BRL",
      "tag": "addtag",
      "invoice_color": "#FFAD45",
      "logo_position": "left",
      "link": "https://built.ac/q/wmGMDKj"
    }
  }
]
```

</div>

</div>

### Search quote

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

#### Query Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">term
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The search term to use
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/quotes/search?term=QTE9",
  headers: {
    Authorization: "Bearer {{token}}",
  },
  params: {
    term: "QTE9",
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

    req, err := http.NewRequest("GET", "/api/v3/quotes/search?term=QTE9", nil)
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
    $response = $client->request("GET", "/api/v3/quotes/search?term=QTE9", [
        'headers' => [
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "term": "QTE9"
},

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
    "name": "302 Error",
    "body": "Please submit a search term"
  },
  {
    "name": "200 Success",
    "body": {
      "current_page": 1,
      "data": [
        {
          "id": 66,
          "quote_number": "QTE9",
          "user_id": 31,
          "business_id": 57,
          "customer_id": 4348,
          "valid_until": "2023-09-26",
          "gross_amount": 360,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "amount_due": 360,
          "note": "",
          "created_at": "2024-11-21T18:39:15.000000Z",
          "updated_at": "2024-11-21T18:39:15.000000Z",
          "deleted_at": null,
          "fx_amount": 360,
          "fx_rate": 1,
          "base_currency": "BRL",
          "fx_currency": "BRL",
          "tag": "addtag",
          "invoice_color": "#FEC008",
          "logo_position": "left",
          "link": "https://built.ac/q/pXBxb8o",
          "items_sum_amount": 360,
          "customer": null,
          "taxes": [],
          "enc_id": "eyJpdiI6InAzbG9UdnNXdUdkc2IxeUNmcnFPQ0E9PSIsInZhbHVlIjoiNThUUjdDMzJXUUJ3WTdxTXBHSjFtdz09IiwibWFjIjoiMDY5ZTFiOWQzNzQzNWZkNzIwZmEyMzNkYjAxNWI3NmQzNzk1YWQwYTgxMjc3NTNiN2NhZDM0ZWRlYTY5MTExYSIsInRhZyI6IiJ9",
          "items": [
            {
              "id": 80,
              "quote_id": 66,
              "product_id": 1693,
              "tax_id": 0,
              "quantity": 4,
              "unit_price": 30,
              "amount": 360,
              "tax_amount": 0,
              "description": "",
              "created_at": null,
              "updated_at": null,
              "deleted_at": null,
              "discount_amount": 0,
              "discount_percent": 0,
              "formatedunit_price": "30.00",
              "taxed": false,
              "details": {
                "id": 1693,
                "name": "Sweets",
                "user_id": 31,
                "business_id": 57,
                "purchase_accountID": 8735,
                "description": "",
                "track_inventory": true,
                "type": "Product",
                "taxed": false,
                "tax_id": 0,
                "retail_item": 1,
                "buying_item": 1,
                "quantity": 4,
                "account_id": 8762,
                "unit_price": "2.00",
                "created_at": "2024-05-30T12:37:59.000000Z",
                "updated_at": "2024-11-21T09:29:43.000000Z",
                "code": "ITEM-001693",
                "selling_price": 5,
                "category_id": 40,
                "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
                "inventory_accountID": 8786,
                "deleted_at": null,
                "quantity_limit": 20,
                "discount_amount": 0,
                "discount_percent": 0,
                "archived": false,
                "category": "Uncategorised",
                "product_id": 1693,
                "applied_taxes": [],
                "unit_cost": 2,
                "net_amount": 5,
                "inventory_records": [],
                "rawUnit_price": 2,
                "real_unitPrice": 2.09,
                "display_unitPrice": 2.09,
                "invoice_amount": 0,
                "unformated_balance": "8.4",
                "balance": "8.4",
                "total_debit": "116.20",
                "total_credit": "107.82",
                "used": false
              },
              "type": "Product",
              "track_inventory": true,
              "taxes": null,
              "formatedamount": "360.00",
              "formatedTax_amount": "0.00",
              "name": "Sweets",
              "rawUnit_price": 30,
              "invoice_quantity": 12,
              "invoice_amount": 360,
              "amount_due": 360,
              "applied_taxes": []
            }
          ],
          "conversions": []
        }
      ],
      "first_page_url": "http://built.test/api/v3/quotes/search?term=QTE9&page=1",
      "from": 1,
      "last_page": 1,
      "last_page_url": "http://built.test/api/v3/quotes/search?term=QTE9&page=1",
      "links": [
        {
          "url": null,
          "label": "&laquo; Previous",
          "active": false
        },
        {
          "url": "http://built.test/api/v3/quotes/search?term=QTE9&page=1",
          "label": "1",
          "active": true
        },
        {
          "url": null,
          "label": "Next &raquo;",
          "active": false
        }
      ],
      "next_page_url": null,
      "path": "http://built.test/api/v3/quotes/search",
      "per_page": 50,
      "prev_page_url": null,
      "to": 1,
      "total": 1
    }
  }
]
```

</div>

</div>

### Share Quote By Email

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
              </tr><tr>
                  <td style="text-align:left">Accept
                    <div class="table-description">string</div>
                  </td>
                  <td style="text-align:left"><code>application/json</code></td>
                </tr>  </tbody>
</table>

#### Body params

<table>
  <tbody>
<tr>
          <td style="text-align:left">quote_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the quote you want to share
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">message
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">A message to add to the email
            </td>
        </tr><tr>
          <td style="text-align:left">other_emails
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">A comma separated string of emails to send the quote to
            </td>
        </tr><tr>
          <td style="text-align:left">send_tome
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Indicates if quote should be sent to business too
            </td>
        </tr></tbody>
</table>

</div>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/quotes/send-email",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    quote_id: 72,
    message: "",
    other_emails: "",
    send_tome: "",
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

    var jsonStr = []byte(`{
  "quote_id": 72,
  "message": "",
  "other_emails": "",
  "send_tome": ""
}`)
    req, err := http.NewRequest("POST", "/api/v3/quotes/send-email", bytes.NewBuffer(jsonStr))
    if err != nil {
        fmt.Println(err)
        return
    }
    req.Header = map[string][]string{
        "Accept": {"application/json"},
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
    $response = $client->request("POST", "/api/v3/quotes/send-email", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "quote_id": 72,
  "message": "",
  "other_emails": "",
  "send_tome": ""
},
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
    "name": "422 Validation Errors",
    "body": {
      "message": "The given data was invalid.",
      "errors": {
        "quote_id": ["The quote id field is required."]
      }
    }
  },
  {
    "name": "302 Errors",
    "body": "Quote not found"
  },
  {
    "name": "200 Success",
    "body": null
  }
]
```

</div>

</div>

### Send Quote SMS

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
              </tr><tr>
                  <td style="text-align:left">Accept
                    <div class="table-description">string</div>
                  </td>
                  <td style="text-align:left"><code>application/json</code></td>
                </tr>  </tbody>
</table>

#### Body params

<table>
  <tbody>
<tr>
          <td style="text-align:left">quote_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the quote to send
            </td>
        </tr><tr>
          <td style="text-align:left">recipient_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The phone number of the recipient
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/quotes/send-sms",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    quote_id: 72,
    recipient_number: "0248001000",
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

    var jsonStr = []byte(`{
  "quote_id": 72,
  "recipient_number": "0248001000"
}`)
    req, err := http.NewRequest("POST", "/api/v3/quotes/send-sms", bytes.NewBuffer(jsonStr))
    if err != nil {
        fmt.Println(err)
        return
    }
    req.Header = map[string][]string{
        "Accept": {"application/json"},
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
    $response = $client->request("POST", "/api/v3/quotes/send-sms", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "quote_id": 72,
  "recipient_number": "0248001000"
},
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
    "name": "422 Validation Errors",
    "body": {
      "message": "The given data was invalid.",
      "errors": {
        "quote_id": ["The quote id field is required."],
        "recipient_number": ["The recipient number field is required."]
      }
    }
  },
  {
    "name": "302 Errors",
    "body": "Quote not found"
  },
  {
    "name": "200 Success",
    "body": {
      "message": "Message sent successfully",
      "url": "https://built.ac/q/7lydWdn"
    }
  }
]
```

</div>

</div>

### Download Quote

<div class="api-content">

<div class="table-content no-scrollbar">

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">id
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The enc_id of the quote you want to download
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/quotes/:id/download-pdf",
  headers: {},
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

    req, err := http.NewRequest("GET", "/quotes/:id/download-pdf", nil)
    if err != nil {
        fmt.Println(err)
        return
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
    $response = $client->request("GET", "/quotes/:id/download-pdf", [



    ]);

    echo $response->getBody();
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>
```

```json
"[]"
```

</div>

</div>

### Print Quote

<div class="api-content">

<div class="table-content no-scrollbar">

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">id
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The enc_id of the quote you want to print
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/quotes/:id/print",
  headers: {},
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

    req, err := http.NewRequest("GET", "/quotes/:id/print", nil)
    if err != nil {
        fmt.Println(err)
        return
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
    $response = $client->request("GET", "/quotes/:id/print", [



    ]);

    echo $response->getBody();
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>
```

```json
"[]"
```

</div>

</div>
