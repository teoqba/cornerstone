import utils from '@bigcommerce/stencil-utils';

export default class wbc {
    constructor($changedOption) {
        this.$changedOption = $changedOption;
        console.log('WB init');
    }
    list_all_selected_options() {
        const $form = this.$changedOption.parents('form');
        const $options = $form.find(".form-select");
        $options.each(function(index) {
            var selected_name = $(this).find(":selected").text();
            if (selected_name !== 'Choose Options') {
                var selected_index = ($(this).prop('selectedIndex'));
                console.log(selected_index, selected_name);
            }
        });
    }
    get_product_name() {
        const $main_parents = this.$changedOption.parents('.productView');
        const $title = $main_parents.find('.productView-title');
        console.log('Product name', $title.text());
    }
    get_product_category() {
        // const $all_parents = this.$changedOption.parents("div.body");
        // console.log($all_parents);
    }
    get_product(id) {
        // Example of use of api.product.getById
        // /Users/kaminski/Projects/BigCommerce/cornerstone/assets/js/theme/global/quick-view.js
        let callback = function(error, response) {
            console.log('REspnse', $( response));
            let $prod = $(response);
            // console.log('Prod text', $prod.text());
            // console.log('Error', error);
            return response};

        var p = utils.api.product.getById(id,{}, callback);
        console.log('Product,', p);
    }
}
