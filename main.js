document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.querySelector('.signup');
  const loginForm = document.querySelector('.login');
  const showLoginLink = document.getElementById('show-login');
  const showSignupLink = document.getElementById('show-signup');

  showLoginLink.addEventListener('click', (event) => {
    event.preventDefault();
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
  });

  showSignupLink.addEventListener('click', (event) => {
    event.preventDefault();
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
  });
});
