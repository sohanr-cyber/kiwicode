import nc from 'next-coonect'
import Info from '../../models/Info'
import db from '../../utils/db'

const handler = nc()

handler.get(async () => {
  try {
    await db.connect()
    const info = await Info.find({})
    res.status(200).send(info)
    await db.disconnect()
  } catch (error) {
    console.log(error)
    res.staus(400).send(error)
  }
})

handler.post(async () => {
  try {
    await db.connect()
    const info = await new Info(req.body)
    const savedInfo = await info.save()
    await db.disconnect()
    res.status(200).send(info)
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: error })
  }
})
export default handler
