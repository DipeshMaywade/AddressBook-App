window.addEventListener('DOMContentLoaded', (event) =>{
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function(){
        if(name.value.length==0){
            textError.textContent = "";
            return;
        }
        try{
            (new AddressBookDetails()).firstName = name.value;
            textError.textContent = "";
        }catch(e){
            textError.textContent = e;
        }
    });

    const address = document.querySelector('#address');
    const addressError = document.querySelector('.addressError')
    address.addEventListener('input', function(){
        if(address.value.length==0){
            addressError.textContent = "";
            return;
        }
        try{
            (new AddressBookDetails()).address = address.value;
            addressError.textContent = "";
        }catch(e){
            addressError.textContent = e;
        }
    });

    const zip = document.querySelector('#zip');
    const zipError = document.querySelector('.zipError')
    zip.addEventListener('input', function(){
        if(zip.value.length==0){
            zipError.textContent = "";
            return;
        }
        try{
            (new AddressBookDetails()).zip = zipError.value;
            zipError.textContent = "";
        }catch(e){
            zipError.textContent = e;
        }
    });

    const phone = document.querySelector('#phone');
    const phoneError = document.querySelector('.phoneError')
    phone.addEventListener('input', function(){
        if(phone.value.length==0){
            phoneError.textContent = "";
            return;
        }
        try{
            (new AddressBookDetails()).phoneNum = phone.value;
            phoneError.textContent = "";
        }catch(e){
            phoneError.textContent = e;
        }
    });
});

const save = () =>{
    try {
        let addressBookData = createAddressBook();
        createAndUpdateStorage(addressBookData);
        
    } catch (e) {
        return
    }
}

function createAndUpdateStorage(addressBookData){
    let addressBookDataList = JSON.parse(localStorage.getItem("AddressBookList"));
    
    if(addressBookDataList != undefined){
        addressBookDataList.push(addressBookData);
    }else{
        addressBookDataList = [addressBookData]
    }
    alert(addressBookDataList.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookDataList))
}

const createAddressBook = () => {
    let addressBookData = new AddressBookDetails();
    try {
        addressBookData.firstName = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error', e);
        throw e ;
    }

    try {
        addressBookData.address = getInputValueById('#address');
    } catch (e) {
        setTextValue('.addressError', e);
        throw e ;
    }

    addressBookData.city = getInputValueById('#city');
    addressBookData.state = getInputValueById('#state');
    
    addressBookData.zip = getInputValueById('#zip')

    try {
        addressBookData.phoneNum = getInputValueById('#phone');
    } catch (e) {
        setTextValue('.phoneError', e);
        throw e ;
    }
    console.log("from save");

    alert(addressBookData.toString());

    return addressBookData
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}
