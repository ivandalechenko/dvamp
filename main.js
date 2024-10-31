import './style.scss';


const ca = 'DV92AF6RzKMqMBVQNiZZmjrCfj6pTrwshaUmSgoZpump';
document.getElementById('ca_val').innerHTML = ca
document.getElementById('ca').onclick = (ca) => {
    navigator.clipboard.writeText(ca)
        .then(() => {
            alert("CA Successfully copied!")
        })
}