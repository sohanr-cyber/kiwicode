import nc from 'next-connect'
import Info from '../../models/Info'
import db from '../../utils/db'
import Mail from '../../services/mail'

const handler = nc()

const mail = new Mail()

handler.get(async (req, res) => {
  try {
    await db.connect()
    const info = await Info.find({})
    res.status(200).send(info)
    await db.disconnect()
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
})

handler.post(async (req, res) => {
  try {
    await db.connect()
    const info = await new Info(req.body)
    const savedInfo = await info.save()
    mail.sendMail({
      to: savedInfo.email,
      subject: "Thank You for Reaching Out to Quince!",
      for: 'talk',
      name: savedInfo.firstName + ' ' + savedInfo.lastName
    })
    await db.disconnect()
    res.status(200).send(savedInfo)
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: error })
  }
})
export default handler
