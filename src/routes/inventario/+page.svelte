<script>
    import {onMount} from "svelte";

    let link = 'https://play.google.com/store/apps/details?id=com.soyllamas.inventario';

    onMount(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Redireccionar a Apple App Store para usuarios de iOS
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            link = "https://apps.apple.com/us/app/mi-inventario/id1143869215";
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
            <p class="text-xl text-center">La nueva solución digital diseñada específicamente para consultoras de
                belleza Mary Kay como tú.</p>
        </div>
    </div>
    <img src="/inventario/cover.png" alt="" class="mx-auto w-64 mb-16">
    <p>Hola 👋🏼,</p>
    <p>Conoce <a class="text-rose-500 underline" href="{link}" target="_blank">Mi Inventario</a>, la nueva solución
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
    <p>Daniel Llamas <br> <a href="mailto:daniel@soyllamas.com">daniel@soyllamas.com</a></p>
</div>
<div class="fixed bottom-0 left-0 w-full p-6 md:p-12" style="env(safe-area-inset-bottom)">
    <a href="{link}"
       target="_blank"
       class="w-full no-underline text-white float-right md:w-fit bg-rose-400 font-medium px-8 py-4 rounded-full shadow hover:transform hover:scale-105 duration-300 hover:shadow-xl">
        Descargar App
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
