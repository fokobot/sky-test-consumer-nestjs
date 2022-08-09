import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [RabbitMQModule.forRoot(RabbitMQModule, {
    exchanges: [
      {
        name: 'users',
        type: 'fanout'
      }
    ],
    uri: 'amqp://guest:guest@localhost:5672',
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
