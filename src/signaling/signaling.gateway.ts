import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class SignalingGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server!: Server;


  handleConnection(client: Socket) {
    console.log(`Máy kết nối: ${client.id}`);
    client.emit('me', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log(`Máy ngắt kết nối: ${client.id}`);
    this.server.emit('peer-left', client.id);
  }

  @SubscribeMessage('send-signal')
  handleSignal(
    @MessageBody() data: { to: string; signal: any },
    @ConnectedSocket() client: Socket,
  ) {
    this.server.to(data.to).emit('receive-signal', {
      from: client.id,
      signal: data.signal,
    });
  }
}