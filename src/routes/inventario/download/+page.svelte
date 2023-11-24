<script>
    import {onMount} from 'svelte';

    onMount(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Redireccionar a Google Play para usuarios de Android
        if (/android/i.test(userAgent?.toLowerCase())) {
            window.location.replace("https://play.google.com/store/apps/details?id=com.soyllamas.inventario");
            return;
        }

        // Redireccionar a Apple App Store para usuarios de iOS
        if (/ipad|iphone|ipod|macintosh/.test(userAgent?.toLowerCase()) && !window.MSStream) {
            window.location.replace("https://apps.apple.com/us/app/mi-inventario/id1143869215");
            return;
        }

        window.location.replace("/inventario");
    });
</script>
