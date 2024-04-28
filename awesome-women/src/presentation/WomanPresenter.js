// Class for women presenter which contains all the logic for visual presentation in html.
class WomanPresenter {
    constructor(womenData) {
        this.data = womenData;
    }

    pinIcon() {
        let iconImage = document.createElement("img");
        iconImage.src = "presentation/public/img/woman-minimalpin.png";
        iconImage.style.width = "3rem";
        return iconImage;
    }

    womanQuote() {
        return `<div class="carousel-item flex flex-row content-center flex-wrap p-4 justify-center" style="width: 100%; height: 100%;">
            <div class="w-1/5 flex flex-wrap justify-center content-center">
                <div id="woman-picture" class="background-image rounded-full bg-gray-300 w-16 h-16 lg:w-20 lg:h-20" style="background-image: url('${this.data.photo_url}');"></div>
            </div>
            <div class="w-4/5 h-full flex flex-col items-end justify-between">
                <div class="flex flex-col items-end justify-center" style="min-height: 60%">
                    <p>${this.data.quote}</p>
                    <p class="quote">- ${this.data.name}.</p>
                </div>
                <a class="btn-floating waves-effect waves-light"><i class="material-icons">share</i></a>
            </div>
        </div>
        `
    }

    showWomanDetail() {
        let modal = $('#womanModal');
        $('#modal-woman-name').text(this.data.name);
        $('#modal-img').css('background-image', `url(${this.data.photo_url})`);
        $('#modal-woman-quote').text(`"${this.data.quote}"`);
        $('#modal-woman-description').text(this.data.description);
        $('#modal-woman-link').attr('href', this.data.wiki_url);
        modal.modal('open');
    }
}