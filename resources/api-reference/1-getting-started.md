#meta-data title: Getting Started, description: Introduction to api reference' documentation

# Getting Started

<div class="api-content">
<div class="table-content">
Built APIs provides robust way to integrate Built services into your application.

## API Protocols

Our APIs follow the general principles of REST.

- We use standard GET, POST and DELETE requests to communicate and HTTP response codes to show status and errors.
- You can expect all responses to be returned as JSON.
- The API request should have a `Content-Type` of `application/json`.
- All endpoints require authentication with your API Keys.
</div>
</div>

## Authentication

<div class="api-content">
<div class="table-content">
Authenticate your API calls by including your secret key in the Authorization header of every request you make. You can manage your API keys from the [developer console](https://app.built.africa/developer)

Developers can create multiple tokens per business to accommodate different applications, workflows, or access needs. Every API call must include the token in the Authorization header for successful authentication; without it, calls will be rejected with an authentication error.

You can read more about authentication [here](/docs/1-getting-started/2-authentication)

Authorization headers should be in the following format: `Authorization: Bearer SECRET_KEY`

<div class="warning-card">
<span class="material-symbols-outlined">
warning
</span>

Do not commit your secret keys to git, or use them in client-side code.

</div>

</div>
</div>

## Pagination

<div class="api-content">
<div class="table-content">
Pagination allows you to efficiently retrieve large sets of data from the Built API. Instead of returning all results at once, which, could be slow and resource intensive, pagination breaks the sets of data into smaller chunks before sending them. This approach improves performance, reduces network load, and enhances the overall user experience when working with large datasets.

Built uses the offset pagination type which allows you to request specific page values when fetching records. The `page` parameter specifies which page of records to retrieve.

For requests that returns paginated data include the `page` parameter as query a parameter in your api request.

</div>

<div class="code-content">

```js
axios.get('/api/v3/invoices?page=1', {
  {
    headers: {
      accept: "application/json",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json",
    },
  }
});
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
	url := "https://yourdomain.com/api/v3/invoices?page=1"

	// Create a new request
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		fmt.Println("Error creating request:", err)
		return
	}

	// Add headers
	req.Header.Set("Accept", "application/json")
	req.Header.Set("Authorization", "Bearer <API-KEY>")
	req.Header.Set("Content-Type", "application/json")

	// Make the request
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Println("Error making request:", err)
		return
	}
	defer resp.Body.Close()

	// Read the response
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Error reading response:", err)
		return
	}

	fmt.Println("Response:", string(body))
}

```

```php

<?php

$url = 'https://yourdomain.com/api/v3/invoices?page=1';

$headers = [
    "Accept: application/json",
    "Authorization: Bearer <API-KEY>",
    "Content-Type: application/json"
];

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$response = curl_exec($ch);

if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
} else {
    echo 'Response:' . $response;
}

curl_close($ch);


```

```json
{
  "current_page": 1,
  "data": [
    // ...
  ],
  "first_page_url": "https://webtest.built.africa/api/v3/sales?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "https://webtest.built.africa/api/v3/sales?page=1",
  "links": [
    {
      "url": null,
      "label": "&laquo; Previous",
      "active": false
    },
    {
      "url": "https://webtest.built.africa/api/v3/sales?page=1",
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
  "path": "https://webtest.built.africa/api/v3/sales",
  "per_page": 50,
  "prev_page_url": null,
  "to": 2,
  "total": 2
}
```

The response is such that:

- `current_page`: This key holds the current page for the paginated data
- `data`: This is an array of items retrieved
- `first_page_url`: This provides a url to the first page in the pagination.
- `from`: This is the number the current paginated data is starting at.
- `last_page_url`: This provides a url to the last page in the pagination.
- `links`: This provides a list of predefined links to various pages.
- `next_page_url`: This provides a url to the next page. It is `null` if the current page is the last page
- `path`: This is the url to the resource you are currently retrieving
- `per_page`: This is the number of data that should be returned per each request
- `prev_page_url`: This is the link to the previous page. It is `null` if there is no previous page and the current page is the first page
- `to`: This is the number the current paginated data is ending at.
- `total`: This is the number of data returned in the current page

</div>

</div>

## Errors

<div class="api-content">
<div class="table-content">

Built's API is RESTful and as such, uses conventional HTTP response codes to indicate the success or failure of requests.

## HTTP Codes

| **Code** | **Desription**                                                                                                                                                                                                                         |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 200      | Request was successful and intended action was carried out.                                                                                                                                                                            |
| 302      | There was an error trying to process the request. This could usually be as a result of resource not avaiblable or the you are trying to access a resource that you are not authorized to. This can sometimes contain validation errors |
| 401      | The request was unauthorized. This could mean that there was no authorization header sent in the request or the api key is revoked                                                                                                     |
| 404      | Request could not be fulfilled as the request resource does not exist.                                                                                                                                                                 |
| 5xx      | Request could not be fulfilled due to an error on Built's end. This shouldn't happen so please report as soon as you encounter any instance of this.                                                                                   |

</div>

</div>
