
 export function sendWhatsappMessage() {
    console.log('cheguei')
    const phoneNumber = "11970325360"
    const whatsappMessageContent = "teste de mensagem"

    const url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(whatsappMessageContent);
      window.location.href = url
}
