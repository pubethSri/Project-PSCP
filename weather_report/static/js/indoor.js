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
<h1 class="mouse-hover" onclick="click_on() "> ${province_list[num]} </h1>
`;

document.getElementById("amphoe-show").innerHTML = 
`
<h1 class="mouse-hover" "> ${amphoe['RECORDS'][0][name_th]} </h1>
`;

// hover_font = () => {
//     document.getElementById("province-show").style.color = "rgb(255, 255, 255, )";
// };

select_province = (num) => {
    province = document.getElementById("mark-province" + String(num)).innerHTML;
    document.getElementById("province-show").innerHTML = 
    `
    <h1 style="cursor: pointer;" onclick="click_on()"> ${province} </h1>
    `;
    document.getElementById("drop-down-container").style.background = "rgb(0, 0, 0, 0)"
    document.getElementById("amphoe-show").style.display = "block"
    console.log(province);
};

click_on = () => {
    document.getElementById("province-show").innerHTML = ""
    document.getElementById("province-show").style.overflowY = "scroll";
    document.getElementById("drop-down-container").style.background = "rgb(0, 0, 0, 0.6)";
    // document.getElementById("amphoe-show").style.display = "none";
    for (let i = 0; i < province_list.length; i++){
        document.getElementById("province-show").innerHTML +=
        `
        <h1 class="mouse-hover" id="mark-province${i}" 
        onclick = "select_province(${i})"
        value = '${i}'> ${province_list[i]} </h1>
        `
        ;
    };
};

// --------------------------------- Amphoe --------------------------------------

const amphoe = require('./thai_amphures.json');
console.log(amphoe);

amphoe_func = (province_id) =>{
    for(let i = 0; i < amphoe['RECORDS'].length; i++){
        if (amphoe['RECORDS'][i]['province_id'] == province_id+1){
            document.getElementById("amphoe-show").innerHTML = 
            `
            <h1 style="cursor: pointer;" onclick="amphoe_func()"> ${amphoe['RECORDS'][i][name_th]} </h1>
            `;
        }
    }

};

