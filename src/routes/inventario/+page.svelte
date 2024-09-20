<head:script>
    <title>Mi Inventario — Revoluciona tu negocio desde tu celular</title>
    <meta name="title" content="Mi Inventario — Revoluciona tu negocio desde tu celular">
    <meta name="description"
          content="La nueva solución digital diseñada específicamente para consultoras de belleza Mary Kay como tú.">
</head:script>

<script>
    import {onMount} from "svelte";

    let link = 'https://play.google.com/store/apps/details?id=com.soyllamas.inventario';

    onMount(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Redireccionar a Apple App Store para usuarios de iOS
        if (/ipad|iphone|ipod|macintosh/.test(userAgent?.toLowerCase()) && !window.MSStream) {
            link = "https://apps.apple.com/us/app/mi-inventario/id1143869215";
            return;
        }

    });
</script>

<div id="nav" class="fixed h-16 bg-white border-b-2 w-full grid justify-center items-center gap-3 px-6">
    <img src="/inventario/logo.png" alt="" class="aspect-square w-8">
    <p class="font-medium">Mi Inventario</p>
</div>
<div class="mx-auto max-w-lg py-24 pt-16 px-4">
    <div class="h-50vh mx-auto grid justify-center items-center">
        <div>
            <h1 class="text-4xl text-center font-bold mb-4">Revoluciona tu negocio desde tu celular</h1>
            <p class="text-xl text-center">La solución digital diseñada específicamente para consultoras de
                belleza Mary Kay como tú.</p>
        </div>
    </div>
    <img src="/inventario/cover.png" alt="" class="mx-auto w-64 mb-16">
    <p>Hola 👋🏼,</p>
    <p>Conoce <a class="text-rose-500 underline" href="{link}" target="_blank">Mi Inventario</a>, la solución
        digital diseñada
        específicamente para consultoras de belleza Mary Kay como tú.</p>
    <p>¿Administrar tu inventario consume demasiado tiempo y esfuerzo? Nosotros lo entendemos y, por eso, hemos creado
        <a class="text-rose-500 underline" href="{link}" target="_blank">Mi Inventario</a>.</p>
    <ul class="list-disc ml-8 my-6">
        <li><b>Explora el catálogo:</b> Actualizamos el catálogo de productos Mary Kay cada mes.</li>
        <li><b>Actualización en Tiempo Real:</b> Mantén un registro preciso de tus productos, visualiza cuántos
            productos tienes y recibe alertas cuando sea el momento de reponer.
        </li>
        <li><b>Organización Eficiente:</b> Clasifica productos por categorías, precios y más. Todo al alcance de tu
            mano.
        </li>
        <li><b>Fácil de Usar:</b> Una interfaz intuitiva que te permitirá manejar tu inventario de manera rápida y
            sencilla.
        </li>
    </ul>
    <p>Para cualquier duda o consulta, no dudes en contactarnos. Estaremos encantados de asistirte.</p>
    <p>¡Esperamos que disfrutes de los beneficios de <a class="text-rose-500 underline" href="{link}" target="_blank">Mi
        Inventario</a> y
        te deseamos mucho éxito en tu camino con Mary Kay!</p>
    <p>Daniel Llamas <br> <a href="mailto:daniel@soyllamas.com" class="text-rose-500 underline">daniel@soyllamas.com</a>
    </p>
</div>
<div class="fixed grid grid-cols-2 sm:block pointer-events-none text-right bottom-0 left-0 w-full p-6 md:p-12"
     style="env(safe-area-inset-bottom);">
    <a href='https://play.google.com/store/apps/details?id=com.soyllamas.inventario&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
       target="_blank"
       class="pointer-events-auto float-right mx-1 shadow hover:transform hover:scale-105 duration-300 hover:shadow-xl bg-black rounded-xl border-2 border-[#A6A5A5]">
        <img class="mx-auto h-14" alt='Disponible en Google Play' src='/inventario/google-play-badge.svg'/>
    </a>
    <a href='https://apps.apple.com/us/app/mi-inventario/id1143869215'
       target="_blank"
       class="pointer-events-auto float-right mx-1 shadow hover:transform hover:scale-105 duration-300 hover:shadow-xl bg-black rounded-xl border-2 border-[#A6A5A5]">
        <img class="mx-auto h-14" alt='Disponible en Google Play' src='/inventario/app-store.svg'/>
    </a>
</div>

<style>
    p {
        @apply my-4;
    }

    li {
        @apply my-1;
    }

    #nav {
        grid-template-columns: auto 1fr;
    }
</style>
