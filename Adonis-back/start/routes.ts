import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.get('/health', async () => {
  return { status: 'ok', message: 'Backend funcionando' }
})

// ⬇️ SEU CÓDIGO EXISTente - NÃO MUDE NADA ABAIXO
router.get('/', async () => {
  return {
    hello: 'world',
  }
})

// Rotas de autenticação (públicas)
router.group(() => {
  router.post('/register', '#controllers/auth_controller.register')
  router.post('/login', '#controllers/auth_controller.login')
  // Rotas protegidas de autenticação
  router.post('/logout', '#controllers/auth_controller.logout').use(middleware.auth())
  router.get('/me', '#controllers/auth_controller.me').use(middleware.auth())
}).prefix('/auth')

// Rotas protegidas do sistema bancário
router.group(() => {
  // Users
  router.resource('users', '#controllers/users_controller')
  
  // Contas
  router.resource('contas', '#controllers/contas_controller')
  router.get('contas/:id/saldo', '#controllers/contas_controller.saldo')
  router.get('contas/:id/extrato', '#controllers/contas_controller.extrato')
  
  // Transações
  router.resource('transacoes', '#controllers/transacoes_controller')
  router.post('transacoes/pix', '#controllers/transacoes_controller.pix')
  router.post('transacoes/deposito', '#controllers/transacoes_controller.deposito')
  router.post('transacoes/saque', '#controllers/transacoes_controller.saque')
  
  // Investimentos
  router.resource('investimentos', '#controllers/investimentos_controller')
  router.post('investimentos/:id/resgatar', '#controllers/investimentos_controller.resgatar')
  
}).use(middleware.auth())

// Rota pública boas-vindas
router.get('/hello', async () => {
  return {
    message: 'BANIF - API Bancária',
    version: '1.0.0',
    endpoints: {
      auth: {
        register: 'POST /auth/register',
        login: 'POST /auth/login',
        logout: 'POST /auth/logout (protegida)',
        me: 'GET /auth/me (protegida)',
      },
      banking: {
        users: 'CRUD /users (protegida)',
        contas: 'CRUD /contas (protegida)',
        transacoes: 'CRUD /transacoes (protegida)',
        investimentos: 'CRUD /investimentos (protegida)',
        saldo: 'GET /contas/:id/saldo (protegida)',
        extrato: 'GET /contas/:id/extrato (protegida)',
        pix: 'POST /transacoes/pix (protegida)',
      },
    },
  }
})