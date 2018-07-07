class ReadStream {
    constructor(buffer) {
        this.bufferState = buffer;
        this.offsetState = 0;
    }

    get Int32() {
        let source = this.bufferState.readInt32LE(this.offsetState);
        this.offsetState = this.offsetState + 4;

        return source;
    }

    get Float() {
        let source = this.bufferState.readFloatLE(this.offsetState);
        this.offsetState = this.offsetState + 4;

        return source;
    }

    get Boolean() {
        let source = this.bufferState.readInt32LE(this.offsetState);
        this.offsetState = this.offsetState + 4;

        return source;
    }

    get String() {
        let bufferStateCount = this.Int32;
        let source = this.bufferState.slice(this.offsetState, bufferStateCount + this.offsetState);
        this.offsetState = this.offsetState + bufferStateCount;

        return source.toString();
    }


    get buffer() {
        return this.bufferState;
    }
}


class WriteStream {
    constructor(bufferSize = 256) {
        this.bufferState = Buffer.alloc(bufferSize);
        this.offsetState = 0;
    }

    set Float(value) {
        this.bufferState.writeFloatLE(value, this.offsetState);
        this.offsetState = this.offsetState + 4;
    }

    set Double(value) {
        this.bufferState.writeDoubleLE(value, this.offsetState);
        this.offsetState = this.offsetState + 8;
    }


    set Int32(value) {
        this.bufferState.writeInt32LE(value, this.offsetState);
        this.offsetState = this.offsetState + 4;
    }

    set String(value) {
        this.Int32 = value.length;


        this.bufferState.write(value, this.offsetState, value.length + this.offsetState);
        this.offsetState = this.offsetState + value.length;
    }

    get buffer() {
        return this.bufferState;
    }
}


module.exports = {
    ReadBuffer: ReadStream,
    WriteBuffer: WriteStream
};