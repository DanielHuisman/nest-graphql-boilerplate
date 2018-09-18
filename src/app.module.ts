import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {TypeOrmModule} from '@nestjs/typeorm';

import {AppController} from './app.controller';

@Module({
    imports: [
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
            installSubscriptionHandlers: true

            // TODO: disable these in production
            // debug: false,
            // playground: false
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            // TODO: configuration
            host: 'localhost',
            port: 5432,
            username: 'root',
            password: 'root',
            database: 'test',

            entities: ['./**/*.entity.ts'],

            // TODO: disable this in production
            synchronize: true
        })
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
