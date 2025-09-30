import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Conta from './conta.js'

export default class Aplicacao extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare conta_id: number

  @column()
  declare tipo: 'poupanca' | 'titulo_governo' | 'acoes'

  @column()
  declare valor: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: Date

  @column.dateTime()
  declare resgatadoEm: Date | null

  @belongsTo(() => Conta, { foreignKey: 'conta_id' })
  declare conta: BelongsTo<typeof Conta>
}
