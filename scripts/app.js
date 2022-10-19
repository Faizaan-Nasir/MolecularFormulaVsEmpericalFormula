let Elements = [
    { mass: 1, element: "H" },
    { mass: 4, element: "He" },
    { mass: 7, element: "Li" },
    { mass: 9, element: "Be" },
    { mass: 11, element: "B" },
    { mass: 12, element: "C" },
    { mass: 14, element: "N" },
    { mass: 16, element: "O" },
    { mass: 19, element: "F" },
    { mass: 20, element: "Ne" },
    { mass: 23, element: "Na" },
    { mass: 24, element: "Mg" },
    { mass: 27, element: "Al" },
    { mass: 28, element: "Si" },
    { mass: 31, element: "P" },
    { mass: 32, element: "S" },
    { mass: 35.5, element: "Cl" },
    { mass: 40, element: "Ar" },
    { mass: 39, element: "K" },
    { mass: 40, element: "Ca" }
]
function demo() {
    document.getElementById("EFE1").innerHTML = "C"
    document.getElementById("EFENo.1").innerHTML = "1"
    document.getElementById("EFE2").innerHTML = "H"
    document.getElementById("EFENo.2").innerHTML = "2"
    document.getElementById("EFE3").innerHTML = "O"
    document.getElementById("EFENo.3").innerHTML = "1"
}
function calculate() {
    EFM = 0
    for (i = 0; i <= 19; i++) {
        if (Elements[i].element == document.getElementById("EFE1").value) {
            EFM = EFM + (Elements[i].mass) * document.getElementById("EFENo.1").value
        }
    }
    for (j = 0; j <= 19; j++) {
        if (Elements[j].element == document.getElementById("EFE2").value) {
            EFM = EFM + (Elements[j].mass) * document.getElementById("EFENo.2").value
        }
    }
    for (k = 0; k <= 19; k++) {
        if (Elements[k].element == document.getElementById("EFE3").value) {
            EFM = EFM + (Elements[k].mass) * document.getElementById("EFENo.3").value
        }
    }
    number = Math.round((document.getElementById("molecular_mass").value / EFM))
    n1 = String(document.getElementById("EFENo.1").value * number)
    n2 = String(document.getElementById("EFENo.2").value * number)
    if (document.getElementById("EFENo.3").value != 0) {
        n3 = String(document.getElementById("EFENo.3").value * number)
    }
    else {
        n3 = ""
    }
    MF = String(document.getElementById("EFE1").value + n1 + document.getElementById("EFE2").value + n2 + document.getElementById("EFE3").value + n3)
    document.getElementById("MF").innerHTML = MF
}
