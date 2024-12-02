#meta-data title: Products And Services Reports

## Products And Services Reports

### Get Income By Products

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
          <td style="text-align:left">The date to filter from
            </td>
        </tr><tr>
          <td style="text-align:left">to
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The date to filter to
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/reports/products/:from/:to",
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

    req, err := http.NewRequest("GET", "/api/v3/reports/products/:from/:to", nil)
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
    $response = $client->request("GET", "/api/v3/reports/products/:from/:to", [
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
    "body": [
      {
        "id": 1692,
        "name": "Books",
        "user_id": 31,
        "business_id": 57,
        "purchase_accountID": 8735,
        "description": "",
        "track_inventory": 1,
        "type": "Product",
        "taxed": 1,
        "tax_id": 56,
        "retail_item": 1,
        "buying_item": 1,
        "quantity": 8,
        "account_id": 8762,
        "unit_price": 150,
        "created_at": "2024-05-30 12:34:52",
        "updated_at": "2024-11-26 12:42:22",
        "code": "ITEM-001692",
        "selling_price": 205,
        "category_id": 40,
        "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
        "inventory_accountID": 8785,
        "deleted_at": null,
        "quantity_limit": 17,
        "discount_amount": 0,
        "discount_percent": 0,
        "archived": 0,
        "invoice_amount": 0,
        "invoice_quantity": "0",
        "sales_amount": 410,
        "sales_quantity": "2",
        "purchase_amount": 150,
        "purchase_quantity": "1",
        "balance": 1296.2700000000004
      },
      {
        "id": 1693,
        "name": "Sweets",
        "user_id": 31,
        "business_id": 57,
        "purchase_accountID": 8735,
        "description": "",
        "track_inventory": 1,
        "type": "Product",
        "taxed": 0,
        "tax_id": 0,
        "retail_item": 1,
        "buying_item": 1,
        "quantity": 4,
        "account_id": 8762,
        "unit_price": 2,
        "created_at": "2024-05-30 12:37:59",
        "updated_at": "2024-11-21 09:29:43",
        "code": "ITEM-001693",
        "selling_price": 5,
        "category_id": 40,
        "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
        "inventory_accountID": 8786,
        "deleted_at": null,
        "quantity_limit": 20,
        "discount_amount": 0,
        "discount_percent": 0,
        "archived": 0,
        "invoice_amount": 0,
        "invoice_quantity": "0",
        "sales_amount": 5,
        "sales_quantity": "1",
        "purchase_amount": 0,
        "purchase_quantity": "0",
        "balance": 8.380000000000004
      }
    ]
  }
]
```

</div>

</div>

### Get Income By Categories

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
          <td style="text-align:left">The date to filter from
            </td>
        </tr><tr>
          <td style="text-align:left">to
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The date to filter to
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/reports/categories/:from/:to",
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

    req, err := http.NewRequest("GET", "/api/v3/reports/categories/:from/:to", nil)
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
    $response = $client->request("GET", "/api/v3/reports/categories/:from/:to", [
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
    "body": [
      {
        "id": 40,
        "user_id": 31,
        "business_id": 57,
        "name": "Uncategorised",
        "description": "default category",
        "created_at": "2024-05-08 12:47:46",
        "updated_at": "2024-05-08 12:47:46",
        "archived": 0,
        "item_count": 3,
        "sales_quantity": "4",
        "purchases_quantity": "1",
        "sales": 415,
        "purchases": 150
      }
    ]
  }
]
```

</div>

</div>
