import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from '#models/user'
import Hash from '@ioc:Adonis/Core/Hash'

export default class UsersSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        fullName: 'João da Silva',
        email: 'joao@example.com',
        password: await Hash.make('123456'),
        cpf: '12345678901',
        cidade: 'Paranaguá',
        estado: 'PR',
        rua: 'Rua A',
        numero: '100',
        papel_id: 2,
      },
      {
        fullName: 'Maria Souza',
        email: 'maria@example.com',
        password: await Hash.make('123456'),
        cpf: '98765432100',
        cidade: 'Curitiba',
        estado: 'PR',
        rua: 'Rua B',
        numero: '200',
        papel_id: 2,
      },
    ])
  }
}
