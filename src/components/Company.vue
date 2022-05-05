<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div v-for="comp in company" :key="comp.id" class="flex justify-center md:justify-end -mt-16">
            <span class="font-bold text-xl mb-2">{{ comp.name }}</span>
            <span :class="comp.status ? 'tag is-primary is-medium' : 'tag is-warning is-medium' ">{{ comp.status ? 'Ativa' : 'Inativa' }}</span>
            <br>
            <p class="subtitle">{{ comp.description }}</p>
            <ul v-if="comp.keywords.length > 0">
                <li class="tag is-primary m-1" v-for="(tag, index) in splitTags(comp.keywords)" :key="index">{{ tag }}</li>
            </ul>

            <br>

            <h3 class="is-size-5 has-text-weight-bold mb-3">Contatos:</h3>
            <div class="ml-2">
                <span class="button is-dark mr-3" v-if="comp.contact.email">{{ comp.contact.email }}</span>
                
                <span v-if="comp.contact.site">
                    <a :href="comp.contact.site" target="_blank" class="button is-warning mr-3">
                        acessar site
                    </a>
                </span>
                
                <span v-if="comp.contact.facebook">
                    <a :href="comp.contact.facebook" target="_blank" class="button is-link">
                        página no facebook
                    </a>
                </span>
                <br><br>
                <span class="button is-info mr-2" v-for="(contact, index) in comp.contact.phones" :key="index">
                    {{ contact }}
                </span>
            </div>

            <br>

            <h3 class="is-size-5 has-text-weight-bold mb-3">Endereço</h3>
            <div class="ml-2">
                <span class="subtitle" v-show="comp.address.street">{{ comp.address.street }}</span>
                <br>
                <span class="subtitle" v-show="comp.address.zip">CEP: {{ comp.address.zip }}</span>
                <br>
                <span class="subtitle" v-show="comp.address.city">{{ comp.address.city }} / {{ comp.address.state }}</span>
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