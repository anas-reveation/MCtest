<template>
  <div class="container px-4">
    <NavbarLogo />

    <img class="position-absolute top-0 end-0 oval_img" src="@/assets/images/oval.jpg" alt="oval" />
    <h1 class="my-5 text-center font_size_32">Payment Status</h1>
    <div class="text-center">
      <img src="@/assets/images/failed_icon.svg" alt="failed-icon" />

      <p class="mt-3 font_size_24 subtitle_font_size">Your payment was unsuccessful</p>

      <div class="mt-5d">
        <NuxtLink class="btn btn-primary text-white width_res" to="/category">
          <span class="font_size_18"> Go to category </span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'introLayout',

  head() {
    return {
      title: 'Payment Cancel',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Your transaction was failed. You can try again.',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Payment Cancel - Mockcertified App',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Your transaction was failed. You can try again.',
        },
        {
          name: 'keywords',
          content: 'Payment unsuccessful, Payment Failed, Mockcertified App',
        },

        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://${process.env.DOMAIN}${require('~/assets/images/logo_with_name.svg')}`,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://${process.env.DOMAIN}/${this.$router.currentRoute.name}`,
        },

        // Twitter Meta Tags
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Payment Cancel - Mockcertified App',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Your transaction was failed. You can try again.',
        },

        {
          hid: 'twitter:domain',
          property: 'twitter:domain',
          content: process.env.DOMAIN,
        },
        {
          hid: 'twitter:url',
          property: 'twitter:url',
          content: `https://${process.env.DOMAIN}/${this.$router.currentRoute.name}`,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `https://${process.env.DOMAIN}${require('~/assets/images/logo_with_name.svg')}`,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import '~/assets/css/auth.scss';
@import '~/assets/css/bootstrapBreakpoint.scss';

@include media-breakpoint-up(sm) {
  .width_res {
    width: 400px !important;
  }
}
</style>
