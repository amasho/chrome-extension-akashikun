function save_options() {
  var token = document.getElementById('api_token').value
  var error = document.getElementById('error')
  if (!token) {
    error.textContent = 'APIトークンが入力されていません'
    return
  }
  chrome.storage.sync.set(
    {
      apiToken: token
    },
    function() {
      var status = document.getElementById('status')
      status.textContent = '保存しました'
      setTimeout(function() {
        status.textContent = ''
        error.textContent = ''
      }, 2000)
    }
  )
}

document.getElementById('save').addEventListener('click', save_options)
