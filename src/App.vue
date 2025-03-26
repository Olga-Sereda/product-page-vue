<template>
  <v-app>
    <v-container>

      <v-row class="mb-4">
        <v-col cols="12" md="4">
          <h1 class="text-h3">Футболка</h1>
          <span class="text-h5"> 1999 ₽</span>
        </v-col>
      </v-row>

      <v-row class="mb-4">
        <v-col cols="12">
          <v-carousel>
            <v-carousel-item v-for="(image, index) in productImages" :key="index" :src="image"></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-tabs v-model="tab" bg-color="transparent" grow>
            <v-tab v-for="item in items" :key="item" :text="item" :value="item"></v-tab>
          </v-tabs>
        </v-col>
      </v-row>

      <v-tabs-window v-model="tab">
        <v-tabs-window-item v-for="item in items" :key="item" :value="item">
          <v-card flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tabs-window-item>
      </v-tabs-window>

      <v-row class="mt-4">
        <v-col cols="12">
          <v-card>
            <v-card-title>Закажите сейчас</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field label="Ваше имя" required></v-text-field>
                <v-text-field label="Телефон" required type="tel"></v-text-field>
                <v-btn color="primary">Отправить</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      productImages: [
        "../public/f1.jpg",
        "../public/f2.jpg",
        "../public/f3.jpg"
      ],
      tab: 'Описание товара',
      items: ['Описание товара', 'Технические характеристики'],
      text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    };
  }
};
</script>

<style>
.v-carousel-item {
  height: 300px;
}

@media (max-width: 600px) {
  .v-row {
    flex-direction: column !important;
  }

  .v-tabs {
    flex-direction: row !important;
  }
}
</style>
