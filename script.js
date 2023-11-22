const submitBtn = document.getElementById('form-btn')
const toggleMenu = document.getElementById('toggle-menu')
const mobile = document.querySelector('navbar-items')

const handleSubmit = (e) => {
  e.preventDefault()

  const formData = new FormData(e.currentTarget)

  // Convert the selectedDate to a formatted string
  const formattedDate = selectedDate ? selectedDate.toLocaleDateString() : ''

  // Append the formatted date to the form data
  formData.append('selectedDate', formattedDate)

  const entries = [...formData.entries()]

  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'machiulewis@gmail.com',
    Password: '96430193E328A4EC6162077B4C25BE41426D',
    To: 'support@lewinskie.com',
    From: 'machiulewis@gmail.com',
    Subject: 'Booking',
    // Use <br> for line breaks in the email body
    Body: `Name: ${formData.get('name')}<br>Phone: ${formData.get(
      'phone'
    )}<br>Booking for: ${formData.get('program')}<br>Date: ${formattedDate} `,
  }).then((message) => alert(message))

  console.log(entries)
  e.currentTarget.reset()
}

submitBtn.addEventListener('click', () => {
  handleSubmit()
})
