import { Controller, Post, Body } from '@nestjs/common';
import { AccessToken } from 'livekit-server-sdk';

@Controller('livekit')
export class LiveKitController {

  @Post('token')
  async getToken(@Body() body: { roomName: string; userName: string }) {
    const { roomName, userName } = body;

    const token = new AccessToken(
      'APIoQVDJFWvZzLL',
      'XVcNtPKkmw5hKnvLAD26bq4XFFceN6MPD3qfU1A9leNA',
      {
        identity: userName,
        name: userName,
        ttl: '2h',
      },
    );

    token.addGrant({
      roomJoin: true,
      room: roomName,
      canPublish: true,
      canSubscribe: true,
      canPublishData: true,
    });

    return {
      token: await token.toJwt(),
      serverUrl: 'wss://init-project-3kmidra0.livekit.cloud',
    };
  }
}