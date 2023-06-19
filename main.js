console.log("Hello World!");

document.querySelector("body").innerHTML=`        <div class="container-fluid" id="xxx">
            <div class="scroll" id="scroll">
                <div class="containe">
                    <div class="left">l</div>
                    <div class="center">
                        <div class="nav">
                            <div class="me"><i class="fa fa-commenting" aria-hidden="true"></i></div>
                            <div class="wifi"><i class="fa fa-wifi" aria-hidden="true"></i></div>
                            <div class="sig"><i class="fa fa-signal" aria-hidden="true"></i></div>
                            <div class="si"><i class="fa fa-signal" aria-hidden="true"></i></div>
                            <div class="b"><i class="fa fa-battery-three-quarters" aria-hidden="true"></i></div>
                        </div>
                        <input type="text" id="number" readonly="readonly" />
                        <div class="sw">
                            <div class="s"><div class="swi"></div></div>
                        </div>
                        <div class="btn-list">
                            <input type="button" value="1" /> <input type="button" value="2" /> <input type="button" value="3" /> <input type="button" value="+" /> <input type="button" value="4" /> <input type="button" value="5" />
                            <input type="button" value="6" /> <input type="button" value="-" /> <input type="button" value="7" /> <input type="button" value="8" /> <input type="button" value="9" /> <input type="button" value="*" />
                            <input type="button" value="0" /> <input type="button" value="." /> <input type="button" value="/" /> <input type="button" value="C" onclick="clearResult()" />
                        </div>
                        <div class="re"><input type="button" id="eq" value="p" onclick="pre()" /> <input type="button" id="equal" value="del" onclick="del()" /> <input type="button" id="equal" value="=" onclick="calculateResult()" /></div>
                    </div>
                    <div class="center-bottom">center</div>
                    <div class="right">right</div>
                    <div class="top">top</div>
                    <div class="bottom">bottom</div>
                </div>
            </div>
        </div>`;









var contain = document.querySelector(".containe");
var input = document.getElementById("number");
var inpv = input.value;
var sw = document.querySelector(".swi");
var s = document.querySelector(".s");
var experetion = " ";
sw.addEventListener("click", swit);
let ct = 1;
function swit() {
    if (ct === 1) {
        ct = 0;
        sw.style.marginLeft = "30px";
        s.style.background = "white";
        contain.style.transform = "rotateX(45deg)";
    } else {
        ct = 1;
        sw.style.marginLeft = "0px";
        s.style.background = "red";
        contain.style.transform = "translate(-14%,13%)";
    }
}

let btnl = document.querySelector(".btn-list");
let btn = btnl.querySelectorAll("input[type='button']");
const data = [];
let arry = Array.from(btn);
arry.splice(arry.length - 1, 1);
arry.forEach((e, ind) => {
    e.addEventListener("click", inputNum);
});

function inputNum(e) {
    if (input.value === "Erorr") {
        input.value = "";
    }
    input.value += e.target.value;
    let audio = new Audio("/audio/Shutter Click sound.mp3");

    audio.playbackRate = 3;

    audio.play();
}

document.querySelector(".swi").addEventListener("click", () => {
    let audio = new Audio("/audio/Nintendo Switch.mp3");
    audio.playbackRate = 5;
    audio.play();
});

function clearResult() {
    input.value = "";
}

function del() {
    let v = input.value;
    if (v > 0) {
        let up = v.slice(0, -1);
        input.value = up;
    }
}

function pre() {
    for (let i = 0; i < data.length; i++) {
        input.value = data[i];
    }
    data.splice(data.length - 1, 1);
}

//.......................

try {
    function calculateResult() {
        //genaret sound effect....

        let audio = new Audio("/audio/Bell Sound.mp3");
        audio.playbackRate = 5;
        audio.play();

        let ip = input.value;
        let ipl = ip.length;

        let icp = ip.charAt(ipl - 1);
        //console.log(ipl)

        if (icp === "+" || icp === "-" || icp === "*" || icp === "/") {
            input.value = "Erorr";
        }

        let ic = ip.charAt(0);

        if (ic === "+" || ic === "-" || ic === "*" || ic === "/") {
            input.value = 0;
        }

        if (ip === "") {
            input.value = 0;
        }

        if (input.value === "Erorr") {
            input.value = 0;
        }

        if (ip.includes("++") || ip.includes("+/") || ip.includes("+*") || ip.includes("*/") || ip.includes("/*")) {
            input.value = "Erorr";
        }

        data.push(input.value);
        // console.log(data)
        let res = eval(input.value);
        let resu = res.toFixed(2);
        input.value = resu;
    }
} catch (err) {
    console.log("vff");
}
