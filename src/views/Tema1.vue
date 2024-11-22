<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Siderurgia 



    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5.py-lg-0
        .row.justify-content-center.align-items-center.mb-4.mb-lg-5
          .col-lg-9
            .bg-color-2.p-4
              p.mb-0(data-aos="fade-left") La siderurgia (del griego #[em siderurgy, síderos], "hierro") es la técnica de tratamiento del mineral de hierro para obtener diferentes tipos de este metal o sus aleaciones. El proceso de transformación del mineral de hierro abarca desde su extracción en las minas hasta la fabricación del acero en sus diversas formas o secciones transversales, como láminas, platinas, flejes, vigas o alambrón. 
          .col-lg-3
            figure
              img(src="@/assets/curso/tema1/1.png", alt="").d-none.d-lg-block

        .titulo-tres.mb-4(data-aos="flip-up")
          h4 El alto horno 

        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/tema1/2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El alto horno es un reactor donde ocurren reacciones químicas entre el mineral de hierro y el carbono del coque, en presencia de los componentes químicos de la caliza y del oxígeno. Esta serie de reacciones químicas genera una temperatura superior a los 1530 °C, lo que da como resultado la producción de gases del alto horno, escoria y arrabio. 
      
        Separador

        .titulo-segundo.color-acento-contenido(data-aos='fade-right')#t_1_1
          h2 1.1 Materia prima del alto horno 

    .row.justify-content-center.align-items-start.mb-4.mb-lg-5
      .col-lg-9
        p.mb-0 La materia prima utilizada en el alto horno es fundamental para la producción de hierro. Se compone principalmente de mineral de hierro, coque y piedra caliza. El mineral de hierro proporciona el hierro necesario, mientras que el coque, un tipo de carbón procesado, actúa como combustible y agente reductor, eliminando el oxígeno del mineral. 
      .col-lg-3
        figure
          img(src="@/assets/curso/tema1/3.png", alt="").d-none.d-lg-block


    .titulo-tres.mb-4(data-aos="flip-up")
      h4 Mineral de hierro 

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-3.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Después del aluminio, el hierro es el elemento metálico más abundante en la superficie terrestre. Las especies minerales que contienen hierro son numerosas, y es posible encontrarlo en muchos materiales ferrosos, como arcillas, sales y arenas. 


    p.mb-5(data-aos="fade-left") En mayor o menor proporción, está presente en prácticamente todas las rocas. Sin embargo, los minerales de hierro más comunes son los óxidos, sulfuros, carbonatos y silicatos.  

    .row.justify-content-center.align-items-center
      .col-lg-10
        .bg-color-4.mb-5
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src="@/assets/curso/tema1/5.png", alt="")
            .col-lg
              .p-4.p-lg-0
                p.mb-0 La magnetita y la hematita son óxidos de hierro, mientras que la limonita es un hidróxido. La siderita, un carbonato, tiene menor relevancia como material de partida en la fabricación del hierro.

    p.mb-5(data-aos="fade-left") El mineral de hierro es extraído de las minas, clasificado, triturado y concentrado en pellets, que son la fuente de hierro que se alimenta en el alto horno. 

    .tarjeta--container.row.mb-lg-5.mb-4
      .col-md.tarjeta.color-primario.p-5.brounded-only-xs.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/7.png', alt='').mx-auto.mb-4
        .row.justify-content-center.align-items-end.mb-4
          .col-auto
            img(src='@/assets/curso/tema1/6.svg', alt='', style="width: 61px")
          .col
            .bg-color-secundario.p-3.py-2.d-inline-block
              h5.mb-0.text-color-black Coque 
        p.text-white El coque es el producto del horno coquizador, que genera un sólido por la carbonización a alta temperatura del carbón mineral, generalmente con la adición de otros minerales en ausencia de oxígeno. Este proceso produce un combustible llamado coque metalúrgico, adecuado para su uso en el alto horno

      .col-md.tarjeta.bg-color-5.p-5.brounded-only-xs 
        figure
          img(src='@/assets/curso/tema1/8.png', alt='').mx-auto.mb-4
        .row.justify-content-center.align-items-end.mb-4
          .col-auto
            img(src='@/assets/curso/tema1/6.svg', alt='', style="width: 61px")
          .col
            .bg-color-secundario.p-3.py-2.d-inline-block
              h5.mb-0.text-color-black Caliza 
        p La piedra caliza es la forma sólida del mineral de carbonato de calcio, utilizada como parte de la carga del alto horno. Su función principal es capturar las impurezas del hierro fundido, actuando como fundente, lo que significa que fluye como un líquido. Esto permite que las impurezas se fundan a baja temperatura, formando una escoria que, al ser menos densa que el arrabio, flota sobre el metal fundido y posteriormente se elimina.

    Separador

    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5.pt-0.pb-4.pb-lg-5
        .titulo-segundo.color-acento-contenido(data-aos='fade-right')#t_1_2
          h2 1.2 Subproductos del alto horno 

        p.mb-5(data-aos="fade-left") El alto horno produce subproductos como la escoria, usada en cemento y construcción; el gas de alto horno, aprovechado como energía, y el polvo, que se recicla por sus elementos valiosos. 

        .titulo-tres.mb-4(data-aos="flip-up")
          h4 Arrabio 

        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/tema1/9.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La mezcla de la carga se funde a una temperatura de 1650 °C mediante la inyección de aire precalentado a aproximadamente 1100 °C, que se introduce en el horno a través de toberas. Durante este proceso, ocurren diversas reacciones, siendo la principal la del oxígeno con el carbono, que produce monóxido de carbono. Este, a su vez, reacciona con el óxido de hierro, reduciéndolo a hierro.

        p.mb-5(data-aos="fade-left") El precalentamiento del aire es un paso fundamental en el proceso, ya que la combustión del coque no genera temperaturas lo suficientemente altas para llevar a cabo las reacciones químicas necesarias. Durante el proceso, el metal fundido se acumula en la parte inferior del alto horno, mientras que las impurezas flotan hacia la parte superior, formando una capa de escoria. 

        .row.justify-content-center.align-items-center
          .col-lg-8
            .bg-color-6.mb-3
              .row.justify-content-start.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/10.png", alt="")
                .col
                  .p-4.p-lg-0
                    p.mb-0 Cada 4 a 5 horas, el metal fundido se vacía en cucharas o carros torpedo, que tienen una capacidad de 160 toneladas de hierro cada uno.
            .bg-color-4.mb-3
              .row.justify-content-start.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/11.png", alt="")
                .col
                  .p-4.p-lg-0
                    p.mb-0 En esta etapa, el metal fundido se denomina arrabio, y su composición típica incluye aproximadamente un 4 % de carbono, 1.5 % de silicio, 1 % de manganeso, 0.04 % de azufre y 0.4 % de fósforo, siendo el resto hierro.

    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5.pt-0.pb-4.pb-lg-5

        .titulo-tres.mb-4(data-aos="flip-up")
          h4 Escoria  

        .bloque-texto-g.bloque-texto-g--inverso.bg-color-3.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/12.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En el alto horno, las escorias se encargan de disolver los elementos perjudiciales presentes en el baño metálico. Los óxidos, silicatos o sulfuros que forman parte del mineral son eliminados con la ayuda del fundente. 

        p.mb-5(data-aos="fade-left") Entre los residuos generados en plantas siderúrgicas, la escoria representa un porcentaje significativo. Dado su impacto ambiental, se han desarrollado diversas técnicas para su reutilización. Dependiendo de su composición química, puede emplearse en la fabricación de abonos para la agricultura y como aditivo en la fabricación de cemento. 


        .titulo-tres.mb-4(data-aos="flip-up").mb-4
          h4 Gases del alto horno 

        p.mb-5(data-aos="fade-left") El gas de alto horno es el subproducto de las reacciones químicas que se producen entre la caliza, el mineral de hierro y el carbón coque dentro del reactor. Este gas: 

        .row.justify-content-center.align-items-stretch
          .col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.bg-color-5.p-4.h-100
              figure
                img(src="@/assets/curso/tema1/13.svg", alt="", style="width: 90px").mx-auto.mb-4
              p.mb-4.text-center Posee un poder calorífico derivado de su contenido de monóxido de carbono.
          .col-lg-4.mb-4.mb-lg-0
            .tarjeta--boton.bg-color-5.p-4.h-100.brounded
              figure
                img(src="@/assets/curso/tema1/14.svg", alt="", style="width: 90px").mx-auto.mb-4
              p.mb-4.text-center Contiene aproximadamente un 60 % de nitrógeno y ciertos niveles de azufre, cuya proporción depende del tipo de mineral utilizado.

    p.mb-5(data-aos="fade-left") Durante el funcionamiento de los hornos, se generan grandes volúmenes de este gas. La mayor parte se emplea para: 

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-3
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg-color-4.p-4.h-100
          figure
            img(src="@/assets/curso/tema1/15.svg", alt="", style="width: 90px").mx-auto.mb-4
          p.mb-4.text-center Calentar el aire de las toberas del alto horno.

      .col-lg-4
        .tarjeta--boton.bg-color-4.p-4.h-100.brounded
          figure
            img(src="@/assets/curso/tema1/16.svg", alt="", style="width: 90px").mx-auto.mb-4
          p.mb-4.text-center Generar energía en las plantas siderúrgicas, gracias a su poder calorífico.
    
    Separador

    .bg-full-width.bg-fondo-2
      .px-4.px-lg-5.pt-0.pb-4.pb-lg-5
        .titulo-segundo.color-acento-contenido(data-aos='fade-right')#t_1_3
          h2 1.3 Horno convertidor 

        p.mb-5(data-aos="fade-left") El horno convertidor, conocido también como oxiconvertidor, es un reactor utilizado para elevar la temperatura de la materia prima mediante oxígeno. Su principal función es controlar el porcentaje de carbono en los metales ferrosos, mediante la oxidación de carbono, magnesio y silicio. 

        .row.justify-content-center.align-items-center
          .col-lg-10

            .bg-color-8.mb-3
              .row.justify-content-start.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/17.png", alt="")
                .col
                  .p-4.p-lg-0
                    p.mb-0 El oxiconvertidor transforma la materia prima, como la chatarra, el arrabio y el hierro esponja, en acero con composiciones específicas, de acuerdo con normas como ASTM, JIS, AISI o SAE.

        Separador

        .titulo-segundo.color-acento-contenido(data-aos='fade-right')#t_1_4
          h2 1.4 Horno eléctrico 

        p.mb-5(data-aos="fade-left") Las acerías de horno eléctrico se utilizaban para la fabricación de aceros especiales. Sin embargo, en la actualidad, gracias a la alta eficiencia de este proceso basado en el reciclaje masivo de chatarra, es posible producir prácticamente cualquier tipo de acero.  

        .row.justify-content-center.align-items-center
          .col-lg-8
            .bg-color-4.mb-3
              .row.justify-content-start.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/18.png", alt="")
                .col.lg
                  .p-4.p-lg-0
                    p.mb-0 El control de calidad de la chatarra es fundamental en este proceso. Se lleva a cabo una selección rigurosa de la chatarra, a la que se le añaden ferroaleaciones y fundentes, todo dentro de un reactor.

    p.mb-5(data-aos="fade-left") En esta mezcla, se sumergen tres electrodos de grafito, a través de los cuales se hacen pasar corrientes eléctricas que generan arcos eléctricos de alta potencia, fundiendo la carga. Posteriormente, se inyectan chorros de aire, como en el oxiconvertidor. Al final del proceso, se obtienen aceros con una composición química definida. 

    .titulo-tres.mb-4(data-aos="flip-up")
      h4 Acero

    .bloque-texto-g.bloque-texto-g--inverso.bg-color-3.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/19.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El acero líquido, proveniente del oxiconvertidor o del horno eléctrico, se vierte en el horno cuchara para homogeneizar la carga y eliminar la escoria. Durante este proceso, se realiza el afino y el ajuste definitivo de la composición química del acero, tomando tantas muestras como sean necesarias hasta alcanzar la composición química deseada. 

    .bg-color-2.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src="@/assets/curso/tema1/20.png", alt="")  
        .col-lg
          .p-4.pe-lg-5.py-lg-0
            p.mb-0 Los dos elementos de la composición del acero que resultan más difíciles de controlar mediante #[strong espectrometría de emisión], pero que son fundamentales para definir su calidad, son el #[strong carbono y el azufre]. Por esta razón, se realizan análisis adicionales con un aparato de combustión LECO. 

    p.mb-5(data-aos="fade-left") El último paso consiste en transformar el acero líquido en semiproductos. Para ello, el acero se vierte en un #[em tundish,] que alimenta la colada continua, donde se lleva a cabo la solidificación del acero y la obtención de semiproductos, como las palanquillas. 

    .titulo-tres.mb-4(data-aos="flip-up")
      h4 Laminación 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/tema1/21.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La etapa final del proceso de producción del acero es la laminación en caliente, en la cual las palanquillas se transforman en los diferentes productos de acero largo que demanda el mercado nacional e internacional. 
    
    p.mb-5(data-aos="fade-left") La laminación cuenta con dos líneas de fabricación: una para la producción de barras de construcción, perfiles, ángulos, #[em tees,] barras cuadradas, redondas, lisas, y barras helicoidales; y otra para la fabricación de alambrones destinados a trefilería, electrodos y construcción. 

    .bg-color-8.p-5
      .row.justify-content-center.align-items-center
        .col-lg
          p.mb-0 El proceso de laminación comienza con el calentamiento de la palanquilla en el horno de recalentamiento a una temperatura de trabajo que varía entre 1,100 °C y 1,200 °C. Luego, pasa al tren de laminación, donde la palanquilla se estira a través de cajas de desbaste y rodillos, formando barras y perfiles de acuerdo con el tipo de rodillo acabador utilizado y el largo deseado.
        .col-lg-auto
          figure
            img(src="@/assets/curso/tema1/22.png", alt="").mx-auto.mt-4.mt-lg-0

        

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
