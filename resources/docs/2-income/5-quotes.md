#meta-data title: Quotes, description: Estimate sharing, tracking customer quotes made easy. Generate and manage quotes for potential sales and customer offers.

## Quotes

Generate and manage quotes for potential sales and customer offers.

### Get All Quotes

To get all quotes, make a `GET` request to the `/quote` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v2/quote?page=<pagenumber>");
```

Where `<pagenumber>` is the page number of the quote list

#### Sample Response object:

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 11987,
      "quote_number": "QTE218",
      "user_id": 1,
      "business_id": 1,
      "customer_id": 779,
      "valid_until": "2024-10-07",
      "gross_amount": 1,
      "discount_amount": 0,
      "discount_percentage": "0.0",
      "amount_due": 1,
      "note": "<p>THis is a new nore</p>",
      "created_at": "2024-10-07T01:33:16.000000Z",
      "updated_at": "2024-10-18T15:43:47.000000Z",
      "deleted_at": null,
      "fx_amount": 1,
      "fx_rate": 1,
      "base_currency": "GHS",
      "fx_currency": "GHS",
      "tag": "",
      "invoice_color": "#FFAD45",
      "logo_position": "left",
      "link": "https://built.ac/q/aQm5OzA",
      "items_sum_amount": 1,
      "taxes": [],
      "enc_id": "eyJpdiI6Ing3VC8zb0x0SklnUEw4TFVWUER3eEE9PSIsInZhbHVlIjoienozNnZwNzVLZ2N6bkxnNk44dmRYZz09IiwibWFjIjoiOThlZjMxYzAxZGYwZGIxZmM3NzY5NmEwMjQzZjllNDEwMzFkZjk0NTA1OWQ3OGMyNjY5ZTAwNWZmODczOTU5MiIsInRhZyI6IiJ9",
      "customer": {
        "id": 779,
        "owner_id": 1,
        "business_id": 1,
        "first_name": "",
        "last_name": "",
        "phone_number": "",
        "business_name": "Abas two",
        "business_address": "",
        "business_phone": "0265653314",
        "business_location": "",
        "business_email": "test@gmail.com",
        "created_at": "2020-07-25T14:32:11.000000Z",
        "updated_at": "2024-11-04T14:16:51.000000Z",
        "account_id": 18156,
        "category": "Uncategorised",
        "category_id": 1,
        "deposit_amount": 50939,
        "deposit_account_id": null,
        "archived": false,
        "transactions": [],
        "unformated_balance": 20351822.92,
        "balance": "20,351,822.92",
        "total_debit": "43,228,120.29",
        "total_credit": "22,876,297.37"
      },
      "items": [
        {
          "id": 88289,
          "quote_id": 11987,
          "product_id": 13743,
          "tax_id": 0,
          "quantity": 13,
          "unit_price": 1,
          "amount": 1,
          "tax_amount": 0,
          "description": "",
          "created_at": "2024-10-18T15:43:47.000000Z",
          "updated_at": "2024-10-18T15:43:47.000000Z",
          "deleted_at": null,
          "discount_amount": 0,
          "discount_percent": 0,
          "formatedunit_price": "1.00",
          "taxed": false,
          "details": {
            "id": 13743,
            "name": "01 Potato chips",
            "user_id": 1,
            "business_id": 1,
            "purchase_accountID": 74737,
            "description": "",
            "track_inventory": false,
            "type": "Service",
            "taxed": false,
            "tax_id": 0,
            "retail_item": 1,
            "buying_item": 1,
            "quantity": 13,
            "account_id": 39,
            "unit_price": "5.58",
            "created_at": "2021-08-09T10:43:07.000000Z",
            "updated_at": "2024-09-20T15:13:02.000000Z",
            "code": "0013743",
            "selling_price": 1,
            "category_id": 1060,
            "photo": "https://built-storage.ams3.digitaloceanspaces.com/1/files/1662634298.jpg",
            "inventory_accountID": 0,
            "deleted_at": null,
            "quantity_limit": 1,
            "discount_amount": 0,
            "discount_percent": 0,
            "archived": false,
            "category": "CATERING",
            "product_id": 13743,
            "applied_taxes": [],
            "unit_cost": 5.58,
            "net_amount": 1,
            "inventory_records": [],
            "balance": 0,
            "total_debit": 0,
            "total_credit": 0,
            "rawUnit_price": 1,
            "display_unitPrice": 5.58,
            "invoice_quantity": 1,
            "invoice_amount": 1,
            "used": false
          },
          "type": "Service",
          "track_inventory": false,
          "taxes": null,
          "formatedamount": "1.00",
          "formatedTax_amount": "0.00",
          "name": "01 Potato chips",
          "rawUnit_price": 1,
          "invoice_quantity": 1,
          "invoice_amount": 1,
          "amount_due": 1,
          "applied_taxes": []
        }
      ],
      "conversions": [
        {
          "id": 4410,
          "quote_id": 11987,
          "invoice_id": 343185,
          "invoice_number": "INV9938161",
          "created_at": "2024-10-07T01:33:23.000000Z",
          "updated_at": "2024-10-07T01:33:23.000000Z"
        }
      ]
    }
  ],
  "first_page_url": "<BASE_URL>/api/v2/quote?page=1",
  "from": 1,
  "last_page": 4,
  "last_page_url": "<BASE_URL>/api/v2/quote?page=4",
  "links": [
    {
      "url": null,
      "label": "&laquo; Previous",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/v2/quote?page=1",
      "label": "1",
      "active": true
    },
    {
      "url": "<BASE_URL>/api/v2/quote?page=2",
      "label": "2",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/v2/quote?page=3",
      "label": "3",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/v2/quote?page=4",
      "label": "4",
      "active": false
    },
    {
      "url": "<BASE_URL>/api/v2/quote?page=2",
      "label": "Next &raquo;",
      "active": false
    }
  ],
  "next_page_url": "<BASE_URL>/api/v2/quote?page=2",
  "path": "<BASE_URL>/api/v2/quote",
  "per_page": 50,
  "prev_page_url": null,
  "to": 50,
  "total": 198
}
```

### Creating a Quote

To create a quote, you will need at least a customer or customer category selected and a single line item to create the quote.
Make a `POST` request to `/newquote` endpoint to create a quote. Sample request using axios:

```js
const response = await axios.post("<BASE_URL>/api/newquote", 
{
    "customer_id": 779,                    // The ID of the customer
    "valid_until": "2024-11-13",           // The date until which the invoice is valid
    "invoice_number": "INV-20241113-001",  // The invoice number (can be blank or generated)
    "gross_amount": 4.19,                  // The amount before any discounts or taxes are applied
    "discount_amount": 0.0,                // The discount applied to the total invoice
    "amount_due": 4.19,                    // The total amount to be paid by the customer after discounts and taxes
    "items": [                             // List of items included in the invoice
      {
        "uid": "_aiwptkge9",               // Unique identifier for the item
        "id": 9543,                        // The ID of the item
        "product_id": 9543,                // The product ID of the item
        "description": "Item description", // The description of the item
        "unit_price": 4.19,                // The price per unit of the item
        "invoice_quantity": 1,             // The quantity of the item in the invoice
        "tax_amount": 0,                   // The tax amount applied to the item
        "invoice_amount": 4.19,            // The total amount for the item (unit price * quantity)
        "quantity_error": false,           // Boolean indicating if there was an error with the quantity
        "amount_due": 4.19,                // The amount due for the item after any discounts and taxes
        "discount_amount": 0,              // The discount amount applied to the item
        "discount_percent": 0.00           // The discount percentage applied to the item
      }
    ],
    "note": "Thank you for your business", // A note attached to the invoice (optional)
    "tag": "Standard Invoice",             // A tag for categorizing the invoice (optional)
    "logo_position": "left",               // The position of the logo on the invoice
    "color": "#FFAD45",                    // The color theme of the invoice
    "fx_amount": 4.19,                     // The foreign exchange amount
    "fx_rate": 1,                          // The foreign exchange rate
    "base_currency": "GHS",                // The base currency of the invoice
    "fx_currency": "GHS"                   // The foreign exchange currency
},
{
  headers: {
    accept: "application/json",
    authorization: "Bearer <API-KEY>",
    "content-type": "application/json",
  },
});
```

Visit <a href="/docs/2-income/2-invoices">creating an invoices</a> to see the shape of the response object

<div class="info-card"><span class="material-symbols-outlined">
lightbulb
</span>Pro tip: since a quote and an invoice have the same shape, you can covert a quote to an invoice</div>

### Get a Single Quote Item

Sample axios request to get a single quote item

```js
const response = axios.get("<BASE_URL>/api/quote/12283");
```

The `Response` object received is same as the response after <a href="#creating-a-quote">Creating a quote</a>

### Sharing a Quote

There are two ways to share an quote

- Via Email
- Via SMS & WhatsApp(WhatsApp is currently unavailable at the moment)

#### Sharing Via Email

To share a quote via email, make a `POST` request to the `/sendquote` endpoint. Here is a sample axios request:

```js
const response = await axios.post("<BASE_URL>/api/sendquote", 
{
      "quote_id": "QUOTE-001",              // Represents the id of the quote you wish to send
      "send_tome": 1,                       // Boolean value representing whether to send a copy to your business email (can be 1 or 0)
      "other_emails": ["client@example.com", "partner@example.com"], // Represents other emails you wish to send the quote to
      "message": "Thank you for considering our services. Please find the attached quote for your review." // The message body of the email
},
{
  headers: {
    accept: "application/json",
    authorization: "Bearer <API-KEY>",
    "content-type": "application/json",
  },
});
```

#### Share via SMS and WhatsApp

To share via SMS, make a post request to the `/send/quote/sms` endpoint

Query Params of the request

- `wb`: Boolean value representing whether to send quote to whatsapp
- `sms`: Boolean value representing whether to send the quote via SMS

Request payload

- `recipient_number`: The phone number of the person you want to send the quote to
- `quote_id`: The `enc_id` of the quote. Checkout the response object after <a href="#creating-a-quote">creating a quote</a> to see the `enc_id`
- `message`: Any additional message you want to include in the sms or whatsapp message

### Printing a quote

You can print a quote by visiting this route, `<BASE_URL>/printquote/:enc_id`

- `BASE_URL`: This represents the base url of the built server
- `enc_id`: Represents the encryption id of the quote. Can be found in the response object after <a href="#creating-a-quote">creating a quote</a>

### Downloading a quote

You can download a quote by visiting this route, `<BASE_URL>/downloadquotePDF/:id`

- `BASE_URL`: This represents the base url of the built server
- `:id`: Represents the id of the quote. Can be found in the response object after <a href="#creating-a-quote">creating a quote</a>

### Delete a quote

To delete a quote, make a `DELETE` request to the `/deletequote:id` endpoint. Here is a sample request using axios

```js
const response = await axios.delete("<BASE_URL>/api/deletequote/243103");
```
