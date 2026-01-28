<head:script>
    <title>Duo — Finanzas para parejas</title>
    <meta name="title" content="Duo — Finanzas para parejas">
    <meta name="description" content="Lleva seguimiento de tus gastos compartidas.">
</head:script>

<script lang="ts">
    import {onMount} from "svelte";

    let link = 'https://play.google.com/store/apps/details?id=com.soyllamas.inventario';

    onMount(() => {
        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

        // Redireccionar a Apple App Store para usuarios de iOS
        if (/ipad|iphone|ipod|macintosh/.test(userAgent?.toLowerCase()) && !(window as any).MSStream) {
            link = "https://apps.apple.com/us/app/mi-inventario/id1143869215";
            return;
        }

    });
</script>

<div id="nav" class="fixed h-16 bg-white border-b-2 w-full grid justify-center items-center gap-3 px-6">
    <img src="/duo/logo.png" alt="" class="aspect-square w-8">
    <p class="font-medium">Duo</p>
</div>
<div class="mx-auto max-w-lg py-24 pt-16 px-4">
    <div class="h-50vh mx-auto grid justify-center items-center">
        <div>
            <h1 class="text-4xl text-center font-bold mb-4">Mejora tus finanzas en pareja</h1>
            <p class="text-xl text-center">Lleva seguimiento de tus gastos compartidos.</p>
        </div>
    </div>
    <img src="/duo/cover.png" alt="" class="mx-auto w-64 mb-16">
    <p class="my-4">Hola 👋🏼,</p>
    <p class="my-4">Conoce <a class="text-emerald-900 underline" href="{link}" target="_blank">Duo</a>, la solución
        digital diseñada específicamente para parejas que quieren llevar mejoar el seguimiento de sus gastos
        compartidos.</p>
    <ul class="list-disc ml-8 my-6">
        <li class="my-1"><b>Registra tus compras:</b> Agrega gastos a meses que compartes con tu pareja.</li>
        <li class="my-1"><b>Elige como dividirlo:</b> Divide tus gastos por monto exacto, por porcentaje o mitad y mitad.</li>
        <li class="my-1"><b>Filtra tus gastos:</b> Ve cuanto te toca pagar este mes, el próximo mes, lo que falta por pagar o todos
            tus gastos.
        </li>
    </ul>
    <p class="my-4">Para cualquier duda o consulta, no dudes en contactarnos. Estaremos encantados de asistirte.</p>
    <p class="my-4">Daniel Llamas <br> <a href="mailto:daniel@soyllamas.com"
                             class="text-emerald-900 underline">daniel@soyllamas.com</a>
    </p>
</div>
<!--<div class="fixed grid grid-cols-2 sm:block pointer-events-none text-right bottom-0 left-0 w-full p-6 md:p-12"-->
<!--     style="env(safe-area-inset-bottom);">-->
<!--    <a href='https://play.google.com/store/apps/details?id=com.soyllamas.inventario&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'-->
<!--       target="_blank"-->
<!--       class="pointer-events-auto float-right mx-1 shadow hover:transform hover:scale-105 duration-300 hover:shadow-xl bg-black rounded-xl border-2 border-[#A6A5A5]">-->
<!--        <img class="mx-auto h-14" alt='Disponible en Google Play' src='/inventario/google-play-badge.svg'/>-->
<!--    </a>-->
<!--    <a href='https://apps.apple.com/us/app/mi-inventario/id1143869215'-->
<!--       target="_blank"-->
<!--       class="pointer-events-auto float-right mx-1 shadow hover:transform hover:scale-105 duration-300 hover:shadow-xl bg-black rounded-xl border-2 border-[#A6A5A5]">-->
<!--        <img class="mx-auto h-14" alt='Disponible en Google Play' src='/inventario/app-store.svg'/>-->
<!--    </a>-->
<!--</div>-->

<style>
    #nav {
        grid-template-columns: auto 1fr;
    }
</style>
