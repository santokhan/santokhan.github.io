# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Have to install [Nuxt Fontawesome](https://www.npmjs.com/package/@nuxtjs/fontawesome)

```bash
npm i @nuxtjs/fontawesome -D
```

```javascript
 // nuxt.config.js
  buildModules: [
    ['@nuxtjs/fontawesome', {
      component: 'fa',
      suffix: true,
      proIcons: { // if you have bought the Pro packages
        // list the icons you want to add, not listed icons will be tree-shaked
        solid: [
          'faHome',
          'faHeart'
        ],
        // include all icons. But dont do this.
        regular: true
      }
    }]
  ]
```

```jsx
</template>
  <div>
    <font-awesome-icon :icon="['fas', 'adjust']"  />
    <font-awesome-icon icon="dollar-sign"  style="font-size: 30px"/>
    <font-awesome-icon icon="cog"/>

    <font-awesome-layers class="fa-4x">
      <font-awesome-icon icon="circle"/>
      <font-awesome-icon icon="check" transform="shrink-6" :style="{ color: 'white' }"/>
    </font-awesome-layers>

    <font-awesome-layers full-width class="fa-4x">
      <font-awesome-icon icon="calendar"/>
      <font-awesome-layers-text transform="shrink-8 down-3" value="27" class="fa-inverse" />
    </font-awesome-layers>
  </div>
</template>
```

## Use icons from below libraries

- [Fontawesome](https://fontawesome.com/icons)
- [Iconfinder](https://www.iconfinder.com/search/icons)
- [Heroicon](https://heroicons.com/)
- [Iconsax-react](https://iconsax-react.pages.dev/)
- [Flowbite icons](https://flowbite.com/icons/)
- [NuxtIcon](https://nuxt.com/modules/icon)

[npm install @heroicons/vue](https://github.com/tailwindlabs/heroicons)

## [Tailwind Nuxt library](http://localhost:3001/_tailwind/)

## For now, we will add all link as external. That means every link will be different domain of Netlify or Vercel

```html
<a class="" href="https://kraal-view.netlify.app">Kraal</a>
```
