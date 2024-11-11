<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.  

    .row.justify-content-center
      .col-lg-11.mb-5
        figure.bg-color-sintesis.p-5.brounded
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis presenta el proceso siderúrgico, comenzando con la extracción de hierro, que es triturado y sinterizado antes de ingresar al alto horno. Este utiliza carbón coque como combustible y caliza como fundente, produciendo arrabio y gases de alto horno. El arrabio se carga en el horno convertidor junto con oxígeno y fundentes para obtener acero, mientras que la escoria es un subproducto. La chatarra también se introduce en el proceso a través de un horno eléctrico para ajustar la aleación. El acero final se lamina para producir perfiles estructurales, láminas, platinas y alambres.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
