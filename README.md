## Performant and straight-forward implementation of verhoeff checksum algorithm

### Usage ###

```
const verhoeff = requite("verhoeff")

let ok = verhoeff.Validate("00123014764700968325")

let digit = verhoeff.Digit("x")

let signed = verhoeff.Generate("1")
```

### Resources ###

* [Wikipedia - Verhoeff algorithm](https://en.wikipedia.org/wiki/Verhoeff_algorithm)
