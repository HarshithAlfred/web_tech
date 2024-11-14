// api/processForm.js
export default function handler(req, res) {
    try{    if (req.method === 'POST') {
        // Parse the JSON data received in the request body
        const data = req.body;
        console.log(data);
        // Log data for debugging (optional)
        console.log("Received data:", data);

        // Respond with a success message and send back the received data
        res.status(200).json({
            message: "Form data received successfully",
            receivedData: data
        });
    } 
else {
        // If not a POST request, return an error
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}catch(e){
    res.status(500).json({ message: e.message });
}
}
