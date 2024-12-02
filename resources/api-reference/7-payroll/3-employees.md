#meta-data title: Employees

## Employees

### Create employee

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
          <td style="text-align:left">first_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">First name of employee
            </td>
        </tr><tr>
          <td style="text-align:left">last_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Last name of employee
            </td>
        </tr><tr>
          <td style="text-align:left">role
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Role of the of employee
            </td>
        </tr><tr>
          <td style="text-align:left">bank_id
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Bank short code of employee,s bank
            </td>
        </tr><tr>
          <td style="text-align:left">bank_branch
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Bank branch name of employee's bank
            </td>
        </tr><tr>
          <td style="text-align:left">account_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Bank account number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">residential_status
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Residential status of employee. Resident or non-resident
            </td>
        </tr><tr>
          <td style="text-align:left">status
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Status of the employee of employee. Active or Inactive
            </td>
        </tr><tr>
          <td style="text-align:left">department_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid departent ID of employee
            </td>
        </tr><tr>
          <td style="text-align:left">basic_salary
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">Basic salary of employee
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">other_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Other names of employee
            </td>
        </tr><tr>
          <td style="text-align:left">phone_number1
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Phone number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">email
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Email of employee
            </td>
        </tr><tr>
          <td style="text-align:left">staff_id
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Taff ID of employee
            </td>
        </tr><tr>
          <td style="text-align:left">ssnit_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Social security number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">tin
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Tax identification number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">start_date
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Start date of employement  of employee
            </td>
        </tr><tr>
          <td style="text-align:left">end_date
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">End date of employement  of employee, for temporal employees
            </td>
        </tr><tr>
          <td style="text-align:left">taxable_allowance
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">Total taxable allowances for the  employee
            </td>
        </tr><tr>
          <td style="text-align:left">non_taxable_allowance
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">Total non-taxable allowances for the  employee
            </td>
        </tr><tr>
          <td style="text-align:left">nia_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">National identification number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">nhif_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">National health insurance funds number of employee. Applicable to Kenya
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
  url: "/api/v3/payroll/employees",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    first_name: "",
    last_name: "",
    other_name: "",
    role: "",
    bank_id: "",
    bank_branch: "",
    account_number: "",
    residential_status: "",
    status: "",
    department_id: "",
    basic_salary: "",
    phone_number1: "",
    email: "",
    staff_id: "",
    ssnit_number: "",
    tin: "",
    start_date: "",
    end_date: "",
    taxable_allowance: "",
    non_taxable_allowance: "",
    nia_number: "",
    nhif_number: "",
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
  "first_name": "",
  "last_name": "",
  "other_name": "",
  "role": "",
  "bank_id": "",
  "bank_branch": "",
  "account_number": "",
  "residential_status": "",
  "status": "",
  "department_id": "",
  "basic_salary": "",
  "phone_number1": "",
  "email": "",
  "staff_id": "",
  "ssnit_number": "",
  "tin": "",
  "start_date": "",
  "end_date": "",
  "taxable_allowance": "",
  "non_taxable_allowance": "",
  "nia_number": "",
  "nhif_number": ""
}`)
    req, err := http.NewRequest("POST", "/api/v3/payroll/employees", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/payroll/employees", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "first_name": "",
  "last_name": "",
  "other_name": "",
  "role": "",
  "bank_id": "",
  "bank_branch": "",
  "account_number": "",
  "residential_status": "",
  "status": "",
  "department_id": "",
  "basic_salary": "",
  "phone_number1": "",
  "email": "",
  "staff_id": "",
  "ssnit_number": "",
  "tin": "",
  "start_date": "",
  "end_date": "",
  "taxable_allowance": "",
  "non_taxable_allowance": "",
  "nia_number": "",
  "nhif_number": ""
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
    "name": "200 success",
    "body": {
      "first_name": "Nelson",
      "last_name": "Bighead",
      "other_name": null,
      "phone_number1": null,
      "email": "",
      "staff_id": null,
      "ssnit_number": null,
      "tin": null,
      "start_date": "2024-11-27T00:00:00.000000Z",
      "end_date": null,
      "role": "Developer at nipplet",
      "recipient_id": "",
      "bank_code": "gcb",
      "bank_branch": "palo alto",
      "account_number": "0039888292",
      "resident_status": "Resident",
      "basic_salary": 0,
      "taxable_allowance": 0,
      "non_taxable_allowance": 0,
      "department_id": 3,
      "status": "active",
      "user_id": 5,
      "business_id": 1,
      "company_id": 1,
      "compute_paye": false,
      "compute_pension": false,
      "employer_tier3_amount": 0,
      "employee_tier3_amount": 0,
      "nhif_number": null,
      "nia_number": null,
      "created_at": "2024-11-27T04:52:47.000000Z",
      "updated_at": "2024-11-27T04:52:47.000000Z",
      "id": 2
    }
  },
  {
    "name": "422 validation error",
    "body": {
      "message": "The given data was invalid.",
      "errors": {
        "first_name": ["The first name field is required."],
        "last_name": ["The last name field is required."],
        "role": ["The role field is required."],
        "bank_id": ["The bank id field is required."],
        "bank_branch": ["The bank branch field is required."],
        "account_number": ["The account number field is required."],
        "residential_status": ["The residential status field is required."],
        "status": ["The status field is required."],
        "basic_salary": ["The basic salary field is required."]
      }
    }
  }
]
```

</div>

</div>

### Get employees

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
          <td style="text-align:left">first_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">First name of employee
            </td>
        </tr><tr>
          <td style="text-align:left">last_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Last name of employee
            </td>
        </tr><tr>
          <td style="text-align:left">role
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Role of the of employee
            </td>
        </tr><tr>
          <td style="text-align:left">bank_id
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Bank short code of employee,s bank
            </td>
        </tr><tr>
          <td style="text-align:left">bank_branch
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Bank branch name of employee's bank
            </td>
        </tr><tr>
          <td style="text-align:left">account_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Bank account number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">residential_status
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Residential status of employee. Resident or non-resident
            </td>
        </tr><tr>
          <td style="text-align:left">status
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Status of the employee of employee. Active or Inactive
            </td>
        </tr><tr>
          <td style="text-align:left">department_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid departent ID of employee
            </td>
        </tr><tr>
          <td style="text-align:left">basic_salary
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">Basic salary of employee
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">other_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Other names of employee
            </td>
        </tr><tr>
          <td style="text-align:left">phone_number1
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Phone number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">email
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Email of employee
            </td>
        </tr><tr>
          <td style="text-align:left">staff_id
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Taff ID of employee
            </td>
        </tr><tr>
          <td style="text-align:left">ssnit_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Social security number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">tin
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Tax identification number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">start_date
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Start date of employement  of employee
            </td>
        </tr><tr>
          <td style="text-align:left">end_date
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">End date of employement  of employee, for temporal employees
            </td>
        </tr><tr>
          <td style="text-align:left">taxable_allowance
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">Total taxable allowances for the  employee
            </td>
        </tr><tr>
          <td style="text-align:left">non_taxable_allowance
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">Total non-taxable allowances for the  employee
            </td>
        </tr><tr>
          <td style="text-align:left">nia_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">National identification number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">nhif_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">National health insurance funds number of employee. Applicable to Kenya
            </td>
        </tr></tbody>
</table>

</div>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/payroll/employees",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    first_name: "",
    last_name: "",
    other_name: "",
    role: "",
    bank_id: "",
    bank_branch: "",
    account_number: "",
    residential_status: "",
    status: "",
    department_id: "",
    basic_salary: "",
    phone_number1: "",
    email: "",
    staff_id: "",
    ssnit_number: "",
    tin: "",
    start_date: "",
    end_date: "",
    taxable_allowance: "",
    non_taxable_allowance: "",
    nia_number: "",
    nhif_number: "",
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
  "first_name": "",
  "last_name": "",
  "other_name": "",
  "role": "",
  "bank_id": "",
  "bank_branch": "",
  "account_number": "",
  "residential_status": "",
  "status": "",
  "department_id": "",
  "basic_salary": "",
  "phone_number1": "",
  "email": "",
  "staff_id": "",
  "ssnit_number": "",
  "tin": "",
  "start_date": "",
  "end_date": "",
  "taxable_allowance": "",
  "non_taxable_allowance": "",
  "nia_number": "",
  "nhif_number": ""
}`)
    req, err := http.NewRequest("GET", "/api/v3/payroll/employees", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("GET", "/api/v3/payroll/employees", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "first_name": "",
  "last_name": "",
  "other_name": "",
  "role": "",
  "bank_id": "",
  "bank_branch": "",
  "account_number": "",
  "residential_status": "",
  "status": "",
  "department_id": "",
  "basic_salary": "",
  "phone_number1": "",
  "email": "",
  "staff_id": "",
  "ssnit_number": "",
  "tin": "",
  "start_date": "",
  "end_date": "",
  "taxable_allowance": "",
  "non_taxable_allowance": "",
  "nia_number": "",
  "nhif_number": ""
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
    "name": "200 success",
    "body": [
      {
        "id": 1,
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
        "department_id": 0,
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
        "created_at": "2024-11-27T04:50:43.000000Z",
        "updated_at": "2024-11-27T04:50:43.000000Z",
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
        "department": null,
        "allowances": [],
        "reimbursements": [],
        "reliefs": []
      },
      {
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
      {
        "id": 3,
        "user_id": 5,
        "business_id": 1,
        "first_name": "Nelson",
        "other_name": "Big Head",
        "last_name": "Bigetti",
        "phone_number1": "13999445",
        "email": "",
        "resident_status": "Resident",
        "staff_id": "",
        "ssnit_number": "",
        "department_id": 3,
        "tin": "",
        "role": "Developer at nipplet",
        "start_date": "2024-11-27",
        "status": "active",
        "recipient_id": "",
        "bank_code": "gcb",
        "bank_branch": "palo alto",
        "account_number": "0039888292",
        "basic_salary": 200000,
        "taxable_allowance": 0,
        "non_taxable_allowance": 0,
        "created_at": "2024-11-27T05:07:14.000000Z",
        "updated_at": "2024-11-27T05:07:14.000000Z",
        "remember_token": null,
        "company_id": 1,
        "compute_paye": false,
        "compute_pension": false,
        "deleted_at": null,
        "employer_tier3_amount": 0,
        "employee_tier3_amount": 0,
        "nhif_number": "",
        "nia_number": "",
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
      }
    ]
  }
]
```

</div>

</div>

### Update employee

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
          <td style="text-align:left">first_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">First name of employee
            </td>
        </tr><tr>
          <td style="text-align:left">last_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Last name of employee
            </td>
        </tr><tr>
          <td style="text-align:left">role
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Role of the of employee
            </td>
        </tr><tr>
          <td style="text-align:left">bank_id
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Bank short code of employee,s bank
            </td>
        </tr><tr>
          <td style="text-align:left">bank_branch
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Bank branch name of employee's bank
            </td>
        </tr><tr>
          <td style="text-align:left">account_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Bank account number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">residential_status
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Residential status of employee. Resident or non-resident
            </td>
        </tr><tr>
          <td style="text-align:left">status
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Status of the employee of employee. Active or Inactive
            </td>
        </tr><tr>
          <td style="text-align:left">department_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid departent ID of employee
            </td>
        </tr><tr>
          <td style="text-align:left">basic_salary
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">Basic salary of employee
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">other_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Other names of employee
            </td>
        </tr><tr>
          <td style="text-align:left">phone_number1
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Phone number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">email
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Email of employee
            </td>
        </tr><tr>
          <td style="text-align:left">staff_id
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Taff ID of employee
            </td>
        </tr><tr>
          <td style="text-align:left">ssnit_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Social security number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">tin
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Tax identification number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">start_date
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Start date of employement  of employee
            </td>
        </tr><tr>
          <td style="text-align:left">end_date
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">End date of employement  of employee, for temporal employees
            </td>
        </tr><tr>
          <td style="text-align:left">taxable_allowance
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">Total taxable allowances for the  employee
            </td>
        </tr><tr>
          <td style="text-align:left">non_taxable_allowance
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">Total non-taxable allowances for the  employee
            </td>
        </tr><tr>
          <td style="text-align:left">nia_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">National identification number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">nhif_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">National health insurance funds number of employee. Applicable to Kenya
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
          <td style="text-align:left">The id of the employee
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "POST",
  url: "/api/v3/payroll/employees/:id",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    first_name: "",
    last_name: "",
    other_name: "",
    role: "",
    bank_id: "",
    bank_branch: "",
    account_number: "",
    residential_status: "",
    status: "",
    department_id: "",
    basic_salary: "",
    phone_number1: "",
    email: "",
    staff_id: "",
    ssnit_number: "",
    tin: "",
    start_date: "",
    end_date: "",
    taxable_allowance: "",
    non_taxable_allowance: "",
    nia_number: "",
    nhif_number: "",
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
  "first_name": "",
  "last_name": "",
  "other_name": "",
  "role": "",
  "bank_id": "",
  "bank_branch": "",
  "account_number": "",
  "residential_status": "",
  "status": "",
  "department_id": "",
  "basic_salary": "",
  "phone_number1": "",
  "email": "",
  "staff_id": "",
  "ssnit_number": "",
  "tin": "",
  "start_date": "",
  "end_date": "",
  "taxable_allowance": "",
  "non_taxable_allowance": "",
  "nia_number": "",
  "nhif_number": ""
}`)
    req, err := http.NewRequest("POST", "/api/v3/payroll/employees/:id", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("POST", "/api/v3/payroll/employees/:id", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "first_name": "",
  "last_name": "",
  "other_name": "",
  "role": "",
  "bank_id": "",
  "bank_branch": "",
  "account_number": "",
  "residential_status": "",
  "status": "",
  "department_id": "",
  "basic_salary": "",
  "phone_number1": "",
  "email": "",
  "staff_id": "",
  "ssnit_number": "",
  "tin": "",
  "start_date": "",
  "end_date": "",
  "taxable_allowance": "",
  "non_taxable_allowance": "",
  "nia_number": "",
  "nhif_number": ""
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
    "name": "200 success",
    "body": {
      "first_name": "Nelson",
      "last_name": "Bighead",
      "other_name": null,
      "phone_number1": null,
      "email": "",
      "staff_id": null,
      "ssnit_number": null,
      "tin": null,
      "start_date": "2024-11-27T00:00:00.000000Z",
      "end_date": null,
      "role": "Developer at nipplet",
      "recipient_id": "",
      "bank_code": "gcb",
      "bank_branch": "palo alto",
      "account_number": "0039888292",
      "resident_status": "Resident",
      "basic_salary": 0,
      "taxable_allowance": 0,
      "non_taxable_allowance": 0,
      "department_id": 3,
      "status": "active",
      "user_id": 5,
      "business_id": 1,
      "company_id": 1,
      "compute_paye": false,
      "compute_pension": false,
      "employer_tier3_amount": 0,
      "employee_tier3_amount": 0,
      "nhif_number": null,
      "nia_number": null,
      "created_at": "2024-11-27T04:52:47.000000Z",
      "updated_at": "2024-11-27T04:52:47.000000Z",
      "id": 2
    }
  },
  {
    "name": "422 validation error",
    "body": {
      "message": "The given data was invalid.",
      "errors": {
        "first_name": ["The first name field is required."],
        "last_name": ["The last name field is required."],
        "role": ["The role field is required."],
        "bank_id": ["The bank id field is required."],
        "bank_branch": ["The bank branch field is required."],
        "account_number": ["The account number field is required."],
        "residential_status": ["The residential status field is required."],
        "status": ["The status field is required."],
        "basic_salary": ["The basic salary field is required."]
      }
    }
  }
]
```

</div>

</div>

### Get an employee

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
          <td style="text-align:left">first_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">First name of employee
            </td>
        </tr><tr>
          <td style="text-align:left">last_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Last name of employee
            </td>
        </tr><tr>
          <td style="text-align:left">role
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Role of the of employee
            </td>
        </tr><tr>
          <td style="text-align:left">bank_id
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Bank short code of employee,s bank
            </td>
        </tr><tr>
          <td style="text-align:left">bank_branch
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Bank branch name of employee's bank
            </td>
        </tr><tr>
          <td style="text-align:left">account_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Bank account number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">residential_status
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Residential status of employee. Resident or non-resident
            </td>
        </tr><tr>
          <td style="text-align:left">status
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Status of the employee of employee. Active or Inactive
            </td>
        </tr><tr>
          <td style="text-align:left">department_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid departent ID of employee
            </td>
        </tr><tr>
          <td style="text-align:left">basic_salary
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">Basic salary of employee
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">other_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Other names of employee
            </td>
        </tr><tr>
          <td style="text-align:left">phone_number1
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Phone number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">email
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Email of employee
            </td>
        </tr><tr>
          <td style="text-align:left">staff_id
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Taff ID of employee
            </td>
        </tr><tr>
          <td style="text-align:left">ssnit_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Social security number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">tin
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Tax identification number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">start_date
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Start date of employement  of employee
            </td>
        </tr><tr>
          <td style="text-align:left">end_date
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">End date of employement  of employee, for temporal employees
            </td>
        </tr><tr>
          <td style="text-align:left">taxable_allowance
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">Total taxable allowances for the  employee
            </td>
        </tr><tr>
          <td style="text-align:left">non_taxable_allowance
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">Total non-taxable allowances for the  employee
            </td>
        </tr><tr>
          <td style="text-align:left">nia_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">National identification number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">nhif_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">National health insurance funds number of employee. Applicable to Kenya
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
          <td style="text-align:left">A valid employee ID
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/payroll/employees/:id",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    first_name: "",
    last_name: "",
    other_name: "",
    role: "",
    bank_id: "",
    bank_branch: "",
    account_number: "",
    residential_status: "",
    status: "",
    department_id: "",
    basic_salary: "",
    phone_number1: "",
    email: "",
    staff_id: "",
    ssnit_number: "",
    tin: "",
    start_date: "",
    end_date: "",
    taxable_allowance: "",
    non_taxable_allowance: "",
    nia_number: "",
    nhif_number: "",
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
  "first_name": "",
  "last_name": "",
  "other_name": "",
  "role": "",
  "bank_id": "",
  "bank_branch": "",
  "account_number": "",
  "residential_status": "",
  "status": "",
  "department_id": "",
  "basic_salary": "",
  "phone_number1": "",
  "email": "",
  "staff_id": "",
  "ssnit_number": "",
  "tin": "",
  "start_date": "",
  "end_date": "",
  "taxable_allowance": "",
  "non_taxable_allowance": "",
  "nia_number": "",
  "nhif_number": ""
}`)
    req, err := http.NewRequest("GET", "/api/v3/payroll/employees/:id", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("GET", "/api/v3/payroll/employees/:id", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "first_name": "",
  "last_name": "",
  "other_name": "",
  "role": "",
  "bank_id": "",
  "bank_branch": "",
  "account_number": "",
  "residential_status": "",
  "status": "",
  "department_id": "",
  "basic_salary": "",
  "phone_number1": "",
  "email": "",
  "staff_id": "",
  "ssnit_number": "",
  "tin": "",
  "start_date": "",
  "end_date": "",
  "taxable_allowance": "",
  "non_taxable_allowance": "",
  "nia_number": "",
  "nhif_number": ""
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
    "name": "200 success",
    "body": {
      "id": 3,
      "user_id": 5,
      "business_id": 1,
      "first_name": "Nelson",
      "other_name": "Big Head",
      "last_name": "Bigetti",
      "phone_number1": "13999445",
      "email": "",
      "resident_status": "Resident",
      "staff_id": "",
      "ssnit_number": "",
      "department_id": 3,
      "tin": "",
      "role": "Developer at nipplet",
      "start_date": "2024-11-27",
      "status": "active",
      "recipient_id": "",
      "bank_code": "gcb",
      "bank_branch": "palo alto",
      "account_number": "0039888292",
      "basic_salary": 200000,
      "taxable_allowance": 0,
      "non_taxable_allowance": 0,
      "created_at": "2024-11-27T05:07:14.000000Z",
      "updated_at": "2024-11-27T05:07:14.000000Z",
      "remember_token": null,
      "company_id": 1,
      "compute_paye": false,
      "compute_pension": false,
      "deleted_at": null,
      "employer_tier3_amount": 0,
      "employee_tier3_amount": 0,
      "nhif_number": "",
      "nia_number": "",
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
    }
  }
]
```

</div>

</div>

### Get employee payslips

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
          <td style="text-align:left">first_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">First name of employee
            </td>
        </tr><tr>
          <td style="text-align:left">last_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Last name of employee
            </td>
        </tr><tr>
          <td style="text-align:left">role
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Role of the of employee
            </td>
        </tr><tr>
          <td style="text-align:left">bank_id
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Bank short code of employee,s bank
            </td>
        </tr><tr>
          <td style="text-align:left">bank_branch
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Bank branch name of employee's bank
            </td>
        </tr><tr>
          <td style="text-align:left">account_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Bank account number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">residential_status
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Residential status of employee. Resident or non-resident
            </td>
        </tr><tr>
          <td style="text-align:left">status
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Status of the employee of employee. Active or Inactive
            </td>
        </tr><tr>
          <td style="text-align:left">department_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid departent ID of employee
            </td>
        </tr><tr>
          <td style="text-align:left">basic_salary
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">Basic salary of employee
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">other_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Other names of employee
            </td>
        </tr><tr>
          <td style="text-align:left">phone_number1
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Phone number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">email
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Email of employee
            </td>
        </tr><tr>
          <td style="text-align:left">staff_id
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Taff ID of employee
            </td>
        </tr><tr>
          <td style="text-align:left">ssnit_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Social security number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">tin
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Tax identification number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">start_date
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Start date of employement  of employee
            </td>
        </tr><tr>
          <td style="text-align:left">end_date
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">End date of employement  of employee, for temporal employees
            </td>
        </tr><tr>
          <td style="text-align:left">taxable_allowance
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">Total taxable allowances for the  employee
            </td>
        </tr><tr>
          <td style="text-align:left">non_taxable_allowance
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">Total non-taxable allowances for the  employee
            </td>
        </tr><tr>
          <td style="text-align:left">nia_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">National identification number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">nhif_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">National health insurance funds number of employee. Applicable to Kenya
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
          <td style="text-align:left">A valid employee ID
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/payroll/employees/:id/payslips",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    first_name: "",
    last_name: "",
    other_name: "",
    role: "",
    bank_id: "",
    bank_branch: "",
    account_number: "",
    residential_status: "",
    status: "",
    department_id: "",
    basic_salary: "",
    phone_number1: "",
    email: "",
    staff_id: "",
    ssnit_number: "",
    tin: "",
    start_date: "",
    end_date: "",
    taxable_allowance: "",
    non_taxable_allowance: "",
    nia_number: "",
    nhif_number: "",
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
  "first_name": "",
  "last_name": "",
  "other_name": "",
  "role": "",
  "bank_id": "",
  "bank_branch": "",
  "account_number": "",
  "residential_status": "",
  "status": "",
  "department_id": "",
  "basic_salary": "",
  "phone_number1": "",
  "email": "",
  "staff_id": "",
  "ssnit_number": "",
  "tin": "",
  "start_date": "",
  "end_date": "",
  "taxable_allowance": "",
  "non_taxable_allowance": "",
  "nia_number": "",
  "nhif_number": ""
}`)
    req, err := http.NewRequest("GET", "/api/v3/payroll/employees/:id/payslips", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("GET", "/api/v3/payroll/employees/:id/payslips", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "first_name": "",
  "last_name": "",
  "other_name": "",
  "role": "",
  "bank_id": "",
  "bank_branch": "",
  "account_number": "",
  "residential_status": "",
  "status": "",
  "department_id": "",
  "basic_salary": "",
  "phone_number1": "",
  "email": "",
  "staff_id": "",
  "ssnit_number": "",
  "tin": "",
  "start_date": "",
  "end_date": "",
  "taxable_allowance": "",
  "non_taxable_allowance": "",
  "nia_number": "",
  "nhif_number": ""
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
    "name": "200 success",
    "body": {
      "payslips": [],
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
        "enc_id": "eyJpdiI6InFZTlNoeVlQZThEZ2FpcE1qNWpNdHc9PSIsInZhbHVlIjoiczVJR3lDV2pacWtmQlM3d2ljNnlHZz09IiwibWFjIjoiOWRiZjY4OGI2N2M0ZThlZTExNjY5OWZkZWZjYjZhMDZlY2M1Y2I3MDU5ZWRlN2U1OWE5ODU4YzFkNTljOGNjYSIsInRhZyI6IiJ9",
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
  }
]
```

</div>

</div>

### Delete an employee

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
          <td style="text-align:left">first_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">First name of employee
            </td>
        </tr><tr>
          <td style="text-align:left">last_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Last name of employee
            </td>
        </tr><tr>
          <td style="text-align:left">role
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Role of the of employee
            </td>
        </tr><tr>
          <td style="text-align:left">bank_id
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Bank short code of employee,s bank
            </td>
        </tr><tr>
          <td style="text-align:left">bank_branch
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Bank branch name of employee's bank
            </td>
        </tr><tr>
          <td style="text-align:left">account_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Bank account number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">residential_status
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Residential status of employee. Resident or non-resident
            </td>
        </tr><tr>
          <td style="text-align:left">status
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Status of the employee of employee. Active or Inactive
            </td>
        </tr><tr>
          <td style="text-align:left">department_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid departent ID of employee
            </td>
        </tr><tr>
          <td style="text-align:left">basic_salary
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">Basic salary of employee
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">other_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Other names of employee
            </td>
        </tr><tr>
          <td style="text-align:left">phone_number1
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Phone number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">email
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Email of employee
            </td>
        </tr><tr>
          <td style="text-align:left">staff_id
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Taff ID of employee
            </td>
        </tr><tr>
          <td style="text-align:left">ssnit_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Social security number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">tin
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Tax identification number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">start_date
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Start date of employement  of employee
            </td>
        </tr><tr>
          <td style="text-align:left">end_date
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">End date of employement  of employee, for temporal employees
            </td>
        </tr><tr>
          <td style="text-align:left">taxable_allowance
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">Total taxable allowances for the  employee
            </td>
        </tr><tr>
          <td style="text-align:left">non_taxable_allowance
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">Total non-taxable allowances for the  employee
            </td>
        </tr><tr>
          <td style="text-align:left">nia_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">National identification number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">nhif_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">National health insurance funds number of employee. Applicable to Kenya
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
          <td style="text-align:left">A valid employee ID
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "DELETE",
  url: "/api/v3/payroll/employees/:id",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    first_name: "",
    last_name: "",
    other_name: "",
    role: "",
    bank_id: "",
    bank_branch: "",
    account_number: "",
    residential_status: "",
    status: "",
    department_id: "",
    basic_salary: "",
    phone_number1: "",
    email: "",
    staff_id: "",
    ssnit_number: "",
    tin: "",
    start_date: "",
    end_date: "",
    taxable_allowance: "",
    non_taxable_allowance: "",
    nia_number: "",
    nhif_number: "",
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
  "first_name": "",
  "last_name": "",
  "other_name": "",
  "role": "",
  "bank_id": "",
  "bank_branch": "",
  "account_number": "",
  "residential_status": "",
  "status": "",
  "department_id": "",
  "basic_salary": "",
  "phone_number1": "",
  "email": "",
  "staff_id": "",
  "ssnit_number": "",
  "tin": "",
  "start_date": "",
  "end_date": "",
  "taxable_allowance": "",
  "non_taxable_allowance": "",
  "nia_number": "",
  "nhif_number": ""
}`)
    req, err := http.NewRequest("DELETE", "/api/v3/payroll/employees/:id", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("DELETE", "/api/v3/payroll/employees/:id", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "first_name": "",
  "last_name": "",
  "other_name": "",
  "role": "",
  "bank_id": "",
  "bank_branch": "",
  "account_number": "",
  "residential_status": "",
  "status": "",
  "department_id": "",
  "basic_salary": "",
  "phone_number1": "",
  "email": "",
  "staff_id": "",
  "ssnit_number": "",
  "tin": "",
  "start_date": "",
  "end_date": "",
  "taxable_allowance": "",
  "non_taxable_allowance": "",
  "nia_number": "",
  "nhif_number": ""
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
    "name": "200 success",
    "body": {
      "id": 3,
      "user_id": 5,
      "business_id": 1,
      "first_name": "Nelson",
      "other_name": "Big Head",
      "last_name": "Bigetti",
      "phone_number1": "13999445",
      "email": "",
      "resident_status": "Resident",
      "staff_id": "",
      "ssnit_number": "",
      "department_id": 3,
      "tin": "",
      "role": "Developer at nipplet",
      "start_date": "2024-11-27",
      "status": "active",
      "recipient_id": "",
      "bank_code": "gcb",
      "bank_branch": "palo alto",
      "account_number": "0039888292",
      "basic_salary": 200000,
      "taxable_allowance": 0,
      "non_taxable_allowance": 0,
      "created_at": "2024-11-27T05:07:14.000000Z",
      "updated_at": "2024-11-27T05:07:14.000000Z",
      "remember_token": null,
      "company_id": 1,
      "compute_paye": false,
      "compute_pension": false,
      "deleted_at": null,
      "employer_tier3_amount": 0,
      "employee_tier3_amount": 0,
      "nhif_number": "",
      "nia_number": "",
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
    }
  },
  {
    "name": "302 error",
    "body": "Employee not found"
  }
]
```

</div>

</div>

### Get an employee summary

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
          <td style="text-align:left">first_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">First name of employee
            </td>
        </tr><tr>
          <td style="text-align:left">last_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Last name of employee
            </td>
        </tr><tr>
          <td style="text-align:left">role
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Role of the of employee
            </td>
        </tr><tr>
          <td style="text-align:left">bank_id
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Bank short code of employee,s bank
            </td>
        </tr><tr>
          <td style="text-align:left">bank_branch
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Bank branch name of employee's bank
            </td>
        </tr><tr>
          <td style="text-align:left">account_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Bank account number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">residential_status
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Residential status of employee. Resident or non-resident
            </td>
        </tr><tr>
          <td style="text-align:left">status
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Status of the employee of employee. Active or Inactive
            </td>
        </tr><tr>
          <td style="text-align:left">department_id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">A valid departent ID of employee
            </td>
        </tr><tr>
          <td style="text-align:left">basic_salary
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">Basic salary of employee
            </td>
        </tr></tbody>
</table>

<div class="optional-parameters">

<table>
  <tbody>
<tr>
          <td style="text-align:left">other_name
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Other names of employee
            </td>
        </tr><tr>
          <td style="text-align:left">phone_number1
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Phone number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">email
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Email of employee
            </td>
        </tr><tr>
          <td style="text-align:left">staff_id
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Taff ID of employee
            </td>
        </tr><tr>
          <td style="text-align:left">ssnit_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Social security number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">tin
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Tax identification number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">start_date
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">Start date of employement  of employee
            </td>
        </tr><tr>
          <td style="text-align:left">end_date
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">End date of employement  of employee, for temporal employees
            </td>
        </tr><tr>
          <td style="text-align:left">taxable_allowance
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">Total taxable allowances for the  employee
            </td>
        </tr><tr>
          <td style="text-align:left">non_taxable_allowance
            <div class="table-description">double</div>
          </td>
          <td style="text-align:left">Total non-taxable allowances for the  employee
            </td>
        </tr><tr>
          <td style="text-align:left">nia_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">National identification number of employee
            </td>
        </tr><tr>
          <td style="text-align:left">nhif_number
            <div class="table-description">string</div>
          </td>
          <td style="text-align:left">National health insurance funds number of employee. Applicable to Kenya
            </td>
        </tr></tbody>
</table>

</div>

#### Path Parameters

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/payroll/employees/:id/summary",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer {{token}}",
  },

  data: {
    first_name: "",
    last_name: "",
    other_name: "",
    role: "",
    bank_id: "",
    bank_branch: "",
    account_number: "",
    residential_status: "",
    status: "",
    department_id: "",
    basic_salary: "",
    phone_number1: "",
    email: "",
    staff_id: "",
    ssnit_number: "",
    tin: "",
    start_date: "",
    end_date: "",
    taxable_allowance: "",
    non_taxable_allowance: "",
    nia_number: "",
    nhif_number: "",
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
  "first_name": "",
  "last_name": "",
  "other_name": "",
  "role": "",
  "bank_id": "",
  "bank_branch": "",
  "account_number": "",
  "residential_status": "",
  "status": "",
  "department_id": "",
  "basic_salary": "",
  "phone_number1": "",
  "email": "",
  "staff_id": "",
  "ssnit_number": "",
  "tin": "",
  "start_date": "",
  "end_date": "",
  "taxable_allowance": "",
  "non_taxable_allowance": "",
  "nia_number": "",
  "nhif_number": ""
}`)
    req, err := http.NewRequest("GET", "/api/v3/payroll/employees/:id/summary", bytes.NewBuffer(jsonStr))
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
    $response = $client->request("GET", "/api/v3/payroll/employees/:id/summary", [
        'headers' => [
            "Accept" => "application/json",
            "Authorization" => "Bearer {{token}}"
        ],

        'json' => {
  "first_name": "",
  "last_name": "",
  "other_name": "",
  "role": "",
  "bank_id": "",
  "bank_branch": "",
  "account_number": "",
  "residential_status": "",
  "status": "",
  "department_id": "",
  "basic_salary": "",
  "phone_number1": "",
  "email": "",
  "staff_id": "",
  "ssnit_number": "",
  "tin": "",
  "start_date": "",
  "end_date": "",
  "taxable_allowance": "",
  "non_taxable_allowance": "",
  "nia_number": "",
  "nhif_number": ""
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
    "name": "200 success",
    "body": {
      "net_salary": 0,
      "total_tax": 0,
      "total_gross": 0
    }
  }
]
```

</div>

</div>
