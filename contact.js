function ShowData() {
    let showName = document.getElementById('name').value;
    let showEmail = document.getElementById('email').value;
    let showPhone = document.getElementById('phone').value;
    let showSubject = document.getElementById('input_subject').value;
    let showMessage = document.getElementById('message').value;


    console.log(showName);
    console.log(showEmail);
    console.log(showPhone);

    if (showName == '') {
        return alert('nama harus di isi')
    }
    else if (showEmail == '') {
        return alert('email harus di isi')
    }
    else if (showPhone == '') {
        return alert('nomor telfon harus di isi')
    }
    else if (showSubject == '') {
        return alert('subject harus di isi')
    }

    let emailReciver = 'underpak92@gmail.com'

    let a = document.createElement('a');
    a.href = `mailto:${emailReciver}?subcject:${showSubject}&body= Hello, %0D%0Amy name is ${showName}, ${showMessage}`

    a.click()
}