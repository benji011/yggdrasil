## Firebase settings

1. To get started, please login to your [Firebase console](https://console.firebase.google.com/).

2. Create a new JavaScript Firebase project `my-yggdrasil-project`

3. Following on screen instructions then obtain the following values for your environment variables:

```javascript
{
  apiKey: 'your-apiKey'
  authDomain: 'your-authDomain'
  projectId: 'your-projectId'
  storageBucket: 'your-storageBucket'
  messagingSenderId: 'your-messagingSenderId'
  appId: 'your-appId'
  measurementId: 'your-measurementId'
}
```

4. Copy your `.env.example` over as your `.env` file

```bash
cp -p .env.example .env
```

## Setting Up a Firestore Index

In order for the neccessary filters to be applied to each chatroom, a Firestore index needs to be created.
Official documentation for index creation can be found [here](https://firebase.google.com/docs/firestore/query-data/indexing).

1. Navigate to the [Firebase console](https://console.firebase.google.com/).
2. On the `Build` section, select `Firestore Database`
3. Go to `Indexes` and click on `Create index`
4. Choose these settings:
   1. For the collection ID: messages
   2. For the fields to index:
      1. threadId: Ascending
      2. createdAt: Ascending
   3. Choose the "Collection" query scope
5. Click `Create index` and wait for it to build

An alternative method to build this index, is entering any chatroom and clicking the firebase error that might appear in the console. (This method is not recommeded)

## References

- [Add Firebase to your JavaScript project](https://firebase.google.com/docs/web/setup)
