import Api from '../../config/index'
// console.log(Api)


function getHttp(methods = 'get', url, data) {
    function then(call) {
        const run = () => {
            const xhr = new XMLHttpRequest()
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    call(JSON.parse(xhr.responseText))
                }
            }
            xhr.open(methods, url, false)
            xhr.send(methods === 'get'
                ? null
                : data)
        }
        setTimeout(run, 0)
    }
    return {then}

}
getHttp('get', '/online/testdata/list').then(d => {
//   postMessage(d.)
    // console.log(d)
    postMessage(d)
})