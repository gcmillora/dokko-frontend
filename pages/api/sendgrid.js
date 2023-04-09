export const sendEmail = async () => {
    //send email to patient using sendgrid
    const data = fetch("https://api.sendgrid.com/v3/mail/send",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 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'
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [
              {
                email: 'dokko.ph@gmail.com',
              },
            ],
            dynamic_template_data: {
              "url": "https://www.daily.co/room/room-name",
            }
          },
        ],
        template_id: 'd-7dd789e24a08435388268abecfda943e ',
    })
  }).then((response) => response.json())
  console.log(data)
}