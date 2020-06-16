<p align="center">
  <a href="http://algoan.com/" target="blank"><img src="https://media.licdn.com/dms/image/C4E0BAQH-hIlc5g9g7w/company-logo_200_200/0?e=2159024400&v=beta&t=j5y9KO1P22GsMx3vBNawrpvyvjD2iyBWGeVPUsRkn5s" width="320" alt="Algoan Logo" /></a>
</p>

# NodeJS Algoan API SDK

JavaScript client for [Algoan](https://www.algoan.com): wrap all APIs for developers using [Algoan's APIs](https://developers.algoan.com/api).

## About Algoan

We believe at Algoan that consumer loans when wisely managed create positive economic value.

Our aim is therefore to design for our partners the ultimate credit experience to best serve their customers.

## Installation

First, install this module running:

```bash
npm install @algoan/sdk
```

## Usage

After installing the module, you can now instantiate a instance of Algoan. Please note that **credentials are required in order to test the Algoan class**.

```typescript
import { Algoan } from '@algoan/rest';

const client: Algoan = new Algoan({
  baseUrl: 'https://...',
  clientId: '{your_client_id}',
  clientSecret: '{your_client_secret}',
});
```

## Examples

You can run examples using [ts-node](https://github.com/TypeStrong/ts-node):

```bash
examples/{the-file-you-want-to-test}.ts --url={your_sandbox_url} --clientid={your_client_id} --secret={your_client_secret}
```

| Sample                   | Source code                                                   |
|--------------------------|---------------------------------------------------------------|
| Get all service accounts | [get-service-accounts.ts](./examples/get-service-accounts.ts) |

## API

To be able to use this SDK, you need to ask to an Algoan administrator credentials to [support@algoan.com].

### `getServiceAccounts()`

Retrieves all service accounts related to your credentials.

```typescript
await client.getServiceAccounts();
```

Returns a [list of service accounts](https://developers.algoan.com/api/#operation/serviceAccount).
