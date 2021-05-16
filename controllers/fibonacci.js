exports.hello = (req, res) => {
  res.send('Welcome! Add /n at the end of the URL string, where n is an integer.')
}

exports.fibonacci = (req, res) => {
  const n = req.params.n
  const fibArr = []

  if (isNaN(n) || n < 0) {
    return res.send('Value not valid, please enter an integers greater or equal than 0.')
  }

  fibArr[0] = 0
  fibArr[1] = 1
  for (let i = 2; i <= n; i++) {
    fibArr[i] = fibArr[i - 2] + fibArr[i - 1]
  }

  const response = fibArr[n]
  res.send(`${response}`)
}
