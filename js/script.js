document.addEventListener('DOMContentLoaded', function () {
    showPerimeterCalculator();
})

function showPerimeterCalculator() {
    document.getElementById('formBody').innerHTML = `
    <form id="perimeterForm">
        <div class="input-form">
            <label class="poppins-medium" for="side-a">Side A</label>
            <input id="sideA" class="poppins-regular" type="number" placeholder="Input side A..." name="side-a" required>
        </div>
        <div class="input-form">
            <label class="poppins-medium" for="side-b">Side B</label>
            <input id="sideB" class="poppins-regular" type="number" placeholder="Input side B..." name="side-b" required>
        </div>
        <div class="input-form">
            <label class="poppins-medium" for="side-c">Side C</label>
            <input id="sideC" class="poppins-regular" type="number" placeholder="Input side C..." name="side-c" required>
        </div>
        <div class="button-calculate">
            <Button onclick="calculatePerimeter()" type="button" class="poppins-regular">Calculate</Button>
        </div>
    </form>
    <div class="answer" id="perimeterAnswer"></div>`;

    document.getElementById('perimeterButton').classList.add('active');
    document.getElementById('areaButton').classList.remove('active');
}

function calculatePerimeter() {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);
    const perimeter = sideA + sideB + sideC;

    if(isNaN(sideA) || isNaN(sideB || isNaN(sideC) || sideA == '' || sideB == '' || sideC == '')) {
        document.getElementById('perimeterAnswer').innerHTML = `<p class="poppins-semibold">Invalid input! Make sure all input is numbers.</p>`;
        return;
    }

    document.getElementById('perimeterAnswer').innerHTML = `
        <p class="poppins-semibold">Formula for perimeter of a triangle : </p>
        <span class="poppins-regular">Perimeter = Side A + Side B + Side C</span>
        <span class="poppins-regular">Perimeter = ${sideA} + ${sideB} + ${sideC}</span>
        <span class="poppins-regular">Perimeter = <span class="answer-number">${perimeter}</span></span>
    `;
}

function showAreaCalculator() {
    document.getElementById('formBody').innerHTML = `
    <form id="areaForm">
        <div class="input-form">
            <label class="poppins-medium" for="base">Base</label>
            <input id="base" class="poppins-regular" type="number" placeholder="Input Base..." name="base">
        </div>
        <div class="input-form">
            <label class="poppins-medium" for="height">Height</label>
            <input id="height" class="poppins-regular" type="number" placeholder="Input Height..." name="height">
        </div>
        <div class="button-calculate">
            <Button type="button" class="poppins-regular" onclick="calculateArea()">Calculate</Button>
        </div>
    </form>
    <div id="areaAnswer" class="answer"></div>`;

    document.getElementById('areaButton').classList.add('active');
    document.getElementById('perimeterButton').classList.remove('active');
}

function calculateArea() {
    const base = document.getElementById('base').value;
    const height = document.getElementById('height').value;
    const heightAndBase = base * height;
    const area = 0.5 * heightAndBase;

    if(isNaN(base) || isNaN(height) || base == '' || height == '') {
        document.getElementById('areaAnswer').innerHTML = `<p class="poppins-semibold">Invalid input! Make sure all input is numbers.</p>`;
        return;
    }

    document.getElementById('areaAnswer').innerHTML = `
        <p class="poppins-semibold">Formula for area of a triangle : </p>
        <span class="poppins-regular">Area = 0.5 x Base x Height</span>
        <span class="poppins-regular">Area = 0.5 x ${base} x ${height}</span>
        <span class="poppins-regular">Area = 0.5 x ${heightAndBase}</span>
        <span class="poppins-regular">Area = <span class="answer-number">${area}</span></span>
    `;
}

