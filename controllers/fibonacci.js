exports.hello = (req, res) => {
  res.send('Welcome')
}

exports.fibonacci = (req, res) => {
  const n = req.params.n
  const fibArr = []

  fibArr[0] = 0
  fibArr[1] = 1
  for (let i = 2; i <= n; i++) {
    fibArr[i] = fibArr[i - 2] + fibArr[i - 1]
  }

  const response = fibArr[fibArr.length - 1]
  res.send(`${response}`)
}
