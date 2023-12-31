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


select_province = (num) => {
    let province = document.getElementById("mark-province" + String(num)).innerHTML;
    document.getElementById("province-show").innerHTML = 
    `
    <h1 id="province-selected" class="mouse-hover" style="cursor: pointer;" onclick="click_on()"> ${province} </h1>
    `;
    document.removeEventListener('keydown', keyboard_listen)
    document.getElementById("province-selected").value = num+1;
    document.getElementById("drop-down-container").style.background = "rgb(0, 0, 0, 0)"
    document.getElementById("amphoe-show").style.display = "block"
    document.getElementById("drop-down-container").style.overflowY = "hidden";
    document.getElementById("trakra").style.zIndex = "20"
    
    console.log(province);
    let province_id = document.getElementById("province-selected").value;
    amphoe_list = []
    for (let i=0 ; i < amphoe.length; i++){
		if (amphoe[i]['province_id'] == province_id){
		amphoe_list.push(amphoe[i]['name_th'])
		}
    }
    document.getElementById("amphoe-show").innerHTML =
    `
    <h1 id="amphoe-select" class="mouse-hover" onclick="click_amphoe()">${amphoe_list[0]}</h1>
    `;
    console.log(amphoe_list[0]);

};


click_on = () => {
    document.getElementById("province-show").innerHTML = "";
    document.getElementById("drop-down-container").style.overflowY = "scroll";
    document.getElementById("drop-down-container").style.background = "rgb(0, 0, 0, 0.6)";
    document.getElementById("trakra").style.zIndex = "-20";
    document.getElementById("amphoe-select").style.display = "none";

    sort(input="") // Ativate sorting event

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


const keyboard_listen = function(e){
    // console.log(e)
    var delayInMilliseconds = 1000;
    var timmer= setTimeout(function() {
    }, delayInMilliseconds)
    let ready_click = true
    console.log(e.keyCode)
    if (e.keyCode == 8){
        input = input.slice(0, -1);
        document.getElementById("province-show").innerHTML = ""
        for (let i = 0; i < province_list.length; i++){
            document.getElementById("province-show").innerHTML +=
            `
            <h1 class="mouse-hover" id="mark-province${i}" 
            onclick = "select_province(${i})"
            > ${province_list[i]} </h1>
            `
            ;
        };
    }else if(48 <= e.keyCode && e.keyCode <= 90 || 186 <= e.keyCode && e.keyCode <= 222) {
        input += e.key;
    }
    console.log(input)

    // window.clearTimeout(timmer);
    ready_click = true
    for (let i = 0; i < province_list.length; i++){
        if (!province_list[i].includes(input)){
            document.getElementById("mark-province"+i).style.display = "none";
        } else {
            ready_click = false
        }
    };
    timmer= setTimeout(function() {
        if (ready_click){
            select_province(0)
            console.log(input)
            document.removeEventListener('keydown', keyboard_listen)
        }
    }, delayInMilliseconds)

}

sort = (input) => {

    // document.addEventListener('keypress', keyboard_listen, input);
    document.addEventListener('keydown', keyboard_listen, input);
    
}

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