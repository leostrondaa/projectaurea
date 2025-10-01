import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Conta from '#models/conta'

export default class ContasSeeder extends BaseSeeder {
  public async run () {
    await Conta.createMany([
      { userId: 1, agencia: '0001', numero: '12345-6', saldo: 1500.00 },
      { userId: 2, agencia: '0001', numero: '54321-0', saldo: 2500.00 },
    ])
  }
}
