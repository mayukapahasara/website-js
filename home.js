const productContainers = [...document.querySelectorAll('.Antidepressants-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => { 
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});


    function updateCurrentOrder() {
        const currentOrderBody = document.querySelector('#current-order tbody');
        currentOrderBody.innerHTML = ''; 
    
        let total = 0;
    
        const products = document.querySelectorAll('.box_b');
        products.forEach((product, index) => {
            const quantityInput = product.querySelector('input[type="number"]');
            const quantity = parseInt(quantityInput.value) || 0;
    
            if (quantity > 0) {
                const productName = product.querySelector('.type_d a').innerText;
                const priceText = product.querySelector('.price').innerText;
                const price = parseFloat(priceText.replace('Rs.', '').replace(',', '').trim());
                const itemTotal = price * quantity;
                total += itemTotal;
    
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${productName}</td>
                    <td>${quantity}</td>
                    <td>Rs. ${itemTotal.toFixed(2)}</td>
                    <td><button class="remove-btn" onclick="removeItem(${index})">Remove</button></td>
                `;
                currentOrderBody.appendChild(row);
                
            }
        });
    
        document.getElementById('total-price').innerText = `Total: Rs. ${total.toFixed(2)}`;
    }
    
    function removeItem(index) {
        const product = document.querySelectorAll('.box_b')[index];
        const quantityInput = product.querySelector('input[type="number"]');
        quantityInput.value = 0; 
        updateCurrentOrder();
    }
    
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('input', updateCurrentOrder);
    });
    
    window.onload = updateCurrentOrder;


    document.querySelector('.Add_to_favourites').addEventListener('click', () => {
        const favouriteItems = {}; 
    
        const productBoxes = document.querySelectorAll('.box_b');
    
        productBoxes.forEach((box) => {
            const itemName = box.querySelector('.type_d a').innerText;
            const quantity = parseFloat(box.querySelector('input[type="number"]').value);
            const price = box.querySelector('.price').innerText;
    
            if (quantity > 0) {
                favouriteItems[itemName] = {
                    quantity: quantity,
                    price: price,
                };
            }
        });
    
        localStorage.setItem('favouriteOrder', JSON.stringify(favouriteItems));
        alert('Items have been added to your Favourites!');
    });

    
    document.querySelector('.Apply_favourite').addEventListener('click', () => {
        const savedItems = JSON.parse(localStorage.getItem('favouriteOrder')) || {};
    
        const productBoxes = document.querySelectorAll('.box_b');
    
        productBoxes.forEach((box) => {
            const itemName = box.querySelector('.type_d a').innerText;
            const quantityField = box.querySelector('input[type="number"]');
    
            if (savedItems[itemName]) {
                quantityField.value = savedItems[itemName].quantity;
            }
        });
    
        alert('Favourite items have been applied!');
    });

    document.querySelector('.clear_favouite').addEventListener('click', () => {
        localStorage.removeItem('favouriteOrder');
        alert('Favourites have been cleared!');
    });
    