import { fastifyCors } from '@fastify/cors'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import { fastify } from 'fastify'
import {
  type ZodTypeProvider,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { z } from 'zod'
import { env } from './env'
import { accessInviteLinkRoute } from './routes/access-invite-link-route'
import { getRankingRoute } from './routes/get-ranking-route'
import { getSubscriberInvitesClicksRoute } from './routes/get-subscriber-invites-clicks-route'
import { getSubscriberInvitesCountRoute } from './routes/get-subscriber-invites-count-route'
import { getSubscriberRankingPositionRoute } from './routes/get-subscriber-ranking-position'
import { subscribeToEventRoute } from './routes/subscribe-to-event-route'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors, {
  origin: true /*ou para especificar qual o front-end que pode acessar "origin:url, exemplo: origin: 'http://localhost:3000'" */,
})

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Receita Connect',
      version: '0.0.1',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

/*
body (corpo da requisição),
serach params (parametros que vem na rota depois do "?", exemplo: "http://localhost:3333/catalog?tamanho=G"), 
route params (são usados para identificação de recursos, exemplo: GET 'http://localhost:3333/users/1', no caso do exemplo o route é utilizado para pegar o valor 1 )
*/

/*
app.get('/url', () => {
    return "Hello World"
})
*/

//O Comando abaixo foi retirado e colocado na pasta routes/subscribe-to-event-route,
//pois a documentação só interpreta rotas que estejam em outro arquivo
/*
app.post('/subscriptions', {
    //validar o que está vindo do body
    schema: {
        body: z.object({
            name: z.string(),
            email: z.string().email(),
        }),
        response: {
            201: z.object({
                name: z.string(),
                email: z.string()
            })
        }
    }
}, async (request, reply) => {
    const { name, email } = request.body

    //criação da inscrição no banco de dados

    return reply.status(201).send({
        name, email
    })
})
*/

app.register(subscribeToEventRoute)
app.register(accessInviteLinkRoute)
app.register(getSubscriberInvitesClicksRoute)
app.register(getSubscriberInvitesCountRoute)
app.register(getSubscriberRankingPositionRoute)
app.register(getRankingRoute)

app.listen({ host: '0.0.0.0', port: env.PORT || 3333 }).then(() => {
  console.log('HTTP server runing!')
})
