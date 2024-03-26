const womanDetail = (name, description, quote, picture) => {
    return `<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div class="shrink-0">
            <img class="h-12 w-12" src="${picture}" alt="Woman Picture">
        </div>
        <div>
            <div class="text-xl font-medium text-black">${name}</div>
            <p class="text-slate-500">${description}</p>
        </div>
    </div>`
}   

const womanPinIcon =  () => {
    const iconImage = document.createElement("img");
    iconImage.src = "presentation/public/img/woman-minimalpin.png";
    iconImage.style.width = "3rem";
    return iconImage;
}   