<template>
    <div class="container my-10 mx-auto px-4 md:px-2">
        <div v-for="comp in company" :key="comp.id" class="p-5 text-cyan-900 bg-white rounded-lg border border-gray-200 shadow-md">
            <div class="mb-2">
                <span class="font-bold text-5xl">{{ comp.name }}</span>
                <span :class="comp.status ? '' : '' ">{{ comp.status ? 'Ativa' : 'Inativa' }}</span>
            </div>
            <br>
            <p class="">{{ comp.description }}</p>
            <ul v-if="comp.keywords.length > 0">
                <li class="" v-for="(tag, index) in splitTags(comp.keywords)" :key="index">{{ tag }}</li>
            </ul>

            <br>

            <h3 class="">Contatos:</h3>
            <div class="">
                <span class="" v-if="comp.contact.email">{{ comp.contact.email }}</span>
                
                <span v-if="comp.contact.site">
                    <a :href="comp.contact.site" target="_blank" class="">
                        acessar site
                    </a>
                </span>
                
                <span v-if="comp.contact.facebook">
                    <a :href="comp.contact.facebook" target="_blank" class="">
                        página no facebook
                    </a>
                </span>
                <br><br>
                <span class="" v-for="(contact, index) in comp.contact.phones" :key="index">
                    {{ contact }}
                </span>
            </div>

            <br>

            <h3 class="">Endereço</h3>
            <div class="">
                <span class="" v-show="comp.address.street">{{ comp.address.street }}</span>
                <br>
                <span class="" v-show="comp.address.zip">CEP: {{ comp.address.zip }}</span>
                <br>
                <span class="" v-show="comp.address.city">{{ comp.address.city }} / {{ comp.address.state }}</span>
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

        const splitTags = (tags) => {
            return tags.split(",");
        }

        return {
            company,
            splitTags
        }
    }
}
</script>