const body = document.querySelector('body');
const fragment = document.createDocumentFragment();

//create header
const header = document.createElement('HEADER');
const h1 = document.createElement("H1");
const txt = document.createTextNode("BOOKSHOP");
const logo = document.createElement('IMG'); 
logo.classList = "logo";
logo.src = "../../assets/icons/icons8-open-book.gif";

fragment.appendChild(header);
h1.appendChild(txt);
header.appendChild(logo);
header.appendChild(h1);

//create main
const main = document.createElement('MAIN');
header.after(main);

// create book container 
const gridDiv = document.createElement('DIV');
gridDiv.classList = "grid-container";
main.appendChild(gridDiv);

fetch('./books.json') 
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);

        let totalPrice = 0;
        let total = document.createElement("H4");
        total.id = "total"; 
        let books = data;
        total.innerHTML = `Total Price: $ ${totalPrice}`;
        
        books.map((book) => {
            const bookDiv = document.createElement('DIV');
            bookDiv.classList = "book-card";
            gridDiv.appendChild(bookDiv);

            const bookAuthor = document.createElement('H2');
            const bookHeading = document.createElement('H3');
            const bookCover = document.createElement('IMG');
            const bookPrice = document.createElement('P');
            const bookDescription = document.createElement('P');
            const addButton = document.createElement('BUTTON');
            const descriptionButton = document.createElement('BUTTON');
 
            bookAuthor.classList = "book-author";
            bookHeading.classList = "book-heading";
            bookCover.classList = "book-cover";
            bookPrice.classList = "book-price";
            bookDescription.classList = "book-description";
            descriptionButton.classList ="description-button";
            addButton.classList = "add-button";

            bookDiv.appendChild(bookAuthor);
            bookAuthor.after(bookHeading);
            bookHeading.after(bookCover);
            bookCover.after(bookPrice);
            bookPrice.after(addButton);
            addButton.before(descriptionButton);

            bookCover.src = `${book.imageLink}`;
            bookAuthor.innerHTML = `${book.author}`;
            bookHeading.innerHTML = `"${book.title}"`;
            bookPrice.innerHTML = `Price: $ ${book.price}`;
            descriptionButton.innerHTML = "Show More";
            addButton.innerHTML = "Add to Cart";
 

            let price = book.price; 
            addButton.addEventListener("click",() => {
                const bookCart = document.createElement('DIV');
                const duplicateCover = bookCover.cloneNode(true);
                const duplicateTitle = bookHeading.cloneNode(true);
                const duplicateAuthor = bookAuthor.cloneNode(true);
                const duplicatePrice = bookPrice.cloneNode(true);

                const cross = document.createElement('SPAN');
                cross.classList = "close";
                cross.setAttribute("aria-hidden","true");
                cross.innerHTML = "&times;"
                bookCart.appendChild(cross);
                cross.onclick = () => {
                    bookCart.remove();
                    totalPrice -= price;
                    total.innerHTML = `Total Price: $ ${totalPrice}`;
                }
                
                bookCart.classList = "book-cart";
                duplicateCover.classList = "duplicateCover";
                duplicateTitle.classList = "duplicateTitle";
                duplicateAuthor.classList = "duplicateAuthor";
                duplicatePrice.classList = "duplicatePrice";
                
                cartDiv.appendChild(bookCart);
                bookCart.appendChild(duplicateCover);
                duplicateCover.after(duplicateAuthor);
                duplicateAuthor.after(duplicateTitle);
                duplicateTitle.after(duplicatePrice);

                totalPrice += price;
                total.innerHTML = `Total Price: $ ${totalPrice}`;
            }) 

            const modal = document.createElement("DIV");
            modal.classList = "modal";
            fragment.appendChild(modal);
            body.appendChild(fragment);


            const cross = document.createElement('SPAN');
            cross.classList = "closeModal";
            cross.setAttribute("aria-hidden","true");
            cross.innerHTML = "&times;"
            
            cross.onclick = () => {
                modal.style.display = "none";
            }
            descriptionButton.onclick = () => {
                modal.style.display = "block";
            }

            const modalContent = document.createElement("DIV");
            modalContent.classList = "modal-content";

            modal.appendChild(modalContent);
            modalContent.appendChild(cross);
            bookDescription.innerHTML = `${book.description}`;
            const duplicateCover = bookCover.cloneNode(true);
            const duplicateTitle = bookHeading.cloneNode(true);
            const duplicateAuthor = bookAuthor.cloneNode(true);
            modalContent.prepend(duplicateAuthor);
            modalContent.appendChild(duplicateTitle);
            modalContent.appendChild(duplicateCover);
            modalContent.appendChild(bookDescription);
        })
        cartDiv.after(total);
    });

//create cart 
const cart = document.createElement("DIV");
cart.id = "cart";
gridDiv.after(cart);

const cartHeading = document.createElement("H2");
cartHeading.id = "cart-heading";
cartHeading.innerHTML = "Your Books:"
cart.appendChild(cartHeading);

const cartDiv = document.createElement('DIV');
cartDiv.classList = "cart-div"
cartHeading.after(cartDiv);

const orderButton = document.createElement("BUTTON");
orderButton.id = "order-button";
orderButton.innerText = "Confirm Order";
cartDiv.after(orderButton);

orderButton.setAttribute("onclick", "visitForm();");
function visitForm(){
    window.location.href = '../form/form.html';
}
