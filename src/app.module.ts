import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from './user/user.module';
import { MatchModule } from './match/match.module';

@Module({
  imports: [UserModule, MatchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
