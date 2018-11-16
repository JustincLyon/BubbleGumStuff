Totalprice = 0;



function addPrice(x){
    Totalprice += brands[x].price;
    brands[x].counter += 1;
    document.getElementById('Total').innerHTML = ("$" + Totalprice);
    document.getElementById('items').innerHTML = ("");
    for (i=0;i < brands.length; i++){
        document.getElementById('items').append(brands[i].brand + ": " + brands[i].counter + " ");
    }
    
}

function clearItems(){
    document.getElementById('Total').innerHTML = ("$0.00");
    document.getElementById("items").innerHTML = (" ");
    for (i=0;i < brands.length; i++){
        brands[i].counter = 0;
    }
    
    Totalprice = 0;

}

var brands = [{brand: 'Extra',
               price: 1.00,
               counter: 0},

              {brand: 'Wrigleys',
               price: 1.50,
               counter: 0},
            
              {brand: 'Trident',
               price: 0.75,
               counter: 0},

              {brand: 'Bubble',
               price: 5.00,
               counter: 0}
]

document.getElementById('items').innerHTML = ("");

for (i=0;i < brands.length; i++){
    document.getElementById('items').append(brands[i].brand + ": " + brands[i].counter + " ");
}


document.getElementById('Extra').addEventListener('click', function() {
    addPrice(0);
});
document.getElementById('Wrigleys').addEventListener('click', function(){
    addPrice(1);
});
document.getElementById('Trident').addEventListener('click', function(){
    addPrice(2);
});

document.getElementById('Bubble').addEventListener('click', function(){
    addPrice(3);
});

document.getElementById('clearItems').addEventListener('click', function(){
    clearItems()

});


