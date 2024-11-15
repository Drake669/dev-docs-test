#meta-data title: Exchange Gains/Losses, description: View a list of invoices in foreign currencies and how changes in rates affects your gains/losses.

## Exchange Gains/Losses

Exchange Gains/Losses refer to the financial impact that occurs when a company engages in transactions involving foreign currencies and the exchange rate between the currencies fluctuates.

### Get All Unrealised Exchange Gains/Losses

To get all unrealised exchange gains/lossess, make a `GET` request to the `/unrealisedgainsreport?<startdate>&<enddate>&<type>` endpoint. Sample request using axios:

```js
const response = await axios.get("https://web.builtaccounting.com/api/unrealisedgainsreport?<startdate>&<enddate>&<type>");
```
  
Where `<startdate>` is the start date, `<enddate>` is the end date and `<type>` is the type or selected type of category(invoices or bills) of the exchange gains/losses list

### Get All Realised Exchange Gains/Losses

To get all realised exchange gains/lossess, make a `GET` request to the `/realisedgainsreport?<startdate>&<enddate>&<type>` endpoint. Sample request using axios:

```js
const response = await axios.get("https://web.builtaccounting.com/api/realisedgainsreport?<startdate>&<enddate>&<type>");
```
  
Where `<startdate>` is the start date, `<enddate>` is the end date and `<type>` is the type or selected type of category(invoices or bills) of the exchange gains/losses list