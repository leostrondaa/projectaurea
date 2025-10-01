import { BaseModel, column, belongsTo} from '@adonisjs/lucid/orm'
import type { BelongsTo} from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
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
    declare createdAt: DateTime

  @belongsTo(() => Conta, { foreignKey: 'conta_id' })
  declare conta: BelongsTo<typeof Conta>
}
