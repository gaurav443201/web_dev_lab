<!DOCTYPE html>
<html>
<head>
    <title>String Manipulation Program</title>
    <style>
        body {
            font-family: Arial;
            background-color: #f2f2f2;
            text-align: center;
            margin-top: 50px;
        }
        .box {
            background: white;
            padding: 20px;
            width: 350px;
            margin: auto;
            border-radius: 10px;
            box-shadow: 0px 0px 10px gray;
        }
        input, button {
            padding: 10px;
            margin: 10px;
            width: 90%;
        }
        h2 {
            color: #333;
        }
    </style>
</head>
<body>

<div class="box">
    <h2>String Manipulation</h2>

    <form method="post">
        <input type="text" name="text" placeholder="Enter a string" required>

        <input type="number" name="start" placeholder="Substring Start Index" required>
        <input type="number" name="length" placeholder="Substring Length" required>

        <button type="submit">Process</button>
    </form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $text = $_POST['text'];
    $start = $_POST['start'];
    $length = $_POST['length'];

    echo "<h3>Results:</h3>";

    // Length
    echo "Length of String: " . strlen($text) . "<br>";

    // Reverse
    echo "Reversed String: " . strrev($text) . "<br>";

    // Substring
    echo "Substring: " . substr($text, $start, $length) . "<br>";
}
?>

</div>

</body>
</html>