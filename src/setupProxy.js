const { createProxyMiddleware: proxy } = require('http-proxy-middleware')
const fs = require('fs')
const os = require('os')

module.exports = function (app) {
  app.use(
    '/api',
    proxy({
      changeOrigin: true,
      router: () => readEnv('/api'),
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}

function readEnv(prefix) {
  const isMac = os.type() === 'Darwin'
  const symbol = isMac ? '/' : '\\'
  const lineBreak = isMac ? '\n' : '\r\n'
  const text = fs.readFileSync(`${__dirname}${symbol}.env`, 'utf-8')
  const purelyUrlInfo = text
    .split(lineBreak)
    .map((x) => x.trim())
    .filter((x) => !(x === '' || x.startsWith('#')))
  const urlDict = purelyUrlInfo.reduce((acc, x) => {
    const [key, url] = x.split(' ')
    acc[key] = url
    return acc
  }, {})
  const key = urlDict[prefix]
  return urlDict[key]
}
