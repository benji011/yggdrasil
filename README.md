<p align="center">
  <img src="./src/assets/img/logo.png" height="200px" width="200px"/>
</p>

## About

Yggdrasil is a (currently pre-beta) public chatroom created using CRA powered by Firebase.

## What can you do with it?

You can enter a chatroom or create one yourself. But there are restrictions for each user (mostly due to me being cheap and hosting the Database on a free tier plan so I don't have a lot of storage for now)

<a align="center">
<img src="./src/assets/img/yggdrasil-chat-example.png"  width="800px"/>
</a>

## Installation

1. First you need to set up Firebase. Please refer to the following docs before running the app:

- [Firebase settings](./docs/FIREBASE_SETTINGS.md)
- [Schema settings](./docs/SCHEMA.md)

2. Install and start the local server

```bash
yarn && yarn start
```

3. Access http://localhost:3000


## Contributing

Please see [CONTRIBUTING.md](docs/CONTRIBUTING.md)

## Testing
- As this is an app I built for fun, I haven't really begun adding tests (yet). If you would like to contribute (refer to [CONTRIBUTING.md](docs/CONTRIBUTING.md)), feel free to send a pull request :)
- Manual testing should be done locally. Please see [Firebase settings](./docs/FIREBASE_SETTINGS.md) on how to configure the app on the backend.

## TODO

- Add unit & E2E tests
