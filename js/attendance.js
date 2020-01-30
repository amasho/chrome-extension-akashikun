function begin() {
  attendanceRequest('/soldout/stamps', 11)
}

function finish() {
  attendanceRequest('/soldout/stamps', 12)
}

function attendanceRequest(uri, type) {
  var baseUri = 'https://atnd.ak4.jp/api/cooperation'
  chrome.storage.sync.get('apiToken', function(items) {
    var token = items.apiToken
    var status = document.getElementById('status')

    status.textContent = ''
    status.classList.remove('text-red-700')

    axios
      .post(baseUri + uri, {
        token,
        type
      })
      .then(function(data) {
        console.log(data)
        status.textContent = '打刻に成功しました'
      })
      .catch(function(e) {
        console.error(e)
        status.classList.add('text-red-700')
        status.textContent = '打刻に失敗しました'
      })
  })
}

document.getElementById('begin').addEventListener('click', begin)
document.getElementById('finish').addEventListener('click', finish)
