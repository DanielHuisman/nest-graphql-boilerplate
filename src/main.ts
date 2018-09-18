import {NestFactory} from '@nestjs/core';
import helmet from 'helmet';

import {AppModule} from './app.module';

(async () => {
    const app = await NestFactory.create(AppModule);

    app.use(helmet());

    await app.listen(5000);
})();
