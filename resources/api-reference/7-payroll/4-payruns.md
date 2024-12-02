#meta-data title: Payruns

## Payruns

### Get pay runs

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
  url: "/api/v3/payroll/pay-runs",
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

    req, err := http.NewRequest("GET", "/api/v3/payroll/pay-runs", nil)
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
    $response = $client->request("GET", "/api/v3/payroll/pay-runs", [
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
    "name": "200 success",
    "body": [
      {
        "id": 1,
        "user_id": 5,
        "business_id": 1,
        "run_date": "2024-11-30T00:00:00.000000Z",
        "start_date": "2024-11-01",
        "end_date": "2024-11-30",
        "status": "Pending",
        "created_at": "2024-11-27T06:33:23.000000Z",
        "updated_at": "2024-11-27T06:33:23.000000Z",
        "endorsement_id": null,
        "company_id": 1,
        "tag": "",
        "deleted_at": null,
        "tier3_description": null,
        "archived": 0,
        "processing": false,
        "items_sum_gross_salary": 0,
        "items_sum_net_salary": 0,
        "items_sum_total_tax": 0,
        "items_sum_pension": 0,
        "items_sum_ssnit1_alt": 0,
        "items_sum_ssnit2": 0,
        "items_sum_ssnit1": 0,
        "items_sum_total_tier3_amount": 0,
        "enc_id": "eyJpdiI6Im1jVWlKVDErZ25rOWJybWVDOVFlTnc9PSIsInZhbHVlIjoiR2JNZ3FNeGl6ZW9Jb3o2QjZzdlE5Zz09IiwibWFjIjoiZjkwNmI5YmZlNTAxMDk4OWNkMTVlOTMyNWQ3Y2ZiNWMyZDAwMmIyMjQzNzM1YjMyNTcwMjM1NDk3Zjg0ZjllMiIsInRhZyI6IiJ9",
        "total_gross": 0,
        "total_net": 0,
        "total_tax": 0,
        "total_pension": 0,
        "ssnit_tier1": 0,
        "ssnit_tier2": 0,
        "ssnit_tier1_alt": 0,
        "total_tier3_amount": 0
      }
    ]
  }
]
```

</div>

</div>

### Get a pay run

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

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/payroll/pay-runs/:id",
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

    req, err := http.NewRequest("GET", "/api/v3/payroll/pay-runs/:id", nil)
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
    $response = $client->request("GET", "/api/v3/payroll/pay-runs/:id", [
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
    "name": "200 success",
    "body": {
      "id": 1,
      "user_id": 5,
      "business_id": 1,
      "run_date": "2024-11-30T00:00:00.000000Z",
      "start_date": "2024-11-01",
      "end_date": "2024-11-30",
      "status": "Pending",
      "created_at": "2024-11-27T06:33:23.000000Z",
      "updated_at": "2024-11-27T06:33:23.000000Z",
      "endorsement_id": null,
      "company_id": 1,
      "tag": "",
      "deleted_at": null,
      "tier3_description": null,
      "archived": 0,
      "processing": false,
      "items_sum_gross_salary": 0,
      "items_sum_net_salary": 0,
      "items_sum_total_tax": 0,
      "items_sum_pension": 0,
      "items_sum_ssnit1_alt": 0,
      "items_sum_ssnit2": 0,
      "items_sum_ssnit1": 0,
      "items_sum_total_tier3_amount": 0,
      "enc_id": "eyJpdiI6IjZpK0x1VkZ4N0RhODZjL2F6TlplOWc9PSIsInZhbHVlIjoicllub2JBNmFxWTczUkJhbCtqV3hrUT09IiwibWFjIjoiNDNlZTI2MzYyNmY5NDEzNDdhNDE5ZGNiYmJkN2FjNGRhMzk4NDIwMTg3YTFmMmFhMzJjY2JkNDAzYWRjMjg5MSIsInRhZyI6IiJ9",
      "total_gross": 0,
      "total_net": 0,
      "total_tax": 0,
      "total_pension": 0,
      "ssnit_tier1": 0,
      "ssnit_tier2": 0,
      "ssnit_tier1_alt": 0,
      "total_tier3_amount": 0,
      "endorsement": null
    }
  }
]
```

</div>

</div>

### Process a pay run

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
          <td style="text-align:left">The id of the pay run
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/payroll/pay-runs/:id/process",
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

    req, err := http.NewRequest("GET", "/api/v3/payroll/pay-runs/:id/process", nil)
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
    $response = $client->request("GET", "/api/v3/payroll/pay-runs/:id/process", [
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
    "name": "200 success",
    "body": [
      {
        "id": 1,
        "payrun_id": 1,
        "employee_id": 2,
        "user_id": 5,
        "business_id": 1,
        "basic_salary": 0,
        "allowance": 0,
        "non_taxable_allowance": 0,
        "bonus": 0,
        "back_pay": 0,
        "salary_advance": 0,
        "loan": 0,
        "gross_salary": 0,
        "tax": 0,
        "pension": 0,
        "taxable_income": 0,
        "ssnit1": 0,
        "ssnit2": 0,
        "ssnit2_alt": 0,
        "ssnit1_alt": 0,
        "bonus_tax": 0,
        "overtime_tax": 0,
        "total_tax": 0,
        "net_salary": 0,
        "comments": "",
        "created_at": "2024-11-27T06:33:23.000000Z",
        "updated_at": "2024-11-27T06:33:23.000000Z",
        "compute_pension": false,
        "compute_paye": false,
        "employer_tier3_amount": 0,
        "employee_tier3_amount": 0,
        "total_tier3_amount": 0,
        "other_pension": 0,
        "nhif": 0,
        "personal_relief": 2400,
        "nhif_relief": 0,
        "paid": false,
        "excess_bonus": 0,
        "total_reliefs": 0,
        "total_employee_reliefs": null,
        "compute_payeBit": false,
        "compute_pensionBit": false,
        "total_tier3": 0,
        "enc_id": "eyJpdiI6IlRHL29qVUNwM05IL2FpeG5tRndWNGc9PSIsInZhbHVlIjoiNDFoVVduUXUvbks4ZkYvUC80MFNEQT09IiwibWFjIjoiNzc2MGQzMGU1YjljNDE0ODk2ODA4YWM0Y2U2ZTQxNzU1NzVmMGQ1MzFjZTU4MWI0NWU0ODk1ZjMwOGQxMjRlNSIsInRhZyI6IiJ9",
        "employee": {
          "id": 2,
          "user_id": 5,
          "business_id": 1,
          "first_name": "Nelson",
          "other_name": null,
          "last_name": "Bighead",
          "phone_number1": null,
          "email": "",
          "resident_status": "Resident",
          "staff_id": null,
          "ssnit_number": null,
          "department_id": 3,
          "tin": null,
          "role": "Developer at nipplet",
          "start_date": "2024-11-27",
          "status": "active",
          "recipient_id": "",
          "bank_code": "gcb",
          "bank_branch": "palo alto",
          "account_number": "0039888292",
          "basic_salary": 0,
          "taxable_allowance": 0,
          "non_taxable_allowance": 0,
          "created_at": "2024-11-27T04:52:47.000000Z",
          "updated_at": "2024-11-27T04:52:47.000000Z",
          "remember_token": null,
          "company_id": 1,
          "compute_paye": false,
          "compute_pension": false,
          "deleted_at": null,
          "employer_tier3_amount": 0,
          "employee_tier3_amount": 0,
          "nhif_number": null,
          "nia_number": null,
          "end_date": null,
          "department": {
            "id": 3,
            "user_id": 5,
            "business_id": 1,
            "name": "marketing",
            "description": null,
            "created_at": "2024-11-27T04:51:04.000000Z",
            "updated_at": "2024-11-27T04:51:04.000000Z",
            "company_id": 1
          },
          "allowances": [],
          "reimbursements": [],
          "reliefs": []
        },
        "allowances": [],
        "bonuses": [],
        "deductions": [],
        "overtimes": [],
        "reimbursements": [],
        "reliefs": []
      }
    ]
  }
]
```

</div>

</div>

### Void a pay run

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
          <td style="text-align:left">The id of the pay run
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/payroll/pay-runs/:id/void",
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

    req, err := http.NewRequest("GET", "/api/v3/payroll/pay-runs/:id/void", nil)
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
    $response = $client->request("GET", "/api/v3/payroll/pay-runs/:id/void", [
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
    "name": "200 success",
    "body": {
      "id": 1,
      "user_id": 5,
      "business_id": 1,
      "run_date": "2024-11-30T00:00:00.000000Z",
      "start_date": "2024-11-01",
      "end_date": "2024-11-30",
      "status": "Void",
      "created_at": "2024-11-27T06:33:23.000000Z",
      "updated_at": "2024-11-27T06:40:48.000000Z",
      "endorsement_id": null,
      "company_id": 1,
      "tag": "",
      "deleted_at": null,
      "tier3_description": null,
      "archived": 0,
      "processing": false,
      "enc_id": "eyJpdiI6IlRTcVgvcHJtK080eHVSQnh4YkhOSHc9PSIsInZhbHVlIjoiUm9rS2JHVXJoRDA5T0JzOWZrT09kQT09IiwibWFjIjoiYjY3N2QwMTgxMDMyNDIxY2I4OTk3MGE3YmE3ODlmMzM4YjNiNDRkZmIzNGI3NjEyMmE0M2ZiZWIwMjRlMTQyNiIsInRhZyI6IiJ9",
      "total_gross": 0,
      "total_net": 0,
      "total_tax": 0,
      "total_pension": 0,
      "ssnit_tier1": 0,
      "ssnit_tier2": 0,
      "ssnit_tier1_alt": 0,
      "total_tier3_amount": 0
    }
  }
]
```

</div>

</div>

### Get archived payruns

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
  url: "/api/v3/payroll/pay-runs/archived",
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

    req, err := http.NewRequest("GET", "/api/v3/payroll/pay-runs/archived", nil)
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
    $response = $client->request("GET", "/api/v3/payroll/pay-runs/archived", [
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
    "name": "200 success",
    "body": [
      {
        "id": 1,
        "user_id": 5,
        "business_id": 1,
        "run_date": "2024-11-30T00:00:00.000000Z",
        "start_date": "2024-11-01",
        "end_date": "2024-11-30",
        "status": "Void",
        "created_at": "2024-11-27T06:33:23.000000Z",
        "updated_at": "2024-11-27T06:40:48.000000Z",
        "endorsement_id": null,
        "company_id": 1,
        "tag": "",
        "deleted_at": null,
        "tier3_description": null,
        "archived": true,
        "processing": false,
        "enc_id": "eyJpdiI6IjFpRW5lS0lVQUNTWU0yZ205TGF6K3c9PSIsInZhbHVlIjoiMHRQMGQ5UGdyQUNMajB0SlY5cmJndz09IiwibWFjIjoiZmYwZTJhMWVkZjBkNTQ4MGY5YTY0NGYxNDhjMjllMGQwNjZlY2FlZWM4ZTczMzQ1Y2FlYjBlNGVmNTk1Nzk1ZSIsInRhZyI6IiJ9",
        "total_gross": 0,
        "total_net": 0,
        "total_tax": 0,
        "total_pension": 0,
        "ssnit_tier1": 0,
        "ssnit_tier2": 0,
        "ssnit_tier1_alt": 0,
        "total_tier3_amount": 0
      }
    ]
  }
]
```

</div>

</div>

### Get pay run payslips

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

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/payroll/pay-runs/:id/payslips",
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

    req, err := http.NewRequest("GET", "/api/v3/payroll/pay-runs/:id/payslips", nil)
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
    $response = $client->request("GET", "/api/v3/payroll/pay-runs/:id/payslips", [
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
    "name": "200 success",
    "body": [
      {
        "id": 1,
        "payrun_id": 1,
        "employee_id": 2,
        "user_id": 5,
        "business_id": 1,
        "basic_salary": 0,
        "allowance": 0,
        "non_taxable_allowance": 0,
        "bonus": 0,
        "back_pay": 0,
        "salary_advance": 0,
        "loan": 0,
        "gross_salary": 0,
        "tax": 0,
        "pension": 0,
        "taxable_income": 0,
        "ssnit1": 0,
        "ssnit2": 0,
        "ssnit2_alt": 0,
        "ssnit1_alt": 0,
        "bonus_tax": 0,
        "overtime_tax": 0,
        "total_tax": 0,
        "net_salary": 0,
        "comments": "",
        "created_at": "2024-11-27T06:33:23.000000Z",
        "updated_at": "2024-11-27T06:33:23.000000Z",
        "compute_pension": false,
        "compute_paye": false,
        "employer_tier3_amount": 0,
        "employee_tier3_amount": 0,
        "total_tier3_amount": 0,
        "other_pension": 0,
        "nhif": 0,
        "personal_relief": 2400,
        "nhif_relief": 0,
        "paid": false,
        "excess_bonus": 0,
        "total_reliefs": 0,
        "total_employee_reliefs": null,
        "compute_payeBit": false,
        "compute_pensionBit": false,
        "total_tier3": 0,
        "enc_id": "eyJpdiI6IjNOWmlSQWhPekU5Y2hqQ0ZQU1BKVXc9PSIsInZhbHVlIjoiVVVZbDF5WnYxWVFvSWVFM05iNmJUZz09IiwibWFjIjoiZDU2N2MyNmEyNWYzOTk0MGNmMzU0MWM5YmMxYTQ4NTgyOWFhYzEzZDQ3ODAyMTk5ZTczODA0NGFkMDVhN2QwYSIsInRhZyI6IiJ9",
        "employee": {
          "id": 2,
          "user_id": 5,
          "business_id": 1,
          "first_name": "Nelson",
          "other_name": null,
          "last_name": "Bighead",
          "phone_number1": null,
          "email": "",
          "resident_status": "Resident",
          "staff_id": null,
          "ssnit_number": null,
          "department_id": 3,
          "tin": null,
          "role": "Developer at nipplet",
          "start_date": "2024-11-27",
          "status": "active",
          "recipient_id": "",
          "bank_code": "gcb",
          "bank_branch": "palo alto",
          "account_number": "0039888292",
          "basic_salary": 0,
          "taxable_allowance": 0,
          "non_taxable_allowance": 0,
          "created_at": "2024-11-27T04:52:47.000000Z",
          "updated_at": "2024-11-27T04:52:47.000000Z",
          "remember_token": null,
          "company_id": 1,
          "compute_paye": false,
          "compute_pension": false,
          "deleted_at": null,
          "employer_tier3_amount": 0,
          "employee_tier3_amount": 0,
          "nhif_number": null,
          "nia_number": null,
          "end_date": null,
          "department": {
            "id": 3,
            "user_id": 5,
            "business_id": 1,
            "name": "marketing",
            "description": null,
            "created_at": "2024-11-27T04:51:04.000000Z",
            "updated_at": "2024-11-27T04:51:04.000000Z",
            "company_id": 1
          }
        },
        "allowances": [],
        "bonuses": [],
        "deductions": [],
        "overtimes": [],
        "reimbursements": [],
        "reliefs": []
      }
    ]
  }
]
```

</div>

</div>

### Archive a pay run

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

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/payroll/pay-runs/:id/archive",
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

    req, err := http.NewRequest("GET", "/api/v3/payroll/pay-runs/:id/archive", nil)
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
    $response = $client->request("GET", "/api/v3/payroll/pay-runs/:id/archive", [
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
    "name": "200 success",
    "body": {
      "message": "Pay run archived",
      "data": {
        "id": 1,
        "user_id": 5,
        "business_id": 1,
        "run_date": "2024-11-30T00:00:00.000000Z",
        "start_date": "2024-11-01",
        "end_date": "2024-11-30",
        "status": "Void",
        "created_at": "2024-11-27T06:33:23.000000Z",
        "updated_at": "2024-11-27T06:40:48.000000Z",
        "endorsement_id": null,
        "company_id": 1,
        "tag": "",
        "deleted_at": null,
        "tier3_description": null,
        "archived": true,
        "processing": false
      }
    }
  },
  {
    "name": "302 Error",
    "body": "Pay run not found"
  }
]
```

</div>

</div>

### Create a pay run

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
          <td style="text-align:left">run_date
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The date you process the payrun
            </td>
        </tr><tr>
          <td style="text-align:left">startdate
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">Start date of the period the payrun covers
            </td>
        </tr><tr>
          <td style="text-align:left">enddate
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">End date of the period the payrun covers
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/payroll/pay-runs?run_date=2024-11-30&startdate=2024-11-01&enddate=2024-11-30",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },
  params: {
    run_date: "2024-11-30",
    startdate: "2024-11-01",
    enddate: "2024-11-30",
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

    req, err := http.NewRequest("POST", "/api/v3/payroll/pay-runs?run_date=2024-11-30&startdate=2024-11-01&enddate=2024-11-30", nil)
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
    $response = $client->request("POST", "/api/v3/payroll/pay-runs?run_date=2024-11-30&startdate=2024-11-01&enddate=2024-11-30", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "run_date": "2024-11-30",
  "startdate": "2024-11-01",
  "enddate": "2024-11-30"
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
    "name": "422 validation error",
    "body": {
      "message": "The given data was invalid.",
      "errors": {
        "run_date": ["The run date field is required."],
        "startdate": ["The startdate field is required."],
        "enddate": ["The enddate field is required."]
      }
    }
  },
  {
    "name": "200 success",
    "body": [
      {
        "id": 1,
        "payrun_id": 1,
        "employee_id": 2,
        "user_id": 5,
        "business_id": 1,
        "basic_salary": 0,
        "allowance": 0,
        "non_taxable_allowance": 0,
        "bonus": 0,
        "back_pay": 0,
        "salary_advance": 0,
        "loan": 0,
        "gross_salary": 0,
        "tax": 0,
        "pension": 0,
        "taxable_income": 0,
        "ssnit1": 0,
        "ssnit2": 0,
        "ssnit2_alt": 0,
        "ssnit1_alt": 0,
        "bonus_tax": 0,
        "overtime_tax": 0,
        "total_tax": 0,
        "net_salary": 0,
        "comments": "",
        "created_at": "2024-11-27T06:33:23.000000Z",
        "updated_at": "2024-11-27T06:33:23.000000Z",
        "compute_pension": false,
        "compute_paye": false,
        "employer_tier3_amount": 0,
        "employee_tier3_amount": 0,
        "total_tier3_amount": 0,
        "other_pension": 0,
        "nhif": 0,
        "personal_relief": 2400,
        "nhif_relief": 0,
        "paid": false,
        "excess_bonus": 0,
        "total_reliefs": 0,
        "total_employee_reliefs": null,
        "compute_payeBit": false,
        "compute_pensionBit": false,
        "total_tier3": 0,
        "enc_id": "eyJpdiI6IjlnTWpRYmNwUzdqekFFalA2L3hYbnc9PSIsInZhbHVlIjoiaDFSdjFsU0FEN2ZDdDVJYkNSNWJoZz09IiwibWFjIjoiOThkN2Y3NmQ1MjE2ODVhMjQ5MzFlOGMzMGM3MmQzMTU4MGMwMGQzMTY4MWQ5MzkxMjlmYTBkMzBjOWJjYzFlOSIsInRhZyI6IiJ9",
        "employee": {
          "id": 2,
          "user_id": 5,
          "business_id": 1,
          "first_name": "Nelson",
          "other_name": null,
          "last_name": "Bighead",
          "phone_number1": null,
          "email": "",
          "resident_status": "Resident",
          "staff_id": null,
          "ssnit_number": null,
          "department_id": 3,
          "tin": null,
          "role": "Developer at nipplet",
          "start_date": "2024-11-27",
          "status": "active",
          "recipient_id": "",
          "bank_code": "gcb",
          "bank_branch": "palo alto",
          "account_number": "0039888292",
          "basic_salary": 0,
          "taxable_allowance": 0,
          "non_taxable_allowance": 0,
          "created_at": "2024-11-27T04:52:47.000000Z",
          "updated_at": "2024-11-27T04:52:47.000000Z",
          "remember_token": null,
          "company_id": 1,
          "compute_paye": false,
          "compute_pension": false,
          "deleted_at": null,
          "employer_tier3_amount": 0,
          "employee_tier3_amount": 0,
          "nhif_number": null,
          "nia_number": null,
          "end_date": null,
          "department": {
            "id": 3,
            "user_id": 5,
            "business_id": 1,
            "name": "marketing",
            "description": null,
            "created_at": "2024-11-27T04:51:04.000000Z",
            "updated_at": "2024-11-27T04:51:04.000000Z",
            "company_id": 1
          },
          "allowances": [],
          "reimbursements": [],
          "reliefs": []
        },
        "allowances": [],
        "bonuses": [],
        "deductions": [],
        "overtimes": [],
        "reimbursements": [],
        "reliefs": []
      }
    ]
  }
]
```

</div>

</div>

### Payslip

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
          <td style="text-align:left">The id of the pay run item
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/payroll/payslips/:id",
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

    req, err := http.NewRequest("GET", "/api/v3/payroll/payslips/:id", nil)
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
    $response = $client->request("GET", "/api/v3/payroll/payslips/:id", [
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
    "name": "200 success",
    "body": {
      "id": 1,
      "payrun_id": 1,
      "employee_id": 2,
      "user_id": 5,
      "business_id": 1,
      "basic_salary": 0,
      "allowance": 0,
      "non_taxable_allowance": 0,
      "bonus": 0,
      "back_pay": 0,
      "salary_advance": 0,
      "loan": 0,
      "gross_salary": 0,
      "tax": 0,
      "pension": 0,
      "taxable_income": 0,
      "ssnit1": 0,
      "ssnit2": 0,
      "ssnit2_alt": 0,
      "ssnit1_alt": 0,
      "bonus_tax": 0,
      "overtime_tax": 0,
      "total_tax": 0,
      "net_salary": 0,
      "comments": "",
      "created_at": "2024-11-27T06:33:23.000000Z",
      "updated_at": "2024-11-27T06:33:23.000000Z",
      "compute_pension": false,
      "compute_paye": false,
      "employer_tier3_amount": 0,
      "employee_tier3_amount": 0,
      "total_tier3_amount": 0,
      "other_pension": 0,
      "nhif": 0,
      "personal_relief": 2400,
      "nhif_relief": 0,
      "paid": false,
      "excess_bonus": 0,
      "total_reliefs": 0,
      "total_employee_reliefs": null,
      "compute_payeBit": false,
      "compute_pensionBit": false,
      "total_tier3": 0,
      "enc_id": "eyJpdiI6InU0eEZWQnMvQUsxQW5Db21DMi9QeHc9PSIsInZhbHVlIjoiTTJOQzNoWWdqZHQ4NS9JbEVKWkhsUT09IiwibWFjIjoiMGQ5YjI4NGQyOGIyNGZlMjg2NzFlOWY1NDVhNjA0ODNhY2NiODJmZDk0OWFmMGVmMzQ1NDdiYWIzOTUzMWU0NCIsInRhZyI6IiJ9",
      "payrun": {
        "id": 1,
        "user_id": 5,
        "business_id": 1,
        "run_date": "2024-11-30T00:00:00.000000Z",
        "start_date": "2024-11-01",
        "end_date": "2024-11-30",
        "status": "Void",
        "created_at": "2024-11-27T06:33:23.000000Z",
        "updated_at": "2024-11-27T06:40:48.000000Z",
        "endorsement_id": null,
        "company_id": 1,
        "tag": "",
        "deleted_at": null,
        "tier3_description": null,
        "archived": true,
        "processing": false,
        "enc_id": "eyJpdiI6ImZ0MWUwaktLS01zS3ZZN2lkWU1MdFE9PSIsInZhbHVlIjoiK296cndwS1U3cGowS1A0eWovVzVIdz09IiwibWFjIjoiYzY4YzE5M2NhODM2OTk3MjNhYWU1MjBlMDcyN2M4ZWRhNmY2OTVlNmQyNGE0NjJlYWRmN2JlYmYwNDJmNTNiYiIsInRhZyI6IiJ9",
        "total_gross": 0,
        "total_net": 0,
        "total_tax": 0,
        "total_pension": 0,
        "ssnit_tier1": 0,
        "ssnit_tier2": 0,
        "ssnit_tier1_alt": 0,
        "total_tier3_amount": 0
      },
      "employee": {
        "id": 2,
        "user_id": 5,
        "business_id": 1,
        "first_name": "Nelson",
        "other_name": null,
        "last_name": "Bighead",
        "phone_number1": null,
        "email": "",
        "resident_status": "Resident",
        "staff_id": null,
        "ssnit_number": null,
        "department_id": 3,
        "tin": null,
        "role": "Developer at nipplet",
        "start_date": "2024-11-27",
        "status": "active",
        "recipient_id": "",
        "bank_code": "gcb",
        "bank_branch": "palo alto",
        "account_number": "0039888292",
        "basic_salary": 0,
        "taxable_allowance": 0,
        "non_taxable_allowance": 0,
        "created_at": "2024-11-27T04:52:47.000000Z",
        "updated_at": "2024-11-27T04:52:47.000000Z",
        "remember_token": null,
        "company_id": 1,
        "compute_paye": false,
        "compute_pension": false,
        "deleted_at": null,
        "employer_tier3_amount": 0,
        "employee_tier3_amount": 0,
        "nhif_number": null,
        "nia_number": null,
        "end_date": null,
        "department": {
          "id": 3,
          "user_id": 5,
          "business_id": 1,
          "name": "marketing",
          "description": null,
          "created_at": "2024-11-27T04:51:04.000000Z",
          "updated_at": "2024-11-27T04:51:04.000000Z",
          "company_id": 1
        }
      },
      "allowances": [],
      "bonuses": [],
      "deductions": [],
      "overtimes": [],
      "reimbursements": [],
      "reliefs": []
    }
  }
]
```

</div>

</div>
