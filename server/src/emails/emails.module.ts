import { Module } from '@nestjs/common';
import { MailerModule, HandlebarsAdapter } from '@nest-modules/mailer';

import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';

import { EmailsService } from './emails.service';

@Module({
  imports: [
    ConfigModule,
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        transport: configService.getSetting('MAILER_TRANSPORT'),
        defaults: {
          from: configService.getSetting('MAILER_DEF_FROM'),
        },
        template: {
          dir: configService.getSetting('MAILER_TEMP_DIR'),
          adapter: new HandlebarsAdapter(),
          options: {
            doctype: configService.getSetting('MAILER_TEMP_DOC'),
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [EmailsService],
  exports: [EmailsService],
})
export class EmailsModule {}
