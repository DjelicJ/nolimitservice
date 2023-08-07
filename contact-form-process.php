<?php
if (isset($_POST['email'])) {

    $email_to = "yourmail@domain.com"; // CHANGE THIS
    $email_subject = "New form submissions";

    function problem($error)
    {
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br><br>";
        echo $error . "<br><br>";
        echo "Please go back and fix these errors.<br><br>";
        die();
    }

    // validation expected data exists
    if (
        !isset($_POST['firstname']) ||
        !isset($_POST['lastname']) ||
        !isset($_POST['email'])
    ) {
        problem('We are sorry, but there appears to be a problem with the form you submitted.');
    }

    $firstname = $_POST['firstname']; // required
    $lastname = $_POST['lastname']; // required
    $email = $_POST['email']; // required
    $phonenumber = $_POST['phonenumber']; // required
    $comments = $_POST['comments']; // required
    $selectedoption = $_POST['selectedoption']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        $error_message .= 'The Email address you entered does not appear to be valid.<br>';
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    $email_message = "Form details below.\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "First Name: " . clean_string($firstname) . "\n";
    $email_message .= "Last Name: " . clean_string($lastname) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Selected Option: " . clean_string($selectedoption) . "\n";
    $email_message .= "Phone Number: " . clean_string($phonenumber) . "\n";
    $email_message .= "comments: " . clean_string($comments) . "\n";

    // create email headers
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    

    if (mail($email_to, $email_subject, $email_message, $headers)){ // you should be checking $mail_sent
        header("Location:./index.html?success"); //Redirect to url if form submitted
    }
    else{
        echo "Error";
    }

?>
Success!
<?php
}
?>