import { Module } from "@nestjs/common";
import { databaseProviders } from "./database-connection.provides";

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
