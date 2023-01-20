
// product carousel

    $(document).ready(function () {
        var itemsMainDiv = ('.MultiCarousel');
        var itemsDiv = ('.MultiCarousel-inner');
        var itemWidth = "";

        $('.leftLst, .rightLst').click(function () {
            var condition = $(this).hasClass("leftLst");
            if (condition)
                click(0, this);
            else
                click(1, this)
        });

        ResCarouselSize();




        $(window).resize(function () {
            ResCarouselSize();
        });

        //this function define the size of the items
        function ResCarouselSize() {
            var incno = 0;
            var dataItems = ("data-items");
            var itemClass = ('.item');
            var id = 0;
            var btnParentSb = '';
            var itemsSplit = '';
            var sampwidth = $(itemsMainDiv).width();
            var bodyWidth = $('body').width();
            $(itemsDiv).each(function () {
                id = id + 1;
                var itemNumbers = $(this).find(itemClass).length;
                btnParentSb = $(this).parent().attr(dataItems);
                itemsSplit = btnParentSb.split(',');
                $(this).parent().attr("id", "MultiCarousel" + id);


                if (bodyWidth >= 1200) {
                    incno = itemsSplit[3];
                    itemWidth = sampwidth / incno;
                }
                else if (bodyWidth >= 992) {
                    incno = itemsSplit[2];
                    itemWidth = sampwidth / incno;
                }
                else if (bodyWidth >= 768) {
                    incno = itemsSplit[1];
                    itemWidth = sampwidth / incno;
                }
                else {
                    incno = itemsSplit[0];
                    itemWidth = sampwidth / incno;
                }
                $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
                $(this).find(itemClass).each(function () {
                    $(this).outerWidth(itemWidth);
                });

                $(".leftLst").addClass("over");
                $(".rightLst").removeClass("over");

            });
        }


        //this function used to move the items
        function ResCarousel(e, el, s) {
            var leftBtn = ('.leftLst');
            var rightBtn = ('.rightLst');
            var translateXval = '';
            var divStyle = $(el + ' ' + itemsDiv).css('transform');
            var values = divStyle.match(/-?[\d.]+/g);
            var xds = Math.abs(values[4]);
            if (e === 0) {
                translateXval = parseInt(xds) - parseInt(itemWidth * s);
                $(el + ' ' + rightBtn).removeClass("over");

                if (translateXval <= itemWidth / 2) {
                    translateXval = 0;
                    $(el + ' ' + leftBtn).addClass("over");
                }
            }
            else if (e === 1) {
                var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
                translateXval = parseInt(xds) + parseInt(itemWidth * s);
                $(el + ' ' + leftBtn).removeClass("over");

                if (translateXval >= itemsCondition - itemWidth / 2) {
                    translateXval = itemsCondition;
                    $(el + ' ' + rightBtn).addClass("over");
                }
            }
            $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
        }

        //It is used to get some elements from btn
        function click(ell, ee) {
            var Parent = "#" + $(ee).parent().attr("id");
            var slide = $(Parent).attr("data-slide");
            ResCarousel(ell, Parent, slide);
        }

    });




//
// const exampleModal = document.getElementById('exampleModal')
// exampleModal.addEventListener('show.bs.modal', event => {
//     // Button that triggered the modal
//     const button = event.relatedTarget
//     // Extract info from data-bs-* attributes
//     const recipient = button.getAttribute('data-bs-whatever')
//     // If necessary, you could initiate an AJAX request here
//     // and then do the updating in a callback.
//     //
//     // Update the modal's content.
//     const modalTitle = exampleModal.querySelector('.modal-title')
//     const modalBodyInput = exampleModal.querySelector('.modal-body input')
//
//     modalTitle.textContent = `New message to ${recipient}`
//     modalBodyInput.value = recipient
// })



//  food list readed from api

fetch("foodItems.json")
    .then(response=>response.json())
    .then(data=>{


for (var i = 0; i < data.length; i++)
    {
        $('#foodcard').append(
'<div class="col">'+
'<div class="card">\n' +
'  <img id="img" src="' +data[i].image +
'" class="card-img-top" style="width: 100%; height: 180px;" alt="pic food">\n' +
'  <div class="card-body">\n' +
'    <a href="#" style="color: black;">\n' +
'      <span class="card-title">' +data[i].title+
'</span>\n' +
'    </a>\n' +
'    <ul class="rating product-grid pt-1">\n' +
'      <li class="fa fa-star"></li>\n' +
'      <li class="fa fa-star"></li>\n' +
'      <li class="fa fa-star"></li>\n' +
'      <li class="fa fa-star"></li>\n' +
'      <li class="fa fa-star"></li>\n' +
'    </ul>\n' +
'    <div class="product-content">\n' +
'      <div class="pt-1" style="color: gray; font-weight: lighter">\n' +
'        <span class="productPrice">' +data[i].price +
'</span>\n' +
'        <span> تومان</span>\n' +
'        <a href="#" style="color: black; font-size: medium" class="link-addTocart">\n' +
'          <span class="addToCart fa fa-shopping-basket float-end"></span>\n' +
'        </a>\n' +
'      </div>\n' +
'    </div>\n' +
'    <a id="other" type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal">\n' +
'       <hr>\n' +
'       <span id="otheroption" class="btn btn-sm bg-white shadow-sm rounded-3" style="font-size: smaller;">سایر موارد...</span>\n' +
'    </a>\n' +
'\n' +
'    <div class="modal fade options" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">\n' +
'       <div class="modal-dialog ">\n' +
'           <div class="modal-content rounded-5">\n' +
'               <div class="modal-header foodorder" >\n' +
'                    <span class="" id="exampleModalLabel">موارد دلخواه را اضافه کنید</span>\n' +
'               </div>\n' +
'               <div class="modal-body">\n' +
'               <form>\n' +
'                   <div class="mb-3">\n' +
'                       <input type="checkbox" id="vehicle1" name="vehicle1" value="سس">\n' +
'                           <label for="vehicle1" class="small">سس اضافه</label>\n' +
'                           <span class="float-end small">۵،۰۰۰ تومان</span>\n' +
'                            <br>\n' +
'                       <input type="checkbox" id="vehicle2" name="vehicle1" value="پنیر">\n' +
'                           <label for="vehicle1" class="small">پنیر اضافه</label>\n' +
'                           <span class="float-end small">۷،۰۰۰ تومان</span>\n' +
'                           <br>\n' +
'                       <input type="checkbox" id="vehicle3" name="vehicle1" value="نان">\n' +
'                           <label for="vehicle1" class="small">نان اضافه</label>\n' +
'                           <span class="float-end small">۱۲،۰۰۰ تومان</span>\n' +
'                           <br>\n' +
'                   </div>\n' +
'               </form>\n' +
'           </div>\n' +
'           <div class="modal-footer" style="display:block">\n' +
'               <button type="button" class="btn btn-sm myBtn rounded-3">تایید</button>\n' +
'               <button type="button" class="btn btn-sm myBtn rounded-3" data-bs-dismiss="modal">بستن</button>\n' +
'           </div>\n' +
'       </div>\n' +
'     </div>\n' +
'   </div>\n'+
'  </div>\n' +
'</div>'+
'</div>')
    }
    }) ;

fetch("foodItems.json")
    .then(response=>response.json())
    .then(data=>{
        for (var i = 0; i < data.length; i++)
        {
            $('#bestSelling').append('<div class="MultiCarousel " data-items="1,3,5,6" data-slide="1" id="MultiCarousel" data-interval="1000">\n' +
                '                <div class="MultiCarousel-inner col-sm-4">' +
                '                    <div class="item">\n' +
                '                        <div class="pad15">\n' +
                '                            <div class="product-grid">\n' +
                '                                <div class="product-image">\n' +
                '                                    <a href="">\n' +
                '                                        <img class="pic-1"  src="' +data[i].image +
                '">\n' +
                '                                    </a>\n' +
                '                                </div>\n' +
                '\n' +
                '                                <ul class="rating pb-5 bg-white">\n' +
                '                                    <li class="fa fa-star"></li>\n' +
                '                                    <li class="fa fa-star"></li>\n' +
                '                                    <li class="fa fa-star"></li>\n' +
                '                                    <li class="fa fa-star"></li>\n' +
                '                                    <li class="fa fa-star"></li>\n' +
                '                                </ul>\n' +
                '\n' +
                '                                <div class="product-content">\n' +
                '                                    <a href="#" style="color: black;"><span class="card-title">' +data[i].title+
                '</span></a>\n' +
                '                                    <div class="pt-1" style="color: gray; font-weight: lighter">\n' +
                '                                        <span>' +data[i].price+
                '</span>\n' +
                '                                    </div>\n' +
                '                                    <div class="">\n' +
                '                                    <hr class="border-warning ">\n' +
                '                                        <a href="#" style="color: black; font-size: small"><span class="">+اضافه به سبد خرید</span></a>\n' +
                '                                    </div>\n' +
                '                                </div>\n' +
                '                            </div>\n' +
                '                        </div>\n' +
                '                        </div>\n' +
                '                        </div>\n' +
                '                    </div>\n')
        }

    }) ;

    $('#orderCart').append(
        '            <div class="container d-flex justify-content-center mt-5 orderSticky">\n' +
        '\n' +
        '                <div class="cardOrder shadow ">\n' +
        '                    <div class=" foodorder">\n' +
        '                        <span>سفارشات</span>\n' +
        '                    </div>\n' +
        '\n' +
        '                   <div class="cart-row">\n'+
        '                      <div class="top-container cart-item" style="justify-content: space-between">\n' +
        '                        <img src="img/fast-food-3.jpg" class="img-fluid profile-image " width="65" height="65">\n' +
        '\n' +
        '                        <div class="ml-3">\n' +
        '                            <h5 class="name pb-2 foodName">برگر ویژه</h5>\n' +
        '                            <div class="qty-buttons">\n' +
        '                                <input type="button" value="+" class="qtyplus border-0 bg-transparent" name="plus">\n' +
        '                                <input type="text" name="qty" value="1" class="cart-quantity-input qty form-control border-0" style="font-size: small">\n' +
        '                                <input type="button" value="-" class="qtyminus bg-transparent border-0" name="minus">\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <div>\n' +
        '                            <span class="cart-price text-dark gheymat">۷۰.۰۰۰ تومان</span>\n' +
        '                            <span><i class="fa fa-trash text-danger removeItem"></i></span>\n' +
        '                        </div>\n' +
        '                     </div>\n' +
        '                  </div>\n' +
        '\n' +
        '                    <div class="top-container delivery">\n' +
        '                        <input type="radio" class="bg-warning color "><span class="text-dark m-1">هزینه ارسال ۲۵۰۰۰ تومان</span>\n' +
        '                    </div>\n' +
        '                    <div class="top-container" id="totalCart">\n' +
        '                        <h6 class="cart-total-price text-dark m-1" >جمع کل ۷۵۰۰۰ تومان</h6>\n' +
        '                    </div>\n' +
        '\n' +
        '                    <div class="top-container ">\n' +
        '                        <button class="myBtn border-0 rounded-5 w-100 p-2">پرداخت</button>\n' +
        '                    </div>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '        </div>')





        
const addButton = newElement.querySelector(".addToCart")
addButton.addEventListener("click", event=>{
    findListOfItems.innerText =""

    fetch("foodItems.json", {
        method: "POST",
        Headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            cart_id:1,
            product_id: product.id
        })
    })
    .then(response => response.json())
    .then(newCartItem=>{
        cartArray.push(newCartItem);
        renderAllCartItems(cartArray)
    })
})

const findListOfItems = document.querySelector(".cart-item")




$('.link-addTocart').click(function (){
    $("data[i].title").append('<h5></h5>')
});














        

// remove from order box
// if (document.readyState === "loading"){
//     document.addEventListener('DOMContentLoaded', ready)
// } else {
//     ready()
// }

// function  ready(){
//     var removeCartItemButtons = document.getElementsByClassName('removeItem')
//     for (var i=0; i < removeCartItemButtons.length; i++){
//         var button =removeCartItemButtons[i]
//         button.addEventListener('click',removeCartItem)
//     }
//     var quantityInputs = document.getElementsByClassName('cart-quantity-input')
//     for (var i=0; i < quantityInputs.length; i++){
//         var input = quantityInputs[i]
//         input.addEventListener('change', quantityChanged)
//     }

// function removeCartItem(event){
//     var buttonClicked = event.target
//     buttonClicked.parentElement.parentElement.parentElement.remove()
//     updateCartTotal()
// }

// function quantityChanged(event){
//     var input = event.target
//     if (isNaN(input.value) || input.value <= 0){
//         input.value = 1
//     }
//     updateCartTotal()
// }

// }







