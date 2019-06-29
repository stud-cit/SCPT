import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  UpdateEvent,
} from 'typeorm';
import { Users } from './users.entity';
import { hashSync } from 'bcrypt';

@EventSubscriber()
export class UsersSubscriber implements EntitySubscriberInterface<any> {
  listenTo() {
    return Users;
  }

  beforeInsert(event: InsertEvent<Users>): Promise<any> | void {
    if (event.entity) {
      event.entity.password = hashSync(event.entity.password, 8);
    }
  }

  beforeUpdate(event: UpdateEvent<Users>): Promise<any> | void {
    if (event.entity) {
      event.entity.password = hashSync(event.entity.password, 8);
    }
  }
}
