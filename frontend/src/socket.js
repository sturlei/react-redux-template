import { io } from "socket.io-client";
import { url } from "./URL";
const socket = io.connect( url );

class SocketPoint {
    constructor() {
        this.socket = socket;
        this.events = [];
    }
    add( event, callback ) {
        const index = this.events.length;
        this.events.push( {
            index: index + 1,
            event,
            callback
        } )
        socket.on( this.events[index].event, this.events[index].callback )
    }
    removeAll() {
        this.events.forEach( currentEvent => {
            socket.off( currentEvent.event, currentEvent.callback )
        } )
        this.events = [];
    }
}

export default SocketPoint;