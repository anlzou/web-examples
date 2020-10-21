const axios = require('axios');

axios.get('http://localhost:63342/Mock/04/data.json?_ijt=b1jcepg1p1q609g7h4jnrvdlg2')
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log('错误' + err);
    });