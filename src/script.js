const components = document.querySelectorAll(".component")

components.forEach((comp) => {
    const preview = comp.querySelector(".preview")
    const code = comp.querySelector(".code")
    const btn = comp.querySelector(".copy-btn")

    code.textContent = preview.innerHTML.trim()

    btn.addEventListener("click", async () => {
        await navigator.clipboard.writeText(preview.innerHTML.trim())
        btn.textContent = "copied!!"

        setTimeout(() => {
            btn.textContent = "copy"
        }, 1500);
    })
    
})