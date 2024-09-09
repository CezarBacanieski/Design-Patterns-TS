import { LogErrorRepository } from '../../../usecases/repository/logErrorRepository';
import { MongoManager } from '../../config/mongoManager';

export class LogErrorMongoRepository implements LogErrorRepository {
  async log(stack: string): Promise<void> {
    const logErrorColection = MongoManager.getInstance().getCollection('error');
    await logErrorColection.insertOne({ stack, date: new Date() });
  }
}
