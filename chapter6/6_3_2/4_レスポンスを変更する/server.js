const http = require('http');

// シンプルなHTTPサーバー
const server = http.createServer((req, res) => {
  // HTMLコンテンツを返す
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<html><head><title>Original Title</title></head><body><h1>Hello World</h1></body></html>');
});

// ポート3000でサーバーを起動
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
