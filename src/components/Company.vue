<template>
    <div class="container card m-5 p-5">
        <div v-for="comp in company" :key="comp.id">
            <span class="is-size-1 mr-4">{{ comp.name }}</span>
            <span :class="comp.status ? 'tag is-primary is-medium' : 'tag is-warning is-medium' ">{{ comp.status ? 'Ativa' : 'Inativa' }}</span>
            <br>
            <p class="subtitle">{{ comp.description }}</p>
            <ul>
                <li>{{ comp.keywords }}</li>
            </ul>

            <br>

            <h3 class="tag is-primary is-size-5 has-text-weight-bold mb-3">Contatos:</h3>
            <div class="ml-2">
                
                <span class="subtitle">e-mail: {{ comp.contact.email }}</span>
                <br>
                <span class="subtitle">
                    site:
                    <a :href="comp.contact.site" target="_blank">
                        acessar site
                    </a>
                </span>
                <br>
                <span class="subtitle">
                    facebook: 
                    <a :href="comp.contact.facebook" target="_blank">
                        página no facebook
                    </a>
                </span>
                <br><br>
                <span class="subtitle">telefones: </span>
                <span class="subtitle" v-for="(contact, index) in comp.contact.phones" :key="index">
                    {{ contact }}
                </span>
            </div>

            <br>

            <h3 class="tag is-primary is-size-5 has-text-weight-bold mb-3">Endereço</h3>
            <br>
            <div class="ml-2">
                <span class="subtitle">{{ comp.address.street }} | CEP: {{ comp.address.zip }}</span>
                <br>
                <span class="subtitle">{{ comp.address.city }} / {{ comp.address.state }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { onBeforeMount, ref } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import api from '@/services/Api';

export default {
    name: 'Company',
    setup() {
        const company = ref();
        const route = useRoute();
        const id = route.params.id;


        onBeforeMount(() => {
            api.get('/companies.json')
            .then((res) => getCompany(res.data));
        });

        const getCompany = (data) => {
            company.value = data.filter((comp) => comp.id == id);
        }

        return {
            company
        }
    }
}
</script>