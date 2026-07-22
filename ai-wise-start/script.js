function toggleFAQ(el){
      const ans = el.nextElementSibling;
      const icon = el.querySelector('.faq-toggle');
      const isOpen = ans.classList.contains('open');
      document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
      document.querySelectorAll('.faq-toggle').forEach(t => t.classList.remove('open'));
      if(!isOpen){ ans.classList.add('open'); icon.classList.add('open'); }
    }
    document.getElementById('y').textContent = new Date().getFullYear();