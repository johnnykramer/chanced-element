# Get a random array element with a specific chance

## How to

### Install

```bash
yarn add chanced-element
```

or

```bash
npm install --save chanced-element
```

### Run

Sum of `chance`s should be equals 100, like 50% chance + 50% chance = 100%.

Param `data` can be any type.

```js
const { chancedElement } = require('chanced-element')()

const { data } = chancedElement({
  variants: [
    { chance: 50, data: 'JS Developer' },
    { chance: 30, data: 'Superhero!' },
    { chance: 20, data: 'Duuude' },
  ],
})
console.log(`I Am ${data}`)
```

## TODO

- Add more random engines
- Make it more customizable
