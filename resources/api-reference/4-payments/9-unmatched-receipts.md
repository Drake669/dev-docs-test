#meta-data title: Unmatched Receipts, description: How to find Unmatched Receipts using Built APIs

## Unmatched Receipts

Unmatched receipts represent payments that have been received but not yet recorded in your books. These payments, often from other BUILT wallets or external sources, require your review and action to accurately categorize and finalize them within your accounts.

<div class="info-card">
<span class="material-symbols-outlined">
info
</span>
When you receive a payment, it is automatically added to your wallet balance and becomes available for immediate use. Applying a pending payment allows you to specify how it should be recorded in your ledger, which can be done at a later time after receiving the payment.
</div>

### Get Unmatched Receipts

To get a list of unmatched receipts, make a `GET` request to the `/bw/payments` endpoint. Here is a sample response:

```json
{
  "current_page": 1,
  "data": [
    {
      "id": 333,
      "amount": 1,
      "from_wallet_name": "Emmanuel Yeboah",
      "from_wallet_id": null,
      "wallet_id": 1,
      "approved": true,
      "uuid": "c3d4f002-d55f-465b-b0a2-f15842fb2c2a",
      "deleted_at": null,
      "created_at": "2024-03-11T17:51:46.000000Z",
      "updated_at": "2024-03-11T22:02:23.000000Z"
    },
    {
      "id": 310,
      "amount": 1,
      "from_wallet_name": "Emmanuel Yeboah/2904360039",
      "from_wallet_id": 39,
      "wallet_id": 1,
      "approved": true,
      "uuid": "5f7975b2-e8af-404c-a03e-42333e6e8c66",
      "deleted_at": null,
      "created_at": "2023-12-22T13:37:52.000000Z",
      "updated_at": "2023-12-22T13:38:41.000000Z"
    },
    {
      "id": 173,
      "amount": 168,
      "from_wallet_name": "GhaffTech/0853980003",
      "from_wallet_id": 3,
      "wallet_id": 1,
      "approved": true,
      "uuid": "f361bcbc-f42d-4ee5-a6f9-e5f2caa4cb23",
      "deleted_at": null,
      "created_at": "2022-12-25T10:44:31.000000Z",
      "updated_at": "2022-12-25T10:48:00.000000Z"
    },
    {
      "id": 93,
      "amount": 5,
      "from_wallet_name": "Bill payment",
      "from_wallet_id": null,
      "wallet_id": 1,
      "approved": true,
      "uuid": "dd05d78a-7759-482a-9334-27d3beb606e7",
      "deleted_at": null,
      "created_at": "2022-08-18T21:54:54.000000Z",
      "updated_at": "2022-08-18T21:57:42.000000Z"
    },
    {
      "id": 87,
      "amount": 1,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "b2503de2-6102-4f6a-bc8e-39f7573f49bd",
      "deleted_at": null,
      "created_at": "2022-08-18T09:13:20.000000Z",
      "updated_at": "2022-08-18T09:15:38.000000Z"
    },
    {
      "id": 83,
      "amount": 0.2,
      "from_wallet_name": "Emmanuel Yeboah/2904360039",
      "from_wallet_id": 39,
      "wallet_id": 1,
      "approved": true,
      "uuid": "0d1e6750-931f-4a10-8a84-36adb177f816",
      "deleted_at": null,
      "created_at": "2022-08-15T09:37:57.000000Z",
      "updated_at": "2022-08-15T09:40:42.000000Z"
    },
    {
      "id": 82,
      "amount": 1,
      "from_wallet_name": "Emmanuel Yeboah/2904360039",
      "from_wallet_id": 39,
      "wallet_id": 1,
      "approved": true,
      "uuid": "087052c3-557b-423d-9953-6aae210443d1",
      "deleted_at": null,
      "created_at": "2022-08-15T09:36:28.000000Z",
      "updated_at": "2022-08-15T09:43:40.000000Z"
    },
    {
      "id": 62,
      "amount": 5000,
      "from_wallet_name": "Built Finance",
      "from_wallet_id": null,
      "wallet_id": 1,
      "approved": true,
      "uuid": "35daec07-f22e-4855-bc06-be14678f53e5",
      "deleted_at": null,
      "created_at": "2022-05-24T17:41:57.000000Z",
      "updated_at": "2022-05-25T00:13:07.000000Z"
    },
    {
      "id": 60,
      "amount": 1,
      "from_wallet_name": "Bill payment",
      "from_wallet_id": null,
      "wallet_id": 1,
      "approved": true,
      "uuid": "54b38544-b0be-4e00-8e0e-a986f8f056fe",
      "deleted_at": null,
      "created_at": "2022-05-13T20:20:55.000000Z",
      "updated_at": "2022-05-14T17:40:43.000000Z"
    },
    {
      "id": 59,
      "amount": 1,
      "from_wallet_name": "FANBASE",
      "from_wallet_id": null,
      "wallet_id": 1,
      "approved": true,
      "uuid": "8013d91d-fb15-4935-b590-676bf029a3f1",
      "deleted_at": null,
      "created_at": "2022-05-13T15:59:17.000000Z",
      "updated_at": "2022-05-14T17:41:05.000000Z"
    },
    {
      "id": 58,
      "amount": 1000,
      "from_wallet_name": "system/push",
      "from_wallet_id": null,
      "wallet_id": 1,
      "approved": true,
      "uuid": "9e0c6c2b-ddd8-47e4-90e5-c38d92cc1b4d",
      "deleted_at": null,
      "created_at": "2022-05-07T01:15:12.000000Z",
      "updated_at": "2022-05-10T17:57:41.000000Z"
    },
    {
      "id": 57,
      "amount": 1000,
      "from_wallet_name": "system/push",
      "from_wallet_id": null,
      "wallet_id": 1,
      "approved": true,
      "uuid": "a6d9ca53-02c3-4667-8520-ba6e12f7d6a1",
      "deleted_at": null,
      "created_at": "2022-05-07T01:15:04.000000Z",
      "updated_at": "2022-05-10T17:58:06.000000Z"
    },
    {
      "id": 52,
      "amount": 1,
      "from_wallet_name": "system/push",
      "from_wallet_id": null,
      "wallet_id": 1,
      "approved": true,
      "uuid": "05b7c321-6902-4752-ad85-d1c024ba4841",
      "deleted_at": null,
      "created_at": "2022-04-14T21:48:44.000000Z",
      "updated_at": "2022-04-15T21:03:47.000000Z"
    },
    {
      "id": 42,
      "amount": 5,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "2b019b66-ba3a-4f3c-a31b-89f40ee6e45e",
      "deleted_at": null,
      "created_at": "2022-02-28T10:15:13.000000Z",
      "updated_at": "2022-02-28T10:16:42.000000Z"
    },
    {
      "id": 41,
      "amount": 5,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "008d817b-9787-4edb-9c3c-6c8bb3879ac2",
      "deleted_at": null,
      "created_at": "2022-02-27T16:48:17.000000Z",
      "updated_at": "2022-02-27T17:14:29.000000Z"
    },
    {
      "id": 40,
      "amount": 5,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "db68ebc8-b835-40b6-b085-6cbb9e913156",
      "deleted_at": null,
      "created_at": "2022-02-27T16:42:44.000000Z",
      "updated_at": "2022-02-27T16:47:44.000000Z"
    },
    {
      "id": 39,
      "amount": 5,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "40b78202-ebfd-4e4a-88a0-bd6f1cc1c9dd",
      "deleted_at": null,
      "created_at": "2022-02-27T16:17:22.000000Z",
      "updated_at": "2022-02-27T16:21:22.000000Z"
    },
    {
      "id": 37,
      "amount": 5,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "a0822709-d3a2-45c8-bf6e-797f636a1560",
      "deleted_at": null,
      "created_at": "2022-02-26T11:40:57.000000Z",
      "updated_at": "2022-02-26T13:14:42.000000Z"
    },
    {
      "id": 36,
      "amount": 5,
      "from_wallet_name": "FANBASE/BILL161",
      "from_wallet_id": null,
      "wallet_id": 1,
      "approved": true,
      "uuid": "c0f8b7c0-a7c8-44c8-8092-980033a3730f",
      "deleted_at": null,
      "created_at": "2022-02-26T05:51:06.000000Z",
      "updated_at": "2022-02-26T05:52:32.000000Z"
    },
    {
      "id": 35,
      "amount": 2,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "c28119cb-d4ff-4a3e-b4e9-f03ed417b532",
      "deleted_at": null,
      "created_at": "2022-02-26T05:41:14.000000Z",
      "updated_at": "2022-02-26T05:42:22.000000Z"
    },
    {
      "id": 34,
      "amount": 4,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "ff04734f-b1f2-4022-bd8c-f55386352da3",
      "deleted_at": null,
      "created_at": "2022-02-18T10:20:55.000000Z",
      "updated_at": "2022-02-23T10:20:50.000000Z"
    },
    {
      "id": 33,
      "amount": 2,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "97aae524-f881-4e16-998d-b73065409289",
      "deleted_at": null,
      "created_at": "2022-02-18T10:19:02.000000Z",
      "updated_at": "2022-02-18T10:20:12.000000Z"
    },
    {
      "id": 32,
      "amount": 4,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "d38d223a-c4db-4d0e-a789-f0b1e2ad90fd",
      "deleted_at": null,
      "created_at": "2022-02-18T06:10:50.000000Z",
      "updated_at": "2022-02-26T05:27:25.000000Z"
    },
    {
      "id": 31,
      "amount": 4,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "181f8305-7dfc-4057-b23c-b0172c44f5f3",
      "deleted_at": null,
      "created_at": "2022-02-18T06:10:15.000000Z",
      "updated_at": "2022-02-26T05:28:37.000000Z"
    },
    {
      "id": 30,
      "amount": 5,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "9caf5401-6d63-4c7e-9b01-46d68b12f1bd",
      "deleted_at": null,
      "created_at": "2022-02-18T05:05:13.000000Z",
      "updated_at": "2022-02-18T05:15:44.000000Z"
    },
    {
      "id": 29,
      "amount": 1,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "778b10ed-eab8-47e2-96fd-82a9ef5d9bba",
      "deleted_at": null,
      "created_at": "2022-02-18T05:00:13.000000Z",
      "updated_at": "2022-02-18T06:06:37.000000Z"
    },
    {
      "id": 28,
      "amount": 2,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "061f3d4d-b4cd-4c92-ad8a-3dabdbf7464c",
      "deleted_at": null,
      "created_at": "2022-02-18T04:59:18.000000Z",
      "updated_at": "2022-02-26T05:30:38.000000Z"
    },
    {
      "id": 27,
      "amount": 2,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "fee3255b-fc6b-4677-a04f-1a686efc3538",
      "deleted_at": null,
      "created_at": "2022-02-18T04:58:03.000000Z",
      "updated_at": "2022-02-26T05:31:45.000000Z"
    },
    {
      "id": 26,
      "amount": 1,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "8649f596-3cec-4568-9a8d-ae5f5df3ace5",
      "deleted_at": null,
      "created_at": "2022-02-18T04:47:54.000000Z",
      "updated_at": "2022-02-26T05:34:30.000000Z"
    },
    {
      "id": 25,
      "amount": 2,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "3ffebc0d-b4fc-4615-8bf1-26f96e84971c",
      "deleted_at": null,
      "created_at": "2022-02-18T04:43:45.000000Z",
      "updated_at": "2022-02-26T05:32:55.000000Z"
    },
    {
      "id": 24,
      "amount": 2,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "afa6fa0c-cbb1-4477-9e82-0e4c185ffef8",
      "deleted_at": null,
      "created_at": "2022-02-18T03:11:58.000000Z",
      "updated_at": "2022-02-18T03:53:45.000000Z"
    },
    {
      "id": 23,
      "amount": 2,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "86c382f3-2881-4bf4-975d-9f18c52da3af",
      "deleted_at": null,
      "created_at": "2022-02-18T03:11:19.000000Z",
      "updated_at": "2022-02-18T03:54:08.000000Z"
    },
    {
      "id": 22,
      "amount": 2,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "f7dd4ea0-adb3-40dd-88aa-ce5977faaa7e",
      "deleted_at": null,
      "created_at": "2022-02-18T03:03:50.000000Z",
      "updated_at": "2022-02-18T03:54:19.000000Z"
    },
    {
      "id": 21,
      "amount": 2,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "aed3d025-c14c-4373-9a36-66bf168e86ee",
      "deleted_at": null,
      "created_at": "2022-02-18T03:02:48.000000Z",
      "updated_at": "2022-02-18T03:54:30.000000Z"
    },
    {
      "id": 20,
      "amount": 5,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "37732ebb-f791-4ac1-a871-7bfa49db3f5a",
      "deleted_at": null,
      "created_at": "2022-02-18T02:49:40.000000Z",
      "updated_at": "2022-02-18T03:54:45.000000Z"
    },
    {
      "id": 19,
      "amount": 3,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "791fa35f-91aa-40b1-8480-b7404537b3c8",
      "deleted_at": null,
      "created_at": "2022-02-18T02:48:58.000000Z",
      "updated_at": "2022-02-18T04:07:05.000000Z"
    },
    {
      "id": 18,
      "amount": 2,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "d0c24a2a-ccdc-4e06-84a1-2f877c219172",
      "deleted_at": null,
      "created_at": "2022-02-18T02:47:36.000000Z",
      "updated_at": "2022-02-18T04:07:15.000000Z"
    },
    {
      "id": 17,
      "amount": 1,
      "from_wallet_name": "FANBASE/BILL159",
      "from_wallet_id": null,
      "wallet_id": 1,
      "approved": true,
      "uuid": "95aee182-4da1-4288-a1b4-aa34b82e050a",
      "deleted_at": null,
      "created_at": "2022-02-17T07:42:39.000000Z",
      "updated_at": "2022-02-17T08:00:33.000000Z"
    },
    {
      "id": 16,
      "amount": 2,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "e70690bc-6446-4341-8511-05ba002de43c",
      "deleted_at": null,
      "created_at": "2022-02-17T07:37:56.000000Z",
      "updated_at": "2022-02-17T07:38:44.000000Z"
    },
    {
      "id": 15,
      "amount": 2,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "8ed5f556-eb19-4beb-8a9b-33ccde1bf36e",
      "deleted_at": null,
      "created_at": "2022-02-17T07:00:00.000000Z",
      "updated_at": "2022-02-17T07:35:55.000000Z"
    },
    {
      "id": 14,
      "amount": 3,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "1cee68fd-0e16-44f0-a890-8da9d1cbeb85",
      "deleted_at": null,
      "created_at": "2022-02-17T02:35:33.000000Z",
      "updated_at": "2022-02-17T02:36:36.000000Z"
    },
    {
      "id": 13,
      "amount": 3,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "1a9f4fe7-0a49-4c32-b25e-a7bfce0f00f3",
      "deleted_at": null,
      "created_at": "2022-02-17T01:58:51.000000Z",
      "updated_at": "2022-02-17T01:59:35.000000Z"
    },
    {
      "id": 12,
      "amount": 4,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "e8ab7c28-e942-439b-b09c-64d1f8553f2a",
      "deleted_at": null,
      "created_at": "2022-02-16T11:29:56.000000Z",
      "updated_at": "2022-02-16T11:31:00.000000Z"
    },
    {
      "id": 11,
      "amount": 2,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "ab7435eb-2641-4c74-9bbc-2c2f6b420e25",
      "deleted_at": null,
      "created_at": "2022-02-16T07:35:51.000000Z",
      "updated_at": "2022-02-16T07:36:35.000000Z"
    },
    {
      "id": 10,
      "amount": 1,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "fab893ff-a385-4d20-b1f7-3a54ec20ec50",
      "deleted_at": null,
      "created_at": "2022-02-16T04:05:39.000000Z",
      "updated_at": "2022-02-16T04:06:41.000000Z"
    },
    {
      "id": 7,
      "amount": 2,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "9168eac5-b3e5-4d9e-b568-fba3138865fc",
      "deleted_at": null,
      "created_at": "2022-02-16T03:04:22.000000Z",
      "updated_at": "2022-02-16T03:05:36.000000Z"
    },
    {
      "id": 6,
      "amount": 4,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "98d39235-cc62-4d75-ad91-e84ca213a3e3",
      "deleted_at": null,
      "created_at": "2022-02-16T02:19:44.000000Z",
      "updated_at": "2022-02-16T02:20:24.000000Z"
    },
    {
      "id": 5,
      "amount": 1,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "a077a336-1243-4760-ac1b-d2dc63c41f82",
      "deleted_at": null,
      "created_at": "2022-02-16T02:19:21.000000Z",
      "updated_at": "2022-02-16T02:20:57.000000Z"
    },
    {
      "id": 4,
      "amount": 2,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "3edc810e-fa7d-48c0-b5db-86b19812b659",
      "deleted_at": null,
      "created_at": "2022-02-16T02:17:18.000000Z",
      "updated_at": "2022-02-16T02:18:05.000000Z"
    },
    {
      "id": 2,
      "amount": 1,
      "from_wallet_name": "FANBASE/BILL159",
      "from_wallet_id": null,
      "wallet_id": 1,
      "approved": true,
      "uuid": "3703b260-28c5-4453-837a-d484312002e7",
      "deleted_at": null,
      "created_at": "2022-02-15T15:17:04.000000Z",
      "updated_at": "2022-02-16T02:13:05.000000Z"
    },
    {
      "id": 1,
      "amount": 1,
      "from_wallet_name": "FANBASE/7978120001",
      "from_wallet_id": 1,
      "wallet_id": 1,
      "approved": true,
      "uuid": "187d3a44-325f-401d-85ed-2f34e37fff6f",
      "deleted_at": null,
      "created_at": "2022-02-15T14:32:36.000000Z",
      "updated_at": "2022-02-16T02:16:05.000000Z"
    }
  ],
  "first_page_url": "https://web.builtaccounting.com/api/bw/payments?page=1",
  "from": 1,
  "last_page": 1,
  "last_page_url": "https://web.builtaccounting.com/api/bw/payments?page=1",
  "links": [
    {
      "url": null,
      "label": "&laquo; Previous",
      "active": false
    },
    {
      "url": "https://web.builtaccounting.com/api/bw/payments?page=1",
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
  "path": "https://web.builtaccounting.com/api/bw/payments",
  "per_page": 100,
  "prev_page_url": null,
  "to": 51,
  "total": 51
}
```
