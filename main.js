import './style.scss';


const ca = '12345678';
document.getElementById('ca_val').innerHTML = ca
document.getElementById('ca').onclick = (ca) => {
    navigator.clipboard.writeText(ca)
        .then(() => {
            alert("CA Successfully copied!")
        })
}