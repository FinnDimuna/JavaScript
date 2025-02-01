let controller = new AbortController();
let signal = controller.signal;

signal.addEventListener('abort', reject);

(async (user) => {
    return await new Promise(async (resolve, reject) => {
        try {
            setTimeout(() => controller.abort(), 60000);
            let response = await fetch('https://example.com', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(user),
                signal
            });
            if (!response.ok) {
                throw new Error(`Fetching error: ${response.status}`);
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
                console.log(result)
            }
            resolve(result);
        } catch (error) {
            console.log(error.message);
            throw error;
        }
    }).then(console.log).catch(console.error);
})();

