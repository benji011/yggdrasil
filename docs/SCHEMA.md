## About

The Firebase Database uses a NoSQL like syntax. Each "Collection" is like a table record and each "document" represents a record in SQL. You can refer to the [models directory](./src/models/) on the interface used for each collection & document.

## Messages

```typescript
// ICreatedAt
export interface ICreatedAt {
  nanoseconds: number
  seconds: number
}

// IMessage
export interface IMessage {
  id: string
  displayName: string
  text: string
  uid: string
  photoURL: string
  createdAt: ICreatedAt
  threadId: string
}
```

## Threads

```typescript
export interface IThread {
  id: string
  createdAt: {
    nanoseconds: number
    seconds: number
  }
  title: string
  description: string
}
```
