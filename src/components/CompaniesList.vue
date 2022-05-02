<template>
<div class="container">
    <div class="columns is-flex is-centered">
        <a href="#">
            <span class="title is-size-1 has-text-primary has-text-weight-bold">{ OuriVue }</span>
        </a>
    </div>
    <br>
    <form>
        <div class="control">
            <input
                class="input is-medium is-success"
                type="search"
                placeholder="Busque por uma empresa..."
                v-model="search"
             />
        </div>
    </form>
    
    <br>

    <div v-if="companiesFilter.length > 0" class="columns is-multiline">
        <div v-for="company in companiesFilter" :key="company.id" class="column is-4">
            <router-link :to="{name: 'company', params: { alias: company.alias, id: company.id }}">
                <div class="card py-5 px-5">
                    <span class="title mr-3">{{ company.name.length > 20 ? company.name.substr(0, 20) + '...' : company.name }}</span>
                    <span :class="company.status ? 'tag is-primary' : 'tag is-danger'">{{ company.status ? 'ativa' : 'inativa' }}</span>
                    
                    <p class="subtitle mt-3">{{ company.description.length > 50 ? company.description.substr(0, 50) + '...' : company.description }}</p>
                    <ul v-if="company.keywords">
                        <li class="tag is-black m-1" v-for="(tag, index) in splitTags(company.keywords)" :key="index">{{ tag }}</li>
                    </ul>
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

        const splitTags = (tags) => {
            return tags.split(",");
        }

        return {
            search,
            companies,
            companiesFilter,
            splitTags
        }
    }
}
</script>