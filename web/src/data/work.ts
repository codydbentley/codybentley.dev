interface Tech {
  name: string
  type: string
}

interface Project {
  title: string
  description: string
  stack: Tech[]
}

interface Job {
  name: string
  url: string
  projects: Project[]
}

export default [
  {
    name: 'RedShift Development',
    url: 'https://redshiftdev.com',
    projects: [
      {
        title: 'POS Client Shutdown',
        description:
          'We built a desktop application for a client who needed to be able to shut down a POS client ' +
          'remotely. This project required a `worker` service that would run on each POS terminal station and an admin ' +
          'client that could initiate a `shutdown` command to the workers, which would the terminate the POS process.',
        stack: [
          {
            name: 'Golang',
            type: 'Language',
          },
          {
            name: 'TCP Sockets',
            type: 'Protocol',
          },
          {
            name: 'Fyne.io',
            type: 'UI Framework',
          },
        ],
      },
      {
        title: 'Medical Patient Records Tool',
        description:
          'This project is a Windows desktop application for a client in the medical field who organizes ' +
          "patient information for doctor's office visits. The client needed to quickly pull patient " +
          'records and documents from a secure web server and organize them locally. The interface includes a table ' +
          'view of all patient records for a given state. It includes a `packet` creator, ' +
          'where PDFs can be edited and pages selected to generate an informational PDF packet.',
        stack: [
          {
            name: 'Golang',
            type: 'Language',
          },
          {
            name: 'Javascript',
            type: 'Language',
          },
          {
            name: 'SQLite',
            type: 'Database',
          },
          {
            name: 'Electron',
            type: 'UI Framework',
          },
          {
            name: 'RSAP',
            type: 'Msg Protocol',
          },
        ],
      },
      {
        title: 'Customer Rewards Email Sync',
        description:
          'A client needed a way to sync customers from their POS system to a third party CRM and email service. ' +
          'This required a local service which would periodically compare customers in the CRM to those in the POS database ' +
          'and sync any new or changed customers with the CRM using a publicly available API.',
        stack: [
          {
            name: 'Golang',
            type: 'Language',
          },
          {
            name: 'JSON API',
            type: 'Communication',
          },
          {
            name: 'CSV',
            type: 'FORMAT',
          },
        ],
      },
      {
        title: 'React Based Corporate Site',
        description:
          'A corporate site redesign that is built in ReactJS. This redesign utilized a previous framework to incorporate ' +
          'new styling and improved architecture. Designs were provided by a designer while I coded the design to spec.',
        stack: [
          {
            name: 'Javascript',
            type: 'Language',
          },
          {
            name: 'ReactJS',
            type: 'Library',
          },
          {
            name: 'GatsbyJS',
            type: 'Framework',
          },
        ],
      },
      {
        title: 'Application Messaging Protocol',
        description:
          'At RedShift, we worked on several Windows applications that were built in Electron. This allowed us to create ' +
          'user interfaces using web technologies we were already familiar with, while building logic services to do ' +
          'the heavy lifting. We needed a means to send messages between UI ' +
          "and service over IPC, so I designed a simple protocol based on JSON-RPC and inspired by Microsoft's " +
          'Language Server Protocol.',
        stack: [
          {
            name: 'Golang',
            type: 'Language',
          },
          {
            name: 'Typescript',
            type: 'Language',
          },
          {
            name: 'Win-IO',
            type: 'Library',
          },
          {
            name: 'Electron',
            type: 'Framework',
          },
        ],
      },
    ],
  },
  {
    name: 'Zing Studios',
    url: 'https://zingstudios.com',
    projects: [
      {
        title: 'Fleet Delivery Notifications',
        description:
          'A client needed an API integration with a third party that tracks fleet vehicles to send notifications about ' +
          'deliveries based on fleet vehicles entering designated delivery zones. The client system was coded in PHP, ' +
          'but the third party location API only offered a C# library. This library was ported to Golang for performance ' +
          'and integrated as a service to the main PHP application.',
        stack: [
          {
            name: 'Golang',
            type: 'Language',
          },
          {
            name: 'PHP',
            type: 'Language',
          },
          {
            name: 'C#',
            type: 'Language',
          },
          {
            name: 'Symfony',
            type: 'Framework',
          },
          {
            name: 'GeoTab',
            type: 'API Service',
          },
        ],
      },
      {
        title: 'Synced Email Communication Dashboard',
        description:
          'A client who sent out a large volume of email needed a way to modernize communication with its user base ' +
          'and cut back the amount of email it would generate. The solution was to build a communication dashboard ' +
          'where a user could see important notifications, with the option to turn emails on or off. This also used ' +
          'SendGrid webhooks to mark opened emails as read inside the communication dashboard.',
        stack: [
          {
            name: 'PHP',
            type: 'Language',
          },
          {
            name: 'Javascript',
            type: 'Language',
          },
          {
            name: 'MySQL',
            type: 'Database',
          },
          {
            name: 'jQuery',
            type: 'Library',
          },
          {
            name: 'Symfony',
            type: 'Framework',
          },
          {
            name: 'SendGrid',
            type: 'API Service',
          },
        ],
      },
      {
        title: 'Online Meal Ordering System',
        description:
          'This client had a meal ordering and delivery service that had been managed through MS Access for years and ' +
          "was looking to update it's backend. Part of the system was already coded in C#, but it was unfinished. We " +
          'Went through all the parts of the system and began coding the backend in PHP on Symfony, utilizing ' +
          'VueJS for all the frontend pieces.',
        stack: [
          {
            name: 'PHP',
            type: 'Language',
          },
          {
            name: 'Javascript',
            type: 'Language',
          },
          {
            name: 'C#',
            type: 'Language',
          },
          {
            name: 'MSSQL',
            type: 'Database',
          },
          {
            name: 'Symfony',
            type: 'Framework',
          },
          {
            name: 'VueJS',
            type: 'Framework',
          },
        ],
      },
      {
        title: 'Corporate WP to React Site',
        description:
          'A company with an existing WordPress site wanted to completely rebuild their site using ReactJS and came to ' +
          'us with designs and desired technologies in mind. I worked closely with the designer to build the website ' +
          'to their design spec, using the technologies they required.',
        stack: [
          {
            name: 'Javascript',
            type: 'Language',
          },
          {
            name: 'ReactJS',
            type: 'Library',
          },
          {
            name: 'GatsbyJS',
            type: 'Framework',
          },
        ],
      },
      {
        title: 'Online PDF Editor',
        description:
          'A colleague designed a very impressive web-based PDF editor for a company that needed to edit and compile ' +
          'PDF documents to send to their clients. I was tasked with adding features and various minor improvements ' +
          "alongside my colleague's work. I added a stamp tool to the editor as well as some design and visual " +
          'updates to the user interface.',
        stack: [
          {
            name: 'PHP',
            type: 'Language',
          },
          {
            name: 'Javascript',
            type: 'Language',
          },
          {
            name: 'MySQL',
            type: 'Database',
          },
          {
            name: 'VueJS',
            type: 'Framework',
          },
          {
            name: 'JSON API',
            type: 'Communication',
          },
        ],
      },
    ],
  },
  {
    name: 'UNITI Global',
    url: 'https://unitiglobal.app',
    projects: [
      {
        title: 'Inventory And Order Management',
        description:
          'I came into this project after a significant portion had already been completed. I was tasked with adding ' +
          'new features and improving the performance of existing ones. I added visibility permissions to the existing ' +
          'inventory system and worked on improvements in database calls, significantly reducing page load times.',
        stack: [
          {
            name: 'PHP',
            type: 'Language',
          },
          {
            name: 'Javascript',
            type: 'Language',
          },
          {
            name: 'MySQL',
            type: 'Database',
          },
          {
            name: 'jQuery',
            type: 'Library',
          },
        ],
      },
      {
        title: 'Realtime Marketplace',
        description:
          'UNITI needed a place for clients to go in and initiate orders on their own, but due to the serialised ' +
          'nature of the products, special care needed to be taken to minimize customer inconvenience. Web sockets ' +
          'were used to handle events so that a customer with a product in their cart would be notified if it ' +
          'became unavailable before checkout.',
        stack: [
          {
            name: 'PHP',
            type: 'Language',
          },
          {
            name: 'Javascript',
            type: 'Language',
          },
          {
            name: 'MySQL',
            type: 'Database',
          },
          {
            name: 'Redis',
            type: 'Memory Store',
          },
          {
            name: 'VueJS',
            type: 'Framework',
          },
        ],
      },
      {
        title: 'Complete System Rewrite',
        description:
          'The original project was scrapped in favor a a rewrite. I designed a completely new architecture with MVC ' +
          'design pattern, including interface contracts for all surfaces. The backend switched from PHP to Golang, ' +
          'and the frontend switched from jQuery to VueJS. The MySQL database was replaced with Postgres and ' +
          'authentication received a complete overhaul, utilizing JWT for stateless sessions.',
        stack: [
          {
            name: 'Golang',
            type: 'Language',
          },
          {
            name: 'Javascript',
            type: 'Language',
          },
          {
            name: 'Postgres',
            type: 'Database',
          },
          {
            name: 'VueJS',
            type: 'Framework',
          },
          {
            name: 'Gin',
            type: 'Framework',
          },
          {
            name: 'Gorm',
            type: 'Library',
          },
        ],
      },
    ],
  },
] as Job[]
