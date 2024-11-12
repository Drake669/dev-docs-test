#meta-data title: Tags, description: Track revenue and expenses using Tags.
## Tags

Tags are labels or identifiers used to categorize or organize financial transactions for better tracking and reporting.


### Get All Tags

To get all Tags, make a `GET` request to the `/tags` endpoint. Sample request using axios:

```js
const response = await axios.get("/api/v2/tags");
```

#### Sample Response object:

```json
{
  {
        "id": 6562,
        "business_id": 1,
        "name": "ac",
        "created_at": "2024-09-03T15:08:23.000000Z",
        "updated_at": "2024-09-03T15:08:23.000000Z"
    },
    {
        "id": 135,
        "business_id": 1,
        "name": "ac",
        "created_at": "2021-02-24T13:18:17.000000Z",
        "updated_at": "2021-02-24T13:18:17.000000Z"
    },
    {
        "id": 6564,
        "business_id": 1,
        "name": "ac",
        "created_at": "2024-09-03T15:08:23.000000Z",
        "updated_at": "2024-09-03T15:08:23.000000Z"
    },
    {
        "id": 23285,
        "business_id": 1,
        "name": "air-conditioner",
        "created_at": "2024-11-04T17:02:39.000000Z",
        "updated_at": "2024-11-04T17:02:39.000000Z"
    },
    {
        "id": 6563,
        "business_id": 1,
        "name": "air-conditioner",
        "created_at": "2024-09-03T15:08:23.000000Z",
        "updated_at": "2024-09-03T15:08:23.000000Z"
    },
    {
        "id": 2645,
        "business_id": 1,
        "name": "air-conditioner",
        "created_at": "2024-07-12T10:09:27.000000Z",
        "updated_at": "2024-07-12T10:09:27.000000Z"
    },
    {
        "id": 136,
        "business_id": 1,
        "name": "air-conditioner",
        "created_at": "2021-02-24T13:18:17.000000Z",
        "updated_at": "2021-02-24T13:18:17.000000Z"
    },
    {
        "id": 6565,
        "business_id": 1,
        "name": "air-conditioner",
        "created_at": "2024-09-03T15:08:23.000000Z",
        "updated_at": "2024-09-03T15:08:23.000000Z"
    },
}
```

### Get a Single Tag

Sample axios request to get a single tag.

```js
const response = axios.get(
  "https://web.builtaccounting.com/api/tag/tagName"
);
```

- `:tagName` represents the tag name of the tag you want to get

### Adding a Tag

To add a tag, you will need to enter the tag name to create a tag.
Make a `POST` request to `/reconciliation/create` endpoint to add a tag. Sample request using axios:

```js
const response = await axios.post(
  "https://web.builtaccounting.com/api/reconciliation/create",
  formData,
  {
    name: test-for-tag
  }
);
```

The following is a list of `FormData` values for adding a tag

- `test-for-tag` - the name of the tag to be added

Here is an example response received after successfully adding a new tag:

```json
{
    "business_id": 1,
    "name": "test-for-tag",
    "updated_at": "2024-11-07T12:21:21.000000Z",
    "created_at": "2024-11-07T12:21:21.000000Z",
    "id": 24514
}
```

### Removing a Tag

To remove a tag, make a `DELETE` request to the `/tag/id`

- `id` - This represents the id of the tag you want to delete

Here is an example response received after successfully removing a tag:

```js
tag deleted
```

<div class="info-card"><span class="material-symbols-outlined">
info
</span>You cannot delete a tag that has been attached to a record(s)</div>