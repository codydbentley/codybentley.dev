interface Tech {
  name: string
  logo: string
}

export default [
  { name: 'Golang', logo: require('@/assets/img/brands/golang.svg') },
  { name: 'Javascript', logo: require('@/assets/img/brands/javascript.svg') },
  { name: 'VueJS', logo: require('@/assets/img/brands/vuejs.svg') },
  { name: 'Typescript', logo: require('@/assets/img/brands/typescript.svg') },
  { name: 'Docker', logo: require('@/assets/img/brands/docker.png') },
  { name: 'NodeJS', logo: require('@/assets/img/brands/nodejs.svg') },
  { name: 'Digital Ocean', logo: require('@/assets/img/brands/digital-ocean.svg') },
  { name: 'PHP', logo: require('@/assets/img/brands/php.svg') },
  { name: 'MySQL', logo: require('@/assets/img/brands/mysql.svg') },
  { name: 'Postgres', logo: require('@/assets/img/brands/postgres.svg') },
  { name: 'React', logo: require('@/assets/img/brands/react.svg') },
  { name: 'Symfony', logo: require('@/assets/img/brands/symfony.svg') },
] as Tech[]
