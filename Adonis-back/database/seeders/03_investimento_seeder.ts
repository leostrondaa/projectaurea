import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Aplicacao from '#models/investimento'

export default class AplicacoesSeeder extends BaseSeeder {
  public async run () {
    await Aplicacao.createMany([
      { conta_id: 1, tipo: 'poupanca', valor: 300.00 },
      { conta_id: 2, tipo: 'acoes', valor: 500.00 },
    ])
  }
}
