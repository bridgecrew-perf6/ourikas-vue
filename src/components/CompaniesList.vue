<template>
<div class="container">
 <form action="">
     <div class="control">
        <input class="input is-medium is-success" type="search" placeholder="Busque por uma empresa..." value="">
    </div>
 </form>
 
 <br>

<div class="columns is-multiline">
    <div v-for="company in companies" :key="company.id" class="column is-4">
        <router-link :to="{name: 'company', params: { alias: company.alias, id: company.id }}">
            <div class="card py-5 px-5">
                <span class="title mr-3">{{ company.name.length > 20 ? company.name.substr(0, 20) + '...' : company.name }}</span>
                <span :class="company.status ? 'tag is-primary' : 'tag is-danger'">{{ company.status ? 'ativa' : 'inativa' }}</span>
                
                <p class="subtitle mt-3">{{ company.description.length > 50 ? company.description.substr(0, 50) + '...' : company.description }}</p>
                <ul v-for="(kword, index) in wordsArray" :key="index">
                    <li class="tag is-black">{{ kword }}</li>
                </ul>
            </div>
        </router-link>
    </div>
</div>
</div>
</template>

<script>
import { onBeforeMount, ref } from '@vue/runtime-core'
import api from '@/services/Api'

export default {
    name: 'CompaniesList',
    setup() {
        const companies = ref([]);

        const fetchCompanies = () => api.get("/companies.json")
        .then((res) => {
            companies.value = res.data;
        });
    
        onBeforeMount(fetchCompanies);

        function keywords(words) {
            const wordsArray = words.split(",", 5);
            return wordsArray;
        }

    return {
        companies,
        keywords
    }
  }
}
</script>