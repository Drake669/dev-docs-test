#meta-data title: Tax Reports

## Tax Reports

### Get Goods & Services Tax Reports

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
          <td style="text-align:left">startdate
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The start date for the filter
            </td>
        </tr><tr>
          <td style="text-align:left">enddate
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The end date for the filter
            </td>
        </tr></tbody>
</table><span class="info-card">All query parameters are optional</span>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/reports/tax-reports?startdate&enddate",
  headers: {
    Authorization: "Bearer {{token}}",
  },
  params: {
    startdate: "example",
    enddate: "example",
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

    req, err := http.NewRequest("GET", "/api/v3/reports/tax-reports?startdate&enddate", nil)
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
    $response = $client->request("GET", "/api/v3/reports/tax-reports?startdate&enddate", [
        'headers' => [
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "startdate": "example",
  "enddate": "example"
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

### Get Tax Report Details

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
          <td style="text-align:left">startdate
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The start date for the filter
            </td>
        </tr><tr>
          <td style="text-align:left">enddate
            <div class="table-description">date</div>
          </td>
          <td style="text-align:left">The end date for the filter
            </td>
        </tr></tbody>
</table><span class="info-card">All query parameters are optional</span>

#### Path Parameters

<table>
  <tbody>
<tr>
          <td style="text-align:left">id
            <div class="table-description">integer</div>
          </td>
          <td style="text-align:left">The id of the tax record
            </td>
        </tr></tbody>
</table>

</div>

<div class="code-content">

```js
const axios = require("axios");

axios({
  method: "GET",
  url: "/api/v3/reports/tax-reports/:id?startdate&enddate",
  headers: {
    Authorization: "Bearer {{token}}",
  },
  params: {
    startdate: "example",
    enddate: "example",
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

    req, err := http.NewRequest("GET", "/api/v3/reports/tax-reports/:id?startdate&enddate", nil)
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
    $response = $client->request("GET", "/api/v3/reports/tax-reports/:id?startdate&enddate", [
        'headers' => [
            "Authorization" => "Bearer {{token}}"
        ],
        'query' => {
  "startdate": "example",
  "enddate": "example"
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
