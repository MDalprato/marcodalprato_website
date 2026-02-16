const content = {
  it: {
    nav: {
      about: 'Chi sono',
      portfolio: 'Portfolio',
      blog: 'Blog',
      cv: 'CV',
      contact: 'Contattami'
    },
    hero: {
      eyebrow: 'Sviluppatore web JavaScript',
      title: 'Full Stack Dev.',
      lead:
        'Progetto interfacce moderne in React e Next.js, combinando motion, performance e accessibilita. Lavoro con brand e team digitali per trasformare idee in prodotti scalabili.'
    },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'Attivita recenti e collaborazioni.',
      items: [
        {
          role: 'Full-stack Developer',
          company: 'Arteco Global',
          time: 'gen 2024 - Presente',
          detail:
            'Sviluppatore full-stack specializzato in TypeScript, NestJS e PostgreSQL. Architetture event-driven con RabbitMQ e microservizi. Uso quotidiano di Docker, CI/CD, integrazioni terze parti, OpenShift (RedHat) e AWS. Interesse per strumenti AI per sviluppatori.'
        },
        {
          role: 'Junior Software Developer',
          company: 'Arteco Global',
          time: 'feb 2021 - dic 2023',
          detail: 'Sviluppo software agile, MongoDB e stack web.'
        },
        {
          role: 'Customer Support Manager',
          company: 'Arteco Global',
          time: 'feb 2016 - dic 2020',
          detail: 'Responsabile supporto clienti, helpdesk e problem solving.'
        },
        {
          role: 'Support Technician',
          company: 'Arteco Global',
          time: 'apr 2012 - feb 2016',
          detail: 'Supporto tecnico, problem solving e gestione server Windows.'
        },
        {
          role: 'Tecnico Elettronico (Stage)',
          company: 'IEMCA / IGMI',
          time: 'set 2011',
          detail:
            'Montaggio e collaudo schede logiche per caricatori BOSS 338 e BOSS 552.'
        },
        {
          role: 'Tecnico Elettronico (Stage)',
          company: 'Ponzi Ingressi Infissi',
          time: 'giu 2010',
          detail:
            "Montaggio, collaudo e cablaggio schede per l'automazione delle porte."
        },
        {
          role: 'Tecnico Elettronico (Stage)',
          company: 'Ponzi Ingressi Infissi',
          time: 'giu 2009',
          detail:
            "Stage su montaggio, collaudo e cablaggio schede per l'automazione delle porte."
        }
      ]
    },
    tech: {
      eyebrow: 'Stack',
      title: 'Tecnologie che uso ogni giorno.',
      listLabel: 'Tecnologie principali',
      items: [
        { label: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/b8b2ff' },
        { label: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/b8b2ff' },
        { label: 'React', icon: 'https://cdn.simpleicons.org/react/b8b2ff' },
        { label: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/b8b2ff' },
        { label: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/b8b2ff' },
        { label: 'NestJS', icon: 'https://cdn.simpleicons.org/nestjs/b8b2ff' },
        { label: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/b8b2ff' },
        { label: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/b8b2ff' },
        { label: 'RabbitMQ', icon: 'https://cdn.simpleicons.org/rabbitmq/b8b2ff' },
        { label: 'Docker', icon: 'https://cdn.simpleicons.org/docker/b8b2ff' },
        { label: 'OpenShift', icon: 'https://cdn.simpleicons.org/redhatopenshift/b8b2ff' },
        { label: 'Astro', icon: 'https://cdn.simpleicons.org/astro/b8b2ff' },
        { label: 'Git', icon: 'https://cdn.simpleicons.org/git/b8b2ff' },
        { label: 'GitHub Actions', icon: 'https://cdn.simpleicons.org/githubactions/b8b2ff' },
        { label: 'K8s', icon: 'https://cdn.simpleicons.org/kubernetes/b8b2ff' }

      ]
    },
    blog: {
      eyebrow: 'Blog',
      title: 'Blog',
      lead: 'Piccoli aggiornamenti, note tecniche e idee di lavoro.',
      empty: 'Nessun post pubblicato al momento.'
    },
    cv: {
      eyebrow: 'CV',
      title: 'Scarica il mio curriculum completo.',
      lead:
        'Un riepilogo delle esperienze, competenze tecniche e progetti chiave in un documento pronto da condividere.',
      cta: 'Apri il CV'
    },
    contact: {
      eyebrow: 'Contattami',
      title: 'Parliamo del tuo prossimo progetto.',
      lead:
        'Scrivimi per collaborazioni, consulenze o per rimettere in carreggiata il tuo prodotto web.'
    },
    footer: {
      copyright: 'Tutti i diritti riservati.',
      langLabel: 'Lingua',
      it: 'IT',
      en: 'EN'
    }
  },
  en: {
    nav: {
      about: 'About',
      portfolio: 'Work',
      blog: 'Blog',
      cv: 'CV',
      contact: 'Contact'
    },
    hero: {
      eyebrow: 'JavaScript Web Developer',
      title: 'Full Stack Dev.',
      lead:
        'I design modern React and Next.js experiences, blending motion, performance, and accessibility. I partner with brands and digital teams to turn ideas into scalable products.'
    },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'Recent activity and collaborations.',
      items: [
        {
          role: 'Full-stack Developer',
          company: 'Arteco Global',
          time: 'Jan 2024 - Present',
          detail:
            'Full-stack developer focused on TypeScript, NestJS, and PostgreSQL. Event-driven architectures with RabbitMQ and microservices. Daily use of Docker, CI/CD, third-party integrations, OpenShift (RedHat), and AWS. Interested in AI tools for developers.'
        },
        {
          role: 'Junior Software Developer',
          company: 'Arteco Global',
          time: 'Feb 2021 - Dec 2023',
          detail: 'Agile software development, MongoDB, and web stack work.'
        },
        {
          role: 'Customer Support Manager',
          company: 'Arteco Global',
          time: 'Feb 2016 - Dec 2020',
          detail: 'Led customer support, helpdesk, and problem solving.'
        },
        {
          role: 'Support Technician',
          company: 'Arteco Global',
          time: 'Apr 2012 - Feb 2016',
          detail: 'Technical support, problem solving, and Windows Server management.'
        },
        {
          role: 'Electronic Technician (Internship)',
          company: 'IEMCA / IGMI',
          time: 'Sep 2011',
          detail: 'Assembly and testing of logic boards for BOSS 338 and BOSS 552 feeders.'
        },
        {
          role: 'Electronic Technician (Internship)',
          company: 'Ponzi Ingressi Infissi',
          time: 'Jun 2010',
          detail: 'Assembly, testing, and wiring of boards for door automation systems.'
        },
        {
          role: 'Electronic Technician (Internship)',
          company: 'Ponzi Ingressi Infissi',
          time: 'Jun 2009',
          detail: 'Internship focused on assembly, testing, and wiring of door automation boards.'
        }
      ]
    },
    tech: {
      eyebrow: 'Stack',
      title: 'Technologies I use daily.',
      listLabel: 'Primary technologies',
      items: [
        { label: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/b8b2ff' },
        { label: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/b8b2ff' },
        { label: 'React', icon: 'https://cdn.simpleicons.org/react/b8b2ff' },
        { label: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/b8b2ff' },
        { label: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/b8b2ff' },
        { label: 'NestJS', icon: 'https://cdn.simpleicons.org/nestjs/b8b2ff' },
        { label: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/b8b2ff' },
        { label: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/b8b2ff' },
        { label: 'RabbitMQ', icon: 'https://cdn.simpleicons.org/rabbitmq/b8b2ff' },
        { label: 'Docker', icon: 'https://cdn.simpleicons.org/docker/b8b2ff' },
        { label: 'OpenShift', icon: 'https://cdn.simpleicons.org/redhatopenshift/b8b2ff' },
        { label: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws/b8b2ff' },
        { label: 'Git', icon: 'https://cdn.simpleicons.org/git/b8b2ff' },
        { label: 'GitHub Actions', icon: 'https://cdn.simpleicons.org/githubactions/b8b2ff' }
      ]
    },
    blog: {
      eyebrow: 'Blog',
      title: 'Blog',
      lead: 'Small updates, technical notes, and work ideas.',
      empty: 'No posts published yet.'
    },
    cv: {
      eyebrow: 'CV',
      title: 'Download the full resume.',
      lead:
        'A clear snapshot of experience, technical skills, and key projects in a share-ready document.',
      cta: 'Open CV'
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk about your next project.",
      lead: 'Reach out for collaborations, consulting, or to bring your web product back on track.'
    },
    footer: {
      note: 'Available for new collaborations from 2024.',
      copyright: 'All rights reserved.',
      langLabel: 'Language',
      it: 'IT',
      en: 'EN'
    }
  }
};

export default content;
