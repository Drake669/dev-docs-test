#meta-data title: Audit Trail, description: "Track and review user activities within your business using Built's Audit Trail feature. This documentation covers how to access detailed records of actions taken by users, supporting transparency and accountability in business operations."

## Audit Trail

Track and review user activities within your business using Built's Audit Trail feature. This documentation covers how to access detailed records of actions taken by users, supporting transparency and accountability in business operations.

### Getting All User Actions

To get all user actions, make a `GET` request to the `useractions` endpoint. Here is the response you get:

```json
{
  "current_page": 1, // The current page of the audit trail results
  "data": [
    {
      "id": 2907207, // Unique identifier of the action record
      "user_id": 1, // ID of the user who performed the action
      "business_id": 1, // ID of the business where the action was performed
      "action": "Created payrun<a target='_blank' class='m-2' small href='/payroll/payrun/5247'>2024-11-08 00:00:00</a>", // Description of the action taken with a link to related details
      "created_at": "2024-11-08T15:04:14.000000Z", // Date and time when the action was created
      "updated_at": "2024-11-08T15:04:14.000000Z", // Date and time when the action record was last updated
      "user": {
        "id": 1, // ID of the user who performed the action
        "first_name": "Erlich", // First name of the user
        "last_name": "Bachman", // Last name of the user
        "photo": "https://built-storage.ams3.digitaloceanspaces.com/1/public/photo/qoMUJBTrjyz86RE70I1THbluS9goj49bkKX1HOfB.png" // URL of the user's profile photo
      }
    }
  ],
  "first_page_url": "https://web.builtaccounting.com/api/useractions?page=1", // URL for the first page of audit trail results
  "from": 1, // Starting record number on the current page
  "last_page": 1, // The last page of the audit trail results
  "last_page_url": "https://web.builtaccounting.com/api/useractions?page=1", // URL for the last page of audit trail results
  "links": [
    {
      "url": null, // URL for the previous page (null if there is no previous page)
      "label": "&laquo; Previous", // Label for the previous page link
      "active": false // Indicates if the previous page link is active
    },
    {
      "url": "https://web.builtaccounting.com/api/useractions?page=1", // URL for page 1 of the results
      "label": "1", // Label for the page number
      "active": true // Indicates if this page is the active page
    },
    {
      "url": null, // URL for the next page (null if there is no next page)
      "label": "Next &raquo;", // Label for the next page link
      "active": false // Indicates if the next page link is active
    }
  ],
  "next_page_url": "https://web.builtaccounting.com/api/useractions?page=2", // URL for the next page of results
  "path": "https://web.builtaccounting.com/api/useractions", // Base path for the audit trail API
  "per_page": 100, // Number of records per page
  "prev_page_url": null, // URL for the previous page of results (null if there is no previous page)
  "to": 1, // Ending record number on the current page
  "total": 1 // Total number of records in the audit trail
}
```

### Filtering of User Actions

This section allows you to narrow down user actions by specifying a date range. By providing a `startdate` and an `enddate`, you can view only the activities performed within this period. This filtering feature helps you easily track actions over specific timeframes, making it simpler to review user activity within a defined period.

To filter user actions, make a `GET` request to the `/useractions/filter/:startdate/:enddate` endpoint. The dates should be in `YYYY-MM-DD` format.

#### Sample Response Object

```json
[
  {
    "id": 2907207,
    "user_id": 1,
    "business_id": 1,
    "action": "Created payrun<a target='_blank' class='m-2' small href='/payroll/payrun/5247'>2024-11-08 00:00:00</a>",
    "created_at": "2024-11-08T15:04:14.000000Z",
    "updated_at": "2024-11-08T15:04:14.000000Z",
    "user": {
      "id": 1,
      "first_name": "Erlich",
      "phone_number": "+233542778755",
      "last_name": "Bachman",
      "email": "amloyal4life@gmail.com",
      "email_verified_at": "2024-09-20T09:39:27.000000Z",
      "is_admin": 1,
      "api_token": "NA",
      "photo": "https://built-storage.ams3.digitaloceanspaces.com/1/public/photo/qoMUJBTrjyz86RE70I1THbluS9goj49bkKX1HOfB.png",
      "created_at": "2020-03-05T01:38:12.000000Z",
      "updated_at": "2024-11-12T07:59:41.000000Z",
      "is_affiliate": 1,
      "has_fa": false,
      "notification_token": "bde98d42-de0c-4552-8f31-1c132fa42e6a",
      "gender": "male"
    }
  },
  {
    "id": 2907206,
    "user_id": 1,
    "business_id": 1,
    "action": "Created payrun<a target='_blank' class='m-2' small href='/payroll/payrun/5247'>2024-11-08 00:00:00</a>",
    "created_at": "2024-11-08T15:04:14.000000Z",
    "updated_at": "2024-11-08T15:04:14.000000Z",
    "user": {
      "id": 1,
      "first_name": "Erlich",
      "phone_number": "+233542778755",
      "last_name": "Bachman",
      "email": "amloyal4life@gmail.com",
      "email_verified_at": "2024-09-20T09:39:27.000000Z",
      "is_admin": 1,
      "api_token": "NA",
      "photo": "https://built-storage.ams3.digitaloceanspaces.com/1/public/photo/qoMUJBTrjyz86RE70I1THbluS9goj49bkKX1HOfB.png",
      "created_at": "2020-03-05T01:38:12.000000Z",
      "updated_at": "2024-11-12T07:59:41.000000Z",
      "is_affiliate": 1,
      "has_fa": false,
      "notification_token": "bde98d42-de0c-4552-8f31-1c132fa42e6a",
      "gender": "male"
    }
  },
  {
    "id": 2907199,
    "user_id": 1,
    "business_id": 1,
    "action": "Created payrun<a target='_blank' class='m-2' small href='/payroll/payrun/5246'>2024-11-08 00:00:00</a>",
    "created_at": "2024-11-08T15:02:52.000000Z",
    "updated_at": "2024-11-08T15:02:52.000000Z",
    "user": {
      "id": 1,
      "first_name": "Erlich",
      "phone_number": "+233542778755",
      "last_name": "Bachman",
      "email": "amloyal4life@gmail.com",
      "email_verified_at": "2024-09-20T09:39:27.000000Z",
      "is_admin": 1,
      "api_token": "NA",
      "photo": "https://built-storage.ams3.digitaloceanspaces.com/1/public/photo/qoMUJBTrjyz86RE70I1THbluS9goj49bkKX1HOfB.png",
      "created_at": "2020-03-05T01:38:12.000000Z",
      "updated_at": "2024-11-12T07:59:41.000000Z",
      "is_affiliate": 1,
      "has_fa": false,
      "notification_token": "bde98d42-de0c-4552-8f31-1c132fa42e6a",
      "gender": "male"
    }
  }
]
```
