(async function(){
    const cardTitle = document.querySelector('.card-item-title');
    const cardImg = document.querySelector('.card-item-img');
    const cardStock = document.querySelector('.card-item-info__stock');
    const itemName = document.querySelector('.card-item-info__name');
    const itemCode = document.querySelector('.card-item-info__code');
    const itemPrice = document.querySelector('.card-item-info__price');
    const itemDescription = document.querySelector('.card-item-info-text');
	
    function renderProductCart (products){
        
    }

	const response = await fetch('products.json');
    const products = await response.json();
   
    
    console.log(cardImg);
    
})();