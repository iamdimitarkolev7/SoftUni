class PaymentManager {
    constructor(title) {
        this.title = title;
        this.payments = {};
    }

    render(id) {
        let table = $(`<table>`);
        let caption = $(`<caption>${this.title} Payment Manager</caption>`);
        let theadBody = `<thead>
                                <tr>
                                    <th class="name">Name</th>
                                    <th class="category">Category</th>
                                    <th class="price">Price</th>
                                    <th>Actions</th>
                                </tr>
                         </thead>`;
        let thead = $(theadBody);
        let tbodyBody = `<tbody class="payments">
                        </tbody>`;
        let tbody = $(tbodyBody);
        let tfootBody = `<tfoot class="input-data">
                            <tr>
                                <td><input name="name" type="text"></td>
                                <td><input name="category" type="text"></td>
                                <td><input name="price" type="number"></td>
                                <td><button id="addBtn" >Add</button></td></tr>
                        </tfoot>`;
        let tfoot = $(tfootBody);

        table.append(caption).append(theadBody).append(tbodyBody).append(tfootBody);
        $(`#${id}`).append(table);

        $("#addBtn").on("click", function () {
            let arr = $(`#${id} thead tr th`).toArray();
            let name = arr[0];
            let category = arr[1];
            let price = arr[2];

            console.log(name + ' ' + category + ' ' + price);
        })
    }
}