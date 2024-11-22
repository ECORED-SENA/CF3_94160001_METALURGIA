export default {
  global: {
    componenteFormativo: 'El proceso de fabricación del acero',
    descripcionCurso:
      'El componente formativo aborda el proceso de fabricación del acero, desde la extracción de materias primas como el mineral de hierro, el coque y la caliza, hasta la obtención de productos finales mediante técnicas como el alto horno, el horno convertidor y el horno eléctrico. También se explican los subproductos, el reciclaje de chatarra, y las normativas de calidad que regulan la producción del acero.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal3.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Siderurgia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Materia prima del alto horno',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Subproductos del alto horno',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Horno convertidor',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Horno eléctrico',
            hash: 't_1_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Siderurgia',
      referencia:
        'INITUBE. (2023). Qué es la siderurgia y cómo se ha transformado a lo largo del tiempo. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=NO6BXna7DIA',
    },
    {
      tema: 'Materia prima del alto horno',
      referencia:
        'Documentales TV. (2014). Funcionamiento Alto Horno. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=WerjnkrTqI0',
    },
    {
      tema: 'Subproductos del alto horno',
      referencia:
        'DW Español. (2014). El mayor alto horno de Europa - un coloso a punto para el futuro | Hecho en Alemania. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vD9--otWQzQ',
    },
    {
      tema: 'Horno convertidor',
      referencia:
        'Proyecto materiales. (2016). Horno convertidor. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=IMnPEVFlc4Q',
    },
    {
      tema: 'Horno eléctrico',
      referencia:
        'Tr Precision Machining Asturias. (2023). Horno Fundición Metales Digital 1150 °C - Un complemento ideal para tu taller. [Archivo de video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=v1xRBdJNY8U',
    },
  ],
  glosario: [
    {
      termino: 'Arrabio',
      significado:
        'Producto líquido de la primera fusión del hierro en el alto horno.',
    },
    {
      termino: 'Caliza',
      significado:
        'Mineral sólido de carbonato de calcio que se usa como fundente en el alto horno para eliminar impurezas del hierro.',
    },
    {
      termino: 'Colada continua',
      significado:
        'Proceso que da forma a un chorro de acero líquido al entrar en una cavidad formada en un molde para solidificar el líquido de forma continua.',
    },
    {
      termino: 'Coque',
      significado:
        'Combustible sólido obtenido por la carbonización a alta temperatura del carbón mineral, usado en el alto horno.',
    },
    {
      termino: 'Escoria',
      significado:
        'Compuesto de óxidos que flotan sobre el crisol del alto horno y son eliminados durante el proceso de fabricación del acero.',
    },
    {
      termino: 'Pellets',
      significado:
        'Bolitas de concentrado de hierro o mineral de hierro que sirven como fuente de hierro en el alto horno.',
    },
    {
      termino: 'Reactor',
      significado:
        'Equipo donde ocurren reacciones químicas exotérmicas o endotérmicas bajo condiciones de presión y temperatura controladas.',
    },
    {
      termino: 'Reciclaje',
      significado:
        'Proceso mediante el cual se refunde la chatarra de acero en hornos para generar nuevos productos. el acero es infinitamente reciclable.',
    },
    {
      termino: 'Siderurgia',
      significado:
        'Técnica de tratamiento del mineral de hierro para obtener diferentes tipos de hierro y sus aleaciones, como el acero.',
    },
    {
      termino: '<em>Tundish</em>',
      significado:
        'Dispositivo de material refractario que actúa como distribuidor del acero líquido en el proceso de colada continua.',
    },
  ],
  referencias: [
    {
      referencia: 'Aceros Arequipa. (2016, abril 15). Procesos de laminación.',
      link: 'http://www.acerosarequipa.com/proceso-de-laminacion.html',
    },
    {
      referencia:
        'Askeland, D. (2004). Ciencia e ingeniería de los materiales (4ª ed.). Thomson.',
      link: '',
    },
    {
      referencia: 'Asometal. (2009, abril 12). Siderurgia.',
    },
    {
      referencia:
        'Neely, J. E. (1994). Practical metallurgy and materials of industry (4th ed.). Prentice-Hall, Inc.',
      link: '',
    },
    {
      referencia:
        'Pellini, C. (2016, abril 13). Funcionamiento de un alto horno: Proceso químico interno del arrabio.',
      link: 'http://historiaybiografias.com/alto_horno/',
    },
    {
      referencia:
        'Kalpakjian, S., Schmid, S. R., Coaut, G., & Sánchez García, G. (2002). Manufactura, ingeniería y tecnología (4ª ed.). Pearson Educación.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Hivo Alfonso Patarroyo Pulido ',
          cargo: 'Experto temático',
          centro: 'Centro de Materiales y Ensayos - Regional Distrito Capital',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
