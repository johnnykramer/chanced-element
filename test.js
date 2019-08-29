const { chancedElement } = require('./')()

const { chance, data } = chancedElement({
  variants: [
    { chance: 25, data: 42 },
    { chance: 25, data: 'kek' },
    { chance: 20, data: { lol: 'kek' } },
    { chance: 30, data: arr => arr.map(el => el.toString()) },
  ],
})
console.log(`Chance ${chance}%`, '->', data)
