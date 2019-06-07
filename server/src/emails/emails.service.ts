import { Injectable } from '@nestjs/common';
import { MailerService } from '@nest-modules/mailer';

import { ConfigService } from '../config/config.service';

@Injectable()
export class EmailsService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  send(user: string, subject: string, template: string, context: object) {
    this.mailerService.sendMail({
      to: user,
      subject,
      template,
      context: {
        ...context,
        title: subject,
        app_url: this.configService.getSetting('APP_ROOT_URL'),
      },
    });
  }
}
