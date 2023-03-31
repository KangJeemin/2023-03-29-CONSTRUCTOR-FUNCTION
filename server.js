import http from 'http'

class server {
  constructor(port){
    this.port = port;
  }
  set port(value){
    if(typeof value !== 'number'){
      throw new Error('port have to write number!')
    }
    else
    this._port = value;
  }

  start(){
    this.server = http.createServer((req,res)=>{
      res.writeHead(200,{'Content-Type':'text/plain'});
      res.end('객체지향 프로그래밍의 시작 생성자 함수')
    })
    this.server.listen(this._port);
  }
}

const a = new server(3300);

a.start()