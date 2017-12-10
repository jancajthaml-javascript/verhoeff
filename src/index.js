const mult = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6], [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1], [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]],
      perm = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2], [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1], [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]],
      inv  = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9]

const Digit = message => {
  let i = message.length,
      j = 0,
      x = 0

  while (i--) {
    let d = +message[i]
    if (d != d) {
      return -1
    }
    x = mult[x][perm[(++j%8)][d]]
  }

  return inv[x]
}

const Validate = message => {
  let i = message.length,
      j = 0,
      x = 0

  while (i--) {
    let d = +message[i]
    if (d != d) {
      return false
    }
    x = mult[x][perm[(j++%8)][d]]
  }

  return x == 0
}

const Generate = message => `${message}${Digit(message)}`

module.exports = {
  Digit,
  Validate,
  Generate
}
