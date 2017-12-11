test("verhoeff.Digit", async () => {
  const verhoeff = require("../src/index.js")

  expect(verhoeff.Digit("75872")).toBe(2)
  expect(verhoeff.Digit("12345")).toBe(1)
  expect(verhoeff.Digit("142857")).toBe(0)
  expect(verhoeff.Digit("123456789012")).toBe(0)
  expect(verhoeff.Digit("8473643095483728456789")).toBe(2)
  expect(verhoeff.Digit("xy-1")).toBe(undefined)
})

test("verhoeff.Validate", async () => {
  const verhoeff = require("../src/index.js")

  expect(verhoeff.Validate("84736430954837284567892")).toBe(true)
  expect(verhoeff.Validate("8473643095483728456789")).toBe(false)
  expect(verhoeff.Validate("xy-1")).toBe(false)
})

test("verhoeff.Generate", async () => {
  const verhoeff = require("../src/index.js")

  let generated = verhoeff.Generate("8473643095483728456789")

  expect(generated).toBe("84736430954837284567892")
  expect(verhoeff.Validate(generated)).toBe(true)

  expect(verhoeff.Generate("xy-1")).toBe(undefined)
})
