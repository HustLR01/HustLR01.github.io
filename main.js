const pocBtn = document.getElementById('poc-request-btn');

  if (pocBtn) {
    pocBtn.addEventListener('click', () => {
      const email = pocBtn.dataset.email;
      const subject = encodeURIComponent("Access Request: Android Remote Root PoC Writeup");
      const body = encodeURIComponent("Hi Rocco Luigi,\n\nI would like to request access to the technical writeup, code, and demonstration material for the Android Privilege Escalation PoC.\n\nBest regards,");

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          const textSpan = pocBtn.querySelector('.btn-text');
          const originalText = textSpan.textContent;

          textSpan.textContent = "Email Copied to Clipboard!";
          pocBtn.style.color = "var(--text)";

          setTimeout(() => {
            textSpan.textContent = originalText;
            pocBtn.style.color = "";
          }, 2500);
        }).catch(() => {});
      }

       window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    });
  }