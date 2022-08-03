import axios from "axios"

const sendEmail = async (email) => {
    let text = prompt("Enter the message that you want to send")
    alert("Mail Sent Succesfully")
    try {
        await axios.post("http://localhost:5000/send_mail", {
            params: {
                message: text,
                email: email //radius to serach for the handymans
            }
        })
    } catch (error) {
        console.log(error)
    }
    
}

export default sendEmail