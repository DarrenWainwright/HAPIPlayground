import * as Hapi from "Hapi";

export class App {
  

    server: Hapi.Server;
    io:any;

    text_expressRunning = "server - server running on port: ";
    text_socketConnected = "server - socket.io connected";

    constructor (private host: string){
        this.server = new Hapi.Server({
            host: host,
            port: 3000
        });

        this.io = require('socket.io')(this.server.listener);        
    }

    start = async() => {
        try {
            await this.server.start();
            await this.init();
        } catch (error) {
            throw new Error(error);
            process.exit(1);
        }
    }


    init() {
        console.log(`success on port: ${this.server.info.port}`);
        this.startSocketIO();
    }

    startSocketIO() {
        this.io.on('connection', (socket:any)=>{
            socket.emit('socket_connected', {status: this.text_socketConnected});
            socket.on('sendSocketMessage', (data: any)=>{
                let text_angularMessage = `server - message from Angular: ${data.socketMessage}`;
                socket.emit('angular_request', {status: text_angularMessage})
            });

        });
    }
}