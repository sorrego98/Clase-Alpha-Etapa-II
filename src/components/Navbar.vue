<template>
    <div id="navbar-component">
        <div class="flex flex-row justify-between bg-primary m-1 p-6 rounded-xl mb-2">
            <div class="text-xl font-bold p-1">PRUEBA TÉCNICA: ETAPA II</div>
            <div class="text-lg font-semibold flex flex-row">
                <div class="hover:bg-secondary-100 hover:rounded-xl p-2">
                    <RouterLink to="/"> Inicio</RouterLink>
                </div>
                <div class="hover:bg-secondary-100 hover:rounded-xl p-2">
                    <RouterLink to="#"> Nuestra Empresa</RouterLink>    
                </div>
                <div class="hover:bg-secondary-100 hover:rounded-xl p-2">
                    <RouterLink to="#"> Registrarse</RouterLink>
                </div>
                <div class="hover:bg-secondary-100 hover:rounded-xl p-2">
                    <RouterLink to="#"> Iniciar Sesión</RouterLink>
                </div>
                <div class="hover:bg-secondary-100 hover:rounded-xl p-2">
                    <RouterLink to="#"> Contáctanos</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navbar-component',
    data() {
        return {

        }
    }
}
</script>