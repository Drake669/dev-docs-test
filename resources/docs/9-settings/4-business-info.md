#meta-data title: Business Information, description: This section provides detailed information about your business, including essential data on company name, contact information, and other relevant business attributes. It allows you to access and review your business profile, making it easy to manage and verify key business details.

## Business Information

This section provides detailed information about your business, including essential data on company name, contact information, and other relevant business attributes. It allows you to access and review your business profile, making it easy to manage and verify key business details.

### Getting Business Information

To retrieve business information, send a `GET` request to the `/auth/user` endpoint. The response provides comprehensive details about the current user, including a field called `current_business`, which contains information about the business. Below is the structure of the `current_business` object.

```json
{
  "id": 1,
  "owner_id": 1,
  "name": "Pied Pipper",
  "invoice_id": "INV",
  "address": "test-business@gmail.com",
  "email": "test-user@gmail.com",
  "location": "-0.1651068,5.576401999999999",
  "phone_number": "+233503712979",
  "bank_name": null,
  "account_name": null,
  "account_number": null,
  "industry_id": 7,
  "country_id": 81,
  "currency_id": 42,
  "is_retail": 0,
  "is_service": 0,
  "logo": "https://built-storage.ams3.digitaloceanspaces.com/1/public/logo/jyO34W8sZkjW71aDqy9USm3scvdSIPYWMRKsLlZH.webp",
  "active": 1,
  "created_at": "2020-03-05T01:42:57.000000Z",
  "updated_at": "2024-09-26T18:03:31.000000Z",
  "deleted_at": null,
  "employees_size": null,
  "region_id": 1405,
  "sales_person_id": 1,
  "payroll_settings": {
    "id": 3,
    "user_id": 1,
    "business_id": 1,
    "sync_accounts": true,
    "er_number": "2020-1-18",
    "Company_name": "Built Financial Technologies",
    "tin": "1123456ru6t87yg",
    "old_tin": "86ti7t89ypu09y",
    "gra_branch_id": 29,
    "tier2_trustee_id": 4,
    "tier2_trustee_number": "12345456",
    "created_at": "2020-07-07T11:03:17.000000Z",
    "updated_at": "2024-05-22T17:08:33.000000Z",
    "tier3_trustee_id": 24,
    "tier3_trustee_number": "9999",
    "tier3_description": "health",
    "nssf_formula": "new_method",
    "nita_number": "null",
    "tax_station": "null",
    "payment_accountID": {
      "user_id": 1,
      "business_id": 1,
      "id": 1,
      "basic_account": 35,
      "allowance_account": 35,
      "overtime_account": 35,
      "bonus_account": 35,
      "ssf_account": 14242,
      "reimbursement_account": 14243,
      "ssnit1_account": 14244,
      "ssnit2_account": 14245,
      "paye_account": 14246,
      "overtimetax_account": 14246,
      "bonustax_account": 14246,
      "deductions_account": 35,
      "net_account": 14247,
      "created_at": "2020-07-07T11:03:17.000000Z",
      "updated_at": "2023-08-17T17:01:10.000000Z",
      "company_id": 3,
      "tier3_account_id": 98719,
      "employer_tier3_account": 98720,
      "nhif_account_id": 0
    },
    "accounts": {
      "user_id": 1,
      "business_id": 1,
      "id": 1,
      "basic_account": 35,
      "allowance_account": 35,
      "overtime_account": 35,
      "bonus_account": 35,
      "ssf_account": 14242,
      "reimbursement_account": 14243,
      "ssnit1_account": 14244,
      "ssnit2_account": 14245,
      "paye_account": 14246,
      "overtimetax_account": 14246,
      "bonustax_account": 14246,
      "deductions_account": 35,
      "net_account": 14247,
      "created_at": "2020-07-07T11:03:17.000000Z",
      "updated_at": "2023-08-17T17:01:10.000000Z",
      "company_id": 3,
      "tier3_account_id": 98719,
      "employer_tier3_account": 98720,
      "nhif_account_id": 0
    },
    "gra_branch": {
      "id": 29,
      "country_id": 81,
      "branch": "Berekum STO",
      "created_at": "2020-07-04T14:38:14.000000Z",
      "updated_at": "2020-07-04T14:38:14.000000Z",
      "location": "Nkoranza road near Berekum-Sampa road",
      "address": "P.O.Box 29 Berekum",
      "phone_number": "0352222157"
    },
    "tier2_trustee": {
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
    "tier3_trustee": {
      "id": 24,
      "country_id": 81,
      "name": "CAL ASSET MANAGEMENT",
      "licence_no": "N/A",
      "address": "N/A",
      "contact_person": "N/A",
      "tel_numbers": "N/A",
      "created_at": "2022-05-23T11:57:57.000000Z",
      "updated_at": "2022-05-23T11:57:57.000000Z"
    },
    "tax_office_logo": "/img/logos/gra_logo.jpg",
    "social_security_logo": "/img/logos/ssnit.jpg",
    "tax_header_1": "GHANA REVENUE AUTHORITY",
    "tax_header_2": "DOMESTIC TAX REVENUE DIVISION",
    "tax_header_3": "EMPLOYEE MONTHLY TAX DEDUCTION SCHEDULE (P.A.Y.E)",
    "tax_header_text": "",
    "social_security_label": "SSNIT",
    "social_security_header": "SOCIAL SECURITY AND NATIONAL INSURANCE TRUST"
  },
  "payroll_metadata": {
    "er_lable": "ER Number"
  },
  "max_year": 2024,
  "min_year": 2020,
  "current_year": 2024,
  "country": {
    "id": 81,
    "name": "Ghana",
    "code": "GH",
    "latlong": null,
    "currency_code": null,
    "currency_name": null,
    "currency_symbol": null,
    "calling_code": null,
    "flag": null,
    "created_at": null,
    "updated_at": null,
    "timezone_offset": 0
  },
  "region": {
    "id": 1405,
    "country_id": 81,
    "name": "Greater Accra",
    "created_at": "2023-10-30T20:35:08.000000Z",
    "updated_at": "2023-10-30T20:35:08.000000Z"
  },
  "currency": {
    "id": 42,
    "country": "Ghana",
    "currency": "Cedis",
    "code": "GHS",
    "symbol": "GH¢",
    "created_at": null,
    "updated_at": null
  },
  "enc_id": "eyJpdiI6IlBEdFhnYWZjdlNoNnNIdGlqdTRoQlE9PSIsInZhbHVlIjoiSTVtZDJLTkdrUkpBZmRtbVNDVU03QT09IiwibWFjIjoiNzQ2ODlmODg3ZjBkODNkMTkyYWE2YmVlNjVkNGU1YWMwOGNkMjljOTU2ZDljMmQ1ZWIwMWVlMWIwMzA0YmQ4NCIsInRhZyI6IiJ9",
  "subscription": {
    "id": 1,
    "user_id": 1,
    "business_id": 1,
    "name": "Starter",
    "description": "Starter",
    "created_at": "2020-07-04T13:06:38.000000Z",
    "updated_at": "2020-07-04T13:06:38.000000Z",
    "guards": {
      "er_lable": "ER Number",
      "quotes": true,
      "users": true,
      "POS": true,
      "fx": true,
      "tags": true,
      "journals": true,
      "invoice_notification": true,
      "accountant_support": false,
      "accounts": true,
      "expense_attachments": true,
      "snaps": true,
      "bill_attachments": true,
      "customer_import": true,
      "payroll": false,
      "customise_invoice": true,
      "customise_quote": true,
      "built_brand": false,
      "bank_reconciliation": true,
      "extensions": {
        "employee_extension": {
          "totalNumber": 1000
        }
      }
    },
    "plan": {
      "id": 3262,
      "user_id": 1,
      "business_id": 1,
      "subscription_id": 1,
      "subscription_cycle": 3,
      "amount": 0,
      "start_date": "2024-09-26",
      "end_date": "2024-12-26",
      "status": "active",
      "created_at": "2024-09-26T15:46:09.000000Z",
      "updated_at": "2024-09-26T15:46:09.000000Z",
      "planname": "Starter",
      "add_ons": null,
      "active": true
    }
  },
  "balanceSheetReportTitle": {
    "id": 2,
    "uuid": "f04e7222-69bb-4677-98be-159258190c53",
    "name": "Statement of Financial Position",
    "type": "balance-sheet",
    "created_at": "2024-09-26T12:24:30.000000Z",
    "updated_at": "2024-09-26T12:24:30.000000Z",
    "pivot": {
      "business_id": 1,
      "report_standard_id": 2,
      "type": "balance-sheet",
      "created_at": "2024-09-30T15:24:23.000000Z",
      "updated_at": "2024-09-30T15:24:23.000000Z"
    }
  },
  "incomeStatementReportTitle": {
    "id": 6,
    "uuid": "933cb5a3-dede-49a9-9b79-517684b7f615",
    "name": "Statement of Profit or Loss and Other Comprehensive Income",
    "type": "income-statement",
    "created_at": "2024-09-26T12:24:30.000000Z",
    "updated_at": "2024-09-26T12:24:30.000000Z",
    "pivot": {
      "business_id": 1,
      "report_standard_id": 6,
      "type": "income-statement",
      "created_at": "2024-10-09T16:44:31.000000Z",
      "updated_at": "2024-10-09T16:44:31.000000Z"
    }
  },
  "cashflowReportTitle": {
    "id": 3,
    "uuid": "11175693-7c05-44db-b355-b18164def9f6",
    "name": "Cash Flow",
    "type": "cash-flow",
    "created_at": "2024-09-26T12:24:30.000000Z",
    "updated_at": "2024-09-26T12:24:30.000000Z",
    "pivot": {
      "business_id": 1,
      "report_standard_id": 3,
      "type": "cash-flow",
      "created_at": "2024-09-30T15:35:55.000000Z",
      "updated_at": "2024-09-30T15:35:55.000000Z"
    }
  },
  "industry": {
    "id": 7,
    "name": "Architecture",
    "created_at": null,
    "updated_at": null
  },
  "quote_settings": {
    "id": 1,
    "business_id": 1,
    "user_id": 1,
    "show_logo": true,
    "show_note": true,
    "footer": "",
    "title": "Quotation",
    "subheader": "",
    "created_at": "2020-03-05T01:42:57.000000Z",
    "updated_at": "2024-11-04T15:12:59.000000Z",
    "logo_position": "left",
    "color": "#FFAD45",
    "logo_size": "#FEC008",
    "show_payment": false
  },
  "invoice_settings": {
    "id": 1,
    "business_id": 1,
    "user_id": 1,
    "show_logo": true,
    "show_payment": true,
    "show_note": true,
    "footer": "<p>This is a new test footer</p><p>Our Menu:</p><ol><li><p>Fufu</p></li><li><p>Banku</p></li><li><p>Salad</p></li><li><p>Jollof</p></li><li><p>Chicken</p></li></ol>",
    "title": "My nice invoice",
    "subhaeder": "",
    "default_terms": 3,
    "created_at": "2020-03-05T01:42:57.000000Z",
    "updated_at": "2024-06-27T19:47:07.000000Z",
    "logo_size": "190.0px",
    "logo_position": "left",
    "invoice_color": "#2E9F47",
    "item": "Item",
    "price": "Price",
    "quantity": "Quantity",
    "amount": "Amount",
    "tax_amount": "Tax Amount",
    "show_item": 1,
    "show_price": 1,
    "show_quantity": 1,
    "show_amount": 1,
    "show_tax_amount": 0,
    "tax_id": "null",
    "notify_on_invoice_view": true,
    "notify_sms": false,
    "notify_email": false,
    "style": "classic",
    "discount": "Discount",
    "show_discount": false,
    "amount_due": "Amount Due",
    "show_amount_due": false
  },
  "taxes": [
    {
      "id": 3,
      "user_id": 1,
      "business_id": 1,
      "name": "VAT Standard",
      "display_name": "VAT Standard",
      "description": null,
      "code": null,
      "rate": 12.5,
      "type": "Compound",
      "recoverable": 1,
      "show_code": 0,
      "created_at": "2020-03-05T01:42:57.000000Z",
      "updated_at": "2020-03-05T01:42:57.000000Z",
      "account_id": 44,
      "deleted_at": null,
      "sub_tax": [
        {
          "id": 1,
          "user_id": 1,
          "business_id": 1,
          "name": "NHIL",
          "display_name": "NHIL 2",
          "description": "null",
          "code": "null",
          "rate": 2.5,
          "type": "Simple",
          "recoverable": 0,
          "show_code": 0,
          "created_at": "2020-03-05T01:42:57.000000Z",
          "updated_at": "2020-03-05T01:42:57.000000Z",
          "account_id": 42,
          "deleted_at": null,
          "used": true
        },
        {
          "id": 2,
          "user_id": 1,
          "business_id": 1,
          "name": "GETFUND",
          "display_name": "GETFUND",
          "description": null,
          "code": null,
          "rate": 2.5,
          "type": "Simple",
          "recoverable": 0,
          "show_code": 0,
          "created_at": "2020-03-05T01:42:57.000000Z",
          "updated_at": "2020-03-05T01:42:57.000000Z",
          "account_id": 43,
          "deleted_at": null,
          "used": true
        }
      ],
      "sub_rate": 5,
      "used": true
    },
    {
      "id": 4,
      "user_id": 1,
      "business_id": 1,
      "name": "VAT Flat",
      "display_name": "VAT Flat",
      "description": null,
      "code": null,
      "rate": 3,
      "type": "Flat",
      "recoverable": 0,
      "show_code": 0,
      "created_at": "2020-03-05T01:42:57.000000Z",
      "updated_at": "2020-03-05T01:42:57.000000Z",
      "account_id": 45,
      "deleted_at": null,
      "used": true
    },
    {
      "id": 707,
      "user_id": 1,
      "business_id": 1,
      "name": "VAT Flat",
      "display_name": "VAT Flat Anne",
      "description": null,
      "code": null,
      "rate": 3,
      "type": "Flat",
      "recoverable": 1,
      "show_code": 1,
      "created_at": "2020-06-10T12:24:18.000000Z",
      "updated_at": "2020-06-10T12:24:18.000000Z",
      "account_id": 9793,
      "deleted_at": null,
      "used": true
    },
    {
      "id": 1758,
      "user_id": 1,
      "business_id": 1,
      "name": "VAT EXCLUSIVE",
      "display_name": "VAT EXCLUSIVE PRO",
      "description": "",
      "code": null,
      "rate": 5,
      "type": "Flat",
      "recoverable": 0,
      "show_code": 1,
      "created_at": "2020-09-04T11:10:06.000000Z",
      "updated_at": "2020-09-04T11:10:06.000000Z",
      "account_id": 23948,
      "deleted_at": null,
      "used": true
    },
    {
      "id": 1827,
      "user_id": 1,
      "business_id": 1,
      "name": "Vat-Flat",
      "display_name": "Vat-Flat",
      "description": "",
      "code": null,
      "rate": 3,
      "type": "Flat",
      "recoverable": 1,
      "show_code": 0,
      "created_at": "2020-09-16T11:27:41.000000Z",
      "updated_at": "2020-09-16T11:27:41.000000Z",
      "account_id": 24966,
      "deleted_at": null,
      "used": true
    },
    {
      "id": 4260,
      "user_id": 1,
      "business_id": 1,
      "name": "COVID-19 Health Recovery Levy",
      "display_name": "COVID-19 Health Recovery Levy",
      "description": null,
      "code": null,
      "rate": 1,
      "type": "Flat",
      "recoverable": 0,
      "show_code": 0,
      "created_at": "2021-05-01T00:52:31.000000Z",
      "updated_at": "2021-05-01T00:52:31.000000Z",
      "account_id": 65340,
      "deleted_at": null,
      "used": true
    },
    {
      "id": 4265,
      "user_id": 1,
      "business_id": 1,
      "name": "VAT Standard",
      "display_name": "VAT Standard (with COVID-19 Levy)",
      "description": "",
      "code": "",
      "rate": 12.5,
      "type": "Compound",
      "recoverable": 1,
      "show_code": 1,
      "created_at": "2021-05-01T01:22:40.000000Z",
      "updated_at": "2021-05-01T01:22:40.000000Z",
      "account_id": 65345,
      "deleted_at": null,
      "sub_tax": [
        {
          "id": 4266,
          "user_id": 1,
          "business_id": 1,
          "name": "NHIL",
          "display_name": "NHIL",
          "description": null,
          "code": null,
          "rate": 2.5,
          "type": "Simple",
          "recoverable": 0,
          "show_code": 0,
          "created_at": "2021-05-01T01:22:40.000000Z",
          "updated_at": "2021-05-01T01:22:40.000000Z",
          "account_id": 65346,
          "deleted_at": null,
          "used": true
        },
        {
          "id": 4267,
          "user_id": 1,
          "business_id": 1,
          "name": "GETFUND",
          "display_name": "GETFUND",
          "description": null,
          "code": null,
          "rate": 2.5,
          "type": "Simple",
          "recoverable": 0,
          "show_code": 0,
          "created_at": "2021-05-01T01:22:40.000000Z",
          "updated_at": "2021-05-01T01:22:40.000000Z",
          "account_id": 65347,
          "deleted_at": null,
          "used": true
        },
        {
          "id": 4268,
          "user_id": 1,
          "business_id": 1,
          "name": "COVID-19 Health Recovery Levy",
          "display_name": "COVID-19 Health Recovery Levy",
          "description": null,
          "code": null,
          "rate": 1,
          "type": "Simple",
          "recoverable": 0,
          "show_code": 0,
          "created_at": "2021-05-01T01:22:40.000000Z",
          "updated_at": "2021-05-01T01:22:40.000000Z",
          "account_id": 65348,
          "deleted_at": null,
          "used": true
        },
        {
          "id": 16535,
          "user_id": 1,
          "business_id": 1,
          "name": "Tssss",
          "display_name": "Ssss",
          "description": "",
          "code": null,
          "rate": 14,
          "type": "Simple",
          "recoverable": 0,
          "show_code": 0,
          "created_at": "2022-05-25T18:18:45.000000Z",
          "updated_at": "2022-05-25T18:18:45.000000Z",
          "account_id": 267700,
          "deleted_at": null,
          "used": true
        }
      ],
      "sub_rate": 20,
      "used": true
    },
    {
      "id": 27104,
      "user_id": 1,
      "business_id": 1,
      "name": "VAT Standard",
      "display_name": "VAT standard(2023)",
      "description": "",
      "code": "null",
      "rate": 15,
      "type": "Compound",
      "recoverable": 1,
      "show_code": 0,
      "created_at": "2023-01-11T15:08:07.000000Z",
      "updated_at": "2023-01-11T15:08:07.000000Z",
      "account_id": 484480,
      "deleted_at": null,
      "sub_tax": [
        {
          "id": 27105,
          "user_id": 1,
          "business_id": 1,
          "name": "NHIL",
          "display_name": "NHIL(2023)",
          "description": "",
          "code": null,
          "rate": 2.5,
          "type": "Simple",
          "recoverable": 0,
          "show_code": 0,
          "created_at": "2023-01-11T15:08:40.000000Z",
          "updated_at": "2023-01-11T15:08:40.000000Z",
          "account_id": 484481,
          "deleted_at": null,
          "used": true
        },
        {
          "id": 27106,
          "user_id": 1,
          "business_id": 1,
          "name": "GETFUND",
          "display_name": "GETFUND(2023)",
          "description": "",
          "code": null,
          "rate": 2.5,
          "type": "Simple",
          "recoverable": 0,
          "show_code": 0,
          "created_at": "2023-01-11T15:08:55.000000Z",
          "updated_at": "2023-01-11T15:08:55.000000Z",
          "account_id": 484482,
          "deleted_at": null,
          "used": true
        },
        {
          "id": 27107,
          "user_id": 1,
          "business_id": 1,
          "name": "Covid-19 levy",
          "display_name": "Covid-19 levy(2023)",
          "description": "",
          "code": null,
          "rate": 1,
          "type": "Simple",
          "recoverable": 0,
          "show_code": 0,
          "created_at": "2023-01-11T15:09:16.000000Z",
          "updated_at": "2023-01-11T15:09:16.000000Z",
          "account_id": 484483,
          "deleted_at": null,
          "used": true
        }
      ],
      "sub_rate": 6,
      "used": true
    }
  ],
  "cut_off_date": {
    "id": 1,
    "business_id": 1,
    "cut_off_date": "2024-07-31",
    "is_on": false,
    "created_at": "2024-04-23T18:18:09.000000Z",
    "updated_at": "2024-09-06T00:49:14.000000Z"
  },
  "balance_sheet_report_title": [
    {
      "id": 2,
      "uuid": "f04e7222-69bb-4677-98be-159258190c53",
      "name": "Statement of Financial Position",
      "type": "balance-sheet",
      "created_at": "2024-09-26T12:24:30.000000Z",
      "updated_at": "2024-09-26T12:24:30.000000Z",
      "pivot": {
        "business_id": 1,
        "report_standard_id": 2,
        "type": "balance-sheet",
        "created_at": "2024-09-30T15:24:23.000000Z",
        "updated_at": "2024-09-30T15:24:23.000000Z"
      }
    }
  ],
  "income_statement_report_title": [
    {
      "id": 6,
      "uuid": "933cb5a3-dede-49a9-9b79-517684b7f615",
      "name": "Statement of Profit or Loss and Other Comprehensive Income",
      "type": "income-statement",
      "created_at": "2024-09-26T12:24:30.000000Z",
      "updated_at": "2024-09-26T12:24:30.000000Z",
      "pivot": {
        "business_id": 1,
        "report_standard_id": 6,
        "type": "income-statement",
        "created_at": "2024-10-09T16:44:31.000000Z",
        "updated_at": "2024-10-09T16:44:31.000000Z"
      }
    }
  ],
  "cashflow_report_title": [
    {
      "id": 3,
      "uuid": "11175693-7c05-44db-b355-b18164def9f6",
      "name": "Cash Flow",
      "type": "cash-flow",
      "created_at": "2024-09-26T12:24:30.000000Z",
      "updated_at": "2024-09-26T12:24:30.000000Z",
      "pivot": {
        "business_id": 1,
        "report_standard_id": 3,
        "type": "cash-flow",
        "created_at": "2024-09-30T15:35:55.000000Z",
        "updated_at": "2024-09-30T15:35:55.000000Z"
      }
    }
  ]
}
```

### Updating Business Information

To update your business information, make a `POST` request to the `/business/:id` where `id` is the id of the business. Here is a sample request using axios:

```js
const response = await axios.post(
  "<BASE_URL>/api/business/1",
  {
    name: "Pied Pipper", // The name of the business
    address: "test-business@gmail.com", // The business address (could be email in this case)
    email: "test-user@gmail.com", // The email address of the business
    phone_number: "+233503714179", // The contact phone number for the business
    invoice_id: "INV", // The identifier for invoices generated by the business
    country_id: 81, // The country ID associated with the business
    industry_id: 7, // The industry ID categorizing the business
    bank_name: null, // The bank name of the business (null if not available)
    account_name: null, // The account name linked to the business (null if not provided)
    account_number: null, // The account number linked to the business (null if not provided)
    id: 1, // The unique identifier for the business
  },
  {
    headers: {
      accept: "application/json",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,fr-FR;q=0.7,fr;q=0.6",
      authorization: "Bearer <API-KEY>",
      "content-type": "application/json",
      "sec-ch-ua":
        '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      Referer: "https://app.built.africa/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
  }
);
```
