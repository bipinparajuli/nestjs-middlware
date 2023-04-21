import { AppService } from './app.service';
import { AppController } from './app.controller';
import { HelloModule } from './hello/hello.module';
import { ClassMiddlewareExample } from './middleware/class.middleware';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';

@Module({
  imports: [HelloModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ClassMiddlewareExample).exclude({path:'hello',method:RequestMethod.GET}).forRoutes('*')
  }
}