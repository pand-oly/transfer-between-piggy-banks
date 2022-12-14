import ITransaction from '../../entities/ITransaction';
import PrismaTransactionModel from '../../prismaDatabase/models/PrismaTransactionModel';
import ITransactionRepository from '../ITransactionRepository';

export default class TransactionRepository implements ITransactionRepository {
  constructor(private _transactionModel: PrismaTransactionModel) {}

  public async create(data: ITransaction): Promise<ITransaction> {
    const transaction = this._transactionModel.create(data);
    return transaction;
  }

  public async findAll(id: number): Promise<ITransaction[]> {
    const transactions = await this._transactionModel.findAll(id);
    return transactions;
  }
}
