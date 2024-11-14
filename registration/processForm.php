<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

$response = [
    'message' => 'Form data received successfully',
    'data' => $data
];

echo json_encode($response);
?>