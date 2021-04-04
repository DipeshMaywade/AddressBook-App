let addressBookList;
window.addEventListener('DOMContentLoaded', (event) => {
    addressBookList = getAddressBookDataFromStorage();
    document.querySelector(".emp-count").textContent = addressBookList.length;
    createInnerHtml();
});

const getAddressBookDataFromStorage = () => {
     return localStorage.getItem('AddressBookList') ?
                         JSON.parse(localStorage.getItem('AddressBookList')):[];
}

const createInnerHtml = () => {
    const headerHtml = "<th>FullName</th><th>Address</th><th>City</th><th>State</th>"+
                       "<th>Zip Code</th><th>Phone Number</th><th>Action</th>";
    
    if (addressBookList.length == 0) return ;

    let innerHtml = `${headerHtml}`; 
    for (const addressBookData of addressBookList){
        innerHtml = `${innerHtml}
        <tr>
            <td>${addressBookData._firstName}</td>
            <td>${addressBookData._address}</td>
            <td>${addressBookData._city}</td>
            <td>${addressBookData._state}</td>
            <td>${addressBookData._zip}</td>
            <td>${addressBookData._phoneNum}</td>
            <td>
                <img id="1" onclick="remove(this)" src="../asset/icons/delete-black-18dp.svg" alt="Delete" name="" >
                <img id="1" onclick="update(this)" src="../asset/icons/create-black-18dp.svg" alt="Edit" name="">
            </td>
        </tr>
        `;
    }
document.querySelector('#table-display').innerHTML = innerHtml;
}