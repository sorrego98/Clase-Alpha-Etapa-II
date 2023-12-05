<template>
    <div id="home-component">
        <div class="bg-primary mx-1 py-3 rounded-xl">
            <h3 class="text-center font-bold text-xl">Visualización De Datos</h3>
        </div>
        <div>
            <div class="w-1/3 flex justify-end items-center my-5 mx-14"> 
                <span class="bg-primary rounded-lg p-3 -space-x-3 hover:bg-blue-400">
                    <RouterLink to="/new" >
                        Agregar Datos de Usuario
                    </RouterLink>
                </span>
            </div>
            <div class="mb-4 mx-5">
                <table class=" divide-y divide-secondary-200 mx-auto">
                    <thead class="bg-slate-300">
                        <tr>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">ID
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Nombre
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Porcentaje
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Votado
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Eliminar Datos
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-primary/80 divide-y divide-secondary-200">
                        <tr v-for="user in users" :key="user.doc_id">
                            <td class="px-6 py-2 whitespace-nowrap">{{ user.id }}</td>
                            <td class="px-6 py-2 whitespace-nowrap">{{ user.name }}</td>
                            <td class="px-6 py-2 whitespace-nowrap">{{ user.percentage }}</td>
                            <td class="px-6 py-2 whitespace-nowrap">{{ user.voted }}</td>
                            <td class="px-6 py-2 whitespace-nowrap">
                                <button @click="deleteUserData(user.doc_id)"
                                    class="bg-secondary-200 rounded-lg p-3 m-2 hover:bg-blue-400">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from './firebaseInit'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
export default {
    name: 'home-component',
    data() {
        return {
            users: []
        }
    },
    async created() {
        await this.fetchUserData()
    },
    methods: {
        async fetchUserData() {
            const querySnapshot = await getDocs(collection(db, 'users'))
            querySnapshot.forEach((doc) => {
                const data = {
                    doc_id: doc.id,
                    id: doc.data().id,
                    name: doc.data().name,
                    percentage: doc.data().percentage,
                    voted: doc.data().voted,
                }
                this.users.push(data)
            })
        },
        async deleteUserData(doc_id) {
            if (confirm('¿Está seguro de eliminar estos datos?')) {
                try {
                    await deleteDoc(doc(db, 'users', doc_id))
                    this.users = this.users.filter((user) => user.doc_id !== doc_id)
                } catch (error) {
                    console.error('Error al eliminar los datos del usuario:', error)
                }
            }
        },
    },
}
</script>