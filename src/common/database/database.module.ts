import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRootAsync({
    useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI')
    }),
    inject: [ConfigService]
  })]
})
export class DatabaseModule {}

// MongooseModule.forRoot('mongodb://root:example@localhost:27017/admin', {}),