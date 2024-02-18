<template>
    <div>
        <input v-model="name" />
        <input v-model="open" />
        <input v-model="hi" />
        <div class="bg-blue-500 p-4 round" @click="hello">Send Hi to Hello Service</div>
    </div>
</template>

<script lang="ts" setup>

// the location for your service proxy is dependent on the generated code
// path, usually src/main/generated, for demo purposes the file has been
// copied to the current directory
import { HelloService } from '@/utils/HelloService'
import EventBus from '@vertx/eventbus-bridge-client.js'

const eventBus = new EventBus("http://localhost:8000/eventbus");
eventBus.enableReconnect(true)

const name = ref('Mariano')
const open = ref(false)
const hi = ref('')
let helloService: HelloService | null = null;

eventBus.onopen = function () {
    console.log('open');
    open.value = true
    helloService = new HelloService(eventBus, 'ojala.service.hello');
    eventBus.registerHandler('ojala.service.hi', function (err: any, result: { body: any; }) {
        hi.value = result && result.body
    })
};

eventBus.onmessage = function (e: any) {
    console.log('message', e.data);
};

eventBus.onclose = function (e: any) {
    console.log('close', e);
    open.value = false
    helloService = null
};

function hello() {
    if (helloService !== null) {
        helloService.sayHello(name.value, (err, res) => {
            name.value = res
        });
    }
}
</script>

