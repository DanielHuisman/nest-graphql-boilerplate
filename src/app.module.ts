import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';

import {AppController} from './app.controller';

@Module({
    imports: [
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
            installSubscriptionHandlers: true

            // TODO: set these is production environment
            // debug: false,
            // playground: false
        })
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
