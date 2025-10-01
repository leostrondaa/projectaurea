import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Conta from './conta.js'

export default class Transacao extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare conta_id: number

  @column()
  declare tipo: 'deposito' | 'saque' | 'transferencia' | 'aplicacao'

  @column()
  declare valor: number

  @column()
  declare descricao: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: Date

  @belongsTo(() => Conta, { foreignKey: 'conta_id' })
  declare conta: BelongsTo<typeof Conta>
}
