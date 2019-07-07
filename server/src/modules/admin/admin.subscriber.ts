import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  UpdateEvent,
} from 'typeorm';
import { Admin } from './admin.entity';
import { hashSync } from 'bcrypt';

@EventSubscriber()
export class AdminSubscriber implements EntitySubscriberInterface<any> {
  listenTo() {
    return Admin;
  }

  beforeInsert(event: InsertEvent<Admin>): Promise<any> | void {
    if (event.entity) {
      event.entity.password = hashSync(event.entity.password, 8);
    }
  }

  beforeUpdate(event: UpdateEvent<Admin>): Promise<any> | void {
    if (event.entity) {
      event.entity.password = hashSync(event.entity.password, 8);
    }
  }
}
