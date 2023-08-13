import golangLogo from '@/assets/img/brands/golang.svg'
import javascriptLogo from '@/assets/img/brands/javascript.svg'
import vueJSLogo from '@/assets/img/brands/vuejs.svg'
import typescriptLogo from '@/assets/img/brands/typescript.svg'
import dockerLogo from '@/assets/img/brands/docker.png'
import nodeJSLogo from '@/assets/img/brands/nodejs.svg'
import digitalLogo from '@/assets/img/brands/digital-ocean.svg'
import pHPLogo from '@/assets/img/brands/php.svg'
import mySQLLogo from '@/assets/img/brands/mysql.svg'
import postgresLogo from '@/assets/img/brands/postgres.svg'
import reactLogo from '@/assets/img/brands/react.svg'
import symfonyLogo from '@/assets/img/brands/symfony.svg'

interface Tech {
  name: string
  logo: string
}

export default [
  { name: 'Golang', logo: golangLogo },
  { name: 'Javascript', logo: javascriptLogo },
  { name: 'VueJS', logo: vueJSLogo },
  { name: 'Typescript', logo: typescriptLogo },
  { name: 'Docker', logo: dockerLogo },
  { name: 'NodeJS', logo: nodeJSLogo },
  { name: 'Digital Ocean', logo: digitalLogo },
  { name: 'PHP', logo: pHPLogo },
  { name: 'MySQL', logo: mySQLLogo },
  { name: 'Postgres', logo: postgresLogo },
  { name: 'React', logo: reactLogo },
  { name: 'Symfony', logo: symfonyLogo }
] as Tech[]
