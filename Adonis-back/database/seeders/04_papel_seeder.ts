import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Papel from '#models/papel'

export default class extends BaseSeeder {
  public async run () {
    await Papel.createMany([
      { nome: 'admin' },
      { nome: 'cliente' },
    ])
  }
}
