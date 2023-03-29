# Types Scalaires

Commençons simplement : les types scalaires.
Dans ce premier combat, tu vas devoir retourner un objet appelé `obj` qui contient les clés suivantes :

- `aNumber` : un nombre, n'importe lequel
- `aString` : une chaine de caractère, n'importe laquelle
- `aBoolean` : un boolean, celui que tu veux
- `aNull` : le type `null`
- `anUndefined` : le type `undefined`

Il devra correspondre au type suivant =

```typescript
type ExpectedObj = {
  aNumber: number;
  aString: string;
  aBoolean: boolean;
  aNull: null;
  anUndefined: undefined;
};
```

Voilà le template du fichier que tu devras utiliser :

```typescript
export const obj = {
  aNumber: undefined,
  aString: undefined,
  aBoolean: undefined,
  aNull: undefined,
  anUndefined: undefined,
};
```
