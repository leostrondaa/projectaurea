import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Transacao from '#models/transacao'

export default class TransacoesSeeder extends BaseSeeder {
  public async run () {
    await Transacao.createMany([
      { contaId: 1, tipo: 'deposito', valor: 500.00, descricao: 'Depósito inicial' },
      { contaId: 2, tipo: 'saque', valor: 200.00, descricao: 'Saque em caixa eletrônico' },
    ])
  }
}
