import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Transacao from '#models/transacao'

export default class TransacoesSeeder extends BaseSeeder {
  public async run () {
    await Transacao.createMany([
      { conta_id: 1, tipo: 'deposito', valor: 500.00, descricao: 'Depósito inicial' },
      { conta_id: 2, tipo: 'saque', valor: 200.00, descricao: 'Saque em caixa eletrônico' },
    ])
  }
}
