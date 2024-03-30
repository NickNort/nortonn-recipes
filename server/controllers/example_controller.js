
export function getExample(req, res) {
	try {
		return res.send('Hello from the example controller!');		
	} catch (error) {
		console.log(error);
		return res.send("An error occurred. Please try again.");
	}
}