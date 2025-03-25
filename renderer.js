const information = document.getElementById("info")
information.innerText = `This is a text from the renderer process, running on Node.js ${window.versions.node()}, Chrome ${window.versions.chrome()}, and Electron ${window.versions.electron()}.`

const ping = () => {
    window.versions.ping().then((res) => {
        information.innerText = `Ping: ${res}`
    })
}

ping()