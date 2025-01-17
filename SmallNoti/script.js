let Notification = {
    createNotification: function ({top = 0, right = 10, html, className = null}) {
    this.notification = document.createElement('div');
    this.notification.className = 'notification';
    if (className) {
        this.notification.classList.add(className);
    }
    this.notification.innerHTML = html;
    this.notification.style.cssText = ` top: ${top}px; right: ${right}px;`

    document.body.append(this.notification);
    let state = 0
    this.Interval = setInterval(() => {
        if (state === 0) {
            state = 1;
            this.notification.style.display = 'none';
        } else {
            state = 0
            this.notification.style.display = 'block';
        }

    }, 1500);
    },

    stopNotification: function () {
        clearInterval(this.Interval);
        this.notification.style.display = 'block';
    },

    showNotification: function () {
        let state = 0;
        this.Interval = setInterval(() => {
            if (state === 0) {
                state = 1;
                this.notification.style.display = 'none';
            } else {
                state = 0
                this.notification.style.display = 'block';
            }

        }, 1000);
    }
}

Notification.createNotification({
    top: 10, // 10px от верхней границы окна (по умолчанию 0px)
    right: 10, // 10px от правого края окна (по умолчанию 0px)
    html: "Hello!", // HTML-уведомление
    className: "welcome" // дополнительный класс для div (необязательно)
});


document.querySelector('.notification.welcome').addEventListener('mouseover', () => {Notification.stopNotification()})
document.querySelector('.notification.welcome').addEventListener('mouseout', () => {Notification.showNotification()})