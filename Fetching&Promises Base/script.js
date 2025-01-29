async function sendAndLog({name = null, message = null}, format){
    try {
        let contentType, contentBody;
        if (format === 'json') {
            contentType = 'application/json';
            contentBody = JSON.stringify({name, message});
        } else if (format === 'form') {
            contentBody = new FormData();
            contentBody.append('name', name);
            contentBody.append('message', message);
        } else {
            throw new Error('Некорректный формат данных');
        }

        let response = await fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: contentType === 'json' ? { 'Content-type': contentType} : {},
            body: contentBody
        });
        if (!response.ok) {
            throw new Error(`Ошибка фетчинга: ${response.status}`)
        }
        let reader = response.body.getReader();
        let decoder = new TextDecoder('utf-8');
        let result = '';
        while (true) {

            let {done, value} = await reader.read();

            if (done) {
                break;
            }
            result += decoder.decode(value, {stream: true});
            console.clear();
            console.log(result);
        }
        return result;
    } catch (error) {
        console.log(error.message);
        return '';
    }
}

sendAndLog({ name: "John", message: "Hello, JSON!" }, "json")
    .then(console.log)
    .catch(console.error);

sendAndLog({ name: "Jane", message: "Hello, FormData!" }, "form")
    .then(console.log)
    .catch(console.error);