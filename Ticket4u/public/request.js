async function request(data, endpoint, method) {
    //const url = 'http://localhost:3000/api/v1/' + endpoint;
    const url = 'https://gaspor-apis.herokoapp.com/api/v1/' + endpoint;
    const response = await fetch(url, {
        method: method, 
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken'),
            'Accept': '/',
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data)
    });

    const json = await response.json();
    if (json.message == 'jwt expired') {
        const tokens = await request({}, 'user/refresh_token', 'GET');
        sessionStorage.setItem('accessToken', tokens.accessToken);
        sessionStorage.setItem('refreshToken', tokens.refreshToken);
        return;
    }

    return json;
}
