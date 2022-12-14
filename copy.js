(function () {
    function flashCopyMessage(el, msg) {
        el.textContent = msg;
        setTimeout(function () {
            el.textContent = "ε€εΆπ";
        }, 1000);
    }

    function toClip(el, text) {
        navigator.clipboard.writeText(text)
            .then(() => {
                flashCopyMessage(el, 'ζεπ')
            })
            .catch(err => {
                console.log('copy went wrong', err);
                flashCopyMessage(el, 'ε€±θ΄₯π±')
            });
    }

    function addCopyButton(containerEl) {
        var copyBtn = document.createElement("button");
        copyBtn.className = "highlight-copy-btn";
        copyBtn.textContent = "ε€εΆπ";

        var codeEl = containerEl.firstElementChild;
        copyBtn.addEventListener('click', function () {
            toClip(this, codeEl.innerText);
        });
        containerEl.appendChild(copyBtn);
    }

    // Add copy button to code blocks
    var highlightBlocks = document.getElementsByClassName('highlight');
    Array.prototype.forEach.call(highlightBlocks, addCopyButton);
})();