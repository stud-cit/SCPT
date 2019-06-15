import { Injectable } from '@nestjs/common';
import { MailerService } from '@nest-modules/mailer';

import { ConfigService } from '../config/config.service';
import { SendMail } from './interfaces/send.interface';

@Injectable()
export class EmailsService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  send(options: SendMail, context: object) {
    this.mailerService.sendMail({
      ...options,
      context: {
        ...context,
        title: options.subject,
        app_url: this.configService.getSetting('APP_ROOT_URL'),
      },
    });
  }
}
