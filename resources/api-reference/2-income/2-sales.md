#meta-data title: Sales

## Sales

### Get sales

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

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/sales",
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

    req, err := http.NewRequest("GET", "/api/v3/sales", nil)
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
    $response = $client->request("GET", "/api/v3/sales", [
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
    "name": "200 Success",
    "body": {
      "current_page": 1,
      "data": [
        {
          "id": 117,
          "sales_number": "CAS2",
          "user_id": 31,
          "business_id": 57,
          "account_id": 8726,
          "entry_date": "2024-10-11",
          "gross_amount": 205,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "amount_due": 211.15,
          "note": "",
          "created_at": "2024-10-11T11:17:21.000000Z",
          "updated_at": "2024-10-11T11:17:21.000000Z",
          "tag": "",
          "deleted_at": null,
          "server_name": "Someone Somewhere",
          "balance": 0,
          "pos_sale": false,
          "taxes": [
            {
              "id": 55,
              "user_id": 31,
              "business_id": 57,
              "name": "VAT Flat",
              "display_name": "VAT Flat",
              "description": null,
              "code": null,
              "rate": 3,
              "type": "Flat",
              "recoverable": 0,
              "show_code": 0,
              "created_at": "2024-05-08T12:47:47.000000Z",
              "updated_at": "2024-05-08T12:47:47.000000Z",
              "account_id": 8766,
              "deleted_at": null,
              "used": true,
              "total_amount": 205,
              "tax_amount": 6.15
            }
          ],
          "tax_amount": 0,
          "payments": [
            {
              "id": 111,
              "amount": 211.15,
              "account_id": 8726,
              "sale_id": 117,
              "created_at": "2024-10-11T11:17:21.000000Z",
              "updated_at": "2024-10-11T11:17:21.000000Z"
            }
          ],
          "enc_id": "eyJpdiI6Im9oMGVPOXJPbkFaV014dkZxWEw1UWc9PSIsInZhbHVlIjoicEZ1amR4SWcxWFllQXJZVzlod0NVZz09IiwibWFjIjoiYTEzMDI3MmQ4ZWI3NGIxMDEyYmQzMmExMjY0YmNlMzBkMDU5MDQ2MGMyOTNlYWYyOTBlYTk5Njc2NDE5YzQwMyIsInRhZyI6IiJ9"
        },
        {
          "id": 111,
          "sales_number": "CAS1",
          "user_id": 31,
          "business_id": 57,
          "account_id": 8726,
          "entry_date": "2024-07-17",
          "gross_amount": 820,
          "discount_amount": 0,
          "discount_percentage": "0.0",
          "amount_due": 999.58,
          "note": "",
          "created_at": "2024-07-17T10:19:40.000000Z",
          "updated_at": "2024-07-17T10:19:40.000000Z",
          "tag": "",
          "deleted_at": null,
          "server_name": "Someone Somewhere",
          "balance": 0,
          "pos_sale": false,
          "taxes": [
            {
              "id": 56,
              "user_id": 31,
              "business_id": 57,
              "name": "VAT Standard",
              "display_name": "VAT Standard(2023)",
              "description": "",
              "code": null,
              "rate": 15,
              "type": "Compound",
              "recoverable": 1,
              "show_code": 0,
              "created_at": "2024-05-30T10:56:19.000000Z",
              "updated_at": "2024-05-30T10:56:19.000000Z",
              "account_id": 8779,
              "deleted_at": null,
              "sub_tax": [
                {
                  "id": 57,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "NHIL",
                  "display_name": "NHIL",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:41.000000Z",
                  "updated_at": "2024-05-30T10:57:41.000000Z",
                  "account_id": 8780,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 58,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "GETFUND",
                  "display_name": "GETFUND",
                  "description": "",
                  "code": null,
                  "rate": 2.5,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:57:57.000000Z",
                  "updated_at": "2024-05-30T10:57:57.000000Z",
                  "account_id": 8781,
                  "deleted_at": null,
                  "used": true
                },
                {
                  "id": 59,
                  "user_id": 31,
                  "business_id": 57,
                  "name": "COVID-19 Health Recovery Levy",
                  "display_name": "COVID-19 Health Recovery Levy",
                  "description": "",
                  "code": null,
                  "rate": 1,
                  "type": "Simple",
                  "recoverable": 0,
                  "show_code": 0,
                  "created_at": "2024-05-30T10:58:23.000000Z",
                  "updated_at": "2024-05-30T10:58:23.000000Z",
                  "account_id": 8782,
                  "deleted_at": null,
                  "used": true
                }
              ],
              "sub_rate": 6,
              "used": true,
              "total_amount": 820,
              "tax_amount": 130.38
            }
          ],
          "tax_amount": 0,
          "payments": [
            {
              "id": 106,
              "amount": 999.58,
              "account_id": 8726,
              "sale_id": 111,
              "created_at": "2024-07-17T10:19:40.000000Z",
              "updated_at": "2024-07-17T10:19:40.000000Z"
            }
          ],
          "enc_id": "eyJpdiI6ImMvOU56dkNCTCtaUG80NEU2S2E2TFE9PSIsInZhbHVlIjoicllLZngvSHNPZ25uSzBObXZuUkJvZz09IiwibWFjIjoiNDY2ZjY2MmJiZGNhZTRlZWM1ZDIxZDYyMzAyYmFmZmU0ZWQyZTIzMjIzNTRhOWVhM2FmOTkxYzI2ZGUwNDg0OSIsInRhZyI6IiJ9"
        }
      ],
      "first_page_url": "http://built.test/api/v3/sales?page=1",
      "from": 1,
      "last_page": 1,
      "last_page_url": "http://built.test/api/v3/sales?page=1",
      "links": [
        {
          "url": null,
          "label": "&laquo; Previous",
          "active": false
        },
        {
          "url": "http://built.test/api/v3/sales?page=1",
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
      "path": "http://built.test/api/v3/sales",
      "per_page": 50,
      "prev_page_url": null,
      "to": 2,
      "total": 2
    }
  }
]
```

</div>

</div>

### Filter sales

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

#### Query Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">from
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The start date to filter from
            </td>
        </tr><tr>
          <td style="text-align:left">to
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The end date to filter to
            </td>
        </tr></tbody>
</table><span class="info-card">All query parameters are optional</span>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/filter-sales?from&to",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },
  params: {
    from: "example",
    to: "example",
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

    req, err := http.NewRequest("GET", "/api/v3/filter-sales?from&to", nil)
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
    $response = $client->request("GET", "/api/v3/filter-sales?from&to", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "from": "example",
  "to": "example"
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
    "name": "200 Success",
    "body": [
      {
        "id": 120,
        "sales_number": "CAS5",
        "user_id": 31,
        "business_id": 57,
        "account_id": 8728,
        "entry_date": "2024-11-21",
        "gross_amount": 210,
        "discount_amount": 0,
        "discount_percentage": 0,
        "amount_due": 210,
        "note": "",
        "created_at": "2024-11-21T09:29:43.000000Z",
        "updated_at": "2024-11-21T09:29:43.000000Z",
        "tag": "",
        "deleted_at": null,
        "server_name": "Someone Somewhere",
        "balance": 0,
        "pos_sale": false,
        "taxes": null,
        "tax_amount": 0
      }
    ]
  }
]
```

</div>

</div>

### Search sales

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

#### Query Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">query
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The sale number to find
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/search-sales?query=CA1",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },
  params: {
    query: "CA1",
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

    req, err := http.NewRequest("GET", "/api/v3/search-sales?query=CA1", nil)
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
    $response = $client->request("GET", "/api/v3/search-sales?query=CA1", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "query": "CA1"
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
    "name": "200 Success",
    "body": [
      {
        "id": 120,
        "sales_number": "CAS5",
        "user_id": 31,
        "business_id": 57,
        "account_id": 8728,
        "entry_date": "2024-11-21",
        "gross_amount": 210,
        "discount_amount": 0,
        "discount_percentage": 0,
        "amount_due": 210,
        "note": "",
        "created_at": "2024-11-21T09:29:43.000000Z",
        "updated_at": "2024-11-21T09:29:43.000000Z",
        "tag": "",
        "deleted_at": null,
        "server_name": "Someone Somewhere",
        "balance": 0,
        "pos_sale": false,
        "taxes": null,
        "tax_amount": 0
      }
    ]
  }
]
```

</div>

</div>

### Get sale

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
          <td style="text-align:left">sale
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the sale you want to get
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/sales/:sale",
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

    req, err := http.NewRequest("GET", "/api/v3/sales/:sale", nil)
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
    $response = $client->request("GET", "/api/v3/sales/:sale", [
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
    "body": "Quick sale not found"
  },
  {
    "name": "200 Success",
    "body": {
      "id": 117,
      "sales_number": "CAS2",
      "user_id": 31,
      "business_id": 57,
      "account_id": 8726,
      "entry_date": "2024-10-11",
      "gross_amount": 205,
      "discount_amount": 0,
      "discount_percentage": "0.0",
      "amount_due": 211.15,
      "note": "",
      "created_at": "2024-10-11T11:17:21.000000Z",
      "updated_at": "2024-10-11T11:17:21.000000Z",
      "tag": "",
      "deleted_at": null,
      "server_name": "Someone Somewhere",
      "balance": 0,
      "pos_sale": false,
      "taxes": [
        {
          "id": 55,
          "user_id": 31,
          "business_id": 57,
          "name": "VAT Flat",
          "display_name": "VAT Flat",
          "description": null,
          "code": null,
          "rate": 3,
          "type": "Flat",
          "recoverable": 0,
          "show_code": 0,
          "created_at": "2024-05-08T12:47:47.000000Z",
          "updated_at": "2024-05-08T12:47:47.000000Z",
          "account_id": 8766,
          "deleted_at": null,
          "used": true,
          "total_amount": 205,
          "tax_amount": 6.15
        }
      ],
      "tax_amount": 0,
      "items_sum_tax_amount": 6.1499999999999995,
      "payments": [
        {
          "id": 111,
          "amount": 211.15,
          "account_id": 8726,
          "sale_id": 117,
          "created_at": "2024-10-11T11:17:21.000000Z",
          "updated_at": "2024-10-11T11:17:21.000000Z"
        }
      ],
      "enc_id": "eyJpdiI6InZrcHVHdnlnM3VySXd1SGNIQVQyb1E9PSIsInZhbHVlIjoiR3lITlUrYW0xTDdCbE5FZWlYOHo1QT09IiwibWFjIjoiZWQwMDI1NmNjYmVmNmYxYTY5YjNhYzg2OGMyYWRjMTFjYTJhN2NmMTllMTM2ZTllN2NkZjIyYWI4OGZiOGQzMCIsInRhZyI6IiJ9",
      "items": [
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
          "created_at": "2024-10-11T11:17:21.000000Z",
          "updated_at": "2024-10-11T11:17:21.000000Z",
          "deleted_at": null,
          "discount_amount": 0,
          "amount_due": 211.15,
          "formatedunit_price": "205.00",
          "taxed": true,
          "details": {
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
            "quantity": 9,
            "account_id": 8762,
            "unit_price": "150.00",
            "created_at": "2024-05-30T12:34:52.000000Z",
            "updated_at": "2024-11-20T11:44:33.000000Z",
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
            "unformated_balance": "1456.4",
            "balance": "1,456.4",
            "total_debit": "12,547.50",
            "total_credit": "11,091.09",
            "used": false
          },
          "type": "Product",
          "track_inventory": true,
          "taxes": null,
          "formatedamount": "205.00",
          "formatedTax_amount": "6.15",
          "name": "Books",
          "rawUnit_price": 205,
          "invoice_quantity": 1,
          "invoice_amount": 205,
          "inventory_accountID": 8785,
          "applied_taxes": [55]
        }
      ]
    }
  }
]
```

</div>

</div>

### Create Sale

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
          <td style="text-align:left">entry_date
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The entry date of the sale
            </td>
        </tr><tr>
          <td style="text-align:left">subtotal
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The total amount before discount and taxes
            </td>
        </tr><tr>
          <td style="text-align:left">amount_due
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The total amount due after taxes and discount
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][id]
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the item to add
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][amount]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The amount of the item
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][discount_amount]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The discount amount on the item
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][quantity]
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The quantity purchased
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][unit_price]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The unit price of the item
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][amount_due]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The amount due on the item after discount and taxes
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][tax_amount]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The tax amount on the item
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][applied_taxes][0]
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The ids of taxes applied on the item
            </td>
        </tr><tr>
          <td style="text-align:left">payments[0][account_id]
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the payment account selected
            </td>
        </tr><tr>
          <td style="text-align:left">payments[0][amount]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The amount associated to the payment account
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">network
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The network of the phone number
            </td>
        </tr><tr>
          <td style="text-align:left">phone_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The phone number to be charged
            </td>
        </tr><tr>
          <td style="text-align:left">discount_amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The total discount amount
            </td>
        </tr><tr>
          <td style="text-align:left">change
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The change the customer will take
            </td>
        </tr><tr>
          <td style="text-align:left">note
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The note on the sale
            </td>
        </tr><tr>
          <td style="text-align:left">tax_amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The total tax amount
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][description]
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The desciption of the item
            </td>
        </tr><tr>
          <td style="text-align:left">sale_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The sale number
            </td>
        </tr><tr>
          <td style="text-align:left">tag
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Comma separated string of tags
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
  url: "/api/v3/sales",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    entry_date: "2024-11-21",
    network: "MTN",
    phone_number: "",
    subtotal: 210,
    discount_amount: 0,
    amount_due: 210,
    change: 0,
    note: "",
    tax_amount: 0,
    "items[0][id]": 1692,
    "items[0][amount]": 205,
    "items[0][discount_amount]": 0,
    "items[0][quantity]": 1,
    "items[0][unit_price]": 205,
    "items[0][amount_due]": 205,
    "items[0][tax_amount]": 0,
    "items[0][description]": "",
    "items[0][applied_taxes][0]": "",
    "payments[0][account_id]": 8728,
    "payments[0][amount]": 210,
    sale_number: "",
    tag: "",
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
  "entry_date": "2024-11-21",
  "network": "MTN",
  "phone_number": "",
  "subtotal": 210,
  "discount_amount": 0,
  "amount_due": 210,
  "change": 0,
  "note": "",
  "tax_amount": 0,
  "items[0][id]": 1692,
  "items[0][amount]": 205,
  "items[0][discount_amount]": 0,
  "items[0][quantity]": 1,
  "items[0][unit_price]": 205,
  "items[0][amount_due]": 205,
  "items[0][tax_amount]": 0,
  "items[0][description]": "",
  "items[0][applied_taxes][0]": "",
  "payments[0][account_id]": 8728,
  "payments[0][amount]": 210,
  "sale_number": "",
  "tag": ""
}`)
    req, err := http.NewRequest("POST", "/api/v3/sales", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/sales", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "entry_date": "2024-11-21",
  "network": "MTN",
  "phone_number": "",
  "subtotal": 210,
  "discount_amount": 0,
  "amount_due": 210,
  "change": 0,
  "note": "",
  "tax_amount": 0,
  "items[0][id]": 1692,
  "items[0][amount]": 205,
  "items[0][discount_amount]": 0,
  "items[0][quantity]": 1,
  "items[0][unit_price]": 205,
  "items[0][amount_due]": 205,
  "items[0][tax_amount]": 0,
  "items[0][description]": "",
  "items[0][applied_taxes][0]": "",
  "payments[0][account_id]": 8728,
  "payments[0][amount]": 210,
  "sale_number": "",
  "tag": ""
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
    "body": "Payments error: The sum of all payment amounts should be the same as the amount due, please correct the payment amounts and try again"
  },
  {
    "name": "422 Validation Error",
    "body": {
      "message": "The given data was invalid.",
      "errors": {
        "subtotal": ["The subtotal field is required."],
        "amount_due": ["The amount due field is required."],
        "items": ["The items field is required."],
        "entry_date": ["The entry date field is required."],
        "payments": ["The payments field is required."]
      }
    }
  },
  {
    "name": "200 Success",
    "body": {
      "id": 125,
      "sales_number": "CAS6",
      "user_id": 31,
      "business_id": 57,
      "account_id": 8728,
      "entry_date": "2024-11-21",
      "gross_amount": 210,
      "discount_amount": 0,
      "discount_percentage": "0.0",
      "amount_due": 210,
      "note": "",
      "created_at": "2024-11-21T09:47:57.000000Z",
      "updated_at": "2024-11-21T09:47:57.000000Z",
      "tag": "",
      "deleted_at": null,
      "server_name": "Someone Somewhere",
      "balance": 0,
      "pos_sale": false,
      "taxes": [],
      "tax_amount": 0,
      "payments": [
        {
          "id": 119,
          "amount": 210,
          "account_id": 8728,
          "sale_id": 125,
          "created_at": "2024-11-21T09:47:57.000000Z",
          "updated_at": "2024-11-21T09:47:57.000000Z"
        }
      ],
      "enc_id": "eyJpdiI6IndITmNSVEZ1UTV4NXdTTDZjWWVqaGc9PSIsInZhbHVlIjoiaVhwcDhXTmxrNy9kM0RPOEpCeVREQT09IiwibWFjIjoiNTA2OGRjYjBkN2JiY2QyMTk5YjhlODkzZDcxOGQ0MmYzMzQwYmQzOWQ3NDExZDk5YjY5MWZjNjY1ZjdjZWFiNCIsInRhZyI6IiJ9"
    }
  }
]
```

</div>

</div>

### Update Sale

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
          <td style="text-align:left">entry_date
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The entry date of the sale
            </td>
        </tr><tr>
          <td style="text-align:left">gross_amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The total amount before discount and taxes
            </td>
        </tr><tr>
          <td style="text-align:left">amount_due
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The total amount due after taxes and discount
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][id]
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the item to add
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][amount]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The amount of the item
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][discount_amount]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The discount amount on the item
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][quantity]
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The quantity purchased
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][unit_price]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The unit price of the item
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][amount_due]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The amount due on the item after discount and taxes
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][tax_amount]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The tax amount on the item
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][applied_taxes][0]
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The ids of taxes applied on the item
            </td>
        </tr><tr>
          <td style="text-align:left">payments[0][account_id]
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the payment account selected
            </td>
        </tr><tr>
          <td style="text-align:left">payments[0][amount]
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The amount associated to the payment account
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">network
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The network of the phone number
            </td>
        </tr><tr>
          <td style="text-align:left">phone_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The phone number to be charged
            </td>
        </tr><tr>
          <td style="text-align:left">discount_amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The total discount amount
            </td>
        </tr><tr>
          <td style="text-align:left">change
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The change the customer will take
            </td>
        </tr><tr>
          <td style="text-align:left">note
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The note on the sale
            </td>
        </tr><tr>
          <td style="text-align:left">tax_amount
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">The total tax amount
            </td>
        </tr><tr>
          <td style="text-align:left">items[0][description]
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The desciption of the item
            </td>
        </tr><tr>
          <td style="text-align:left">sale_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The sale number
            </td>
        </tr><tr>
          <td style="text-align:left">tag
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Comma separated string of tags
            </td>
        </tr></tbody>
</table>

</div>

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">sale
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the sale to be updated
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/sales/:sale",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    entry_date: "2024-11-21",
    network: "MTN",
    phone_number: "",
    gross_amount: 210,
    discount_amount: 0,
    amount_due: 210,
    change: 0,
    note: "",
    tax_amount: 0,
    "items[0][id]": 1692,
    "items[0][amount]": 205,
    "items[0][discount_amount]": 0,
    "items[0][quantity]": 1,
    "items[0][unit_price]": 205,
    "items[0][amount_due]": 205,
    "items[0][tax_amount]": 0,
    "items[0][description]": "",
    "items[0][applied_taxes][0]": "",
    "payments[0][account_id]": 8728,
    "payments[0][amount]": 210,
    sale_number: "",
    tag: "",
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
  "entry_date": "2024-11-21",
  "network": "MTN",
  "phone_number": "",
  "gross_amount": 210,
  "discount_amount": 0,
  "amount_due": 210,
  "change": 0,
  "note": "",
  "tax_amount": 0,
  "items[0][id]": 1692,
  "items[0][amount]": 205,
  "items[0][discount_amount]": 0,
  "items[0][quantity]": 1,
  "items[0][unit_price]": 205,
  "items[0][amount_due]": 205,
  "items[0][tax_amount]": 0,
  "items[0][description]": "",
  "items[0][applied_taxes][0]": "",
  "payments[0][account_id]": 8728,
  "payments[0][amount]": 210,
  "sale_number": "",
  "tag": ""
}`)
    req, err := http.NewRequest("POST", "/api/v3/sales/:sale", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/sales/:sale", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "entry_date": "2024-11-21",
  "network": "MTN",
  "phone_number": "",
  "gross_amount": 210,
  "discount_amount": 0,
  "amount_due": 210,
  "change": 0,
  "note": "",
  "tax_amount": 0,
  "items[0][id]": 1692,
  "items[0][amount]": 205,
  "items[0][discount_amount]": 0,
  "items[0][quantity]": 1,
  "items[0][unit_price]": 205,
  "items[0][amount_due]": 205,
  "items[0][tax_amount]": 0,
  "items[0][description]": "",
  "items[0][applied_taxes][0]": "",
  "payments[0][account_id]": 8728,
  "payments[0][amount]": 210,
  "sale_number": "",
  "tag": ""
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
    "body": "Payments error: The sum of all payment amounts should be the same as the amount due, please correct the payment amounts and try again"
  },
  {
    "name": "422 Validation Error",
    "body": {
      "message": "The given data was invalid.",
      "errors": {
        "gross_amount": ["The gross amount field is required."],
        "amount_due": ["The amount due field is required."],
        "items": ["The items field is required."],
        "entry_date": ["The entry date field is required."],
        "payments": ["The payments field is required."]
      }
    }
  },
  {
    "name": "200 Success",
    "body": {
      "id": 125,
      "sales_number": "CAS6",
      "user_id": 31,
      "business_id": 57,
      "account_id": "8728",
      "entry_date": "2024-11-21",
      "gross_amount": "210.00",
      "discount_amount": "0",
      "discount_percentage": 0,
      "amount_due": "210.00",
      "note": "",
      "created_at": "2024-11-21T09:47:57.000000Z",
      "updated_at": "2024-11-21T10:18:58.000000Z",
      "tag": "",
      "deleted_at": null,
      "server_name": "Someone Somewhere",
      "balance": 0,
      "pos_sale": false,
      "taxes": null,
      "tax_amount": 0
    }
  },
  {
    "name": "302 Errors",
    "body": "Sale not found"
  },
  {
    "name": "422 Validation Errors",
    "body": {
      "message": "The given data was invalid.",
      "errors": {
        "amount_due": ["The amount due field is required."],
        "gross_amount": ["The gross amount field is required."],
        "entry_date": ["The entry date field is required."],
        "payments": ["The payments field is required."]
      }
    }
  },
  {
    "name": "200 Success",
    "body": {
      "id": 126,
      "sales_number": "CAS7",
      "user_id": 31,
      "business_id": 57,
      "account_id": "8728",
      "entry_date": "2024-11-21",
      "gross_amount": "210.00",
      "discount_amount": "0",
      "discount_percentage": 0,
      "amount_due": "210.00",
      "note": "",
      "created_at": "2024-11-26T16:59:32.000000Z",
      "updated_at": "2024-11-26T16:59:42.000000Z",
      "tag": "",
      "deleted_at": null,
      "server_name": "Someone Somewhere",
      "balance": 0,
      "pos_sale": false,
      "taxes": null,
      "tax_amount": 0
    }
  }
]
```

</div>

</div>

### Delete Sale

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
          <td style="text-align:left">sale
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the sale to be delete
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "DELETE",
  url: "/api/v3/sales/:sale",
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

    req, err := http.NewRequest("DELETE", "/api/v3/sales/:sale", nil)
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
    $response = $client->request("DELETE", "/api/v3/sales/:sale", [
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
    "body": "Sale not found"
  },
  {
    "name": "200 Success",
    "body": null
  }
]
```

</div>

</div>

### Send Sale Receipt

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
          <td style="text-align:left">email
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The email to send the receipt to
            </td>
        </tr></tbody>
</table>

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">sale
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the sale to send
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/sales/:sale/send-receipt",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    email: "someone@somewhere.com",
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
  "email": "someone@somewhere.com"
}`)
    req, err := http.NewRequest("POST", "/api/v3/sales/:sale/send-receipt", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/sales/:sale/send-receipt", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "email": "someone@somewhere.com"
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
    "body": "Sale not found"
  },
  {
    "name": "200 Success",
    "body": {
      "message": "Receipt sent successfully"
    }
  }
]
```

</div>

</div>

### Print Sale Receipt

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

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">sale
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The enc_id of the sale to print
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/sales/:sale/print-receipt",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    email: "someone@somewhere.com",
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
  "email": "someone@somewhere.com"
}`)
    req, err := http.NewRequest("GET", "/sales/:sale/print-receipt", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("GET", "/sales/:sale/print-receipt", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "email": "someone@somewhere.com"
},
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

### Download Sale Receipt

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

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">sale
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The enc_id of the sale to print
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/sales/:sale/download-receipt",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    email: "someone@somewhere.com",
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
  "email": "someone@somewhere.com"
}`)
    req, err := http.NewRequest("GET", "/sales/:sale/download-receipt", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("GET", "/sales/:sale/download-receipt", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "email": "someone@somewhere.com"
},
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

### Preview Sale Receipt

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

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">sale
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">The enc_id of the sale to print
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/sales/:sale/preview-receipt",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    email: "someone@somewhere.com",
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
  "email": "someone@somewhere.com"
}`)
    req, err := http.NewRequest("GET", "/sales/:sale/preview-receipt", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("GET", "/sales/:sale/preview-receipt", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "email": "someone@somewhere.com"
},
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
