<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fabricación del acero',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar el proceso de fabricación del acero, incluyendo las materias primas, el funcionamiento de los diferentes hornos, los subproductos generados, y las técnicas utilizadas para la producción y reciclaje de acero.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la principal función de la piedra caliza en el alto horno?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Capturar impurezas del hierro fundido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Actuar como combustible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Servir de fundente para reducir impurezas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Producir gases de alto horno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'El arrabio es:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un subproducto del horno eléctrico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un producto líquido de la primera fusión del hierro.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un tipo de caliza.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un tipo de acero especial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes opciones describe mejor el proceso de colada continua?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un proceso de reciclaje de chatarra.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La extracción del mineral de hierro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El proceso de solidificación del acero líquido para formar semiproductos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La fusión de metales a alta temperatura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de estos elementos no es una materia prima del alto horno?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Coque.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cobre.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mineral de hierro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Caliza.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: 'El horno convertidor se utiliza para:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Controlar el porcentaje de carbono en el acero.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Fundir la caliza.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Extraer mineral de hierro de las minas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizar el proceso de laminación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál de estos elementos es un subproducto del alto horno?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gases del alto horno.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Barras de acero.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Perfiles estructurales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Alambres para trefilería.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'La función principal del horno eléctrico en la siderurgia moderna es:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fabricar acero a partir de chatarra reciclada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Producir caliza.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Extraer mineral de hierro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crear fundentes para el proceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de las siguientes afirmaciones es correcta sobre la escoria?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es el producto principal del horno convertidor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se utiliza para la fabricación de cemento y abonos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Es un subproducto de la laminación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se utiliza para fabricar acero inoxidable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: 'El acero es infinitamente reciclable.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'El gas de alto horno contiene un 60% de oxígeno.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el objetivo principal del proceso de laminación en caliente?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Producir gases del alto horno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fundir mineral de hierro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Transformar palanquillas en productos de acero largo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Extraer impurezas del acero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué elemento se utiliza como fuente de carbono en el alto horno?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Caliza.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Coque.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Escoria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mineral de hierro.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'El horno cuchara se utiliza principalmente para:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Producir acero inoxidable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fundir la caliza.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Homogeneizar la carga y eliminar la escoria.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Extraer el arrabio del alto horno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: 'La magnetita y la hematita son ejemplos de:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hidróxidos de hierro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Óxidos de hierro.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sulfuros de hierro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Carbonatos de hierro.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Cuál de los siguientes no es un subproducto del alto horno?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Placas de acero.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Gases del alto horno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Escoria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Arrabio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
