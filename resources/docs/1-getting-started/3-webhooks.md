#meta-data title: Webhooks, description: Receive real-time notifications from our API

## Overview

Webhooks allow your application to receive real-time notifications when certain events occur on specific resources in our system. When an event occurs on a subscribed channel, a **POST** request is sent to the URL you provide with detailed information about the event.

You can subscribe to different channels. Channels allow you to listen for specific events such as <span class="created">created</span>, <span class="updated">updated</span> and <span class="deleted">deleted</span> actions.

### Available Channels and Events

Below is a list of available channels and the events you can subscribe to for each:<br/><br/>

| **Name**                   | **Channel**                  | **Events**                                                                                                       |
| :------------------------- | :--------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| Business                   | `business`                   | <span class="updated">updated</span>                                                                             |
| Invoices                   | `invoices`                   | <span class="created">created</span>, <span class="updated">updated</span>, <span class="deleted">deleted</span> |
| Invoice Payments           | `invoice_payments`           | <span class="created">created</span>, <span class="updated">updated</span>, <span class="deleted">deleted</span> |
| Invoice Online Payments    | `invoice_online_payments`    | <span class="created">created</span>                                                                             |
| Sales                      | `sales`                      | <span class="created">created</span>, <span class="updated">updated</span>, <span class="deleted">deleted</span> |
| Deposits                   | `deposits`                   | <span class="created">created</span>, <span class="updated">updated</span>, <span class="deleted">deleted</span> |
| Quotes                     | `quotes`                     | <span class="created">created</span>, <span class="updated">updated</span>, <span class="deleted">deleted</span> |
| Other Incomes              | `other_incomes`              | <span class="created">created</span>, <span class="updated">updated</span>, <span class="deleted">deleted</span> |
| Clients                    | `clients`                    | <span class="created">created</span>, <span class="updated">updated</span>, <span class="deleted">deleted</span> |
| Expenses                   | `expenses`                   | <span class="created">created</span>, <span class="updated">updated</span>, <span class="deleted">deleted</span> |
| Bills                      | `bills`                      | <span class="created">created</span>, <span class="updated">updated</span>, <span class="deleted">deleted</span> |
| Bill Payments              | `bill_payments`              | <span class="created">created</span>, <span class="updated">updated</span>, <span class="deleted">deleted</span> |
| Bill Online Payments       | `bill_online_payments`       | <span class="created">created</span>                                                                             |
| Income Tax Payments        | `income_tax_payments`        | <span class="created">created</span>, <span class="deleted">deleted</span>                                       |
| Withholding Tax Payments   | `withholding_tax_payments`   | <span class="created">created</span>, <span class="deleted">deleted</span>                                       |
| Sales Tax Payments         | `sales_tax_payments`         | <span class="created">created</span>, <span class="deleted">deleted</span>                                       |
| Suppliers                  | `suppliers`                  | <span class="created">created</span>, <span class="updated">updated</span>, <span class="deleted">deleted</span> |
| Employees                  | `employees`                  | <span class="created">created</span>, <span class="updated">updated</span>, <span class="deleted">deleted</span> |
| Pay Runs                   | `pay_runs`                   | <span class="created">created</span>, <span class="updated">updated</span>, <span class="deleted">deleted</span> |
| Pay Run Salary Payment     | `salary_payments`            | <span class="created">created</span>, <span class="deleted">deleted</span>                                       |
| Pay Run Tier 1 Payment     | `payrun_tier1_payments`      | <span class="created">created</span>, <span class="deleted">deleted</span>                                       |
| Pay Run Tier 2 Payment     | `payrun_tier2_payments`      | <span class="created">created</span>, <span class="deleted">deleted</span>                                       |
| Pay Run Tier 3 Payment     | `payrun_tier3_payments`      | <span class="created">created</span>, <span class="deleted">deleted</span>                                       |
| Pay Run Income Tax Payment | `payrun_income_tax_payments` | <span class="created">created</span>, <span class="deleted">deleted</span>                                       |
| Products / Services        | `products_services`          | <span class="created">created</span>, <span class="updated">updated</span>, <span class="deleted">deleted</span> |
| Wallet Transactions        | `wallet_transactions`        | <span class="created">created</span>                                                                             |
| Bank Transfers             | `bank_transfers`             | <span class="created">created</span>, <span class="updated">updated</span>, <span class="deleted">deleted</span> |
| Accounts                   | `accounts`                   | <span class="created">created</span>, <span class="updated">updated</span>, <span class="deleted">deleted</span> |
| Journals                   | `journals`                   | <span class="created">created</span>, <span class="updated">updated</span>, <span class="deleted">deleted</span> |
| Business Loans             | `business_loans`             | <span class="created">created</span>, <span class="updated">updated</span>, <span class="deleted">deleted</span> |
| Ledgers                    | `ledgers`                    | <span class="created">created</span>, <span class="updated">updated</span>, <span class="deleted">deleted</span> |

<br/>

<div class="warning-card">
<span class="material-symbols-outlined">
report
</span>

**Important Notice**: You cannot subscribe to the Ledger channel and other channels. To subscibe the the Ledger channel you must unsubscribe from any other channel

</div>

<br/>

### Webhook Data Structure

Each time an event occurs on a subscribed channel, we send a **POST** request to your webhook URL with the following structure:

```json
{
  "event": "channel.event",
  "message": "Channel event successful.",
  "idempotency_key": "26053e97-f78a-4d25-a519-4eed22ba5c41",
  "environment": "staging",
  "data": {
    "id": 1,
    "tag": "adasd"
    // Additional model-specific fields can be added here
  }
}
```

- event: The channel and event that triggered the webhook, formatted as channel.event (e.g., business_loans.deleted, invoices.created).
- message: A description of the event that occurred (e.g., "Business Loan deleted successfully").
- idempotency_key: A unique key for each request. This helps your system ensure that the same webhook is not processed multiple times.
- environment: The environment from which the webhook was sent, either staging or production.
- data: The event-specific data. This may vary depending on the channel and event.

### Example Webhook Data

For the business_loans.deleted event, the data structure would look like this:

```json
{
  "event": "business_loans.deleted",
  "message": "Business_Loan deleted successfully.",
  "idempotency_key": "26053e97-f78a-4d25-a519-4eed22ba5c41",
  "environment": "staging",
  "data": {
    "id": 1,
    "tag": "adasd"
    // Additional model-specific fields are added here
  }
}
```

In this example:

- The event is business_loans.deleted, indicating that the event pertains to a Business Loan resource being deleted.
- The message provides a brief description of the event, such as "Business_Loan deleted successfully."
- The idempotency_key is unique to this webhook request and can be used to prevent duplicate processing of the same event.
- The environment is staging, meaning the webhook was sent from the staging environment.
- The data section contains the details of the event, such as the id of the affected business loan and its tag.

### Steps to Create a Webhook

1. Go to the Developer Console:

Log in to your developer account and go to the Developer Console where you can manage your webhooks.

![image](/img/901_1x_shots_so.png)

2. Create a Webhook with URL and Channels:

In the Developer Console, Click on the Webhook tab. Here you can create or update your webhook. You can also see how your webhook is performing as well send a test request to ensure it is able to receive requests from our systems.

![image](/img/901_1x_shots_so.png)

**_Note: It's recommended to test webhooks in the sandbox environment before going live in production._**

### Security Considerations

- Verify Webhook Integrity:

We recommend verifying the integrity of each webhook request to ensure it comes from our system. One method is to use the idempotency_key to check if the event has already been processed.

- Use Secure Endpoints:

Ensure your webhook URL uses HTTPS to protect sensitive data in transit.
