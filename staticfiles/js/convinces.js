let num = 0
const province_list =['กรุงเทพมหานคร', 'สมุทรปราการ', 'นนทบุรี', 'ปทุมธานี', 'พระนครศรีอยุธยา', 
                    'อ่างทอง', 'ลพบุรี', 'สิงห์บุรี', 'ชัยนาท', 'สระบุรี', 'ชลบุรี', 'ระยอง', 'จันทบุรี', 'ตราด', 'ฉะเชิงเทรา', 
                    'ปราจีนบุรี', 'นครนายก', 'สระแก้ว', 'นครราชสีมา', 'บุรีรัมย์', 'สุรินทร์', 'ศรีสะเกษ', 'อุบลราชธานี', 'ยโสธร', 
                    'ชัยภูมิ', 'อำนาจเจริญ', 'หนองบัวลำภู', 'ขอนแก่น', 'อุดรธานี', 'เลย', 'หนองคาย', 'มหาสารคาม', 'ร้อยเอ็ด', 
                    'กาฬสินธุ์', 'สกลนคร', 'นครพนม', 'มุกดาหาร', 'เชียงใหม่', 'ลำพูน', 'ลำปาง', 'อุตรดิตถ์', 'แพร่', 'น่าน', 'พะเยา', 
                    'เชียงราย', 'แม่ฮ่องสอน', 'นครสวรรค์', 'อุทัยธานี', 'กำแพงเพชร', 'ตาก', 'สุโขทัย', 'พิษณุโลก', 'พิจิตร', 'เพชรบูรณ์', 
                    'ราชบุรี', 'กาญจนบุรี', 'สุพรรณบุรี', 'นครปฐม', 'สมุทรสาคร', 'สมุทรสงคราม', 'เพชรบุรี', 'ประจวบคีรีขันธ์', 'นครศรีธรรมราช', 
                    'กระบี่', 'พังงา', 'ภูเก็ต', 'สุราษฎร์ธานี', 'ระนอง', 'ชุมพร', 'สงขลา', 'สตูล', 'ตรัง', 'พัทลุง', 'ปัตตานี', 'ยะลา', 
                    'นราธิวาส', 'บึงกาฬ']


document.getElementById("province-show").innerHTML = 
`
<h1 id="province-selected" class="mouse-hover" onclick="click_on()"> ${province_list[num]} </h1>
`;
document.getElementById("province-selected").value = 1;

// hover_font = () => {
//     document.getElementById("province-show").style.color = "rgb(255, 255, 255, )";
// };

select_province = (num) => {
    province = document.getElementById("mark-province" + String(num)).innerHTML;
    document.getElementById("province-show").innerHTML = 
    `
    <h1 id="province-selected" class="mouse-hover" style="cursor: pointer;" onclick="click_on()"> ${province} </h1>
    `;

    document.getElementById("province-selected").value = num+1;
    document.getElementById("drop-down-container").style.background = "rgb(0, 0, 0, 0)"
    document.getElementById("amphoe-show").style.display = "block"
    document.getElementById("drop-down-container").style.overflowY = "hidden";
    document.getElementById("trakra").style.zIndex = "20"
    console.log(num);

    let province_id = document.getElementById("province-selected").value;
    amphoe_list = []
    for (let i=0 ; i < amphoe.length; i++){
		if (amphoe[i]['province_id'] == province_id){
		amphoe_list.push(amphoe[i]['name_th'])
		}
    }
    console.log(amphoe_list)

    document.getElementById("amphoe-show").innerHTML =
    `
    <h1 id="amphoe-select" class="mouse-hover" onclick="click_amphoe()">${amphoe_list[0]}</h1>
    `;

};

click_on = () => {
    document.getElementById("province-show").innerHTML = "";
    document.getElementById("drop-down-container").style.overflowY = "scroll";
    document.getElementById("drop-down-container").style.background = "rgb(0, 0, 0, 0.6)";
    document.getElementById("trakra").style.zIndex = "-20";
    for (let i = 0; i < province_list.length; i++){
        document.getElementById("province-show").innerHTML +=
        `
        <h1 class="mouse-hover" id="mark-province${i}" 
        onclick = "select_province(${i})"
        > ${province_list[i]} </h1>
        `
        ;
    };
};

// --------------------------------- Amphoe --------------------------------------
// const amphoe = require('./thai_amphures.json');

// var data = JSON.parse('./thai_amphures.json'.toString());
// console.log(amphoe["RECORDS"][1])
// amphoe_func = (province_id) =>{
//     for(let i = 0; i < amphoe['RECORDS'].length; i++){
//         if (amphoe['RECORDS'][i]['province_id'] == province_id+1){
//             document.getElementById("amphoe-show").innerHTML += 
//             `
//             <h1 style="cursor: pointer;" onclick="amphoe_func()"> ${amphoe['RECORDS'][i][name_th]} </h1>
//             `;
//         }
//     }

// };