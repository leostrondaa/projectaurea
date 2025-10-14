import Conta from '#models/conta'
import Investimento from '#models/investimento'
import Transacao from '#models/transacao'

export default class InvestimentoController {
    async aplicar({ request, response }) {
        const { remetenteId, valor } = request.only([
            'remetenteId',
            'valor',
        ])

        // Busca contas
        const remetente = await Conta.query().where('user_id', remetenteId).first()

        if (remetente.saldo < valor) {
            return response.badRequest({ message: 'Saldo insuficiente' })
        }
        
        remetente.saldo = Number(remetente.saldo) - valor

        await remetente.save()

        await Transacao.create({
            conta_id: remetente.id,
            tipo: 'aplicacao',
            valor: -valor,
            descricao: `Aplicação`,
        })

        await Investimento.create({
            conta_id: remetente.id,
            valor: valor
        })

        return response.ok({
            message: 'Aplicação concluída com sucesso',
            remetente,
        })
    }
}
