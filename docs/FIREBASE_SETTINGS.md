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

## References

- [Add Firebase to your JavaScript project](https://firebase.google.com/docs/web/setup)
