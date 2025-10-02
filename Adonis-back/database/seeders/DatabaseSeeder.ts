import { BaseSeeder } from '@adonisjs/lucid/seeders'
import PapelSeeder from './01_papel_seeder.js'
import UsersSeeder from './02_user_seeder.js'
import ContasSeeder from './03_conta_seeder.js'
import TransacoesSeeder from './04_transacao_seeder.js'
import AplicacoesSeeder from './05_investimento_seeder.js'

export default class DatabaseSeeder extends BaseSeeder {
  public async run() {
    await new PapelSeeder(this.client).run()
    await new UsersSeeder(this.client).run()
    await new ContasSeeder(this.client).run()
    await new TransacoesSeeder(this.client).run()
    await new AplicacoesSeeder(this.client).run()
  }
}