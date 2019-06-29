import { Module, Global, MulterModule } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
import { diskStorage } from 'multer';
import { v4 } from 'uuid';
import { extname } from 'path';

import { ConfigService } from '../config/config.service';

@Global()
@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        limits: {
          fileSize: 5 * 1024 ** 2,
        },
        fileFilter: function(req, file, cb) {
          const format = ['.png', '.jpg', '.gif', '.jpeg'];
          if (format.includes(extname(file.originalname))) {
            return cb(null, true);
          }

          return cb(new BadRequestException(), false);
        },
        storage: diskStorage({
          destination:
            configService.getSetting('PWD') +
            configService.getSetting('MULTER_DEST'),

          filename: (_req, file, cb) => {
            return cb(null, `${v4()}${extname(file.originalname)}`);
          },
        }),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class UpdloadModule {}
