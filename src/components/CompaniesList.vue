<template>
<div class="sm:container sm:mx-auto">
    <div class="">
        <span class="">OuriVue</span>
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

    <div v-if="companiesFilter.length > 0" class="grid grid-cols-3 gap-6">
        <div v-for="company in companiesFilter" :key="company.id" class="block p-3 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-200">
            <router-link :to="{name: 'company', params: { alias: company.alias, id: company.id }}">
                <div class="card py-5 px-5">
                    <span class="mb-5 text-4xl font-bold">{{ company.name.length > 20 ? company.name.substr(0, 20) + '...' : company.name }}</span>
                    <span :class="company.status ? 'tag is-primary' : 'tag is-danger'">{{ company.status ? 'ativa' : 'inativa' }}</span>
                    
                    <p class="mt-5 text-2xl">{{ company.description.length > 50 ? company.description.substr(0, 50) + '...' : company.description }}</p>
                </div>
            </router-link>
        </div>
    </div>
    <p v-else class="columns is-centered is-size-2 m-5 p-5">Nenhum resultado encontrado...</p>
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