interface Link {
  name: string
  href: string
  icon: string
}

interface Section {
  name: string
  href: string
  icon: string
  links: Link[]
}

export default [
  {
    name: 'About',
    href: '#about',
    icon: 'folder',
    links: [
      {
        name: 'README.md',
        href: '#readme.md',
        icon: 'description',
      },
      {
        name: 'TechStack.dat',
        href: '#techstack.dat',
        icon: 'save',
      },
      {
        name: 'Interests.json',
        href: '#interests.json',
        icon: 'code',
      },
    ],
  },
  {
    name: 'Experience',
    href: '#experience',
    icon: 'folder',
    links: [
      {
        name: 'Worker.exe',
        href: '#worker.exe',
        icon: 'computer',
      },
      {
        name: 'Projects.md',
        href: '#projects.md',
        icon: 'description',
      },
      {
        name: 'Gitlab',
        href: 'https://gitlab.com/codydbentley',
        icon: 'code',
      },
    ],
  },
] as Section[]
