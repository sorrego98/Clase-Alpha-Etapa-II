<template>
    <div id="new-data-user">
        <div class="bg-primary mx-1 py-3 rounded-xl">
            <h3 class="text-center font-bold text-xl">Agregar Información de Usuario</h3>
        </div>
        <div class=" flex flex-row justify-center bg-primary m-2 rounded-xl">
            <form @submit.prevent="addUserData" class="flex flex-col w-1/2 bg-primary m-2 rounded-xl p-4">
                <div class="flex flex-row justify-between py-2 bg-secondary-200 m-1 px-2 rounded-lg">
                    <label for="">ID</label>
                    <input type="number" v-model="id" required>
                </div>
                <div class="flex flex-row justify-between py-2 bg-secondary-200 m-1 px-2 rounded-lg">
                    <label for="">Nombre</label>
                    <input type="text" v-model="name" required>
                </div>
                <div class="flex flex-row justify-between py-2 bg-secondary-200 m-1 px-2 rounded-lg">
                    <label for="">Porcentaje</label>
                    <input type="number" v-model="percentage" required min="0" max="100" step="0.000000000000000001">
                </div>
                <div class="flex flex-row justify-between py-2 bg-secondary-200 m-1 px-2 rounded-lg">
                    <label for="">Votado</label>
                    <input type="number" v-model="voted" required>
                </div>
                <div class="flex flex-row justify-around">
                    <div class="bg-secondary-200 rounded-lg p-3 -space-x-3 hover:bg-blue-400">
                        <button type="submit">Agregar datos</button>
                    </div>
                    <div class="bg-secondary-200 rounded-lg p-3 -space-x-3 hover:bg-blue-400">
                        <RouterLink to="/">Cancelar</RouterLink>
                    </div>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
import { db } from './firebaseInit'
import { collection, addDoc } from 'firebase/firestore'
export default {
    name: 'new-data-user',
    data() {
        return {
            id: null,
            name: null,
            percentage: null,
            voted: null
        }
    },
    methods: {
        async addUserData() {
            await addDoc(collection(db, 'users'), {
                id: this.id,
                name: this.name,
                percentage: this.percentage,
                voted: this.voted
            })
                .then(docRef => {
                    console.log(`Usuario ${docRef.name} creado con éxito`);
                    this.$router.push('/')
                })
                .catch(error => {
                    console.error('Error al agregar datos del usuario:', error);
                })
        }
    }
}
</script>