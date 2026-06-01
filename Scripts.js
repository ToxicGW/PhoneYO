function calculateTotal() {
    var total = 0;

    var items = [
        { itemId: 'Samsung', propertyName: 'PropertyS', quantityId: 'NumberOfItemsS', costId: 'Cost1' },
        { itemId: 'Apple', propertyName: 'PropertyA', quantityId: 'NumberOfItemsA', costId: 'Cost2' },
        { itemId: 'Oppo', propertyName: 'PropertyO', quantityId: 'NumberOfItemsO', costId: 'Cost3' },
        { itemId: 'Xiaomi', propertyName: 'PropertyX', quantityId: 'NumberOfItemsX', costId: 'Cost4' },
    ];

    for (var i = 0; i < items.length; i++) {
        var itemId = items[i].itemId;
        var propertyName = items[i].propertyName;
        var quantityId = items[i].quantityId;
        var costId = items[i].costId;

        if (document.getElementById(itemId).checked) {
            var price = 0;
            var radios = document.getElementsByName(propertyName);
            for (var j = 0; j < radios.length; j++) {
                if (radios[j].checked) {
                    price = parseInt(radios[j].value);
                }
            }
            

            //checking properties selected

            if (price === 0) {
                alert("Please select a property for item " + "*" + (itemId) + "*" + ".");
                return; 
            } else {
                var quantity = parseInt(document.getElementById(quantityId).value);
                var cost = price * quantity;
                document.getElementById(costId).value = cost;
                total += cost;
            }
        }
    }
         //tax and final calculation

    if (total > 200) {
        var discount = total * 0.15;
        document.getElementById('TotalCost').innerHTML = "($) " + (total - discount);
    } else {
        var VAT = total * 0.15;
        document.getElementById('TotalCost').innerHTML = "($) " + (total + VAT);
    }
       
      //satisfaction
            var confirmation = confirm("Do you accept the calculated total cost for payment? " + "$" + total);
        
            if (confirmation) {
              alert("Thank you!");
            } else {
              alert("Application Withdraw.");
            }
        
}
