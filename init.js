const socket = require('./core/socket')
const session = require('./core/session');
const buffer = require('./core/streamData');



class u_session extends session {
    constructor() {
        super();
    }

    async message(stateData) {
        super.message(stateData);

        console.log("Worked");
    }
}

async function Start() {
    let server = socket.initSocket(u_session);

    setInterval(function () {
        let state = new buffer.WriteBuffer(256);
        state.Int32 = 43855;
        state.String = "Ivan Chikishev";
        state.Float = 120.5;
        state.Float = 1953.12;
        state.Float = 932.1;



        let readState = new buffer.ReadBuffer(state.buffer);
        let id = readState.Int32;
        let name = readState.String;
        let x = readState.Float;
        let y = readState.Float;
        let z = readState.Float;
    }, 1);


    return 'Running...';
}

Start().then(console.log).catch(console.error);