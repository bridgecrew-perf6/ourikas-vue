<template>
    <div v-for="company in companies" :key="company.id">
        <router-link :to="{name: 'company', params: { alias: company.alias, id: company.id }}">
            <h2>{{ company.name }}</h2>
        </router-link>
            <span>{{ company.status ? 'ativa' : 'inativa' }}</span>
            
            <p>{{ company.description }}</p>
            
            <ul>
                <li>{{ company.keywords }}</li>
            </ul>
    </div>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import api from '@/services/Api'

export default {
    name: 'CompaniesList',
    setup() {
        const companies = ref([]);
        const fetchCompanies = () => api.get("/companies.json")
        .then((res) => {
            companies.value = res.data;
        });
    
        onMounted(fetchCompanies);

    return {
        companies
    }
  }
}
</script>