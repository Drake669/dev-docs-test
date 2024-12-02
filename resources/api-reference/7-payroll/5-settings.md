#meta-data title: Settings

## Settings

### Set up payroll

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
          <td style="text-align:left">sync_accounts
            <div class="table-description">Boolean</div>
          </td>
          <td style="text-align:left">Wheather to sync your slips to the ledger
            </td>
        </tr><tr>
          <td style="text-align:left">company_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Name of your payroll setup
            </td>
        </tr><tr>
          <td style="text-align:left">er_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">ER number of your compnay
            </td>
        </tr><tr>
          <td style="text-align:left">tin
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Tax Identofication number of your company
            </td>
        </tr><tr>
          <td style="text-align:left">gra_branch_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid ID of your chosen tax office
            </td>
        </tr><tr>
          <td style="text-align:left">tier2_trustee_id
            <div class="table-description">Integer</div>
          </td>
          <td style="text-align:left">A valid ID of your chosen tier 2 trsutee
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/payroll/setup",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    sync_accounts: true,
    company_name: "Nooli",
    er_number: "00003847",
    tin: 22344533,
    gra_branch_id: 1,
    tier2_trustee_id: 1,
    tier2_trustee_number: "fffdfdfd",
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
  "sync_accounts": true,
  "company_name": "Nooli",
  "er_number": "00003847",
  "tin": 22344533,
  "gra_branch_id": 1,
  "tier2_trustee_id": 1,
  "tier2_trustee_number": "fffdfdfd"
}`)
    req, err := http.NewRequest("POST", "/api/v3/payroll/setup", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/payroll/setup", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "sync_accounts": true,
  "company_name": "Nooli",
  "er_number": "00003847",
  "tin": 22344533,
  "gra_branch_id": 1,
  "tier2_trustee_id": 1,
  "tier2_trustee_number": "fffdfdfd"
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
        "sync_accounts": ["The sync accounts field is required."],
        "company_name": ["The company name field is required."],
        "er_number": ["The er number field is required."]
      }
    }
  },
  {
    "name": "200 success",
    "body": {
      "id": 1,
      "user_id": 5,
      "business_id": 1,
      "sync_accounts": true,
      "er_number": "00003847",
      "Company_name": "Aviato",
      "tin": "22344533",
      "old_tin": null,
      "gra_branch_id": 1,
      "tier2_trustee_id": 1,
      "tier2_trustee_number": "fffdfdfd",
      "created_at": "2024-11-27T04:36:40.000000Z",
      "updated_at": "2024-11-27T04:36:40.000000Z",
      "tier3_trustee_id": null,
      "tier3_trustee_number": null,
      "tier3_description": null,
      "nssf_formula": "tiered",
      "nita_number": null,
      "tax_station": null,
      "payment_accountID": {
        "user_id": 5,
        "business_id": 1,
        "id": 1,
        "basic_account": 34,
        "allowance_account": 34,
        "overtime_account": 34,
        "bonus_account": 34,
        "ssf_account": 42,
        "reimbursement_account": 43,
        "ssnit1_account": 44,
        "ssnit2_account": 45,
        "paye_account": 46,
        "overtimetax_account": 46,
        "bonustax_account": 46,
        "deductions_account": 34,
        "net_account": 47,
        "created_at": "2024-11-27T04:36:40.000000Z",
        "updated_at": "2024-11-27T04:36:40.000000Z",
        "company_id": null,
        "tier3_account_id": null,
        "employer_tier3_account": 0,
        "nhif_account_id": null
      },
      "accounts": {
        "user_id": 5,
        "business_id": 1,
        "id": 1,
        "basic_account": 34,
        "allowance_account": 34,
        "overtime_account": 34,
        "bonus_account": 34,
        "ssf_account": 42,
        "reimbursement_account": 43,
        "ssnit1_account": 44,
        "ssnit2_account": 45,
        "paye_account": 46,
        "overtimetax_account": 46,
        "bonustax_account": 46,
        "deductions_account": 34,
        "net_account": 47,
        "created_at": "2024-11-27T04:36:40.000000Z",
        "updated_at": "2024-11-27T04:36:40.000000Z",
        "company_id": null,
        "tier3_account_id": null,
        "employer_tier3_account": 0,
        "nhif_account_id": null
      },
      "gra_branch": {
        "id": 1,
        "country_id": 81,
        "branch": "SPINTEX MTO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      "tier2_trustee": {
        "id": 1,
        "country_id": 81,
        "name": "General Trust Company Limited",
        "licence_no": "CT12010 ",
        "address": "141/21 Saflo Link, Abelemkpe Accra",
        "contact_person": " Bernard Acquaye",
        "tel_numbers": "0508-129515/0243-445524",
        "created_at": null,
        "updated_at": null
      },
      "tier3_trustee": null
    }
  }
]
```

</div>

</div>

### Update payroll setup

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
          <td style="text-align:left">sync_accounts
            <div class="table-description">Boolean</div>
          </td>
          <td style="text-align:left">Wheather to sync your slips to the ledger
            </td>
        </tr><tr>
          <td style="text-align:left">company_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Name of your payroll setup
            </td>
        </tr><tr>
          <td style="text-align:left">er_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">ER number of your compnay
            </td>
        </tr><tr>
          <td style="text-align:left">tin
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Tax Identofication number of your company
            </td>
        </tr><tr>
          <td style="text-align:left">gra_branch_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid ID of your chosen tax office
            </td>
        </tr><tr>
          <td style="text-align:left">tier2_trustee_id
            <div class="table-description">Integer</div>
          </td>
          <td style="text-align:left">A valid ID of your chosen tier 2 trsutee
            </td>
        </tr></tbody>
</table>

#### Path Parameters

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/payroll/setup/:id",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    sync_accounts: true,
    company_name: "Nooli",
    er_number: "00003847",
    tin: 22344533,
    gra_branch_id: 1,
    tier2_trustee_id: 1,
    tier2_trustee_number: "fffdfdfd",
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
  "sync_accounts": true,
  "company_name": "Nooli",
  "er_number": "00003847",
  "tin": 22344533,
  "gra_branch_id": 1,
  "tier2_trustee_id": 1,
  "tier2_trustee_number": "fffdfdfd"
}`)
    req, err := http.NewRequest("POST", "/api/v3/payroll/setup/:id", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/payroll/setup/:id", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "sync_accounts": true,
  "company_name": "Nooli",
  "er_number": "00003847",
  "tin": 22344533,
  "gra_branch_id": 1,
  "tier2_trustee_id": 1,
  "tier2_trustee_number": "fffdfdfd"
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
        "sync_accounts": ["The sync accounts field is required."],
        "company_name": ["The company name field is required."],
        "er_number": ["The er number field is required."]
      }
    }
  },
  {
    "name": "200 success",
    "body": {
      "id": 1,
      "user_id": 5,
      "business_id": 1,
      "sync_accounts": true,
      "er_number": "00003847",
      "Company_name": "Nooli",
      "tin": "22344533",
      "old_tin": null,
      "gra_branch_id": 1,
      "tier2_trustee_id": 1,
      "tier2_trustee_number": "fffdfdfd",
      "created_at": "2024-11-27T04:36:40.000000Z",
      "updated_at": "2024-11-27T06:27:51.000000Z",
      "tier3_trustee_id": null,
      "tier3_trustee_number": null,
      "tier3_description": null,
      "nssf_formula": "tiered",
      "nita_number": null,
      "tax_station": null,
      "payment_accountID": {
        "user_id": 5,
        "business_id": 1,
        "id": 1,
        "basic_account": 34,
        "allowance_account": 34,
        "overtime_account": 34,
        "bonus_account": 34,
        "ssf_account": 42,
        "reimbursement_account": 43,
        "ssnit1_account": 44,
        "ssnit2_account": 45,
        "paye_account": 46,
        "overtimetax_account": 46,
        "bonustax_account": 46,
        "deductions_account": 34,
        "net_account": 47,
        "created_at": "2024-11-27T04:36:40.000000Z",
        "updated_at": "2024-11-27T04:36:40.000000Z",
        "company_id": null,
        "tier3_account_id": null,
        "employer_tier3_account": 0,
        "nhif_account_id": null
      },
      "accounts": {
        "user_id": 5,
        "business_id": 1,
        "id": 1,
        "basic_account": 34,
        "allowance_account": 34,
        "overtime_account": 34,
        "bonus_account": 34,
        "ssf_account": 42,
        "reimbursement_account": 43,
        "ssnit1_account": 44,
        "ssnit2_account": 45,
        "paye_account": 46,
        "overtimetax_account": 46,
        "bonustax_account": 46,
        "deductions_account": 34,
        "net_account": 47,
        "created_at": "2024-11-27T04:36:40.000000Z",
        "updated_at": "2024-11-27T04:36:40.000000Z",
        "company_id": null,
        "tier3_account_id": null,
        "employer_tier3_account": 0,
        "nhif_account_id": null
      },
      "gra_branch": {
        "id": 1,
        "country_id": 81,
        "branch": "SPINTEX MTO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      "tier2_trustee": {
        "id": 1,
        "country_id": 81,
        "name": "General Trust Company Limited",
        "licence_no": "CT12010 ",
        "address": "141/21 Saflo Link, Abelemkpe Accra",
        "contact_person": " Bernard Acquaye",
        "tel_numbers": "0508-129515/0243-445524",
        "created_at": null,
        "updated_at": null
      },
      "tier3_trustee": null,
      "social_security_header": "SOCIAL SECURITY AND NATIONAL INSURANCE TRUST",
      "social_security_label": "SSNIT",
      "tax_header_text": "",
      "tax_header_3": "EMPLOYEE MONTHLY TAX DEDUCTION SCHEDULE (P.A.Y.E)",
      "tax_header_2": "DOMESTIC TAX REVENUE DIVISION",
      "tax_header_1": "GHANA REVENUE AUTHORITY",
      "social_security_logo": "/img/logos/ssnit.jpg",
      "tax_office_logo": "/img/logos/gra_logo.jpg"
    }
  }
]
```

</div>

</div>

### Get setups

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
  url: "/api/v3/payroll/setup",
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

    req, err := http.NewRequest("GET", "/api/v3/payroll/setup", nil)
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
    $response = $client->request("GET", "/api/v3/payroll/setup", [
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
        "sync_accounts": true,
        "er_number": "00003847",
        "Company_name": "Aviato",
        "tin": "22344533",
        "old_tin": null,
        "gra_branch_id": 1,
        "tier2_trustee_id": 1,
        "tier2_trustee_number": "fffdfdfd",
        "created_at": "2024-11-27T04:36:40.000000Z",
        "updated_at": "2024-11-27T04:36:40.000000Z",
        "tier3_trustee_id": null,
        "tier3_trustee_number": null,
        "tier3_description": null,
        "nssf_formula": "tiered",
        "nita_number": null,
        "tax_station": null,
        "payment_accountID": {
          "user_id": 5,
          "business_id": 1,
          "id": 1,
          "basic_account": 34,
          "allowance_account": 34,
          "overtime_account": 34,
          "bonus_account": 34,
          "ssf_account": 42,
          "reimbursement_account": 43,
          "ssnit1_account": 44,
          "ssnit2_account": 45,
          "paye_account": 46,
          "overtimetax_account": 46,
          "bonustax_account": 46,
          "deductions_account": 34,
          "net_account": 47,
          "created_at": "2024-11-27T04:36:40.000000Z",
          "updated_at": "2024-11-27T04:36:40.000000Z",
          "company_id": null,
          "tier3_account_id": null,
          "employer_tier3_account": 0,
          "nhif_account_id": null
        },
        "accounts": {
          "user_id": 5,
          "business_id": 1,
          "id": 1,
          "basic_account": 34,
          "allowance_account": 34,
          "overtime_account": 34,
          "bonus_account": 34,
          "ssf_account": 42,
          "reimbursement_account": 43,
          "ssnit1_account": 44,
          "ssnit2_account": 45,
          "paye_account": 46,
          "overtimetax_account": 46,
          "bonustax_account": 46,
          "deductions_account": 34,
          "net_account": 47,
          "created_at": "2024-11-27T04:36:40.000000Z",
          "updated_at": "2024-11-27T04:36:40.000000Z",
          "company_id": null,
          "tier3_account_id": null,
          "employer_tier3_account": 0,
          "nhif_account_id": null
        },
        "gra_branch": {
          "id": 1,
          "country_id": 81,
          "branch": "SPINTEX MTO",
          "created_at": null,
          "updated_at": null,
          "location": null,
          "address": null,
          "phone_number": null
        },
        "tier2_trustee": {
          "id": 1,
          "country_id": 81,
          "name": "General Trust Company Limited",
          "licence_no": "CT12010 ",
          "address": "141/21 Saflo Link, Abelemkpe Accra",
          "contact_person": " Bernard Acquaye",
          "tel_numbers": "0508-129515/0243-445524",
          "created_at": null,
          "updated_at": null
        },
        "tier3_trustee": null
      },
      {
        "id": 2,
        "user_id": 5,
        "business_id": 1,
        "sync_accounts": true,
        "er_number": "00003847",
        "Company_name": "Nooli",
        "tin": "22344533",
        "old_tin": null,
        "gra_branch_id": 1,
        "tier2_trustee_id": 1,
        "tier2_trustee_number": "fffdfdfd",
        "created_at": "2024-11-27T06:17:44.000000Z",
        "updated_at": "2024-11-27T06:17:44.000000Z",
        "tier3_trustee_id": null,
        "tier3_trustee_number": null,
        "tier3_description": null,
        "nssf_formula": "tiered",
        "nita_number": null,
        "tax_station": null,
        "payment_accountID": {
          "user_id": 5,
          "business_id": 1,
          "id": 1,
          "basic_account": 34,
          "allowance_account": 34,
          "overtime_account": 34,
          "bonus_account": 34,
          "ssf_account": 42,
          "reimbursement_account": 43,
          "ssnit1_account": 44,
          "ssnit2_account": 45,
          "paye_account": 46,
          "overtimetax_account": 46,
          "bonustax_account": 46,
          "deductions_account": 34,
          "net_account": 47,
          "created_at": "2024-11-27T04:36:40.000000Z",
          "updated_at": "2024-11-27T04:36:40.000000Z",
          "company_id": null,
          "tier3_account_id": null,
          "employer_tier3_account": 0,
          "nhif_account_id": null
        },
        "accounts": {
          "user_id": 5,
          "business_id": 1,
          "id": 1,
          "basic_account": 34,
          "allowance_account": 34,
          "overtime_account": 34,
          "bonus_account": 34,
          "ssf_account": 42,
          "reimbursement_account": 43,
          "ssnit1_account": 44,
          "ssnit2_account": 45,
          "paye_account": 46,
          "overtimetax_account": 46,
          "bonustax_account": 46,
          "deductions_account": 34,
          "net_account": 47,
          "created_at": "2024-11-27T04:36:40.000000Z",
          "updated_at": "2024-11-27T04:36:40.000000Z",
          "company_id": null,
          "tier3_account_id": null,
          "employer_tier3_account": 0,
          "nhif_account_id": null
        },
        "gra_branch": {
          "id": 1,
          "country_id": 81,
          "branch": "SPINTEX MTO",
          "created_at": null,
          "updated_at": null,
          "location": null,
          "address": null,
          "phone_number": null
        },
        "tier2_trustee": {
          "id": 1,
          "country_id": 81,
          "name": "General Trust Company Limited",
          "licence_no": "CT12010 ",
          "address": "141/21 Saflo Link, Abelemkpe Accra",
          "contact_person": " Bernard Acquaye",
          "tel_numbers": "0508-129515/0243-445524",
          "created_at": null,
          "updated_at": null
        },
        "tier3_trustee": null
      }
    ]
  }
]
```

</div>

</div>

### Get tax offices

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
  url: "/api/v3/payroll/tax-offices",
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

    req, err := http.NewRequest("GET", "/api/v3/payroll/tax-offices", nil)
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
    $response = $client->request("GET", "/api/v3/payroll/tax-offices", [
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
        "id": 23,
        "country_id": 81,
        "branch": "ACHIMOTA STO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 6,
        "country_id": 81,
        "branch": "ADABRAKA MTO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 25,
        "country_id": 81,
        "branch": "ADABRAKA STO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 24,
        "country_id": 81,
        "branch": "ADENTA STO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 27,
        "country_id": 81,
        "branch": "ADUM STO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 31,
        "country_id": 81,
        "branch": "AGBOGBLOSHIE MTO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 26,
        "country_id": 81,
        "branch": "AGBOGBLOSHIE STO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 29,
        "country_id": 81,
        "branch": "ASHAIMAN STO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 4,
        "country_id": 81,
        "branch": "ASHTOWN STO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 13,
        "country_id": 81,
        "branch": "ASOKWA MTO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 18,
        "country_id": 81,
        "branch": "ASOKWA STO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 17,
        "country_id": 81,
        "branch": "KANESHIE MTO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 22,
        "country_id": 81,
        "branch": "KANESHIE STO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 10,
        "country_id": 81,
        "branch": "KASOA STO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 30,
        "country_id": 81,
        "branch": "KINBU LTO ANNEX",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 28,
        "country_id": 81,
        "branch": "KWADASO STO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 14,
        "country_id": 81,
        "branch": "LEGON MTO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 9,
        "country_id": 81,
        "branch": "LTO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 16,
        "country_id": 81,
        "branch": "MADINA STO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 20,
        "country_id": 81,
        "branch": "MAKOLA STO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 8,
        "country_id": 81,
        "branch": "MATAHEKO STO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 7,
        "country_id": 81,
        "branch": "NIMA STO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 19,
        "country_id": 81,
        "branch": "OSU MTO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 3,
        "country_id": 81,
        "branch": "OSU STO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 1,
        "country_id": 81,
        "branch": "SPINTEX MTO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 12,
        "country_id": 81,
        "branch": "SUAME MTO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 21,
        "country_id": 81,
        "branch": "SUAME STO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 2,
        "country_id": 81,
        "branch": "TEMA MTO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 11,
        "country_id": 81,
        "branch": "TEMA STO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 15,
        "country_id": 81,
        "branch": "TESHIE NUNGUA STO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      },
      {
        "id": 5,
        "country_id": 81,
        "branch": "WEIJA STO",
        "created_at": null,
        "updated_at": null,
        "location": null,
        "address": null,
        "phone_number": null
      }
    ]
  }
]
```

</div>

</div>

### Get tier two trustees

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
  url: "/api/v3/payroll/tier-two-trustees",
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

    req, err := http.NewRequest("GET", "/api/v3/payroll/tier-two-trustees", nil)
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
    $response = $client->request("GET", "/api/v3/payroll/tier-two-trustees", [
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
        "id": 2,
        "country_id": 81,
        "name": "Axis Pension Trust Limited",
        "licence_no": " CT12009",
        "address": " # 4 Ibadan Avenue, East Legon, Accra",
        "contact_person": "Simon K.A. Ayivi",
        "tel_numbers": "0302-543314/0261-106775",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 9,
        "country_id": 81,
        "name": "Best Pensions Trust limited",
        "licence_no": "CT15003",
        "address": " E. Plaza, 2 Osubadu Street, Dzorwulu, Accra",
        "contact_person": "Kwadwo Danso-Dodoo",
        "tel_numbers": "0244-676161",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 18,
        "country_id": 81,
        "name": "Daakye Pension Trust Limited",
        "licence_no": "CT13008",
        "address": "3rd Floor Vodafone Building ABC, Junction Achimota",
        "contact_person": "Wisdom Mensah Dali",
        "tel_numbers": "0505-257466/0302408444",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 3,
        "country_id": 81,
        "name": "Enterprise Trustees Limited",
        "licence_no": "CT12007",
        "address": "Enterprise House 5TH Floor Accra High Street",
        "contact_person": "Joseph Ampofo",
        "tel_numbers": "0244-374322",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 19,
        "country_id": 81,
        "name": "First Merit Trust Limited",
        "licence_no": "CT17001",
        "address": "No. 13 Dzorwulu Crescent, Accra",
        "contact_person": " Emmauel A. Donkor",
        "tel_numbers": "0244-260868/0501-618880",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 1,
        "country_id": 81,
        "name": "General Trust Company Limited",
        "licence_no": "CT12010 ",
        "address": "141/21 Saflo Link, Abelemkpe Accra",
        "contact_person": " Bernard Acquaye",
        "tel_numbers": "0508-129515/0243-445524",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 6,
        "country_id": 81,
        "name": "Glico Pensions Trustee Company Limited",
        "licence_no": "CT12011",
        "address": " 47 Kwame Nkrumah Avenue , Accra",
        "contact_person": " F. SaparaGrant(Dr)",
        "tel_numbers": "0501-260548",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 22,
        "country_id": 81,
        "name": "Hedge Pensions Trust",
        "licence_no": "CT12015",
        "address": "National Secretariate CLOGSAG Ministries Stadium Road Accra",
        "contact_person": "Prof. Emmanuel Asiamah",
        "tel_numbers": "0244223320",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 12,
        "country_id": 81,
        "name": "Kimpton Trust Limited",
        "licence_no": "CT13007",
        "address": "136 La-Bawaleshie road, American House Bridge, East Legon, Accra",
        "contact_person": "Eric Osei Abankwa",
        "tel_numbers": "0243-571437",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 15,
        "country_id": 81,
        "name": "Metropolitan Pensions Trust Limited",
        "licence_no": "CT12002",
        "address": "Metropolitan House 81 Tabon Link, North Ridge, Accra",
        "contact_person": "Solomon Poku Boadu",
        "tel_numbers": "0244-597980",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 16,
        "country_id": 81,
        "name": "Negotiated Benefits Trust Company Limited",
        "licence_no": "CT12012",
        "address": "Emerald House, Roman Ridge, Accra",
        "contact_person": " Ivan Smith Bentum",
        "tel_numbers": "0266-086031/0272-555556",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 14,
        "country_id": 81,
        "name": "NTHC Trustees Limited",
        "licence_no": "CT12014",
        "address": "Martco House, Adabraka, Accra",
        "contact_person": "Adwoa Sakyibea Ohipeni",
        "tel_numbers": "0202-525722",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 10,
        "country_id": 81,
        "name": "Old Mutual Pensions Trust Ghana Limited",
        "licence_no": "CT12004",
        "address": " No. 4 Dr. Paul Acquah Street, Airport Accra",
        "contact_person": "Sena Nyame",
        "tel_numbers": "0501-609146/0303-968667",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 8,
        "country_id": 81,
        "name": "Pensions Alliance Trust Limited",
        "licence_no": "CT12003",
        "address": " Hse. No. 3, 55A Kakramadu Link East Cantonments, Accra",
        "contact_person": "Ras Boateng",
        "tel_numbers": "0556-590401/0509-044013",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 17,
        "country_id": 81,
        "name": "Pensol Capital Trust Limited",
        "licence_no": "CT15001",
        "address": "406 Modhlana Eduado Road Kaneshie, Accra Dr. Jordan",
        "contact_person": "Larbie",
        "tel_numbers": "0244-631927",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 21,
        "country_id": 81,
        "name": "Pentrust Limited",
        "licence_no": "CT13003",
        "address": " No. 39 Dzorwulu Street, Accra",
        "contact_person": "Victoria Armah",
        "tel_numbers": "0501-295587",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 13,
        "country_id": 81,
        "name": "People’s Pension Trust Limited",
        "licence_no": "CT16001",
        "address": "No. 5 Sam Nujoma Close, North Ridge, Accra",
        "contact_person": "Samuel Waterberg",
        "tel_numbers": "0205695538",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 4,
        "country_id": 81,
        "name": "Petra Trust Company Limited",
        "licence_no": "CT12001",
        "address": "113, Airport West Dzorwulu, Accra ",
        "contact_person": "Kofi Fynn",
        "tel_numbers": " 0247-564646/0261-106775",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 20,
        "country_id": 81,
        "name": "QLAC FINANCIAL TRUST LIMITED",
        "licence_no": "N/A",
        "address": "N/A",
        "contact_person": "N/A",
        "tel_numbers": "N/A",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 11,
        "country_id": 81,
        "name": "Secure Pensions Trust Limited",
        "licence_no": "CT12006",
        "address": "91 OSU Badu Street, West Airport, Accra",
        "contact_person": " Theresa M. D. Afile",
        "tel_numbers": "0209-984902",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 7,
        "country_id": 81,
        "name": "Stallion Trust And Administration Ltd",
        "licence_no": "CT12013",
        "address": "3rd Floor Gulf House, Tetteh Quarshie Interchange, Accra.",
        "contact_person": "Charles OseiAkoto",
        "tel_numbers": "0244-611002",
        "created_at": null,
        "updated_at": null
      },
      {
        "id": 5,
        "country_id": 81,
        "name": "United Pension Trustees Limited",
        "licence_no": " CT12008",
        "address": " Vanguard Building, Independence Avenue, Accra.",
        "contact_person": "Isaac Yao Tedeku",
        "tel_numbers": "0242-076866",
        "created_at": null,
        "updated_at": null
      }
    ]
  }
]
```

</div>

</div>

### Payroll accounts

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
          <td style="text-align:left">basic_account
            <div class="table-description">Integer</div>
          </td>
          <td style="text-align:left">Your prefered account for recording basic salaries
            </td>
        </tr><tr>
          <td style="text-align:left">bonus_account
            <div class="table-description">Integer</div>
          </td>
          <td style="text-align:left">Your prefered account for recording  bonuses
            </td>
        </tr><tr>
          <td style="text-align:left">allowance_account
            <div class="table-description">Integer</div>
          </td>
          <td style="text-align:left">Your prefered account for recording allowances
            </td>
        </tr><tr>
          <td style="text-align:left">overtime_account
            <div class="table-description">Integer</div>
          </td>
          <td style="text-align:left">Your prefered account for recording overtime
            </td>
        </tr><tr>
          <td style="text-align:left">reimbursement_account
            <div class="table-description">Integer</div>
          </td>
          <td style="text-align:left">Your prefered account for recording reimbursements or non taxable allowances
            </td>
        </tr><tr>
          <td style="text-align:left">ssnit2_account
            <div class="table-description">Integer</div>
          </td>
          <td style="text-align:left">Your prefered account for recording social security tier1
            </td>
        </tr><tr>
          <td style="text-align:left">ssnit1_account
            <div class="table-description">Integer</div>
          </td>
          <td style="text-align:left">Your prefered account for recording social security tier2
            </td>
        </tr><tr>
          <td style="text-align:left">ssf_account
            <div class="table-description">Integer</div>
          </td>
          <td style="text-align:left">Your prefered account for recording social security funds payable by the company
            </td>
        </tr><tr>
          <td style="text-align:left">overtimetax_account
            <div class="table-description">Integer</div>
          </td>
          <td style="text-align:left">Your prefered account for recording overtime tax
            </td>
        </tr><tr>
          <td style="text-align:left">bonustax_account
            <div class="table-description">Integer</div>
          </td>
          <td style="text-align:left">Your prefered account for recording bonus tax
            </td>
        </tr><tr>
          <td style="text-align:left">deductions_account
            <div class="table-description">Integer</div>
          </td>
          <td style="text-align:left">Your prefered account for recording other deductions
            </td>
        </tr><tr>
          <td style="text-align:left">paye_account
            <div class="table-description">Integer</div>
          </td>
          <td style="text-align:left">Your prefered account for recording income taxes(PAYE)
            </td>
        </tr><tr>
          <td style="text-align:left">net_account
            <div class="table-description">Integer</div>
          </td>
          <td style="text-align:left">Your prefered account for recording net salaries
            </td>
        </tr><tr>
          <td style="text-align:left">tier3_account_id
            <div class="table-description">Integer</div>
          </td>
          <td style="text-align:left">Your prefered account for recording social security tier3
            </td>
        </tr><tr>
          <td style="text-align:left">employer_tier3_account
            <div class="table-description">Integer</div>
          </td>
          <td style="text-align:left">Your prefered account for recording social security tier3 for employee
            </td>
        </tr></tbody>
</table><span class="info-card">All fields are optional</span>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/payroll/accounts",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    basic_account: 1,
    bonus_account: "",
    allowance_account: "",
    overtime_account: "",
    reimbursement_account: "",
    ssnit2_account: "",
    ssnit1_account: "",
    ssf_account: "",
    overtimetax_account: "",
    bonustax_account: "",
    deductions_account: "",
    paye_account: "",
    net_account: "",
    tier3_account_id: "",
    employer_tier3_account: "",
    nhif_account_id: "",
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
  "basic_account": 1,
  "bonus_account": "",
  "allowance_account": "",
  "overtime_account": "",
  "reimbursement_account": "",
  "ssnit2_account": "",
  "ssnit1_account": "",
  "ssf_account": "",
  "overtimetax_account": "",
  "bonustax_account": "",
  "deductions_account": "",
  "paye_account": "",
  "net_account": "",
  "tier3_account_id": "",
  "employer_tier3_account": "",
  "nhif_account_id": ""
}`)
    req, err := http.NewRequest("POST", "/api/v3/payroll/accounts", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/payroll/accounts", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "basic_account": 1,
  "bonus_account": "",
  "allowance_account": "",
  "overtime_account": "",
  "reimbursement_account": "",
  "ssnit2_account": "",
  "ssnit1_account": "",
  "ssf_account": "",
  "overtimetax_account": "",
  "bonustax_account": "",
  "deductions_account": "",
  "paye_account": "",
  "net_account": "",
  "tier3_account_id": "",
  "employer_tier3_account": "",
  "nhif_account_id": ""
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
        "basic_account": ["The selected basic account is invalid."]
      }
    }
  }
]
```

</div>

</div>
