<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    

    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5.pt-0.pb-4.pb-lg-5
        p.mb-4(data-aos="fade-right") El acero es la columna vertebral del mundo moderno. De hecho, uno de los factores por los cuales se mide el crecimiento de los países es el consumo de acero por habitante. Este indicador refleja la magnitud de la infraestructura construida, como puentes, carreteras, aeropuertos, plantas generadoras de energía, refinerías de petróleo y gas, así como de viviendas.  
        .row.mb-0.mb-lg-5
          .col-lg-9
            .bg-color-1.p-4.mb-4
              p.mb-0(data-aos="fade-left") Cada una de estas obras requiere grandes cantidades de acero, que se puede fabricar a partir de minerales extraídos en minas o mediante el reciclaje de chatarra, siendo esta última práctica más económica en comparación con la fabricación a partir del mineral de hierro.
            p.mb-4(data-aos="fade-left") El proceso de fabricación del acero consiste en una serie de transformaciones que sufren las materias primas, como el mineral de hierro, la caliza y el coque, a través de reacciones químicas exotérmicas. Estas reacciones permiten fundir las materias primas hasta obtener el arrabio, que es una aleación de hierro con un alto contenido de carbono y otros elementos químicos.  
          .col-lg-3.d-none.d-lg-block
            figure
              img(src="@/assets/curso/intro/1.png", alt="")

        .row.justify-content-center.align-items-center.mb-0.mb-lg-5
          .col-lg-3
            figure
              img(src="@/assets/curso/intro/2.png", alt="").mx-auto.mb-4.mb-lg-0
          .col-lg-9
            .bg-color-2.p-4
              p.mb-0(data-aos="fade-left") Estos elementos se eliminan o reducen en hornos especiales, donde se añaden ferroaleaciones para ajustar la composición del acero según las especificaciones del cliente, cumpliendo con normas como ASTM. Finalmente, el acero se somete a un proceso llamado colada continua, que, combinado con el proceso de laminación, produce las formas comerciales de acero con los espesores o diámetros deseados por los fabricantes de productos de acero. 
      
</template>
<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
