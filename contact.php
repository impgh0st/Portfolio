<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Email recipient
  $to = "dhsaighman@gmail.com";

  // Email subject
  $subject = "New Contact Form Submission from $name";

  // Email headers
  $headers = "From: $email" . "\r\n";
  $headers .= "Reply-To: $email" . "\r\n";
  $headers .= "X-Mailer: PHP/" . phpversion();

  // Email content
  $emailContent = "Name: $name\n";
  $emailContent .= "Email: $email\n";
  $emailContent .= "Message:\n$message";

  // Send email
  $mailSent = mail($to, $subject, $emailContent, $headers);

  if ($mailSent) {
    echo "Thank you for your message, $name! Your email has been sent.";
  } else {
    echo "Oops! Something went wrong. Please try again later.";
  }
}
?>
