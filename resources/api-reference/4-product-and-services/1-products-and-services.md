#meta-data title: Products And Services

## Products And Services

### Get items

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
  url: "/api/v3/items",
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

    req, err := http.NewRequest("GET", "/api/v3/items", nil)
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
    $response = $client->request("GET", "/api/v3/items", [
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
        "track_inventory": true,
        "type": "Product",
        "taxed": true,
        "tax_id": 56,
        "retail_item": 1,
        "buying_item": 1,
        "quantity": 7,
        "account_id": 8762,
        "unit_price": "150.00",
        "created_at": "2024-05-30T12:34:52.000000Z",
        "updated_at": "2024-11-21T09:47:57.000000Z",
        "code": "ITEM-001692",
        "selling_price": 205,
        "category_id": 40,
        "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
        "inventory_accountID": 8785,
        "deleted_at": null,
        "quantity_limit": 17,
        "discount_amount": 0,
        "discount_percent": 0,
        "archived": false,
        "category": "Uncategorised",
        "product_id": 1692,
        "applied_taxes": [56],
        "unit_cost": 150,
        "net_amount": 205,
        "inventory_records": [],
        "rawUnit_price": 150,
        "real_unitPrice": 161.82,
        "display_unitPrice": 161.82,
        "invoice_amount": 0,
        "unformated_balance": "1132.8",
        "balance": "1,132.8",
        "total_debit": "12,547.50",
        "total_credit": "11,414.73",
        "used": false
      },
      {
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
      {
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
      }
    ]
  }
]
```

</div>

</div>

### Search Items

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
          <td style="text-align:left">keyword
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The search term
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/items/search/:keyword",
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

    req, err := http.NewRequest("GET", "/api/v3/items/search/:keyword", nil)
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
    $response = $client->request("GET", "/api/v3/items/search/:keyword", [
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
        "track_inventory": true,
        "type": "Product",
        "taxed": true,
        "tax_id": 56,
        "retail_item": 1,
        "buying_item": 1,
        "quantity": 7,
        "account_id": 8762,
        "unit_price": "150.00",
        "created_at": "2024-05-30T12:34:52.000000Z",
        "updated_at": "2024-11-21T09:47:57.000000Z",
        "code": "ITEM-001692",
        "selling_price": 205,
        "category_id": 40,
        "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
        "inventory_accountID": 8785,
        "deleted_at": null,
        "quantity_limit": 17,
        "discount_amount": 0,
        "discount_percent": 0,
        "archived": false,
        "category": "Uncategorised",
        "product_id": 1692,
        "applied_taxes": [56],
        "unit_cost": 150,
        "net_amount": 205,
        "inventory_records": [],
        "rawUnit_price": 150,
        "real_unitPrice": 161.82,
        "display_unitPrice": 161.82,
        "invoice_amount": 0,
        "unformated_balance": "1132.8",
        "balance": "1,132.8",
        "total_debit": "12,547.50",
        "total_credit": "11,414.73",
        "used": false
      }
    ]
  }
]
```

</div>

</div>

### Get Inventory Items

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
  url: "/api/v3/inventory-items",
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

    req, err := http.NewRequest("GET", "/api/v3/inventory-items", nil)
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
    $response = $client->request("GET", "/api/v3/inventory-items", [
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
        "track_inventory": true,
        "type": "Product",
        "taxed": true,
        "tax_id": 56,
        "retail_item": 1,
        "buying_item": 1,
        "quantity": 7,
        "account_id": 8762,
        "unit_price": "150.00",
        "created_at": "2024-05-30T12:34:52.000000Z",
        "updated_at": "2024-11-21T09:47:57.000000Z",
        "code": "ITEM-001692",
        "selling_price": 205,
        "category_id": 40,
        "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
        "inventory_accountID": 8785,
        "deleted_at": null,
        "quantity_limit": 17,
        "discount_amount": 0,
        "discount_percent": 0,
        "archived": false,
        "category": "Uncategorised",
        "product_id": 1692,
        "applied_taxes": [56],
        "unit_cost": 150,
        "net_amount": 205,
        "inventory_records": [],
        "rawUnit_price": 150,
        "real_unitPrice": 161.82,
        "display_unitPrice": 161.82,
        "invoice_amount": 0,
        "unformated_balance": "1132.8",
        "balance": "1,132.8",
        "total_debit": "12,547.50",
        "total_credit": "11,414.73",
        "used": false
      },
      {
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
      }
    ]
  }
]
```

</div>

</div>

### Get Invoice Items

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
  url: "/api/v3/invoice-items",
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

    req, err := http.NewRequest("GET", "/api/v3/invoice-items", nil)
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
    $response = $client->request("GET", "/api/v3/invoice-items", [
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
        "track_inventory": true,
        "type": "Product",
        "taxed": true,
        "tax_id": 56,
        "retail_item": 1,
        "buying_item": 1,
        "quantity": 7,
        "account_id": 8762,
        "unit_price": 150,
        "created_at": "2024-05-30T12:34:52.000000Z",
        "updated_at": "2024-11-21T09:47:57.000000Z",
        "code": "ITEM-001692",
        "selling_price": 205,
        "category_id": 40,
        "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
        "inventory_accountID": 8785,
        "deleted_at": null,
        "quantity_limit": 17,
        "discount_amount": 0,
        "discount_percent": 0,
        "archived": false,
        "taxes": [],
        "applied_taxes": [56],
        "invoice_quantity": 1,
        "rawUnit_price": 205,
        "product_id": 1692,
        "invoice_amount": 205,
        "amount_due": 0
      },
      {
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
        "unit_price": 0,
        "created_at": "2024-05-08T12:47:47.000000Z",
        "updated_at": "2024-05-08T12:47:47.000000Z",
        "code": null,
        "selling_price": 0,
        "category_id": 40,
        "photo": "/img/item_photo.png",
        "inventory_accountID": null,
        "deleted_at": null,
        "quantity_limit": 1,
        "discount_amount": 0,
        "discount_percent": 0,
        "archived": false,
        "taxes": [],
        "applied_taxes": [],
        "invoice_quantity": 1,
        "rawUnit_price": 0,
        "product_id": 1691,
        "invoice_amount": 0,
        "amount_due": 0
      },
      {
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
        "unit_price": 2,
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
        "taxes": [],
        "applied_taxes": [],
        "invoice_quantity": 1,
        "rawUnit_price": 5,
        "product_id": 1693,
        "invoice_amount": 5,
        "amount_due": 0
      }
    ]
  }
]
```

</div>

</div>

### Get Bill Items

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
  url: "/api/v3/bill-items",
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

    req, err := http.NewRequest("GET", "/api/v3/bill-items", nil)
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
    $response = $client->request("GET", "/api/v3/bill-items", [
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
        "track_inventory": true,
        "type": "Product",
        "taxed": true,
        "tax_id": 56,
        "retail_item": 1,
        "buying_item": 1,
        "quantity": 7,
        "account_id": 8762,
        "unit_price": "150.00",
        "created_at": "2024-05-30T12:34:52.000000Z",
        "updated_at": "2024-11-21T09:47:57.000000Z",
        "code": "ITEM-001692",
        "selling_price": 205,
        "category_id": 40,
        "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
        "inventory_accountID": 8785,
        "deleted_at": null,
        "quantity_limit": 17,
        "discount_amount": 0,
        "discount_percent": 0,
        "archived": false,
        "category": "Uncategorised",
        "product_id": 1692,
        "applied_taxes": [56],
        "unit_cost": 150,
        "net_amount": 205,
        "inventory_records": [],
        "rawUnit_price": 205,
        "real_unitPrice": 161.82,
        "display_unitPrice": 161.82,
        "invoice_amount": 205,
        "unformated_balance": "1132.8",
        "balance": "1,132.8",
        "total_debit": "12,547.50",
        "total_credit": "11,414.73",
        "used": false,
        "taxes": [],
        "invoice_quantity": 1,
        "amount_due": 0
      },
      {
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
        "rawUnit_price": "0.00",
        "display_unitPrice": 0,
        "invoice_quantity": 1,
        "invoice_amount": "0.00",
        "used": false,
        "taxes": [],
        "amount_due": 0
      },
      {
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
        "rawUnit_price": 5,
        "real_unitPrice": 2.09,
        "display_unitPrice": 2.09,
        "invoice_amount": 5,
        "unformated_balance": "8.4",
        "balance": "8.4",
        "total_debit": "116.20",
        "total_credit": "107.82",
        "used": false,
        "taxes": [],
        "invoice_quantity": 1,
        "amount_due": 0
      }
    ]
  }
]
```

</div>

</div>

### Get POS Items

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
  url: "/api/v3/pos-items",
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

    req, err := http.NewRequest("GET", "/api/v3/pos-items", nil)
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
    $response = $client->request("GET", "/api/v3/pos-items", [
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
          "id": 1692,
          "name": "Books",
          "user_id": 31,
          "business_id": 57,
          "purchase_accountID": 8735,
          "description": "",
          "track_inventory": true,
          "type": "Product",
          "taxed": true,
          "tax_id": 56,
          "retail_item": 1,
          "buying_item": 1,
          "quantity": 7,
          "account_id": 8762,
          "unit_price": "150.00",
          "created_at": "2024-05-30T12:34:52.000000Z",
          "updated_at": "2024-11-21T09:47:57.000000Z",
          "code": "ITEM-001692",
          "selling_price": 205,
          "category_id": 40,
          "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
          "inventory_accountID": 8785,
          "deleted_at": null,
          "quantity_limit": 17,
          "discount_amount": 0,
          "discount_percent": 0,
          "archived": false,
          "category": "Uncategorised",
          "product_id": 1692,
          "applied_taxes": [56],
          "unit_cost": 150,
          "net_amount": 205,
          "inventory_records": [],
          "rawUnit_price": 150,
          "real_unitPrice": 161.82,
          "display_unitPrice": 161.82,
          "invoice_amount": 0,
          "unformated_balance": "1132.8",
          "balance": "1,132.8",
          "total_debit": "12,547.50",
          "total_credit": "11,414.73",
          "used": false
        },
        {
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
        {
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
        }
      ],
      "first_page_url": "http://built.test/api/v3/pos-items?page=1",
      "from": 1,
      "last_page": 1,
      "last_page_url": "http://built.test/api/v3/pos-items?page=1",
      "links": [
        {
          "url": null,
          "label": "&laquo; Previous",
          "active": false
        },
        {
          "url": "http://built.test/api/v3/pos-items?page=1",
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
      "path": "http://built.test/api/v3/pos-items",
      "per_page": 60,
      "prev_page_url": null,
      "to": 3,
      "total": 3
    }
  }
]
```

</div>

</div>

### Create Bulk Items

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
          <td style="text-align:left">items
            <div class="table-description">Array</div>
          </td>
          <td style="text-align:left">This is a json string of items to be created
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/items/bulk",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    items: [
      {
        name: "Desire-Lemongrass & Jasmine(253ml)",
        description: "DIFFUSER",
        unit_cost: 326.92,
        selling_price: 384.62,
        quantity: 1,
        track_inventory: "YES",
        type: "PRODUCT",
        selling_item: "YES",
        buying_item: "YES",
        category_id: 1,
        code: "LP45709",
        photo:
          "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
      },
    ],
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
  "items": [
    {
      "name": "Desire-Lemongrass & Jasmine(253ml)",
      "description": "DIFFUSER",
      "unit_cost": 326.92,
      "selling_price": 384.62,
      "quantity": 1,
      "track_inventory": "YES",
      "type": "PRODUCT",
      "selling_item": "YES",
      "buying_item": "YES",
      "category_id": 1,
      "code": "LP45709",
      "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg"
    }
  ]
}`)
    req, err := http.NewRequest("POST", "/api/v3/items/bulk", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/items/bulk", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "items": [
    {
      "name": "Desire-Lemongrass & Jasmine(253ml)",
      "description": "DIFFUSER",
      "unit_cost": 326.92,
      "selling_price": 384.62,
      "quantity": 1,
      "track_inventory": "YES",
      "type": "PRODUCT",
      "selling_item": "YES",
      "buying_item": "YES",
      "category_id": 1,
      "code": "LP45709",
      "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg"
    }
  ]
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
        "items": ["The items field is required."]
      }
    }
  },
  {
    "name": "302 Errors",
    "body": "You have exceeded the import limit, you can only import a maximum of 200 items at a time."
  },
  {
    "name": "200 Success",
    "body": [
      {
        "name": "Desire-Lemongrass & Jasmine(253ml)",
        "description": "DIFFUSER",
        "business_id": 57,
        "user_id": 31,
        "account_id": 8762,
        "quantity": 1,
        "track_inventory": true,
        "purchase_accountID": 8735,
        "inventory_accountID": 9039,
        "buying_item": true,
        "retail_item": true,
        "selling_price": 384.62,
        "unit_price": 326.92,
        "taxed": 0,
        "code": "XBA8-LP45709",
        "category_id": 1,
        "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
        "created_at": "2024-11-22T12:46:42.000000Z",
        "updated_at": "2024-11-22T12:46:42.000000Z",
        "id": 1857
      }
    ]
  }
]
```

</div>

</div>

### Create Item

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
          <td style="text-align:left">name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The name of the product
            </td>
        </tr><tr>
          <td style="text-align:left">type
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The type of item. Can be product, service or fixed asset
            </td>
        </tr><tr>
          <td style="text-align:left">unit_price
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The unit price of the item
            </td>
        </tr><tr>
          <td style="text-align:left">taxed
            <div class="table-description">boolean</div>
          </td>
          <td style="text-align:left">Should the item be taxed?
            </td>
        </tr><tr>
          <td style="text-align:left">retail_item
            <div class="table-description">boolean</div>
          </td>
          <td style="text-align:left">Is the item a retail item?
            </td>
        </tr><tr>
          <td style="text-align:left">buy_item
            <div class="table-description">boolean</div>
          </td>
          <td style="text-align:left">Do you buy this item?
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">code
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">A custom code to assign to the product
            </td>
        </tr><tr>
          <td style="text-align:left">description
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The description for the item
            </td>
        </tr><tr>
          <td style="text-align:left">quantity
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The quantity instock
            </td>
        </tr><tr>
          <td style="text-align:left">tax
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The tax id
            </td>
        </tr><tr>
          <td style="text-align:left">photo_path
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Url to the item image
            </td>
        </tr><tr>
          <td style="text-align:left">account_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the account to associate with this product
            </td>
        </tr><tr>
          <td style="text-align:left">purchase_accountID
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the purchase account
            </td>
        </tr><tr>
          <td style="text-align:left">category_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the category
            </td>
        </tr><tr>
          <td style="text-align:left">date
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The initial stock entry date
            </td>
        </tr><tr>
          <td style="text-align:left">quantity_limit
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The resock quantity limit
            </td>
        </tr><tr>
          <td style="text-align:left">selling_price
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The selling price of the item
            </td>
        </tr><tr>
          <td style="text-align:left">discount_amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The discount amount applied to the item
            </td>
        </tr><tr>
          <td style="text-align:left">discount_percent
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The discount percent applied to the item
            </td>
        </tr><tr>
          <td style="text-align:left">track_inventory
            <div class="table-description">boolean</div>
          </td>
          <td style="text-align:left">Should we track inventory?
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
  url: "/api/v3/items",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    code: "",
    name: "Front and rear brake cables 5",
    type: "product",
    unit_price: 100,
    description: "",
    quantity: 1,
    taxed: 0,
    tax: "",
    photo_path: "",
    retail_item: 0,
    buy_item: 1,
    account_id: "",
    purchase_accountID: "",
    category_id: "",
    date: "",
    quantity_limit: 0,
    selling_price: "",
    discount_amount: 0,
    discount_percent: 0,
    track_inventory: 1,
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
  "code": "",
  "name": "Front and rear brake cables 5",
  "type": "product",
  "unit_price": 100,
  "description": "",
  "quantity": 1,
  "taxed": 0,
  "tax": "",
  "photo_path": "",
  "retail_item": 0,
  "buy_item": 1,
  "account_id": "",
  "purchase_accountID": "",
  "category_id": "",
  "date": "",
  "quantity_limit": 0,
  "selling_price": "",
  "discount_amount": 0,
  "discount_percent": 0,
  "track_inventory": 1
}`)
    req, err := http.NewRequest("POST", "/api/v3/items", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/items", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "code": "",
  "name": "Front and rear brake cables 5",
  "type": "product",
  "unit_price": 100,
  "description": "",
  "quantity": 1,
  "taxed": 0,
  "tax": "",
  "photo_path": "",
  "retail_item": 0,
  "buy_item": 1,
  "account_id": "",
  "purchase_accountID": "",
  "category_id": "",
  "date": "",
  "quantity_limit": 0,
  "selling_price": "",
  "discount_amount": 0,
  "discount_percent": 0,
  "track_inventory": 1
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
        "name": ["The name field is required."],
        "type": ["The type field is required."],
        "unit_price": ["The unit price field is required."]
      }
    }
  },
  {
    "name": "302 Errors",
    "body": "Item name already exist"
  },
  {
    "name": "200 Success",
    "body": {
      "id": 1859,
      "name": "Front and rear brake cables",
      "user_id": 31,
      "business_id": 57,
      "purchase_accountID": 8735,
      "description": "",
      "track_inventory": false,
      "type": "product",
      "taxed": false,
      "tax_id": 0,
      "retail_item": 0,
      "buying_item": 1,
      "quantity": 1,
      "account_id": null,
      "unit_price": "100.00",
      "created_at": "2024-11-22T12:52:21.000000Z",
      "updated_at": "2024-11-22T12:52:21.000000Z",
      "code": "ITEM-001859",
      "selling_price": 0,
      "category_id": 40,
      "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
      "inventory_accountID": 0,
      "deleted_at": null,
      "quantity_limit": 1,
      "discount_amount": 0,
      "discount_percent": 0,
      "archived": false,
      "category": "Uncategorised",
      "product_id": 1859,
      "applied_taxes": [],
      "unit_cost": 100,
      "net_amount": 0,
      "inventory_records": [],
      "balance": 0,
      "total_debit": 0,
      "total_credit": 0,
      "rawUnit_price": 100,
      "display_unitPrice": 100,
      "invoice_quantity": 1,
      "invoice_amount": 100,
      "used": false
    }
  }
]
```

</div>

</div>

### Get Item

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

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the item
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/items/:id",
  headers: {
    Accept: "application/json",
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

    req, err := http.NewRequest("GET", "/api/v3/items/:id", nil)
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
    $response = $client->request("GET", "/api/v3/items/:id", [
        'headers' => [
            "Accept" => "application/json",
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
    "body": "Item not found"
  },
  {
    "name": "200 Success",
    "body": {
      "item": {
        "id": 1692,
        "name": "Books",
        "user_id": 31,
        "business_id": 57,
        "purchase_accountID": 8735,
        "description": "",
        "track_inventory": true,
        "type": "Product",
        "taxed": true,
        "tax_id": 56,
        "retail_item": 1,
        "buying_item": 1,
        "quantity": 7,
        "account_id": 8762,
        "unit_price": "150.00",
        "created_at": "2024-05-30T12:34:52.000000Z",
        "updated_at": "2024-11-21T09:47:57.000000Z",
        "code": "ITEM-001692",
        "selling_price": 205,
        "category_id": 40,
        "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
        "inventory_accountID": 8785,
        "deleted_at": null,
        "quantity_limit": 17,
        "discount_amount": 0,
        "discount_percent": 0,
        "archived": false,
        "category": "Uncategorised",
        "product_id": 1692,
        "applied_taxes": [56],
        "unit_cost": 150,
        "net_amount": 205,
        "inventory_records": [],
        "rawUnit_price": 150,
        "real_unitPrice": 161.82,
        "display_unitPrice": 161.82,
        "invoice_amount": 0,
        "unformated_balance": "1132.8",
        "balance": "1,132.8",
        "total_debit": "12,547.50",
        "total_credit": "11,414.73",
        "used": false
      },
      "total_sales": 0,
      "total_purchases": 0,
      "total_margin": 0,
      "from": "2024-11-22T00:00:00.000000Z",
      "to": "2024-11-22T00:00:00.000000Z",
      "transactions": {
        "sales": [],
        "purchase": []
      }
    }
  }
]
```

</div>

</div>

### Get Item Transactions

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

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the item
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/items/:id/transactions",
  headers: {
    Accept: "application/json",
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

    req, err := http.NewRequest("GET", "/api/v3/items/:id/transactions", nil)
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
    $response = $client->request("GET", "/api/v3/items/:id/transactions", [
        'headers' => [
            "Accept" => "application/json",
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
    "body": "Item not found"
  },
  {
    "name": "200 Success",
    "body": {
      "total_sales": 17105.2,
      "total_purchases": 10350,
      "total_margin": 6755.2,
      "from": null,
      "to": null,
      "transactions": {
        "sales": [
          {
            "id": 372,
            "invoice_id": 3643,
            "product_id": 1692,
            "tax_id": 0,
            "quantity": 1,
            "unit_price": 0,
            "realUnit_price": 161.82,
            "amount": 0,
            "tax_amount": 0,
            "description": "",
            "created_at": "2024-11-20 11:44:33",
            "updated_at": "2024-11-20 11:44:33",
            "deleted_at": null,
            "discount_amount": 0,
            "amount_due": 0,
            "discount_percent": 0,
            "issue_date": "2023-10-03",
            "document_number": "INV49",
            "rate": 1,
            "fx_amount": 0,
            "base_currency": null,
            "fx_currency": "GHS",
            "document_id": 3643,
            "route": "/invoices/"
          },
          {
            "id": 371,
            "invoice_id": 3641,
            "product_id": 1692,
            "tax_id": 0,
            "quantity": 1,
            "unit_price": 0,
            "realUnit_price": 161.82,
            "amount": 0,
            "tax_amount": 0,
            "description": "",
            "created_at": null,
            "updated_at": null,
            "deleted_at": null,
            "discount_amount": 0,
            "amount_due": 0,
            "discount_percent": 0,
            "issue_date": "2023-10-03",
            "document_number": "INV48",
            "rate": 1,
            "fx_amount": 0,
            "base_currency": "GHS",
            "fx_currency": "GHS",
            "document_id": 3641,
            "route": "/invoices/"
          },
          {
            "id": 363,
            "invoice_id": 3636,
            "product_id": 1692,
            "tax_id": 0,
            "quantity": 1,
            "unit_price": 205,
            "realUnit_price": 161.82,
            "amount": 205,
            "tax_amount": 44.895,
            "description": "",
            "created_at": null,
            "updated_at": null,
            "deleted_at": null,
            "discount_amount": 0,
            "amount_due": 249.895,
            "discount_percent": 0,
            "issue_date": "2024-10-25",
            "document_number": "INV44",
            "rate": 1,
            "fx_amount": 205,
            "base_currency": "GHS",
            "fx_currency": "GHS",
            "document_id": 3636,
            "route": "/invoices/"
          },
          {
            "id": 359,
            "invoice_id": 3631,
            "product_id": 1692,
            "tax_id": 0,
            "quantity": 1,
            "unit_price": 205,
            "realUnit_price": 162.81,
            "amount": 205,
            "tax_amount": 44.895,
            "description": "",
            "created_at": null,
            "updated_at": null,
            "deleted_at": null,
            "discount_amount": 0,
            "amount_due": 249.895,
            "discount_percent": 0,
            "issue_date": "2024-10-15",
            "document_number": "INV40",
            "rate": 1,
            "fx_amount": 205,
            "base_currency": "GHS",
            "fx_currency": "GHS",
            "document_id": 3631,
            "route": "/invoices/"
          },
          {
            "id": 346,
            "invoice_id": 3622,
            "product_id": 1692,
            "tax_id": 0,
            "quantity": 1,
            "unit_price": 205,
            "realUnit_price": 163.5,
            "amount": 205,
            "tax_amount": 40.4055,
            "description": "",
            "created_at": null,
            "updated_at": null,
            "deleted_at": null,
            "discount_amount": 20.5,
            "amount_due": 224.9055,
            "discount_percent": 10,
            "issue_date": "2024-07-18",
            "document_number": "INV35",
            "rate": 15.44,
            "fx_amount": 3165.2,
            "base_currency": "GHS",
            "fx_currency": "USD",
            "document_id": 3622,
            "route": "/invoices/"
          },
          {
            "id": 345,
            "invoice_id": 3621,
            "product_id": 1692,
            "tax_id": 0,
            "quantity": 2,
            "unit_price": 205,
            "realUnit_price": 327,
            "amount": 410,
            "tax_amount": 80.811,
            "description": "",
            "created_at": null,
            "updated_at": null,
            "deleted_at": null,
            "discount_amount": 41,
            "amount_due": 449.811,
            "discount_percent": 10,
            "issue_date": "2024-07-18",
            "document_number": "INV34",
            "rate": 1,
            "fx_amount": 410,
            "base_currency": "GHS",
            "fx_currency": "GHS",
            "document_id": 3621,
            "route": "/invoices/"
          },
          {
            "id": 328,
            "invoice_id": 3604,
            "product_id": 1692,
            "tax_id": 0,
            "quantity": 1,
            "unit_price": 205,
            "realUnit_price": 157.44,
            "amount": 205,
            "tax_amount": 44.895,
            "description": "",
            "created_at": null,
            "updated_at": null,
            "deleted_at": null,
            "discount_amount": 0,
            "amount_due": 249.895,
            "discount_percent": 0,
            "issue_date": "2024-07-11",
            "document_number": "INV17",
            "rate": 1,
            "fx_amount": 205,
            "base_currency": "GHS",
            "fx_currency": "GHS",
            "document_id": 3604,
            "route": "/invoices/"
          },
          {
            "id": 327,
            "invoice_id": 3603,
            "product_id": 1692,
            "tax_id": 0,
            "quantity": 4,
            "unit_price": 205,
            "realUnit_price": 629.68,
            "amount": 820,
            "tax_amount": 179.58,
            "description": "",
            "created_at": null,
            "updated_at": null,
            "deleted_at": null,
            "discount_amount": 0,
            "amount_due": 999.58,
            "discount_percent": 0,
            "issue_date": "2024-07-11",
            "document_number": "INV16",
            "rate": 1,
            "fx_amount": 820,
            "base_currency": "GHS",
            "fx_currency": "GHS",
            "document_id": 3603,
            "route": "/invoices/"
          },
          {
            "id": 326,
            "invoice_id": 3602,
            "product_id": 1692,
            "tax_id": 0,
            "quantity": 4,
            "unit_price": 205,
            "realUnit_price": 629.72,
            "amount": 820,
            "tax_amount": 179.58,
            "description": "",
            "created_at": null,
            "updated_at": null,
            "deleted_at": null,
            "discount_amount": 0,
            "amount_due": 999.58,
            "discount_percent": 0,
            "issue_date": "2024-07-11",
            "document_number": "INV15",
            "rate": 1,
            "fx_amount": 820,
            "base_currency": "GHS",
            "fx_currency": "GHS",
            "document_id": 3602,
            "route": "/invoices/"
          },
          {
            "id": 325,
            "invoice_id": 3601,
            "product_id": 1692,
            "tax_id": 0,
            "quantity": 12,
            "unit_price": 205,
            "realUnit_price": 1889.04,
            "amount": 2460,
            "tax_amount": 538.74,
            "description": "",
            "created_at": null,
            "updated_at": null,
            "deleted_at": null,
            "discount_amount": 0,
            "amount_due": 2998.74,
            "discount_percent": 0,
            "issue_date": "2024-07-11",
            "document_number": "INV14",
            "rate": 1,
            "fx_amount": 2460,
            "base_currency": "GHS",
            "fx_currency": "GHS",
            "document_id": 3601,
            "route": "/invoices/"
          },
          {
            "id": 324,
            "invoice_id": 3600,
            "product_id": 1692,
            "tax_id": 0,
            "quantity": 12,
            "unit_price": 205,
            "realUnit_price": 1889.04,
            "amount": 2460,
            "tax_amount": 538.74,
            "description": "",
            "created_at": null,
            "updated_at": null,
            "deleted_at": null,
            "discount_amount": 0,
            "amount_due": 2998.74,
            "discount_percent": 0,
            "issue_date": "2024-07-11",
            "document_number": "INV13",
            "rate": 1,
            "fx_amount": 2460,
            "base_currency": "GHS",
            "fx_currency": "GHS",
            "document_id": 3600,
            "route": "/invoices/"
          },
          {
            "id": 323,
            "invoice_id": 3599,
            "product_id": 1692,
            "tax_id": 0,
            "quantity": 12,
            "unit_price": 205,
            "realUnit_price": 1889.04,
            "amount": 2460,
            "tax_amount": 538.74,
            "description": "",
            "created_at": null,
            "updated_at": null,
            "deleted_at": null,
            "discount_amount": 0,
            "amount_due": 2998.74,
            "discount_percent": 0,
            "issue_date": "2024-07-11",
            "document_number": "INV12",
            "rate": 1,
            "fx_amount": 2460,
            "base_currency": "GHS",
            "fx_currency": "GHS",
            "document_id": 3599,
            "route": "/invoices/"
          },
          {
            "id": 322,
            "invoice_id": 3598,
            "product_id": 1692,
            "tax_id": 0,
            "quantity": 12,
            "unit_price": 205,
            "realUnit_price": 1889.04,
            "amount": 2460,
            "tax_amount": 538.74,
            "description": "",
            "created_at": null,
            "updated_at": null,
            "deleted_at": null,
            "discount_amount": 0,
            "amount_due": 2998.74,
            "discount_percent": 0,
            "issue_date": "2024-07-11",
            "document_number": "INV11",
            "rate": 1,
            "fx_amount": 2460,
            "base_currency": "GHS",
            "fx_currency": "GHS",
            "document_id": 3598,
            "route": "/invoices/"
          },
          {
            "id": 367,
            "invoice_id": 3,
            "product_id": 1692,
            "tax_id": 0,
            "quantity": 1,
            "unit_price": 0,
            "realUnit_price": 161.82,
            "amount": 0,
            "tax_amount": 0,
            "description": "",
            "created_at": "2024-11-20 11:07:46",
            "updated_at": "2024-11-20 11:07:46",
            "deleted_at": null,
            "discount_amount": 0,
            "amount_due": 0,
            "discount_percent": 0,
            "issue_date": "2023-10-03",
            "document_number": "INV2",
            "rate": 1,
            "fx_amount": 0,
            "base_currency": "GHS",
            "fx_currency": "GHS",
            "document_id": 3,
            "route": "/invoices/"
          },
          {
            "id": 194,
            "sale_id": 120,
            "product_id": 1692,
            "quantity": 1,
            "unit_price": 205,
            "realUnit_price": 161.82,
            "amount": 205,
            "tax_amount": 0,
            "tax_id": null,
            "description": "",
            "created_at": "2024-11-21 09:29:43",
            "updated_at": "2024-11-21 09:29:43",
            "deleted_at": null,
            "discount_amount": 0,
            "amount_due": 205,
            "issue_date": "2024-11-21",
            "document_number": "CAS5",
            "rate": 1,
            "fx_amount": 205,
            "fx_currency": "GHS",
            "base_currency": "GHS",
            "document_id": 120,
            "route": "/sales/"
          },
          {
            "id": 193,
            "sale_id": 119,
            "product_id": 1692,
            "quantity": 1,
            "unit_price": 205,
            "realUnit_price": 161.82,
            "amount": 205,
            "tax_amount": 44.894999999999996,
            "tax_id": null,
            "description": "dsadasd",
            "created_at": "2024-11-20 16:58:54",
            "updated_at": "2024-11-20 16:58:54",
            "deleted_at": null,
            "discount_amount": 0,
            "amount_due": 205,
            "issue_date": "2024-11-20",
            "document_number": "CAS4",
            "rate": 1,
            "fx_amount": 205,
            "fx_currency": "GHS",
            "base_currency": "GHS",
            "document_id": 119,
            "route": "/sales/"
          },
          {
            "id": 191,
            "sale_id": 117,
            "product_id": 1692,
            "quantity": 1,
            "unit_price": 205,
            "realUnit_price": 163.5,
            "amount": 205,
            "tax_amount": 6.1499999999999995,
            "tax_id": null,
            "description": "",
            "created_at": "2024-10-11 11:17:21",
            "updated_at": "2024-10-11 11:17:21",
            "deleted_at": null,
            "discount_amount": 0,
            "amount_due": 205,
            "issue_date": "2024-10-11",
            "document_number": "CAS2",
            "rate": 1,
            "fx_amount": 205,
            "fx_currency": "GHS",
            "base_currency": "GHS",
            "document_id": 117,
            "route": "/sales/"
          },
          {
            "id": 178,
            "sale_id": 111,
            "product_id": 1692,
            "quantity": 4,
            "unit_price": 205,
            "realUnit_price": 654,
            "amount": 820,
            "tax_amount": 179.57999999999998,
            "tax_id": null,
            "description": "",
            "created_at": "2024-07-17 10:19:40",
            "updated_at": "2024-07-17 10:19:40",
            "deleted_at": null,
            "discount_amount": 0,
            "amount_due": 820,
            "issue_date": "2024-07-17",
            "document_number": "CAS1",
            "rate": 1,
            "fx_amount": 820,
            "fx_currency": "GHS",
            "base_currency": "GHS",
            "document_id": 111,
            "route": "/sales/"
          }
        ],
        "purchase": [
          {
            "id": 42,
            "bill_id": 209,
            "product_id": 1692,
            "quantity": 1,
            "unit_price": 150,
            "amount": 150,
            "tax_amount": 0,
            "supplier_tax": 0,
            "description": "",
            "created_at": "2024-10-22 10:52:16",
            "updated_at": "2024-10-22 10:52:16",
            "name": "Books",
            "purchase_accountID": 8735,
            "issue_date": "2024-10-22",
            "document_number": "BILL6",
            "fx_amount": 150,
            "fx_currency": "GHS",
            "base_currency": "GHS",
            "document_id": 209,
            "route": "/expenses/bills/"
          },
          {
            "id": 36,
            "bill_id": 204,
            "product_id": 1692,
            "quantity": 1,
            "unit_price": 150,
            "amount": 150,
            "tax_amount": 4.5,
            "supplier_tax": 0,
            "description": "",
            "created_at": "2024-10-11 11:17:58",
            "updated_at": "2024-10-11 11:17:58",
            "name": "Books",
            "purchase_accountID": 8735,
            "issue_date": "2024-10-11",
            "document_number": "BILL4",
            "fx_amount": 150,
            "fx_currency": "GHS",
            "base_currency": "GHS",
            "document_id": 204,
            "route": "/expenses/bills/"
          },
          {
            "id": 34,
            "bill_id": 203,
            "product_id": 1692,
            "quantity": 20,
            "unit_price": 150,
            "amount": 3000,
            "tax_amount": 747,
            "supplier_tax": 0,
            "description": "",
            "created_at": "2024-07-17 10:18:58",
            "updated_at": "2024-07-17 10:18:58",
            "name": "Books",
            "purchase_accountID": 8735,
            "issue_date": "2024-07-17",
            "document_number": "BILL3",
            "fx_amount": 3000,
            "fx_currency": "GHS",
            "base_currency": "GHS",
            "document_id": 203,
            "route": "/expenses/bills/"
          },
          {
            "id": 32,
            "bill_id": 202,
            "product_id": 1692,
            "quantity": 40,
            "unit_price": 150,
            "amount": 6000,
            "tax_amount": 1314,
            "supplier_tax": 0,
            "description": "",
            "created_at": "2024-05-30 12:38:26",
            "updated_at": "2024-05-30 12:38:26",
            "name": "Books",
            "purchase_accountID": 8735,
            "issue_date": "2024-04-10",
            "document_number": "BILL2",
            "fx_amount": 6000,
            "fx_currency": "GHS",
            "base_currency": "GHS",
            "document_id": 202,
            "route": "/expenses/bills/"
          },
          {
            "id": 31,
            "bill_id": 201,
            "product_id": 1692,
            "quantity": 7,
            "unit_price": 150,
            "amount": 1050,
            "tax_amount": 229.95,
            "supplier_tax": 0,
            "description": "",
            "created_at": "2024-05-30 12:36:40",
            "updated_at": "2024-05-30 12:36:40",
            "name": "Books",
            "purchase_accountID": 8735,
            "issue_date": "2023-05-18",
            "document_number": "BILL1",
            "fx_amount": 1050,
            "fx_currency": "GHS",
            "base_currency": "GHS",
            "document_id": 201,
            "route": "/expenses/bills/"
          }
        ]
      }
    }
  }
]
```

</div>

</div>

### Update Item

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
          <td style="text-align:left">name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The name of the product
            </td>
        </tr><tr>
          <td style="text-align:left">type
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The type of item. Can be product or service
            </td>
        </tr><tr>
          <td style="text-align:left">unit_price
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The unit price of the item
            </td>
        </tr><tr>
          <td style="text-align:left">taxed
            <div class="table-description">boolean</div>
          </td>
          <td style="text-align:left">Should the item be taxed?
            </td>
        </tr><tr>
          <td style="text-align:left">retail_item
            <div class="table-description">boolean</div>
          </td>
          <td style="text-align:left">Is the item a retail item?
            </td>
        </tr><tr>
          <td style="text-align:left">buy_item
            <div class="table-description">boolean</div>
          </td>
          <td style="text-align:left">Do you buy this item?
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">code
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">A custom code to assign to the product
            </td>
        </tr><tr>
          <td style="text-align:left">description
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The description for the item
            </td>
        </tr><tr>
          <td style="text-align:left">quantity
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The quantity instock
            </td>
        </tr><tr>
          <td style="text-align:left">tax
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The tax id
            </td>
        </tr><tr>
          <td style="text-align:left">photo_path
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Url to the item image
            </td>
        </tr><tr>
          <td style="text-align:left">account_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the account to associate with this product
            </td>
        </tr><tr>
          <td style="text-align:left">purchase_accountID
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the purchase account
            </td>
        </tr><tr>
          <td style="text-align:left">category_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the category
            </td>
        </tr><tr>
          <td style="text-align:left">date
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The initial stock entry date
            </td>
        </tr><tr>
          <td style="text-align:left">quantity_limit
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The resock quantity limit
            </td>
        </tr><tr>
          <td style="text-align:left">selling_price
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The selling price of the item
            </td>
        </tr><tr>
          <td style="text-align:left">discount_amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The discount amount applied to the item
            </td>
        </tr><tr>
          <td style="text-align:left">discount_percent
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The discount percent applied to the item
            </td>
        </tr><tr>
          <td style="text-align:left">track_inventory
            <div class="table-description">boolean</div>
          </td>
          <td style="text-align:left">Should we track inventory?
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
          <td style="text-align:left">The id of the item
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/items/:id",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    code: "",
    name: "Front and rear brake cables + 5",
    type: "product",
    unit_price: 100,
    description: "",
    quantity: 1,
    taxed: 0,
    tax: "",
    photo_path: "",
    retail_item: 0,
    buy_item: 1,
    account_id: "",
    purchase_accountID: "",
    category_id: "",
    date: "",
    quantity_limit: 0,
    selling_price: "",
    discount_amount: 0,
    discount_percent: 0,
    track_inventory: 1,
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
  "code": "",
  "name": "Front and rear brake cables + 5",
  "type": "product",
  "unit_price": 100,
  "description": "",
  "quantity": 1,
  "taxed": 0,
  "tax": "",
  "photo_path": "",
  "retail_item": 0,
  "buy_item": 1,
  "account_id": "",
  "purchase_accountID": "",
  "category_id": "",
  "date": "",
  "quantity_limit": 0,
  "selling_price": "",
  "discount_amount": 0,
  "discount_percent": 0,
  "track_inventory": 1
}`)
    req, err := http.NewRequest("POST", "/api/v3/items/:id", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/items/:id", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "code": "",
  "name": "Front and rear brake cables + 5",
  "type": "product",
  "unit_price": 100,
  "description": "",
  "quantity": 1,
  "taxed": 0,
  "tax": "",
  "photo_path": "",
  "retail_item": 0,
  "buy_item": 1,
  "account_id": "",
  "purchase_accountID": "",
  "category_id": "",
  "date": "",
  "quantity_limit": 0,
  "selling_price": "",
  "discount_amount": 0,
  "discount_percent": 0,
  "track_inventory": 1
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
        "name": ["The name field is required."],
        "type": ["The type field is required."],
        "unit_price": ["The unit price field is required."]
      }
    }
  },
  {
    "name": "302 Error",
    "body": "Item not found."
  },
  {
    "name": "200 Success",
    "body": {
      "id": 1858,
      "name": "Front and rear brake cables + 5",
      "user_id": 31,
      "business_id": 57,
      "purchase_accountID": 8735,
      "description": "",
      "track_inventory": true,
      "type": "product",
      "taxed": false,
      "tax_id": 0,
      "retail_item": 0,
      "buying_item": 1,
      "quantity": 1,
      "account_id": null,
      "unit_price": "100.00",
      "created_at": "2024-11-22T12:50:37.000000Z",
      "updated_at": "2024-11-22T14:53:48.000000Z",
      "code": "",
      "selling_price": 0,
      "category_id": 40,
      "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
      "inventory_accountID": 9041,
      "deleted_at": null,
      "quantity_limit": 1,
      "discount_amount": 0,
      "discount_percent": 0,
      "archived": false,
      "category": "Uncategorised",
      "product_id": 1858,
      "applied_taxes": [],
      "unit_cost": 100,
      "net_amount": 0,
      "inventory_records": [],
      "rawUnit_price": 100,
      "real_unitPrice": 100,
      "display_unitPrice": 100,
      "invoice_amount": 0,
      "unformated_balance": "100.0",
      "balance": "100.0",
      "total_debit": "100.00",
      "total_credit": "0.00",
      "used": false
    }
  }
]
```

</div>

</div>

### Delete Item

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

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the item
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "DELETE",
  url: "/api/v3/items/:id",
  headers: {
    Accept: "application/json",
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

    req, err := http.NewRequest("DELETE", "/api/v3/items/:id", nil)
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
    $response = $client->request("DELETE", "/api/v3/items/:id", [
        'headers' => [
            "Accept" => "application/json",
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
    "body": "This item was used in some transactions, find and remove those transactions before you can delete this item"
  },
  {
    "name": "200 Success",
    "body": null
  }
]
```

</div>

</div>

### Archive/Unarchive Item

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

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the item
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/items/:id/archive",
  headers: {
    Accept: "application/json",
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

    req, err := http.NewRequest("POST", "/api/v3/items/:id/archive", nil)
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
    $response = $client->request("POST", "/api/v3/items/:id/archive", [
        'headers' => [
            "Accept" => "application/json",
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
    "body": "Item not found"
  },
  {
    "name": "200 Success",
    "body": {
      "id": 1858,
      "name": "Front and rear brake cables + 5",
      "user_id": 31,
      "business_id": 57,
      "purchase_accountID": 8735,
      "description": "",
      "track_inventory": true,
      "type": "product",
      "taxed": 0,
      "tax_id": 0,
      "retail_item": 0,
      "buying_item": 1,
      "quantity": 1,
      "account_id": null,
      "unit_price": 100,
      "created_at": "2024-11-22T12:50:37.000000Z",
      "updated_at": "2024-11-22T14:57:25.000000Z",
      "code": "",
      "selling_price": 0,
      "category_id": 40,
      "photo": "https://built-storage.ams3.cdn.digitaloceanspaces.com/Built/photo_placeholder.jpg",
      "inventory_accountID": 9041,
      "deleted_at": null,
      "quantity_limit": 1,
      "discount_amount": 0,
      "discount_percent": 0,
      "archived": true
    }
  }
]
```

</div>

</div>

### Stock History

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
          <td style="text-align:left">The id of the item
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/items/:id/stock-history",
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

    req, err := http.NewRequest("GET", "/api/v3/items/:id/stock-history", nil)
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
    $response = $client->request("GET", "/api/v3/items/:id/stock-history", [
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
    "body": {
      "message": "Item not found!"
    }
  },
  {
    "name": "200 Success",
    "body": {
      "history": [
        {
          "date": "2024-11-21",
          "increments": 0,
          "decrements": 1,
          "item_quantity": 7
        },
        {
          "date": "2024-11-20",
          "increments": 0,
          "decrements": 1,
          "item_quantity": 8
        },
        {
          "date": "2024-10-25",
          "increments": 0,
          "decrements": 1,
          "item_quantity": 9
        },
        {
          "date": "2024-10-22",
          "increments": 1,
          "decrements": 0,
          "item_quantity": 10
        },
        {
          "date": "2024-10-15",
          "increments": 0,
          "decrements": 1,
          "item_quantity": 9
        },
        {
          "date": "2024-10-11",
          "increments": 1,
          "decrements": 1,
          "item_quantity": 10
        },
        {
          "date": "2024-07-18",
          "increments": 0,
          "decrements": 3,
          "item_quantity": 10
        },
        {
          "date": "2024-07-17",
          "increments": 20,
          "decrements": 4,
          "item_quantity": 13
        },
        {
          "date": "2024-07-11",
          "increments": 0,
          "decrements": 57,
          "item_quantity": -3
        },
        {
          "date": "2024-05-30",
          "increments": 10,
          "decrements": 0,
          "item_quantity": 54
        },
        {
          "date": "2024-04-10",
          "increments": 40,
          "decrements": 0,
          "item_quantity": 44
        },
        {
          "date": "2023-10-03",
          "increments": 0,
          "decrements": 2,
          "item_quantity": 4
        },
        {
          "date": "2023-05-18",
          "increments": 7,
          "decrements": 0,
          "item_quantity": 6
        }
      ],
      "total_increments": 78,
      "total_decrements": 71,
      "current_quantity": -1,
      "initial_entry": {
        "date": "2024-05-30T12:34:52.000000Z",
        "increments": -1,
        "decrements": 0,
        "item_quantity": -1
      }
    }
  }
]
```

</div>

</div>

### Get Item Raw Materials

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
          <td style="text-align:left">The id of the item
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/items/:id/raw-materials",
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

    req, err := http.NewRequest("GET", "/api/v3/items/:id/raw-materials", nil)
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
    $response = $client->request("GET", "/api/v3/items/:id/raw-materials", [
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
    "body": "Item not found!"
  },
  {
    "name": "200 Success",
    "body": []
  }
]
```

</div>

</div>

### Adjust From Production

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
          <td style="text-align:left">materials[0][id]
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the item
            </td>
        </tr><tr>
          <td style="text-align:left">materials[0][usedQuantity]
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The quantity used
            </td>
        </tr><tr>
          <td style="text-align:left">product_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the product being adjusted
            </td>
        </tr><tr>
          <td style="text-align:left">date
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The date the adjustment was made
            </td>
        </tr><tr>
          <td style="text-align:left">adjustment_quantity
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The quantity to  be adjusted
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">materials[0][name]
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The name of the item
            </td>
        </tr><tr>
          <td style="text-align:left">materials[0][unit_cost]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The unit cost for the item
            </td>
        </tr><tr>
          <td style="text-align:left">materials[0][inventory_accountID]
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The inventory account id of the item
            </td>
        </tr><tr>
          <td style="text-align:left">materials[0][quantity]
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The quantity of the item
            </td>
        </tr><tr>
          <td style="text-align:left">note
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">A note for the adjustment
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
  url: "/api/v3/items/adjust/from-production",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    "materials[0][id]": 1856,
    "materials[0][name]": "Flour",
    "materials[0][usedQuantity]": 0,
    "materials[0][unit_cost]": 700,
    "materials[0][inventory_accountID]": 1,
    "materials[0][quantity]": 1,
    product_id: 1692,
    date: "2024-10-23",
    adjustment_quantity: 3,
    note: "",
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
  "materials[0][id]": 1856,
  "materials[0][name]": "Flour",
  "materials[0][usedQuantity]": 0,
  "materials[0][unit_cost]": 700,
  "materials[0][inventory_accountID]": 1,
  "materials[0][quantity]": 1,
  "product_id": 1692,
  "date": "2024-10-23",
  "adjustment_quantity": 3,
  "note": ""
}`)
    req, err := http.NewRequest("POST", "/api/v3/items/adjust/from-production", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/items/adjust/from-production", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "materials[0][id]": 1856,
  "materials[0][name]": "Flour",
  "materials[0][usedQuantity]": 0,
  "materials[0][unit_cost]": 700,
  "materials[0][inventory_accountID]": 1,
  "materials[0][quantity]": 1,
  "product_id": 1692,
  "date": "2024-10-23",
  "adjustment_quantity": 3,
  "note": ""
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
        "materials": ["The materials field is required."],
        "product_id": ["The product id field is required."],
        "date": ["The date field is required."],
        "adjustment_quantity": ["The adjustment quantity field is required."]
      }
    }
  },
  {
    "name": "302 Errors",
    "body": "Item not found"
  },
  {
    "name": "200 Success",
    "body": {
      "business_id": 57,
      "type": "increase",
      "item_id": "1692",
      "quantity": 3,
      "amount": 0,
      "unit_price": 0,
      "account_id": 9038,
      "date": "2024-10-23",
      "note": "",
      "created_at": "2024-11-22T15:34:26.000000Z",
      "updated_at": "2024-11-22T15:34:26.000000Z",
      "id": 21
    }
  }
]
```

</div>

</div>

### Single Item Advanced Adjustment

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
          <td style="text-align:left">type
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The type of adjustment. Can be increase or decrease
            </td>
        </tr><tr>
          <td style="text-align:left">account_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The account id to record the adjustment
            </td>
        </tr><tr>
          <td style="text-align:left">item_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The item id
            </td>
        </tr><tr>
          <td style="text-align:left">quantity
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The quantity we are adjusting
            </td>
        </tr><tr>
          <td style="text-align:left">unit_price
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The unit price to apply to the adjustment
            </td>
        </tr><tr>
          <td style="text-align:left">amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The amount for the adjustment
            </td>
        </tr><tr>
          <td style="text-align:left">adjustment_quantity
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The quantity adjusted
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">note
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">A note for the adjustment
            </td>
        </tr><tr>
          <td style="text-align:left">date
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The date the adjustment happened
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
  url: "/api/v3/items/adjust",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    type: "increase",
    account_id: 8735,
    item_id: 1692,
    quantity: 359,
    unit_price: 11.65,
    amount: 11.65,
    note: "",
    date: "2024-11-12",
    adjustment_quantity: 1,
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
  "type": "increase",
  "account_id": 8735,
  "item_id": 1692,
  "quantity": 359,
  "unit_price": 11.65,
  "amount": 11.65,
  "note": "",
  "date": "2024-11-12",
  "adjustment_quantity": 1
}`)
    req, err := http.NewRequest("POST", "/api/v3/items/adjust", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/items/adjust", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "type": "increase",
  "account_id": 8735,
  "item_id": 1692,
  "quantity": 359,
  "unit_price": 11.65,
  "amount": 11.65,
  "note": "",
  "date": "2024-11-12",
  "adjustment_quantity": 1
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
        "item_id": ["The item id field is required."],
        "account_id": ["The account id field is required."],
        "quantity": ["The quantity field is required."],
        "unit_price": ["The unit price field is required."],
        "amount": ["The amount field is required."],
        "adjustment_quantity": ["The adjustment quantity field is required."],
        "type": ["The type field is required."]
      }
    }
  },
  {
    "name": "302 Errors",
    "body": "Item not found"
  },
  {
    "name": "200 Success",
    "body": {
      "business_id": 57,
      "type": "increase",
      "item_id": 1692,
      "quantity": "1",
      "amount": "11.65",
      "unit_price": "11.65",
      "account_id": "8735",
      "date": "2024-11-12",
      "note": "",
      "created_at": "2024-11-22T15:22:16.000000Z",
      "updated_at": "2024-11-22T15:22:16.000000Z",
      "id": 17
    }
  }
]
```

</div>

</div>
