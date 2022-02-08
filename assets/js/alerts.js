function basic() {
    Swal.fire({
        title: 'basic alert',
        showCloseButton: true
    })
}

function timer() {
    let timerInterval

    Swal.fire({
        title: 'timer alert',
        html:
            'automatic close in <strong></strong> seconds<br/><br/>' +
            '<button id="increase" class="btn btn-warning">' +
            '5 seconds more',
        showCloseButton: true,
        timer: 5000,
        didOpen: () => {
            const content = Swal.getHtmlContainer()
            const $ = content.querySelector.bind(content)
            const increase = $('#increase')

            Swal.showLoading()

            increase.addEventListener('click', () => {
                Swal.increaseTimer(5000)
            })

            timerInterval = setInterval(() => {
                Swal.getHtmlContainer().querySelector('strong')
                    .textContent = (Swal.getTimerLeft() / 1000)
                        .toFixed(0)
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    })
}

function info() {
    Swal.fire({
        title: 'info alert',
        icon: 'info',
        html:
            'info maszehhh',
        showCloseButton: true
    })
}

function success() {
    Swal.fire({
        title: 'success alert',
        icon: 'success',
        html:
            'success maszehhh',
        showCloseButton: true
    })
}

function warning() {
    Swal.fire({
        title: 'warning alert',
        icon: 'warning',
        html:
            'warning maszehhh',
        showCloseButton: true
    })
}

function error() {
    Swal.fire({
        title: 'error alert',
        icon: 'error',
        html:
            'error maszehhh',
        showCloseButton: true
    })
}

function question() {
    Swal.fire({
        title: 'question alert',
        icon: 'question',
        html:
            'confused maszehhh',
        showCloseButton: true
    })
}

function confirmDialog() {
    Swal.fire({
        title: 'Click me if you want?',
        text: "it's your own risk!",
        icon: 'warning',
        html: "it's your own risk!",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="ti-thumb-up"></i> okey',
        cancelButtonText: '<i class="ti-thumb-down"></i> nope',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Great job man!',
                text: "thank's for doin that",
                icon: 'success',
            })
        } else {
            Swal.fire({
                title: 'Oh nope man!',
                text: "thank's for not doin that",
                icon: 'error',
            })
        }
    })
}

function ajax() {
    Swal.fire({
        title: 'input github username',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Search',
        showLoaderOnConfirm: true,
        preConfirm: (username) => {
            return fetch(`https://api.github.com/users/${username}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText)
                    }
                    return response.json()
                })
                .catch(error => {
                    Swal.showValidationMessage(
                        `Request failed: ${error}`
                    )
                })
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: `${result.value.login}'s photo`,
                imageUrl: result.value.avatar_url
            })
        }
    })
}