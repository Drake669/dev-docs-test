#meta-data title: Payment Links, description: How can I view information about payment links using Built APIs

## Payment Links

Payment links allow you to create shareable links that enable customers or donors to make payments directly to your account. Using Built APIs, you can generate payment links with specific details, such as the amount, description, and additional options like allowing the payer to adjust the amount or request information. Payment links simplify payment collection by providing an easy, accessible way for users to pay from their devices without requiring complex account details.

### Creating a Payment Link

To create the link make a `POST` request to the `/bw/link` endpoint. Here is what the request payload looks like:

```json
{
  "amount": 1, // Payment amount to be collected via the link
  "account_id": 41290, // ID of the account where funds will be credited
  "title": "For Wedding", // Title for the payment link, describing the purpose
  "description": "Wedding Bells", // Additional description for the payment, providing details for the payer
  "show_logo": true, // Flag to show the logo on the payment page (true or false)
  "one_time": true, // Indicates if the link is for a one-time payment (true) or can be reused (false)
  "request_information": true, // If true, asks for additional information from the payer (e.g., contact info)
  "can_change_amount": true, // Allows the payer to change the amount, if set to true
  "has_vendor": true, // Specifies if a vendor is associated with the payment
  "send_vendor_notification": true, // Sends a notification to the vendor when payment is made
  "vendor_address": "123 Accra", // Address of the vendor for reference
  "vendor_phone_number": "0554221525", // Contact phone number for the vendor
  "vendor_name": "Test Vendor" // Name of the vendor associated with the payment
}
```

#### Sample Response Object:

```json
{
  "status": true,
  "message": "Payment links created",
  "data": {
    "amount": "1",
    "account_id": "41290",
    "title": "For Wedding",
    "description": "Wedding Bells",
    "show_logo": true,
    "one_time": true,
    "request_information": true,
    "can_change_amount": true,
    "has_vendor": true,
    "send_vendor_notification": true,
    "vendor_address": "123 Accra",
    "vendor_phone_number": "0554221525",
    "vendor_name": "Test Vendor",
    "wallet_id": 1,
    "uuid": "7ad09543-4d64-46a5-bee6-13bf28237e39",
    "updated_at": "2024-11-07T09:39:49.000000Z",
    "created_at": "2024-11-07T09:39:49.000000Z",
    "id": 599,
    "short_link": "https://built.ac/p/N2rbXW",
    "link": "https://secure.builtaccounting.com/bw/pay/7ad09543-4d64-46a5-bee6-13bf28237e39"
  }
}
```

### Get Summaries of Payment Links

Retrieve brief overviews of your payment links, including essential details like the payment status, and amount. This summary view allows for quick monitoring payment links through the Built API.

To get the summaries, make a `GET` request to the `/bw/links/summary` endpoint. Here is a sample response object:

```json
{
  "success": true, // Indicates whether the request was successful
  "message": "Links summary retrieved successfully", // Message detailing the result of the request
  "data": {
    "all_count": 182, // Total count of all payment links
    "all_amount": 77023.65, // Total amount across all payment links
    "success_amount": 12518.55, // Total amount from successfully completed payments
    "failed_amount": 64505.1 // Total amount from failed payment attempts
  }
}
```

### Get All Payment Links

To get all payment links, make a `GET` request to the `/bw/links` endpoint. Here is a sample response object:

```json
{
  "status": true,
  "message": "Payment links retrieved",
  "data": {
    "current_page": 1,
    "data": [
      {
        "id": 599,
        "wallet_id": 1,
        "title": "For Wedding",
        "description": "Wedding Bells",
        "amount": 1,
        "limit": 0,
        "show_logo": true,
        "callback_url": null,
        "expires_at": null,
        "uuid": "7ad09543-4d64-46a5-bee6-13bf28237e39",
        "archived": false,
        "request_information": true,
        "can_change_amount": true,
        "min_amount": 0,
        "max_amount": 0,
        "customer_first_name": null,
        "customer_last_name": null,
        "customer_phone_number": null,
        "customer_email": null,
        "short_link": "https://built.ac/p/N2rbXW",
        "is_active": true,
        "one_time": true,
        "send_message": true,
        "account_id": 41290,
        "deleted_at": null,
        "created_at": "2024-11-07T09:39:49.000000Z",
        "updated_at": "2024-11-07T09:39:49.000000Z",
        "vendor_name": "Test Vendor",
        "vendor_phone_number": "0554221525",
        "vendor_address": "123 Accra",
        "send_vendor_notification": true,
        "has_vendor": true
      }
    ],
    "first_page_url": "https://web.builtaccounting.com/api/bw/links?page=1",
    "from": 1,
    "last_page": 3,
    "last_page_url": "https://web.builtaccounting.com/api/bw/links?page=3",
    "links": [
      {
        "url": null,
        "label": "&laquo; Previous",
        "active": false
      },
      {
        "url": "https://web.builtaccounting.com/api/bw/links?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": "https://web.builtaccounting.com/api/bw/links?page=2",
        "label": "2",
        "active": false
      },
      {
        "url": "https://web.builtaccounting.com/api/bw/links?page=3",
        "label": "3",
        "active": false
      },
      {
        "url": "https://web.builtaccounting.com/api/bw/links?page=2",
        "label": "Next &raquo;",
        "active": false
      }
    ],
    "next_page_url": "https://web.builtaccounting.com/api/bw/links?page=2",
    "path": "https://web.builtaccounting.com/api/bw/links",
    "per_page": 50,
    "prev_page_url": null,
    "to": 50,
    "total": 111
  }
}
```

### Get a Single Payment Link

To get a single link, make a `GET` request to the `/bw/link/:id` where `:id` is the ID of the payment link. Here is a sample response object:

```json
{
  "message": "Payment link retrieved",
  "success": true,
  "data": {
    "id": 599,
    "wallet_id": 1,
    "title": "For Wedding",
    "description": "Wedding Bells",
    "amount": 1,
    "limit": 0,
    "show_logo": true,
    "callback_url": null,
    "expires_at": null,
    "uuid": "7ad09543-4d64-46a5-bee6-13bf28237e39",
    "archived": false,
    "request_information": true,
    "can_change_amount": true,
    "min_amount": 0,
    "max_amount": 0,
    "customer_first_name": null,
    "customer_last_name": null,
    "customer_phone_number": null,
    "customer_email": null,
    "short_link": "https://built.ac/p/N2rbXW",
    "is_active": true,
    "one_time": true,
    "send_message": true,
    "account_id": 41290,
    "deleted_at": null,
    "created_at": "2024-11-07T09:39:49.000000Z",
    "updated_at": "2024-11-07T09:39:49.000000Z",
    "vendor_name": "Test Vendor",
    "vendor_phone_number": "0554221525",
    "vendor_address": "123 Accra",
    "send_vendor_notification": true,
    "has_vendor": true
  }
}
```

### Get Statistics about a Payment Link

To get other information about a payment link, make a `GET` request to the `/bw/link/:id/statistics` endpoint. Here is a sample response object:

```json
{
  "success": true,
  "message": "Link statistics retrieved",
  "data": {
    "all_count": 10,
    "all_amount": 343550,
    "success_amount": 324320,
    "failed_amount": 23420,
    "all_visits": 30,
    "desktop_visits": 20,
    "mobile_visits": 10
  }
}
```
