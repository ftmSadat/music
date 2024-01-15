import {
    Form as VeeForm,
    Field as VeeField,
    defineRule,
    ErrorMessage,
    configure
} from "vee-validate";

import {
    required,
    email,
    min,
    max,
    alpha_spaces as alphaSpaces,
    min_value as minVal,
    max_value as maxVal,
    confirmed,
    not_one_of as excluded,
} from '@vee-validate/rules';

export default {
    install(app) {
        app.component('VeeForm', VeeForm)
        app.component('VeeField', VeeField)
        app.component('ErrorMessage', ErrorMessage)


        defineRule("required", required);
        defineRule("tos", required);
        defineRule("min", min);
        defineRule("max", max);
        defineRule("alpha_spaces", alphaSpaces);
        defineRule("email", email);
        defineRule("min_value", minVal);
        defineRule("max_value", maxVal);
        defineRule("passwords_mismatch", confirmed);
        defineRule("excluded", excluded);
        defineRule("country_excluded", excluded);
        configure(
            {
                validateOnBlur: true,
                validateOnChange: true,
                validateOnInput: false,
                validateOnModelUpdate: true
            }
        )
    }
}