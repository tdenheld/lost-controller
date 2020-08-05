import Vue from "vue"

Vue.filter('titleCase', value => {
    if (!value) return '';
    value = value.toString();
    return value.replace(/(?:^|\s|-)\S/g, x => x.toUpperCase());
});

Vue.filter('lowerCase', value => {
    if (!value) return '';
    value = value.toString();
    return value.toLowerCase();
});

Vue.filter('replace', (value, input, output) => {
    if (!value) return '';
    value = value.toString();
    const regex = new RegExp(input, "g");
    return value.replace(regex, output);
});

Vue.filter('filterArray', (array, filters) => {
    // ignores case-sensitive
    const getValue = value =>
        typeof value === 'string' ? value.toUpperCase() : value;

    const filterKeys = Object.keys(filters);
    return array.filter(item => {
        // validates all filter criteria
        return filterKeys.every(key => {
            // ignores an empty filter
            if (!filters[key].length) return true;
            // check if item.key is an array
            if (Array.isArray(item[key])) {
                return filters[key].find(val =>
                    item[key].includes(val)
                );
            }
            // if item.key is a string
            return filters[key].find(
                val => getValue(val) === getValue(item[key])
            );
        });
    });
});

Vue.filter('sortArray', (array, key) => {
    return array.sort((a, b) => {
        if (a[key] > b[key]) return 1;
        if (a[key] < b[key]) return -1;
        return 0;
    });
});

Vue.filter('getValue', (array, key, val, output) => {
    const entry = array.find(obj => obj[key] === val);
    return entry[output];
});