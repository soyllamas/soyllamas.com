<script>
    import {onMount} from 'svelte';

    onMount(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Redireccionar a Google Play para usuarios de Android
        if (/android/i.test(userAgent)) {
            window.location.href = "https://play.google.com/store/apps/details?id=com.soyllamas.inventario";
            return;
        }

        // Redireccionar a Apple App Store para usuarios de iOS
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            window.location.href = "https://apps.apple.com/us/app/mi-inventario/id1143869215";
            return;
        }

        // Para otros sistemas operativos, redirige a tu sitio web o a una página de error
        window.location.href = "/inventario";
    });
</script>
