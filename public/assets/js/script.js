// JavaScript to insert header and footer
const headerContent = `
<header>
    <h1>Air Ticket Booking</h1>
    <p>Book your tickets to any destination worldwide!</p>
</header>
<nav>
    <ul>
        <li><a href="./index.html">Home</a></li>
        <li><a href="./aboutus.html">About Us</a></li>
        <li><a href="./services.html">Services</a></li>
        <li><a href="./contact.html">Contact</a></li>
    </ul>
</nav>
`;

const footerContent = `
<footer>
    <div class="footer-container">
        <div class="footer-column">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./aboutus.html">About Us</a></li>
                <li><a href="./services.html">Services</a></li>
                <li><a href="./contact.html">Contact</a></li>
            </ul>
        </div>
        <div class="footer-column">
            <h3>Follow Us</h3>
            <div class="social-icons">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
        <div class="footer-column newsletter">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get the latest deals and offers directly in your inbox!</p>
            <form action="" method="" onsubmit="">
                <input type="email" name="email" placeholder="Enter your email" required>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </div>
    <div class="copyright">
        <p>&copy; 2024 Air Ticket Booking. All rights reserved.</p>
    </div>
</footer>
`;

document.getElementById('header').innerHTML = headerContent;
document.getElementById('footer').innerHTML = footerContent;