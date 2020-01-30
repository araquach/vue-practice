<template>
    <div>
        <div class="form-group" :class="{ 'is-danger': $v.flatA.$error }">
            <label class="form__label">Flat A</label>
            <input class="form__input" v-model.trim="$v.flatA.$model"/>
        </div>
        <div class="error" v-if="!$v.flatA.required">Field is required.</div>
        <div class="form-group" :class="{ 'is-danger': $v.flatB.$error }">
            <label class="form__label">Flat B</label>
            <input class="form__input" v-model.trim="$v.flatB.$model"/>
        </div>
        <div class="error" v-if="!$v.flatB.required">Field is required.</div>
        <div class="form-group" :class="{ 'is-danger': $v.forGroup.nested.$error }">
            <label class="form__label">Nested field</label>
            <input class="form__input" v-model.trim="$v.forGroup.nested.$model"/>
        </div>
        <div class="error" v-if="!$v.forGroup.nested.required">Field is required.</div>
        <div class="form-group" :class="{ 'is-danger': $v.validationGroup.$error }"></div>
        <div class="error" v-if="$v.validationGroup.$error">Group is invalid.</div>
        <tree-view :data="$v.validationGroup" :options="{rootObjectKey: '$v.validationGroup', maxDepth: 2}"></tree-view>
    </div>
</template>
<script>
    import {required} from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                flatA: '',
                flatB: '',
                forGroup: {
                    nested: ''
                }
            }
        },
        validations: {
            flatA: { required },
            flatB: { required },
            forGroup: {
                nested: { required }
            },
            validationGroup: ['flatA', 'flatB', 'forGroup.nested']
        }
    }
</script>