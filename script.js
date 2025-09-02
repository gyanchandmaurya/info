// Dropdown contains---------------------------------

    function toggleDropdown(id) {
      const content = document.getElementById(id);
      const icon = document.getElementById(`icon-${id}`);

      if (content.style.display === "block") {
        content.style.display = "none";
        icon.classList.remove("rotate");
      } else {
        content.style.display = "block";
        icon.classList.add("rotate");
      }
    }
  
// Copy UPI ID---------------------------------
    function copyText() {
    const text = document.getElementById('text-to-copy').innerText;
    navigator.clipboard.writeText(text).then(() => {
      alert('Text copied: ' + text);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }