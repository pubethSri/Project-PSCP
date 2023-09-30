const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchPro = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

//Province here
let provinces = [
    "Bangkok", "Samut Prakan", "Nonthaburi", "Pathum Thani", "Phra Nakhon Si Ayutthaya",
    "Ang Thong", "Lop Buri", "Sing Buri", "Chai Nat", "Saraburi",
    "Nakhon Nayok", "Nakhon Pathom", "Phra Pathom Chedi", "Kanchanaburi", "Suphan Buri",
    "Ratchaburi", "Chanthaburi", "Trat", "Rayong", "Chon Buri",
    "Si Racha", "Chachoengsao", "Prachin Buri", "Sa Kaeo", "Nakhon Ratchasima",
    "Buri Ram", "Surin", "Si Sa Ket", "Ubon Ratchathani", "Yasothon",
    "Chaiyaphum", "Amnat Charoen", "Nong Bua Lamphu", "Khon Kaen", "Udon Thani",
    "Loei", "Nong Khai", "Maha Sarakham", "Roi Et", "Kalasin",
    "Sakon Nakhon", "Nakhon Phanom", "Mukdahan", "Chiang Mai", "Lamphun",
    "Lampang", "Uttaradit", "Phrae", "Nan", "Phayao",
    "Chiang Rai", "Mae Hong Son", "Nakhon Sawan", "Uthai Thani", "Kamphaeng Phet",
    "Tak", "Sukhothai", "Phitsanulok", "Phichit", "Phetchabun",
    "Ratchaburi", "Lopburi", "Singburi", "Chai Nat", "Saraburi",
    "Nakhon Nayok", "Kanchanaburi", "Suphan Buri", "Ayutthaya", "Phra Nakhon Si Ayutthaya",
    "Saraburi", "Ang Thong", "Lopburi", "Singburi", "Chai Nat",
    "Prachuap Khiri Khan", "Phetchaburi", "Ratchaburi", "Kanchanaburi", "Chumphon",
    "Ranong", "Surat Thani", "Phang Nga", "Phuket", "Krabi",
    "Nakhon Si Thammarat", "Trang", "Phatthalung", "Satun", "Songkhla",
    "Pattani", "Yala", "Narathiwat"];

function addProvince(selectedProvince) {
    options.innerHTML = "";
    provinces.forEach(province => {
        // if selected province and province is the same, add selected class
        let isSelected = province == selectedProvince ? "selected" : "";
        // adding each province into li and inserting all li into options tag
        let li = `<li onclick="updateName(this)" class="${isSelected}">${province}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addProvince();

function updateName(selectedLi) {
    searchPro.value = "";
    addProvince(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchPro.addEventListener("keyup", () => {
    let proarr = []; // create empty array for search
    let searchProVal = searchPro.value.toLowerCase();
    // return province that start alphabet relate to search input
    // and mapping returned province
    proarr = provinces.filter(data => {
        return data.toLowerCase().startsWith(searchProVal);
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");
    options.innerHTML = proarr ? proarr : `<p>Province not found</p>`;
});

selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
});