import { useEffect, useState } from 'react'

const { useTweaks } = require('use-tweaks')

function Tweak({ update, data }) {
  const [name] = useState(data.text)
  const tweakedData = useTweaks(name, data)
  useEffect(() => {
    update(tweakedData)
  }, [tweakedData, update])
  return null
}

export default Tweak
