<template>
<div class="container my-10 mx-auto px-4 md:px-2">
    <div class="text-center text-cyan-900">
        <span class="mb-4 text-6xl font-bold">OuriVue</span>
    </div>
    <br>
    <form>
        <div class="control">
            <input
                class="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="search"
                placeholder="Busque por uma empresa..."
                v-model="search"
             />
        </div>
    </form>
    
    <br>

    <div v-if="companiesFilter.length > 0" class="grid grid-cols-3 gap-3">
        <div v-for="company in companiesFilter" :key="company.id" class="p-3 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200">
            <router-link :to="{name: 'company', params: { alias: company.alias, id: company.id }}">
                <div class="flex justify-between py-3 px-4">
                    <div class="text-cyan-900 mb-2 text-4xl font-bold">{{ company.name.length > 20 ? company.name.substr(0, 20) + '...' : company.name }}</div>
                    <div class="px-5 h-6 content-center text-white rounded-full" :class="company.status ? 'bg-green-400' : 'bg-gray-500'">{{ company.status ? 'ativa' : 'inativa' }}</div> 
                </div>
                <p class="text-gray-500 mt-2 p-4 text-2xl">{{ company.description.length > 50 ? company.description.substr(0, 50) + '...' : company.description }}</p>
            </router-link>
        </div>
    </div>
    <p v-else class="">Nenhum resultado encontrado...</p>
</div>
</template>

<script>
import { computed, onBeforeMount, ref } from '@vue/runtime-core'
import api from '@/services/Api'

export default {
    name: 'CompaniesList',
    setup() {
        const companies = ref([]);
        const search = ref("");

        onBeforeMount(() => {
            api.get("/companies.json")
            .then((res) => companies.value = res.data);
        });

        const companiesFilter = computed(() => {
            return companies.value.filter((comp) => {
                return search.value
                    .toLowerCase()
                    .split(' ')
                    .every(c => comp.name.toLowerCase().includes(c));
            });
        });

        return {
            search,
            companies,
            companiesFilter
        }
    }
}
</script>