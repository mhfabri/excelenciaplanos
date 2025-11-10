function contacthere(){
    window.location.href="https://wa.me/qr/3BFGYRJXYD4UM1"
}

const copyBtn = document.getElementById('copyBtn');
    const emailSpan = document.getElementById('email');
    const copiedMsg = document.getElementById('copiedMsg');

    copyBtn.addEventListener('click', async () => {
      const email = emailSpan.textContent.trim();

      try {
        await navigator.clipboard.writeText(email);
        copiedMsg.style.display = 'inline';
        copyBtn.textContent = 'Copiado!';
        setTimeout(() => {
          copiedMsg.style.display = 'none';
          copyBtn.textContent = 'Copiar E-mail';
        }, 2000);
      } catch (err) {
        // fallback se o navegador não suportar a API
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('E-mail copiado!');
      }
    });