import {defineRule} from "vee-validate";

defineRule('minMax', (value, [min, max]) => {
    if (!value) {
        return 'Ce champ est obligatoire'
    }
    if (Number(value) < min) {
        return `Ce champ doit contenir une valeur supérieure à ${min}`
    }
    if (Number(value) > max) {
        return `Ce champ doit contenir une valeur inférieure à ${max}`
    }
    return true
})