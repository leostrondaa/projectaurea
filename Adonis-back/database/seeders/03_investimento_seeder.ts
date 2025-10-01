import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aplicacao from '#models/investimento'

export default class AplicacoesSeeder extends BaseSeeder {
  public async run () {
    await Aplicacao.createMany([
      { contaId: 1, tipo: 'poupanca', valor: 300.00 },
      { contaId: 2, tipo: 'acoes', valor: 500.00 },
    ])
  }
}
