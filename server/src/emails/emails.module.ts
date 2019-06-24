import { Module, Global } from '@nestjs/common';
import { MailerModule, HandlebarsAdapter } from '@nest-modules/mailer';

import { ConfigService } from '../config/config.service';

import { EmailsService } from './emails.service';

@Global()
@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
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
