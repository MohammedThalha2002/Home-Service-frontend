import axios from "axios"

const sendEmail = async (email) => {
    let text = prompt("Enter the message that you want to send")
    try {
        await axios.post("http://localhost:5000/send_mail", {
            params: {
                message: text,
                email: email //radius to serach for the handymans
            }
        }).then((res) => {
            alert("Mail sent Successfully")
        })
    } catch (error) {
        console.log(error)
    }
}

export default sendEmail