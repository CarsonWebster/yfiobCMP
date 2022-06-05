<template>
  <div>
    <header>
      <slot name="header">
        <Header />
      </slot>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <slot name="footer">
        <Footer />
      </slot>
    </footer>
  </div>
</template>