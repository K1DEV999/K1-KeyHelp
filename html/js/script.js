function display(bool) {
    if (bool) {
        $(".main__container").fadeIn(500);
    } else {
        $(".main__container").hide();
    }
}

display(false)

window.addEventListener('message', function(event) {
    var item = event.data;
    if (item.type === "ui") {
        if (item.status == true) {
            display(true)
        } else {
            display(false)
        }
    } 
    else if (item.type == "updateKeys")
    {
        for (var i=0; i < item.data.length; i++)
        {
            $(".main__content-left-grid-container").append(`
                <div class="main__content-item">
                <div class="main__content-item-grid">
                    <div class="main__content-item-key">
                        <p>${item.data[i].big}</p>
                    </div>
                    <div class="main__content-item-description">
                        <p class="main__content-item-header">${item.data[i].header}</p>
                        <p class="main__content-item-description">${item.data[i].desc}</p>
                    </div>
                </div>
            </div>
            `)
        }
    }
})

document.onkeyup = function (data) {
    if (data.which == 27) {
        $.post('http://K1-KeyHelp/exit', JSON.stringify({}));
        return
    }
};

$.post("http://K1-KeyHelp/loaded")