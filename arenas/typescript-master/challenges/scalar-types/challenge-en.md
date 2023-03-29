# Scalare Types

Let's begin easily : the scalars.
In this first fight, you will have to export an object called `obj` containing the following keys :

- `aNumber` : any number, of your choice
- `aString` : any string, of your choice
- `aBoolean` : any boolean, of your choice
- `aNull` : the null value
- `anUndefined` : the undefined value

It will have to match the following type :

```typescript
type ExpectedObj = {
  aNumber: number;
  aString: string;
  aBoolean: boolean;
  aNull: null;
  anUndefined: undefined;
};
```

This is the template you should use :

```typescript
export const obj = {
  aNumber: undefined,
  aString: undefined,
  aBoolean: undefined,
  aNull: undefined,
  anUndefined: undefined,
};
```
