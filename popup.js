document.getElementById('generate').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message: 'getText'}, function(response) {
        fetch('<API url>', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({text: response.text})
        })
        .then(response => response.json())
        .then(data => {
          document.getElementById('summary').textContent = data.summary;
        });
      });
    });
  });
  