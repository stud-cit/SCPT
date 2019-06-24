# SCPT
This Web-Application for SCPTu is a package of two separate applications (server and client modules) built on Nest and Nuxt frameworks respectively. 
Complete technology stack:
 - **Back-End**:
   + Nest
   + TypeORM ( MySQL )
   + JWT
   + Mailer ( HBS )
   + Swagger
 - **Front-End**:
   + Nuxt ( TypeScript )
   + Vuetify
   + Axios
   + MarkDown

## Library Documentation :books:
**Important to read**: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) |

### Back-end:
- Nest: [Docs](https://docs.nestjs.com/)  | [Samples](https://github.com/nestjs/nest/sample)
- TypeORM: [Docs](https://typeorm.io/) | [Samples](https://github.com/typeorm/typeorm/tree/master/sample)  | [Nest sample](https://docs.nestjs.com/techniques/database)
- JWT: [Docs](https://jwt.io/introduction/) | [Nest sample](https://docs.nestjs.com/techniques/authentication)
- Swagger: [Docs](https://swagger.io/specification/) | [Nest sample](https://docs.nestjs.com/v5/recipes/swagger)  

### Front-end:
 -  Nuxt: [API](https://nuxtjs.org/api) | [Guide](https://nuxtjs.org/guide) | [Examples](https://nuxtjs.org/examples)
 - Axios: [API](https://axios.nuxtjs.org/) | [Samples](https://github.com/axios/axios/tree/master/examples)
- Vuetify: [API](https://vuetifyjs.com/ru/components/api-explorer) | [Theme](https://vuetifyjs.com/ru/themes/premium) | [Spacing](https://vuetifyjs.com/ru/framework/spacing) | [Layouts](https://vuetifyjs.com/ru/framework/pre-made-layouts)
- Font: [Material Design Icons](https://materialdesignicons.com/tag/community) | [Vuetify Icons](https://vuetifyjs.com/ru/framework/icons)

## Build Setup :coffee:
YRequired for startup and development:
 - Node.js &ge; 10.15.1
 - [Vue-cli](https://cli.vuejs.org/guide/installation.html)
 - [Nest-cli](https://docs.nestjs.com/cli/overview)
 - [TypeORM-cli](https://typeorm.io/#/using-cli/installing-cli) && [TMG](https://www.npmjs.com/package/typeorm-model-generator)
 - Install dependencies

##### Client app options
``` bash
# The client app works with hot reload at localhost:{env port}
$ npm run start:dev

# Build for production and launch server
$ npm run build
$ npm start

# Generate static project
$ npm run start:prod
```
##### Server app options
``` bash
#
$ npm run database:up

# The server app works with hot reload and formatting,
# as well as automated testing.
$ npm run start:dev

# Run [ unit | e2e | coverage ] tests
$ npm run test
$ npm run test:e2e
$ npm run test:cov

# Build for production and launch server
$ npm run prestart:prod
$ npm start:prod

# E2E Testing
$ npm run test:e2e
```
##### Other options
``` bash
# Install dependencies
$ npm i

# CLI helper
$ [ nest | typeorm-model-generator | nuxt | vue ] -h
```
