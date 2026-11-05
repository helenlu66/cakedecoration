const copyButton = document.querySelector('#copy-citation');
const citation = document.querySelector('#bibtex');
const status = document.querySelector('#copy-status');
if (copyButton && citation && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(citation.textContent);
      status.textContent = 'Citation copied.';
    } catch {
      status.textContent = 'Unable to copy automatically. Select the citation above to copy it.';
    }
  });
}
