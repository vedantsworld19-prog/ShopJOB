document.addEventListener('DOMContentLoaded', () => {
    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');
    const authForm = document.getElementById('auth-form');
    const authEmail = document.getElementById('auth-email');
    const authPassword = document.getElementById('auth-password');
    const authConfirmPassword = document.getElementById('auth-confirm-password');
    const confirmPasswordGroup = document.getElementById('confirm-password-group');
    const authSubmit = document.getElementById('auth-submit');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const authSuccess = document.getElementById('auth-success');

    let isLogin = true;

    // Switch to Login
    tabLogin.addEventListener('click', (e) => {
        e.preventDefault();
        isLogin = true;
        tabLogin.classList.add('bg-dark', 'text-white');
        tabLogin.classList.remove('hover:bg-yellow');
        
        tabRegister.classList.remove('bg-dark', 'text-white');
        tabRegister.classList.add('hover:bg-yellow');
        
        confirmPasswordGroup.classList.add('hidden');
        authSubmit.textContent = 'Enter the Matrix';
        
        // Reset errors
        emailError.classList.add('hidden');
        passwordError.classList.add('hidden');
        authSuccess.classList.add('hidden');
        
        // Reset borders
        authEmail.classList.remove('border-red-500');
        authEmail.classList.add('border-dark');
        authConfirmPassword.classList.remove('border-red-500');
        authConfirmPassword.classList.add('border-dark');
    });

    // Switch to Register
    tabRegister.addEventListener('click', (e) => {
        e.preventDefault();
        isLogin = false;
        tabRegister.classList.add('bg-dark', 'text-white');
        tabRegister.classList.remove('hover:bg-yellow');
        
        tabLogin.classList.remove('bg-dark', 'text-white');
        tabLogin.classList.add('hover:bg-yellow');
        
        confirmPasswordGroup.classList.remove('hidden');
        authSubmit.textContent = 'Join the Chaos';

        // Reset errors
        emailError.classList.add('hidden');
        passwordError.classList.add('hidden');
        authSuccess.classList.add('hidden');
        
        // Reset borders
        authEmail.classList.remove('border-red-500');
        authEmail.classList.add('border-dark');
        authConfirmPassword.classList.remove('border-red-500');
        authConfirmPassword.classList.add('border-dark');
    });

    // Form Submission
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        
        // Validate Email (Basic Regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(authEmail.value)) {
            emailError.classList.remove('hidden');
            authEmail.classList.add('border-red-500');
            authEmail.classList.remove('border-dark');
            isValid = false;
        } else {
            emailError.classList.add('hidden');
            authEmail.classList.remove('border-red-500');
            authEmail.classList.add('border-dark');
        }

        // Validate Passwords if Register
        if (!isLogin) {
            if (authPassword.value !== authConfirmPassword.value || authPassword.value === '') {
                passwordError.classList.remove('hidden');
                authConfirmPassword.classList.add('border-red-500');
                authConfirmPassword.classList.remove('border-dark');
                isValid = false;
            } else {
                passwordError.classList.add('hidden');
                authConfirmPassword.classList.remove('border-red-500');
                authConfirmPassword.classList.add('border-dark');
            }
        }

        if (isValid) {
            // Simulate success
            authSuccess.classList.remove('hidden');
            authSuccess.textContent = isLogin ? 'Access Granted! Logging in...' : 'Welcome to the Chaos! Account created.';
            
            // hide success after a few seconds
            setTimeout(() => {
                authSuccess.classList.add('hidden');
                authForm.reset();
            }, 3000);
        }
    });

    // Hide email error when user starts typing again
    authEmail.addEventListener('input', () => {
        if (!emailError.classList.contains('hidden')) {
            emailError.classList.add('hidden');
            authEmail.classList.remove('border-red-500');
            authEmail.classList.add('border-dark');
        }
    });
    
    // Hide password error when user starts typing again
    authConfirmPassword.addEventListener('input', () => {
        if (!passwordError.classList.contains('hidden')) {
            passwordError.classList.add('hidden');
            authConfirmPassword.classList.remove('border-red-500');
            authConfirmPassword.classList.add('border-dark');
        }
    });
});
